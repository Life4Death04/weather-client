import { useState } from 'react'

/**
 * TODO:
 * - Make utils for getting the weather icon based on the weather code
 * 
 * - Add name of the city to the WeatherCard (City, Country)
 * - Transform the Date string to a more readable format ()e.g. Today, 10:00 AM
 * 
 * - Add wind to the weather card (need to modify the API call and types)
 * 
 * - Add Forecast data to the layout
 * 
 * - See possible bug about days in forecast
 * 
 * - Add optimistic updates (Loading state)
 * - Add error handling (Error state)
 */

// Components
import { Navbar } from '../components/Navbar'
import { WeatherCard } from '../components/WeatherCard'
import { ForecastTable } from '../components/ForecastTable'
import { Container } from '@mui/material'
import { getWeatherByName } from '../utils/getWeatherByName'
import type { CurrentWeatherData, ForecastData } from '../types'

export function MainLayout(){
    const [inputValue, setInputValue] = useState('')
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>()
    const [forecast, setForecast] = useState<ForecastData>()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSearch = async () => {
        const data = await getWeatherByName(inputValue)
        setCurrentWeather(data.currentWeather)
        setForecast(data.forecast)
    }
    return (
        <>
            <Navbar 
                inputValue={inputValue}
                onChange={handleChange}
                onSubmit={handleSearch}
            />
            <Container sx={{ height: '75vh', display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'space-between' }, gap: 3.5, alignItems: 'center', mt: 4 }}>
            <WeatherCard 
                values={currentWeather}
            />
            <ForecastTable 
                values={forecast}
            />
            </Container>
        </>
    )
}