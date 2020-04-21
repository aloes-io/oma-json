const omaObjects = require('./omaObjects');
const omaResources = require('./omaResources');
const omaViews = require('./omaViews');
const version = require('../package.json').version;
const openApi = require('../openapi.json');

module.exports = {
	omaObjects,
	omaResources,
	omaViews,
	version,
	openApi
};
