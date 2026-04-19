import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, ".");

const brandData = [
  {
    name: "Braemar",
    slug: "braemar",
    systemType: "Gas Ducted Heating",
    commonErrors: [
      {
        code: "E1",
        issue: "Room thermostat sensor fault",
        solution:
          "Check thermostat connections and battery levels. Replace if defective.",
      },
      {
        code: "E2",
        issue: "Outdoor temperature sensor fault",
        solution:
          "Inspect outdoor sensor for damage. Ensure wiring connections are secure.",
      },
      {
        code: "E3",
        issue: "Blower motor fault",
        solution:
          "Verify blower motor operation. Listen for unusual noises. Call technician if non-functional.",
      },
      {
        code: "E5",
        issue: "Gas ignition fault",
        solution:
          "Reset system. Check for gas supply. DO NOT attempt to fix - call licensed technician.",
      },
    ],
    maintenanceTips: [
      "Replace filters every 1-2 months during heating season",
      "Schedule professional servicing before winter",
      "Check that outdoor unit is free from debris",
      "Verify thermostat battery health quarterly",
      "Ensure return air vents are not blocked",
    ],
  },
  {
    name: "Brivis",
    slug: "brivis",
    systemType: "Gas Ducted Heating",
    commonErrors: [
      {
        code: "OPEN",
        issue: "Door or cover open",
        solution: "Close all access covers and compartments. Reset system.",
      },
      {
        code: "FAULT",
        issue: "System fault detected",
        solution:
          "Note error details and call technician. Do not force system restart.",
      },
      {
        code: "COOL",
        issue: "System in cooling mode",
        solution:
          "Check mode settings. May be climate control switching to cool. Normal operation.",
      },
      {
        code: "SLEEP",
        issue: "System in sleep/standby",
        solution:
          "Adjust thermostat settings to heating mode. Increase temperature setpoint.",
      },
    ],
    maintenanceTips: [
      "SmartComfort technology optimizes efficiency - don't override frequently",
      "Change filters when airflow reduces noticeably",
      "Annual professional servicing essential for warranty compliance",
      "Use Zone Plus controls to manage heating by room",
      "Keep system setpoint within comfort range for efficiency",
    ],
  },
  {
    name: "Mitsubishi Electric",
    slug: "mitsubishi-electric",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "E01",
        issue: "Communication error",
        solution:
          "Check wiring between indoor and outdoor units. Power cycle system.",
      },
      {
        code: "E03",
        issue: "Room temperature sensor error",
        solution:
          "Inspect sensor for blockage or damage. Ensure proper airflow.",
      },
      {
        code: "E04",
        issue: "Outdoor unit sensor error",
        solution:
          "Check outdoor unit for ice buildup or damage. Clear any obstructions.",
      },
      {
        code: "E06",
        issue: "Discharge temperature sensor error",
        solution: "Professional diagnosis required. Call licensed technician.",
      },
    ],
    maintenanceTips: [
      "Hyper-Heating technology allows operation down to -15°C",
      "Clean indoor unit filters monthly for optimal efficiency",
      "Ensure outdoor unit has 30cm clearance on all sides",
      "Check refrigerant levels professionally each year",
      "Use smart remote features to set efficient temperature schedules",
    ],
  },
  {
    name: "Panasonic",
    slug: "panasonic",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "H00",
        issue: "Operation code",
        solution:
          "Normal operation indicator. Check setpoint temperature if concerned.",
      },
      {
        code: "H01",
        issue: "Temperature sensor error",
        solution: "Check room temperature sensor for obstruction or damage.",
      },
      {
        code: "H02",
        issue: "Outdoor unit error",
        solution: "Verify outdoor unit power connection. Restart system.",
      },
      {
        code: "H03",
        issue: "Communication error between units",
        solution: "Check all wiring connections. Ensure units are powered on.",
      },
    ],
    maintenanceTips: [
      "Nanoe-X air purification runs during operation - very beneficial",
      "Monthly filter cleaning recommended for optimal performance",
      "Quiet operation is normal - extremely low noise design",
      "Professional service annually to maintain warranty and efficiency",
      "Cold weather operation optimized - no need to switch to second unit",
    ],
  },
  {
    name: "LG",
    slug: "lg",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "E1",
        issue: "Indoor temperature sensor error",
        solution:
          "Check sensor location and power connection. Ensure no air leaks.",
      },
      {
        code: "C1",
        issue: "Communication error",
        solution:
          "Power cycle both units. Check remote battery and connection.",
      },
      {
        code: "CH3",
        issue: "Indoor unit error",
        solution: "Restart system. Check power supply and circuit breaker.",
      },
      {
        code: "CH6",
        issue: "Outdoor pressure error",
        solution:
          "Professional service needed. Call licensed technician immediately.",
      },
    ],
    maintenanceTips: [
      "AI temperature prediction learns your preferences - accuracy improves over time",
      "Dual Inverter Compressor provides 40% energy savings",
      "Check smartphone app regularly for energy consumption tracking",
      "Professional filter service recommended quarterly",
      "Use WiFi connectivity for scheduling and remote monitoring",
    ],
  },
  {
    name: "Samsung",
    slug: "samsung",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "E01",
        issue: "Communication error",
        solution: "Check wireless connection between units. Restart system.",
      },
      {
        code: "E02",
        issue: "Temperature sensor error",
        solution: "Reinstall sensor firmly. Check for dust accumulation.",
      },
      {
        code: "C01",
        issue: "Indoor PCB error",
        solution: "Power cycle system. Check all electrical connections.",
      },
      {
        code: "Ch3",
        issue: "Outdoor unit error",
        solution:
          "Verify outdoor unit is receiving power. Check circuit breaker.",
      },
    ],
    maintenanceTips: [
      "WindFree technology eliminates cold drafts - ideal for comfort",
      "SmartThings integration enables voice control compatibility",
      "Filter check required every 2 weeks for optimal performance",
      "Professional annual maintenance maintains warranty",
      "Smartphone notifications alert you to maintenance needs",
    ],
  },
  {
    name: "Fujitsu",
    slug: "fujitsu",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "U0",
        issue: "Outdoor Unit Defrost Operation",
        solution:
          "Normal operation in cold weather. Unit briefly stops heating to defrost coils.",
      },
      {
        code: "U4",
        issue: "High Pressure Protection",
        solution:
          "Check for blocked filters or outdoor unit obstruction. Reset system.",
      },
      {
        code: "U5",
        issue: "Control Unit Error",
        solution:
          "Check power supply and remote batteries. Restart both units.",
      },
      {
        code: "U9",
        issue: "Indoor/Outdoor Communication Error",
        solution: "Verify all cable connections. Restart system completely.",
      },
    ],
    maintenanceTips: [
      "Highest SEER ratings require minimal maintenance for efficiency",
      "Professional installation and calibration critical for performance",
      "Quarterly filter inspection maintains energy efficiency",
      "Outdoor unit needs clear space for optimal airflow",
      "Consider commercial-grade reliability for demanding applications",
    ],
  },
  {
    name: "Toshiba",
    slug: "toshiba",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "E01",
        issue: "Unit Communication Failure",
        solution:
          "Check power to both units. Verify remote batteries. Restart system.",
      },
      {
        code: "E02",
        issue: "Temperature Sensor Error",
        solution:
          "Inspect sensor for damage or dust. Ensure proper ambient air circulation.",
      },
      {
        code: "E03",
        issue: "Defrost Malfunction",
        solution:
          "Normal in cold weather but persistent errors need professional service.",
      },
      {
        code: "H00",
        issue: "Heating Mode Active",
        solution: "Normal operation indicator - unit is actively heating.",
      },
    ],
    maintenanceTips: [
      "ForceFlow technology powerful in Australian cold winters",
      "Monthly filter changes recommended during heating season",
      "Compact design ideal for space-constrained installations",
      "Professional service every 12 months for peak performance",
      "Outdoor unit needs protection from extreme weather",
    ],
  },
  {
    name: "Carrier",
    slug: "carrier",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "10",
        issue: "Low pressure alarm",
        solution: "Check for refrigerant leaks. Professional service required.",
      },
      {
        code: "20",
        issue: "High pressure alarm",
        solution: "Verify outdoor unit airflow. Check for blocked filters.",
      },
      {
        code: "65",
        issue: "Communication Error",
        solution: "Check all wiring. Restart both indoor and outdoor units.",
      },
      {
        code: "71",
        issue: "Indoor Unit Error",
        solution: "Reset system. Check power connections and circuit breaker.",
      },
    ],
    maintenanceTips: [
      "Commercial-grade reliability ensures years of dependable heating",
      "Infinity Series offers smart diagnostics through smartphone app",
      "Annual professional servicing maintains 100+ year pedigree quality",
      "Comfort Node Control allows precise zone management",
      "Professional installation critical for warranty protection",
    ],
  },
  {
    name: "Hitachi",
    slug: "hitachi",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "01",
        issue: "Operation",
        solution: "Normal operation code. Unit actively heating.",
      },
      {
        code: "02",
        issue: "Air thermo sensor error",
        solution: "Check sensor for damage or dust accumulation.",
      },
      {
        code: "03",
        issue: "Pipe temperature sensor error",
        solution:
          "Inspect for damage or blockage. Call professional if persists.",
      },
      {
        code: "06",
        issue: "Liquid level error",
        solution:
          "Professional service needed immediately for refrigerant check.",
      },
    ],
    maintenanceTips: [
      "Twin Rotary Compressor reduces vibration - extremely quiet",
      "Advanced inverter technology provides precise temperature control",
      "Monthly filter cleaning maintains optimal efficiency",
      "Professional annual service essential for warranty",
      "Outdoor unit placement critical - ensure adequate clearance",
    ],
  },
  {
    name: "Haier",
    slug: "haier",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "E1",
        issue: "Indoor sensor error",
        solution: "Check room temperature sensor. Clean if dusty.",
      },
      {
        code: "E2",
        issue: "Outdoor sensor error",
        solution: "Verify outdoor unit power. Check sensor connections.",
      },
      {
        code: "E3",
        issue: "Unit communication error",
        solution: "Restart system. Check remote battery. Verify wiring.",
      },
      {
        code: "E5 / E6",
        issue: "Compressor error",
        solution: "Professional diagnosis required. Call licensed technician.",
      },
    ],
    maintenanceTips: [
      "Most affordable premium brand - excellent value proposition",
      "Smart IoT controls enable remote management via smartphone",
      "Bi-annual filter service recommended for optimal performance",
      "Professional maintenance annually protects investment",
      "WiFi connectivity allows monitoring from anywhere",
    ],
  },
  {
    name: "Kaden",
    slug: "kaden",
    systemType: "District Heating / Hydronic",
    commonErrors: [
      {
        code: "T01",
        issue: "Temperature sensor fault",
        solution: "Check sensor connections. Verify boiler temperature.",
      },
      {
        code: "P01",
        issue: "Low system pressure",
        solution:
          "Check for leaks. Top up pressure - professional service recommended.",
      },
      {
        code: "E01",
        issue: "Ignition fault (gas boiler)",
        solution:
          "Reset boiler. Check gas supply. Call technician if persists.",
      },
      {
        code: "F01",
        issue: "Circulation pump fault",
        solution: "Professional service required for pump replacement.",
      },
    ],
    maintenanceTips: [
      "Hydro-Comfort technology: ideal for apartments and multi-unit buildings",
      "Annual boiler servicing critical for safety and efficiency",
      "Bleed radiators twice yearly to maintain heat distribution",
      "System pressure check quarterly - maintain 1.5 bar",
      "Professional annual certified service required for safety",
    ],
  },
  {
    name: "Sharp",
    slug: "sharp",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "H1",
        issue: "High pressure",
        solution: "Check outdoor unit for blockage. Verify airflow.",
      },
      {
        code: "L1",
        issue: "Low pressure",
        solution: "Professional service needed to check refrigerant levels.",
      },
      {
        code: "F1",
        issue: "Sensor error",
        solution: "Check indoor temperature sensor for damage or obstruction.",
      },
      {
        code: "P1",
        issue: "Communication error",
        solution: "Restart system. Check all wiring connections.",
      },
    ],
    maintenanceTips: [
      "Plasmacluster Ion technology sanitizes air - health benefit",
      "R32 refrigerant environmentally friendly and efficient",
      "Monthly filter cleaning maintains air quality benefits",
      "Professional service annually for peak performance",
      "Usage of ion technology requires slightly more frequent service",
    ],
  },
  {
    name: "Breezair",
    slug: "breezair",
    systemType: "Evaporative Heating / Hybrid",
    commonErrors: [
      {
        code: "L1",
        issue: "Low water level",
        solution: "Check water supply. Top up reservoir. Verify supply line.",
      },
      {
        code: "P1",
        issue: "Circulation pump error",
        solution:
          "Restart system. Check water flow. Professional service if continues.",
      },
      {
        code: "M1",
        issue: "Motor error",
        solution:
          "Check fan operation. Listen for unusual sounds. Call if not running.",
      },
      {
        code: "E1",
        issue: "Sensor / Control error",
        solution:
          "Power cycle system. Reset if needed. Professional service recommended.",
      },
    ],
    maintenanceTips: [
      "Unique evaporative-heating hybrid perfect for dry Australian climate",
      "Pre-season water system flushing essential for reliability",
      "Water quality important - use soft water when possible",
      "Quarterly filter and pad inspection during operation",
      "Professional annual service critical for seasonal readiness",
    ],
  },
  {
    name: "ActronAir",
    slug: "actronair",
    systemType: "Split System / Zone Control",
    commonErrors: [
      {
        code: "E1",
        issue: "Sensor error",
        solution: "Check thermostat sensor placement and connections.",
      },
      {
        code: "E2",
        issue: "Zone control error",
        solution: "Verify all zone dampers moving. Check control wiring.",
      },
      {
        code: "E4",
        issue: "Communication error",
        solution: "Restart system. Check remote batteries. Verify connections.",
      },
      {
        code: "E5",
        issue: "Compressor error",
        solution: "Professional service required. Call immediately.",
      },
    ],
    maintenanceTips: [
      "SHX Inverter technology - optimized for Australian conditions",
      "Zone control allows heating only occupied rooms - energy efficient",
      "50 years of local expertise - local support advantage",
      "Quarterly damper inspection for zone balance",
      "Annual professional service maintains Australian warranty",
    ],
  },
  {
    name: "Rinnai",
    slug: "rinnai",
    systemType: "Gas Heating / Instantaneous",
    commonErrors: [
      {
        code: "01",
        issue: "Ignition failure",
        solution: "Check gas supply. Verify power. Reset and retry.",
      },
      {
        code: "12",
        issue: "Temperature sensor error",
        solution: "Check water temperature sensor. Verify connections.",
      },
      {
        code: "16",
        issue: "Flame failure",
        solution: "Shut off, wait 5 minutes, restart. Call if persists.",
      },
      {
        code: "25",
        issue: "Circulation error",
        solution: "Check water pressure. Verify circulation pump operating.",
      },
    ],
    maintenanceTips: [
      "80+ years perfecting modulating burner technology",
      "Modulating burners adjust power output for maximum efficiency",
      "Annual professional servicing mandatory for safety",
      "Monitor for any gas odor - call immediately if detected",
      "Continuous flow system requires proper water pressure maintenance",
    ],
  },
  {
    name: "Vulcan",
    slug: "vulcan",
    systemType: "Ductless / Wall-Mounted",
    commonErrors: [
      {
        code: "E01",
        issue: "Communication error",
        solution:
          "Check remote batteries. Power cycle indoor and outdoor units.",
      },
      {
        code: "E02",
        issue: "Indoor sensor error",
        solution: "Verify sensor is clean and unobstructed.",
      },
      {
        code: "E05",
        issue: "Outdoor unit error",
        solution: "Check power supply to outdoor unit and wiring.",
      },
      {
        code: "E06",
        issue: "Compressor error",
        solution: "Professional service required for diagnostics.",
      },
    ],
    maintenanceTips: [
      "QuickHeat technology reaches comfort 20% faster",
      "Australian innovation - 40+ years ductless heating expertise",
      "Bi-weekly filter cleaning maintained peak performance",
      "Wall-mounted units require clear space for air intake/exhaust",
      "Annual professional service recommended for longevity",
    ],
  },
  {
    name: "York",
    slug: "york",
    systemType: "Heat Pump / Split System",
    commonErrors: [
      {
        code: "10",
        issue: "Low pressure",
        solution: "Check for leaks. Professional service needed.",
      },
      {
        code: "20",
        issue: "High pressure",
        solution: "Check outdoor unit airflow. Clear any blockages.",
      },
      {
        code: "60",
        issue: "System fault",
        solution: "Note error code. Call professional service immediately.",
      },
      {
        code: "CC",
        issue: "Communication error",
        solution: "Verify all connections. Restart both units.",
      },
    ],
    maintenanceTips: [
      "Commercial HVAC engineering adapted for residential reliability",
      "70+ years of commercial expertise ensures durability",
      "Affinity Series offers Sensible Control for predictable comfort",
      "Professional annual maintenance critical for performance",
      "Outdoor unit placement and clearance critical for efficiency",
    ],
  },
  {
    name: "Celair",
    slug: "celair",
    systemType: "Split System / Compact",
    commonErrors: [
      {
        code: "E01",
        issue: "Communication error",
        solution: "Check indoor/outdoor wiring. Power cycle system.",
      },
      {
        code: "E02",
        issue: "Temperature sensor",
        solution: "Inspect sensor for damage or dust.",
      },
      {
        code: "E03",
        issue: "Unit error",
        solution: "Power down. Wait 5 minutes. Restart system.",
      },
      {
        code: "E04",
        issue: "Outdoor unit error",
        solution:
          "Verify power and connections. Professional service if continues.",
      },
    ],
    maintenanceTips: [
      "Silent-Comfort technology delivers whisper-quiet heating",
      "Compact design ideal for Australian apartments",
      "Monthly filter checks maintain noise and efficiency levels",
      "Professional service annually for warranty compliance",
      "Quiet operation normal - indicates efficient operation",
    ],
  },
];

function generatePage(brand) {
  const title = `${brand.name} - Error Codes & Troubleshooting Guide`;
  const content = `import type { Metadata } from "next";
import SelfCareBrandClient from "@/components/self-care/SelfCareBrandClient";

export const metadata: Metadata = {
  title: "${title} Melbourne",
  description: "${brand.name} ${brand.systemType} error codes, troubleshooting guide, and maintenance tips. Expert help for ${brand.name.toLowerCase()} heating systems.",
  keywords: "${brand.name.toLowerCase()} error codes, ${brand.name.toLowerCase()} troubleshooting, ${brand.name.toLowerCase()} maintenance, ${brand.systemType.toLowerCase()}",
  openGraph: {
    title: "${title}",
    description: "Complete error code database and troubleshooting guide for ${brand.name} heating systems.",
    url: "https://heatingservicemelbourne.com.au/self-care/${brand.slug}",
  },
};

export default function SelfCareBrandPage() {
  const brandData = ${JSON.stringify(brand)};
  return <SelfCareBrandClient brand={brandData} />;
}`;

  return content;
}

async function main() {
  const pagesDir = path.join(projectRoot, "src/app/(pages)/self-care");

  console.log("🚀 Creating brand-specific self-care pages...\n");

  let created = 0;
  let failed = 0;

  for (const brand of brandData) {
    try {
      const brandPageDir = path.join(pagesDir, brand.slug);
      if (!fs.existsSync(brandPageDir)) {
        fs.mkdirSync(brandPageDir, { recursive: true });
      }

      const pagePath = path.join(brandPageDir, "page.tsx");
      fs.writeFileSync(pagePath, generatePage(brand));

      created++;
      console.log(`✅ ${brand.name}`);
    } catch (error) {
      console.error(`❌ ${brand.name}: ${error.message}`);
      failed++;
    }
  }

  console.log("\n" + "═".repeat(60));
  console.log(`✅ Brand Self-Care Pages Created!`);
  console.log(`   Created: ${created} brand pages`);
  console.log(`   Failed: ${failed} brand pages`);
  console.log(`   Total: ${created + failed} / 19`);
  console.log("═".repeat(60));
}

main().catch(console.error);
