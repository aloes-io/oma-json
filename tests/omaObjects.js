/* eslint-disable no-console */
import {omaObjects} from '../src/.';

console.log(
	'Should be Bitmap',
	omaObjects.find(object => object.value === 3349),
);
