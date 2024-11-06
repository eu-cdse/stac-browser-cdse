const TITLE = "Copernicus Data Space Ecosystem (CDSE) - STAC API";
module.exports = {
    catalogUrl: "https://stac.dataspace.copernicus.eu/v1/",
    catalogTitle: TITLE,
    allowExternalAccess: false,
    allowedDomains: [
      "copernicus.eu"
    ],
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
        "pt"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: false,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: null,
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showKeywordsInItemCards: false,
    showKeywordsInCatalogCards: false,
    showThumbnailsAsAssets: false,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    maxItemsPerPage: 1000,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    socialSharing: ['email', 'bsky', 'mastodon', 'x'],
    preprocessSTAC: stac => {
        if (stac.getBrowserPath() === '/') {
            stac.title = TITLE;
        }
        return stac;
    },
    authConfig: {
        type: "openIdConnect",
        openIdConnectUrl:"https://identity.dataspace.copernicus.eu/auth/realms/CDSE/.well-known/openid-configuration"
    }
};
