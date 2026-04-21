// sitemap.ts - Dynamic Sitemap Generation
// Path: src/app/sitemap.ts

import { MetadataRoute } from "next";

// All Melbourne suburbs for dynamic suburb pages (matches filesystem directories)
const MELBOURNE_SUBURBS = [
  "armadale",
  "ashwood",
  "attwood",
  "avonsleigh",
  "badger-creek",
  "baxter",
  "bayswater",
  "beaconsfield",
  "beaumaris",
  "belgrave",
  "bentleigh",
  "bentleigh-east",
  "berwick",
  "bittern",
  "black-rock",
  "blackburn-north",
  "blairgowrie",
  "boneo",
  "boronia",
  "botanic-ridge",
  "box-hill",
  "briar-hill",
  "brighton",
  "brighton-east",
  "broadmeadows",
  "bundoora",
  "burwood-3125",
  "burwood-chadstone",
  "burwood-east",
  "caulfield",
  "chadstone",
  "chelsea",
  "chelsea-heights",
  "chirnside-park",
  "clayton",
  "clayton-south",
  "clyde",
  "clyde-north",
  "dandenong",
  "dandenong-north",
  "dandenong-south",
  "doncaster",
  "doncaster-east",
  "donvale",
  "doveton",
  "eaglehawk",
  "epping",
  "essendon",
  "essendon-fields",
  "fawkner",
  "ferntree-gully",
  "frankston",
  "frankston-north",
  "frankston-south",
  "gembrook",
  "glen-waverley",
  "greensborough",
  "hallam",
  "hampton",
  "hampton-park",
  "heatherton",
  "highett",
  "hillside",
  "hoppers-crossing",
  "keilor",
  "keilor-downs",
  "keilor-lodge",
  "kings-park",
  "knoxfield",
  "lakes-entrance",
  "lalor",
  "langwarrin",
  "lara",
  "laverton",
  "laverton-north",
  "lilydale",
  "little-river",
  "macleod",
  "maroondah",
  "melbourne-airport",
  "melbourne-cbd",
  "melbourne-east",
  "melbourne-south",
  "melton",
  "melton-south",
  "mordialloc",
  "mornington",
  "mount-eliza",
  "mount-evelyn",
  "mount-waverley",
  "narre-warren",
  "narre-warren-north",
  "narre-warren-south",
  "north-melbourne",
  "northcote",
  "oakleigh",
  "oakleigh-south",
  "pakenham",
  "pakenham-south",
  "pakenham-upper",
  "parkdale",
  "pascoe-vale",
  "pascoe-vale-south",
  "point-cook",
  "point-leo",
  "port-melbourne",
  "ringwood",
  "ringwood-east",
  "ringwood-north",
  "rivervale",
  "rowville",
  "sandringham",
  "scoresby",
  "seaford",
  "skye",
  "somerville",
  "south-melbourne",
  "south-morang",
  "southbank",
  "springvale",
  "springvale-south",
  "st-albans",
  "st-kilda",
  "st-kilda-east",
  "sunshine",
  "sunshine-north",
  "sunshine-west",
  "tarneit",
  "tooradin",
  "toorak",
  "truemans",
  "tyabb",
  "upper-ferntree-gully",
  "wantirna",
  "wantirna-south",
  "werribee",
  "werribee-south",
  "wheelers-hill",
  "yallambie",
  "yarra-glen",
  "yarra-junction",
  "yarraville",
  "yellingbo",
  "yering",
];

// Services for service pages
const SERVICES = [
  { path: "/gas-ducted-heating", name: "Gas Ducted Heating" },
  { path: "/hydronic-heating", name: "Hydronic Heating" },
  {
    path: "/split-system-air-conditioning",
    name: "Split System Air Conditioning",
  },
  { path: "/emergency-services", name: "Emergency Services" },
];

// Service sub-pages (individual service detail pages)
const SERVICE_SUB_PAGES = [
  "/gas-ducted-heating/emergency-gas-ducted-repair-melbourne",
  "/gas-ducted-heating/gas-ducted-installation-melbourne",
  "/gas-ducted-heating/gas-heater-repair-melbourne",
  "/gas-ducted-heating/gas-heater-replacement-maintenance-melbourne",
  "/gas-ducted-heating/gas-heater-service-and-maintenance-melbourne",
  "/hydronic-heating/emergency-hydronic-repair-melbourne",
  "/hydronic-heating/hydronic-heater-installation-melbourne",
  "/hydronic-heating/hydronic-heater-repair-melbourne",
  "/hydronic-heating/hydronic-heater-service-maintainance-melbourne",
  "/hydronic-heating/underfloor-slab-heating-repair-melbourne",
  "/split-system-air-conditioning/ac-deep-cleaning-sanitization-melbourne",
  "/split-system-air-conditioning/emergency-split-system-repair-melbourne",
  "/split-system-air-conditioning/multi-head-system-service-melbourne",
  "/split-system-air-conditioning/split-system-installation-melbourne",
  "/split-system-air-conditioning/split-system-repair-melbourne",
  "/emergency-services/ac-breakdown-rescue-melbourne",
  "/emergency-services/emergency-gas-ducted-repair-melbourne",
  "/emergency-services/emergency-gas-leak-repair-melbourne",
  "/emergency-services/emergency-hydronic-repair-melbourne",
  "/emergency-services/emergency-split-system-repair-melbourne",
  "/emergency-services/hydronic-leak-repair",
];

// Self-care brand pages matching filesystem directories (no bonaire)
const SELF_CARE_BRANDS = [
  "actronair",
  "braemar",
  "breezair",
  "brivis",
  "carrier",
  "celair",
  "fujitsu",
  "haier",
  "hitachi",
  "kaden",
  "lg",
  "mitsubishi-electric",
  "panasonic",
  "rinnai",
  "samsung",
  "sharp",
  "toshiba",
  "vulcan",
  "york",
];

// All brand pages matching filesystem directories
const BRANDS = [
  "actronair",
  "bonaire",
  "braemar",
  "breezair",
  "brivis",
  "carrier",
  "celair",
  "fujitsu",
  "haier",
  "hitachi",
  "kaden",
  "lg",
  "mitsubishi-electric",
  "panasonic",
  "rinnai",
  "samsung",
  "sharp",
  "toshiba",
  "vulcan",
  "york",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://heaterservicemelbourne.com.au";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic suburb pages under /service-areas/{suburb}
  const suburbPages: MetadataRoute.Sitemap = MELBOURNE_SUBURBS.map(
    (suburb) => ({
      url: `${baseUrl}/service-areas/${suburb}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );

  // Service sub-pages (individual service detail pages)
  const serviceSubPages: MetadataRoute.Sitemap = SERVICE_SUB_PAGES.map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }),
  );

  // Brand pages
  const brandPages: MetadataRoute.Sitemap = BRANDS.map((brand) => ({
    url: `${baseUrl}/brands/${brand}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Self-care main page + brand sub-pages
  const selfCarePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/self-care`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...SELF_CARE_BRANDS.map((brand) => ({
      url: `${baseUrl}/self-care/${brand}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...serviceSubPages,
    ...suburbPages,
    ...brandPages,
    ...selfCarePages,
  ];
}

/*
SITEMAP STRUCTURE:
1. Static pages (priority 0.7-1.0)
2. Service pages (priority 0.9)
3. Dynamic suburb pages (priority 0.8)
4. Brand pages (priority 0.7)

Total URLs generated:
- Static: 8 pages
- Services: 4 pages
- Suburb pages: 4 services × 44 suburbs = 176 pages
- Brands: 6 pages
TOTAL: ~194 pages

This structure ensures:
✅ Search engines crawl all important pages
✅ Proper priority for revenue-generating pages
✅ Regional targeting for local SEO
✅ Efficient crawl budget usage
*/
