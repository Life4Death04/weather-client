export type WeatherCode =
  | 0 | 1 | 2 | 3
  | 45 | 48
  | 51 | 53 | 55
  | 56 | 57
  | 61 | 63 | 65
  | 66 | 67
  | 71 | 73 | 75
  | 77
  | 80 | 81 | 82
  | 85 | 86
  | 95
  | 96 | 99;

const CODE_DESCRIPTION: Record<WeatherCode, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Drizzle: Light',
  53: 'Drizzle: Moderate',
  55: 'Drizzle: Dense intensity',
  56: 'Freezing Drizzle: Light',
  57: 'Freezing Drizzle: Dense intensity',
  61: 'Rain: Slight',
  63: 'Rain: Moderate',
  65: 'Rain: Heavy intensity',
  66: 'Freezing Rain: Light',
  67: 'Freezing Rain: Heavy intensity',
  71: 'Snow fall: Slight',
  73: 'Snow fall: Moderate',
  75: 'Snow fall: Heavy intensity',
  77: 'Snow grains',
  80: 'Rain showers: Slight',
  81: 'Rain showers: Moderate',
  82: 'Rain showers: Violent',
  85: 'Snow showers: Slight',
  86: 'Snow showers: Heavy',
  95: 'Thunderstorm: Slight',
  96: 'Thunderstorm with slight',
  99: 'Thunderstorm Heavy hail',
};

function isWeatherCode(code: number): code is WeatherCode {
  return Object.prototype.hasOwnProperty.call(CODE_DESCRIPTION, code);
}

export function getWeatherDescription(code: number): string {
  return isWeatherCode(code) ? CODE_DESCRIPTION[code] : 'Unknown weather code';
}