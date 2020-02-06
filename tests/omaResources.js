/* eslint-disable no-console */
const {omaResources} = require('../src');

console.log(
	'Should be Current Time',
	omaResources.find(resource => resource.value === 5506),
);
