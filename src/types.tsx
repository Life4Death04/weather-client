export type NavbarProps = {
    inputValue: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

export type GeocodingResponse = {
    coords: {
        lat: number;
        lng: number;
    },
    location: {
        country: string;
        city: string;
    }
}

export type WeatherResult = {
    current: {
        interval: number;
        relative_humidity_2m: number;
        temperature_2m: number;
        time: Date;
        weather_code: number;
    },
    current_units: {
        interval: string;
        relative_humidity_2m: string;
        temperature_2m: string;
        time: string;
        weather_code: string;
    },
    daily: {
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        time: Date[];
        weather_code: number[];
    },
    daily_units: {
        temperature_2m_max: string;
        temperature_2m_min: string;
        time: string;
        weather_code: string;
    },
    elevation: number;
    generationtime_ms: number;
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}

export type CurrentWeatherData = {
    current: WeatherResult['current'];
    units: WeatherResult['current_units'];
}

export type ForecastData = {
    daily: WeatherResult['daily'];
    units: WeatherResult['daily_units'];
}

export type getWeatherByNameResponse = {
    currentWeather: CurrentWeatherData;
    forecast: ForecastData;
}