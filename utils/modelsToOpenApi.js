const {camelCase, startCase} = require('lodash');
const validator = require('ibm-openapi-validator');
const {omaObjects, omaResources} = require('../src');
const {readFile, removeFile, writeFile} = require('./fileHelpers');

const openApiTemplateFilePath = `${__dirname}/../utils/openapi.template.json`;
const openApiFilePath = `${__dirname}/../openapi.json`;

const setType = {
  Float: 'number',
  Integer: 'number',
  String: 'string',
  Boolean: 'boolean',
  Time: 'string',
  Opaque: 'object',
  null: 'string',
};

const resourcesModelsToOpenApi = (openApi) => {
  const schema = {
    title: 'OMAResources',
    type: 'object',
    description: 'OMA resources schema',
    properties: {},
    required: [],
    additionalProperties: false,
  };

  omaResources.forEach(({name, value, description, type}) => {
    // const propertyName = snakeCase(name);
    const propertyName = camelCase(name);
    const propertyTitle = `${value}`;
    schema.properties[propertyTitle] = {
      title: propertyTitle,
      ['x-alt-title']: propertyName,
      description,
      type: setType[type],
    };
  });

  // const resources = JSON.stringify(schema, null, 2);
  // console.log('OMA Resources to be converted to OpenAPI', resources);

  openApi.components.schemas[schema.title] = schema;
  return openApi;
};

const objectModelsToOpenApi = (openApi) => {
  omaObjects.forEach((object) => {
    const properties = {};
    const required = [];

    Object.keys(object.resources).forEach((resourceName) => {
      const resource = omaResources.find(
        ({value}) => value === Number(resourceName),
      );
      if (resource) {
        const propertyName = camelCase(resource.name);
        const propertyTitle = `${resource.value}`;
        // const propertyName = snakeCase(resource.name);
        required.push(propertyTitle);
        properties[propertyTitle] = {
          title: propertyTitle,
          ['x-alt-title']: propertyName,
          description: resource.description,
          type: setType[resource.type],
        };
      }
    });

    const schemaName = startCase(camelCase(object.name)).replace(/ /g, '');
    // const schemaName = camelCase(name);
    const schemaTitle = `${object.value}`;

    const schema = {
      title: schemaName,
      ['x-alt-title']: schemaTitle,
      description: object.description,
      type: 'object',
      properties,
      required,
      additionalProperties: false,
    };

    openApi.components.schemas[schemaName] = schema;
    // console.log('Schema', schema);
  });

  return openApi;
};

const generateOpenApi = async () => {
  let openApi = JSON.parse(await readFile(openApiTemplateFilePath));

  openApi = objectModelsToOpenApi(openApi);
  openApi = resourcesModelsToOpenApi(openApi);

  return openApi;
};

const main = async () => {
  const openApiDoc = await generateOpenApi();

  const validationResults = await validator(openApiDoc);
  // console.log(JSON.stringify(validationResults, null, 2));

  if (!validationResults.errors || !validationResults.errors.length) {
    await removeFile(openApiFilePath);
    await writeFile(openApiFilePath, JSON.stringify(openApiDoc, null, 2));
  }
};

main();
