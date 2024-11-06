const TITLE = "Copernicus Data Space Ecosystem (CDSE) - STAC API";
export default {
  catalogUrl: "https://stac.dataspace.copernicus.eu/v1/",
  catalogTitle: TITLE,
  catalogTitleAfterImage: "STAC API",
  catalogImage: "https://dataspace.copernicus.eu/themes/custom/copernicus/logo.svg",
  allowExternalAccess: false, // Must be true if catalogUrl is not given
  allowedDomains: [
    "copernicus.eu"
  ],
  enforcedColorMode: "auto",
  detectLocaleFromBrowser: true,
  storeLocale: true,
  locale: "en",
  fallbackLocale: "en",
  supportedLocales: [
    "de",
    "es",
    "en",
    "fr",
    "it",
    "ro",
    "ru",
    "pt",
    "pl",
    "sv"
  ],
  apiCatalogPriority: null,
  useTileLayerAsFallback: false,
  displayGeoTiffByDefault: false,
  displayPreview: true,
  displayOverview: true,
  displayOverviewsForChildren: false,
  buildTileUrlTemplate: null,
  getMapSourceOptions: null,
  pathPrefix: "/",
  historyMode: "history",
  cardViewMode: "cards",
  defaultCollectionSort: null,
  defaultItemSort: null,
  showKeywordsInItemCards: false,
  showKeywordsInCatalogCards: false,
  preferredAssets: true,
  showThumbnailsAsAssets: false,
  searchResultsPerPage: null,
  itemsPerPage: null,
  collectionsPerPage: null,
  maxEntriesPerPage: 1000,
  defaultThumbnailSize: null,
  crossOriginMedia: null,
  requestHeaders: {},
  requestQueryParameters: {},
  socialSharing: ['email', 'bsky', 'mastodon', 'x'],
  preprocessSTAC: (stac, state, getters) => {
    if (getters.toBrowserPath(stac.getAbsoluteUrl()) === '/') {
      stac.title = TITLE;
    }
    return stac;
  },
  authConfig: {
    type: "openIdConnect",
    openIdConnectUrl:"https://identity.dataspace.copernicus.eu/auth/realms/CDSE/.well-known/openid-configuration"
  },
  crs: {},
  footerLinks: [
    {
      label: 'Contact',
      url: 'https://dataspace.copernicus.eu/about#contact-form'
    },
    {
      label: 'Terms and conditions',
      url: 'https://dataspace.copernicus.eu/terms-and-conditions'
    },
    {
      label: 'Cookies policy',
      url: 'https://dataspace.copernicus.eu/cookie-policy'
    },
    {
      label: 'Privacy policy',
      url: 'https://dataspace.copernicus.eu/privacy-policy'
    }
  ]
};
