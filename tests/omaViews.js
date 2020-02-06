/* eslint-disable no-console */
const {omaViews} = require('../src');

console.log('Should be Bitmap', omaViews.find(view => view.value === 3349));
