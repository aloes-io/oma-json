/* eslint-disable no-console */
import {omaViews} from '../src/.';

console.log('Should be Bitmap', omaViews.find(view => view.value === 3349));
