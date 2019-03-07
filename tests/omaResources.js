/* eslint-disable no-console */
import {omaResources} from '../src/.';

console.log(
	'Should be Current Time',
	omaResources.find(resource => resource.value === 5506),
);
