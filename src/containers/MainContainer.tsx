import { useState } from 'react'

/**
 * MainContainer
 * Top-level UI container responsible for coordinating search input and data fetching.
 * Responsibilities:
 * - Holds controlled input state
 * - Orchestrates search via getWeatherByName (geocoding + weather)
 * - Passes normalized data down to presentational components
 */

// Components
import { Navbar } from '../components/Navbar'
import { WeatherCard } from '../components/WeatherCard'
import { ForecastTable } from '../components/ForecastTable'
import { Container } from '@mui/material'
import { getWeatherByName } from '../utils/getWeatherByName'
import type { CurrentWeatherData, ForecastData } from '../types'

export function MainContainer(){
    const [inputValue, setInputValue] = useState('')
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>()
    const [forecast, setForecast] = useState<ForecastData>()

    // Keep Navbar controlled by lifting value and handler here
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    // Compose calls via util; update state with normalized results
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
            {/* Responsive layout holding the two primary widgets */}
            <Container sx={{ height: '78vh', maxHeight: '565px', display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'space-between' }, gap: 3.5, alignItems: 'center', mt: 4 }}>
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