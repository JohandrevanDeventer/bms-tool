import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// Fetch function with enhanced error handling
async function getDBData(category: string): Promise<any[]> {
  try {
    const response = await fetch(`http://localhost:4000/${category}`);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Validate that the returned data is an array
    if (!Array.isArray(data)) {
      throw new Error(`Invalid data format for ${category}: Expected an array`);
    }

    console.log(`Fetched ${data.length} items for category "${category}"`);

    return data;
  } catch (error) {
    console.error(`Error fetching data for category "${category}":`, error);

    // Return an empty array or a fallback value to avoid runtime errors
    return [];
  }
}

// Fetch all data with proper error handling
export const points: Point[] = await getDBData("points");
export const deviceTypes: DeviceType[] = await getDBData("deviceTypes");
export const brands: Brand[] = await getDBData("brands");
export const supportedGateways: SupportedGateway[] = await getDBData("supportedGateways");
export const supportedProtocols: SupportedProtocol[] = await getDBData("supportedProtocols");
export const devices: Device[] = await getDBData("devices");

// Calculate the number of unique models with error handling
const calculateNumberOfModels = (devices: Device[]): number => {
  if (!Array.isArray(devices)) {
    console.error("Invalid devices data: Expected an array");
    return 0;
  }

  try {
    const uniqueModels = new Set(devices.map((device) => device.model));
    return uniqueModels.size;
  } catch (error) {
    console.error("Error calculating number of models:", error);
    return 0;
  }
};

// Export calculated values with validation
export const numberOfDeviceTypes = Array.isArray(deviceTypes) ? deviceTypes.length : 0;
export const numberOfBrands = Array.isArray(brands) ? brands.length : 0;
export const numberOfModels = calculateNumberOfModels(devices);
export const numberOfPoints = Array.isArray(points) ? points.length : 0;
export const numberOfSupportedGateways = Array.isArray(supportedGateways) ? supportedGateways.length : 0;
export const numberOfSupportedProtocols = Array.isArray(supportedProtocols) ? supportedProtocols.length : 0;

export const getDeviceTypes = (devices: Device[]): string[] => {
  if (!Array.isArray(devices)) {
    console.error("Invalid devices data: Expected an array");
    return [];
  }

  try {
    const deviceTypes = devices.map((device) => device.deviceType);
    return Array.from(new Set(deviceTypes));
  } catch (error) {
    console.error("Error getting device types:", error);
    return [];
  }
}

export const getBrands = (devices: Device[], deviceType: string): string[] => {
  if (!Array.isArray(devices)) {
    console.error("Invalid devices data: Expected an array");
    return [];
  }

  try {
    const brands = devices
      .filter((device) => device.deviceType === deviceType)
      .map((device) => device.brand);

    return Array.from(new Set(brands));
  } catch (error) {
    console.error("Error getting brands:", error);
    return [];
  }
} 

export const getModels = (devices: Device[], deviceType: string, brand: string): string[] => {
  if (!Array.isArray(devices)) {
    console.error("Invalid devices data: Expected an array");
    return [];
  }

  try {
    const models = devices
      .filter((device) => device.deviceType === deviceType && device.brand === brand)
      .map((device) => device.model);

    return Array.from(new Set(models));
  } catch (error) {
    console.error("Error getting models:", error);
    return [];
  }
}

export const getPoints = (devices: Device[], deviceType: string, brand: string, model: string): string[] => {
  if (!Array.isArray(devices)) {
    console.error("Invalid devices data: Expected an array");
    return [];
  }

  try {
    const device = devices.find((device) => device.deviceType === deviceType && device.brand === brand && device.model === model);

    return device ? device.points : [];
  } catch (error) {
    console.error("Error getting points:", error);
    return [];
  }
}

export const getSupportedGateways = (devices: Device[], deviceType: string, brand: string, model: string): string[] => {
  if (!Array.isArray(devices)) {
    console.error("Invalid devices data: Expected an array");
    return [];
  }

  try {
    const device = devices.find((device) => device.deviceType === deviceType && device.brand === brand && device.model === model);

    return device ? device.supportedGateways : [];
  } catch (error) {
    console.error("Error getting supported gateways:", error);
    return [];
  }
}

export const getSupportedProtocols = (devices: Device[], deviceType: string, brand: string, model: string): string[] => {
  if (!Array.isArray(devices)) {
    console.error("Invalid devices data: Expected an array");
    return [];
  }

  try {
    const device = devices.find((device) => device.deviceType === deviceType && device.brand === brand && device.model === model);

    return device ? device.supportedProtocols : [];
  } catch (error) {
    console.error("Error getting supported protocols:", error);
    return [];
  }
}

export const getPointDetails = (pointName: string): Point | undefined => {
  return points.find((point) => point.name === pointName);
}

