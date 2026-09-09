import { defineAsyncComponent } from 'vue';

export default {
  'view-catalog-catalogs-start': [
    {
      id: 'Featured',
      props: {
        entities: [
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-2-l2a",
            "title": "Sentinel-2 Level-2A",
            "description": "The Sentinel-2 Level-2A Collection 1 product provides orthorectified Surface Reflectance (Bottom-Of-Atmosphere: BOA), with sub-pixel multispectral and multitemporal registration accuracy. Scene Classification (including Clouds and Cloud Shadows), AOT (Aerosol Optical Thickness) and WV (Water Vapour) maps are included in the product.",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2015-06-27T10:25:31Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/S2_L2A.jpg",
                "type": "image/jpeg",
                "title": "Sentinel-2 Level-2A",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-2-l2a"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-2-global-mosaics",
            "title": "Sentinel-2 Global Mosaics",
            "description": "The mosaics have four bands of data (Red (B04), Green (B03), Blue (B02) and wide band Near Infrared (B08)). First, cloud masking based on the scene classification layer of the Sentinel-2 level 2 algorithm was applied, then for each pixel and band, within three-month time periods, the first quartile of the distribution of the pixel values was taken as the output value to filter out any bright pixels misclassified as not clouds. If there are no valid pixels for the given timeframe, the pixel is left empty. Sentinel-2 cloudless mosaics can be used for various purposes such as land cover classification, land use planning, or for the creation of basemaps. These images are especially useful for showing large and cloudy areas with interesting large-scale patterns. Iceland is a prime example, with frequent cloud cover and large areal extent spanning several Sentinel-2 swaths.",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2020-01-01T00:00:00.000Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/Global-Mosaics.jpg",
                "type": "image/jpeg",
                "title": "Sentinel 2 Global Mosaics Thumbnail",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-2-global-mosaics"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-1-grd",
            "title": "Sentinel-1 Ground Range Detected (GRD)",
            "description": "Level-1 Ground Range Detected (GRD) products consist of focused SAR data that has been detected, multi-looked and projected to ground range using the Earth ellipsoid model WGS84. The ellipsoid projection of the GRD products is corrected using the terrain height specified in the product general annotation. The terrain height used varies in azimuth and it is constant in range (For IW/EW modes only the terrain height of first subswath is considered)",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2014-10-04T03:12:47Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/S1_GRD.jpg",
                "type": "image/jpeg",
                "title": "Sentinel-1 Ground Range Detected (GRD)",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-1-grd"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-1-global-mosaics",
            "title": "Sentinel-1 Global Mosaics",
            "description": "Sentinel-1 monthly mosaics are generated from monthly stacks of Sentinel-1 GRD data by calculating the weighted sum of the terrain corrected backscatter observations. Two different Sentinel-1 mosaics are being produced for each month: IW mosaic and DH mosaic.",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2020-01-01T00:00:00.000Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/S1_MOSAIC.jpg",
                "type": "image/jpeg",
                "title": "Sentinel 1 Global Mosaics",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-1-global-mosaics"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-1-slc",
            "title": "Sentinel-1 Single Look Complex: IW, EW, SM",
            "description": "This collection offers Sentinel-1 Level-1 Single Look Complex (SLC) products captured in the modes Interferometric Wide Swath (IW), Extra Wide Swath (EW), and Strip Map Mode (SM). Level-1 SLC products are images in the slant range by azimuth imaging plane, in the image plane of satellite data acquisition. Each image pixel is represented by a complex (I and Q) magnitude value and therefore contains both amplitude and phase information. Each I and Q value is 16 bits per pixel. The processing for all SLC products results in a single look in each dimension using the full available signal bandwidth. The imagery is geo-referenced using orbit and attitude data from the satellite. SLC images are produced in a zero Doppler geometry. This convention is common with the standard slant range products available from other SAR sensors.",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2014-10-04T03:06:54.705000Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/S1_SLC.jpg",
                "type": "image/jpeg",
                "title": "Sentinel-1 Single Look Complex (SLC)",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-1-slc"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-3-sl-2-frp-nrt",
            "title": "Sentinel-3 SLSTR Fire Radiative Power (NRT)",
            "description": "This Collection provides Sentinel-3 SLSTR Level-2 Fire Radiative Power (FRP) products containing data on fires detected over land and ocean.",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2020-08-08T23:09:58.889991Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/S3_SL2_FRP.jpg",
                "type": "image/jpeg",
                "title": "Sentinel-3 SLSTR FRP Thumbnail",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-3-sl-2-frp-nrt"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-3-sl-2-lst-ntc",
            "title": "Sentinel-3 SLSTR Land Surface Temperature (NTC)",
            "description": "This Collection provides Sentinel-3 SLSTR Level-2 Land Surface Temperature products containing data on land surface temperature measurements on a 1km grid. Radiance is measured in two channels to determine the temperature of the Earth's surface skin in the instrument field of view, where the term \"skin\" refers to the top surface of bare soil or the effective emitting temperature of vegetation canopies as viewed from above.",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2016-04-19T01:35:17.188500Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/S3_SL2_LST.jpg",
                "type": "image/jpeg",
                "title": "Sentinel-3 SLSTR LST Thumbnail",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-3-sl-2-lst-ntc"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "sentinel-5p-l2-so2-offl",
            "title": "Sentinel-5P Level 2 Sulphur Dioxide (OFFL)",
            "description": "This Collection provides Sentinel-5P Level-2 SO2 products, which contains high-resolution imagery of atmospheric sulfur dioxide concentrations.",
            "license": "other",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2018-04-30T00:18:50Z",
                    null
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/S5P_L2_SO2.jpg",
                "type": "image/jpeg",
                "title": "Sentinel-5P L2 Sulphur Dioxide Thumbnail",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/sentinel-5p-l2-so2-offl"
              }
            ]
          },
          {
            "type": "Collection",
            "stac_version": "1.1.0",
            "id": "clms_clcplus_lulucf-instance_europe_100m_yearly_v1",
            "title": "CLMS CLCplus LULUCF Instance Europe 100m yearly V1 (COG)",
            "description": "This dataset refers to the CORINE Land Cover Plus Land Use, Land-Use Change and Forestry Instance (CLCplus LULUCF Instance), an annually updated, pan-European, spatially consistent and seamless geospatial proxy for land use reporting under the LULUCF regulation. The product is delivered as a single raster layer with a spatial resolution of 100 m, derived from multiple pan-European Copernicus Land Monitoring Service (CLMS) high resolution input datasets. The LULUCF Instance is available for the reference years 2018, 2021, 2022 and 2023, with production moving to an annual update cycle starting from the 2021 product. \nEach raster cell represents a dominant LULUCF land-use class, assigned according to thematic and spatial rulesets implemented during the extraction process. While each pixel corresponds primarily to one of the six main LULUCF land use categories - forest land, grassland, cropland, settlements, wetlands, and other lands - the dataset further differentiates these categories into sub classes, resulting in a total of 27 classes. This classification structure supports greenhouse gas reporting and other applications within the LULUCF sector by providing a harmonised and policy relevant representation of land use across Europe. \nThis product is fundamentally different from other CLMS products, as it is not based directly on satellite image classification or visual interpretation. Instead, it is produced through the combination and integration of existing CLMS data layers. Consequently, the dataset does not introduce fundamentally new information; rather, its novelty lies in the expert driven integration of multiple sources to produce a LULUCF oriented land use representation.",
            "license": "proprietary",
            "extent": {
              "spatial": {
                "bbox": [
                  [
                    -180,
                    -90,
                    180,
                    90
                  ]
                ]
              },
              "temporal": {
                "interval": [
                  [
                    "2018-01-01T00:00:00.000Z",
                    "2023-12-31T23:59:59.999Z"
                  ]
                ]
              }
            },
            "assets": {
              "thumbnail": {
                "href": "https://s3.waw3-2.cloudferro.com/swift/v1/stac-png/CLMS_CLCPLUS_LULUCF-INSTANCE_.png",
                "type": "image/png",
                "title": "CLMS CLCplus LULUCF Instance Europe 100m yearly V1 (COG) Thumbnail",
                "roles": [
                  "thumbnail"
                ],
                "proj:shape": [
                  360,
                  640
                ]
              }
            },
            "links": [
              {
                "rel": "self",
                "type": "application/json",
                "href": "https://stac.dataspace.copernicus.eu/v1/collections/clms_clcplus_lulucf-instance_europe_100m_yearly_v1"
              }
            ]
          }
        ]
      }
    },
  ],
};
