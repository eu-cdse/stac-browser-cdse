import STAC from './src/models/stac';
import Utils from './src/utils';

const XYZ = 'LTileLayer';

const BASEMAPS = {
  earth: {
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    name: 'OpenStreetMap',
    is: XYZ,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors.'
  }
};

/**
 * @typedef BasemapOptions
 * @type {Object}
 * @property {string} is Component: LWMSTileLayer or LTileLayer
 * @see https://vue2-leaflet.netlify.app/components/
 */

/**
 * 
 * @param {Object} stac The STAC object
 * @param {Object} map The Leaflet map object
 * @param {Object} i18n Vue I18N object
 * @returns {Array.<BasemapOptions>}
 */
export default function configureBasemap(stac, map, i18n) {
  let targets = ['earth'];
  if (stac instanceof STAC) {
    if (stac.isCollection() && Utils.isObject(stac.summaries) && Array.isArray(stac.summaries['ssys:targets'])) {
      targets = stac.summaries['ssys:targets'];
    }
    else if (stac.isCollection() && Array.isArray(stac['ssys:targets'])) {
      targets = stac['ssys:targets'];
    }
    else if (stac.isItem() && Array.isArray(stac.properties['ssys:targets'])) {
      targets = stac.properties['ssys:targets'];
    }
  }

  return targets.map(target => BASEMAPS[target.toLowerCase()]);
};
