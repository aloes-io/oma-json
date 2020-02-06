/* eslint-disable no-console */
const {omaObjects} = require('../src');

console.log('Should be Bitmap', omaObjects.find((object) => object.value === 3349));
