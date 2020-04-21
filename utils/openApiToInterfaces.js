const path = require('path');
const {compile} = require('json-schema-to-typescript');
const {
  readDir,
  readFile,
  removeFile,
  appendFile,
  writeFile,
} = require('./fileHelpers');

const dirPath = `${__dirname}/../interfaces`;
const indexFilePath = `${__dirname}/../interfaces/index.ts`;
const openApiFilePath = `${__dirname}/../openapi.json`;

const openApiToInterfaces = async (openApi) => {
  const schemas = Object.values(openApi.components.schemas);

  // const definitions = JSON.stringify(schemas, null, 2);
  // console.log('OMA definitions to be converted to TS interfaces', definitions);

  const interfaces = await Promise.all(
    schemas.map(async (schema) => {
      const objectFilePath = `${__dirname}/../interfaces/${schema.title}.ts`;

      Object.values(schema.properties).forEach(({title}) => {
        delete schema.properties[title].title;
      });

      const interface = await compile(schema, schema.title);
      await appendFile(indexFilePath, `export * from './${schema.title}' \n`);
      await writeFile(objectFilePath, interface);
      return interface;
    }),
  );

  // console.log('OMA interfaces', interfaces);
  return interfaces;
};

const main = async () => {
  const openApi = JSON.parse(await readFile(openApiFilePath));

  const files = await readDir(dirPath);
  await Promise.all(
    Object.values(files).map((file) => removeFile(path.join(dirPath, file))),
  );

  await openApiToInterfaces(openApi);
};

main();
