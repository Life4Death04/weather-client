import { fetchGeocoding } from '../api/geocoding';
import { fetchWeather } from '../api/openmeteo';
import type { CurrentWeatherData, ForecastData, GeocodingResponse, getWeatherByNameResponse, WeatherResult } from '../types';

export async function getWeatherByName(cityName: string): Promise<getWeatherByNameResponse> {
    const query = cityName.trim();
    if (!query) throw new Error('City name cannot be empty');

    const geo: GeocodingResponse = await fetchGeocoding(query);
    if (!geo) throw new Error('Could not get coordinates');

    const weather: WeatherResult = await fetchWeather(geo.coords.lat, geo.coords.lng);
    if (!weather) throw new Error('Could not get weather data');

    const currentWeather: CurrentWeatherData = { 
        current: weather.current, 
        units: weather.current_units, 
        country: geo.location.country, 
        city: geo.location.city 
    };
    const forecast: ForecastData = { 
        daily: weather.daily, 
        units: weather.daily_units 
    };
    return { currentWeather, forecast };
}