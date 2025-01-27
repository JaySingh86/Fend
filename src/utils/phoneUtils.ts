import DeviceInfo from 'react-native-device-info';

/**
 * Detects and returns the phone number of the device.
 * @returns {Promise<string | null>} The phone number or null if unavailable.
 */
export const detectPhoneNumber = async (): Promise<string | null> => {
  try {
    const phoneNumber = await DeviceInfo.getPhoneNumber();
    return phoneNumber;
  } catch (error) {
    console.error('Failed to fetch phone number:', error);
    return null;
  }
};
