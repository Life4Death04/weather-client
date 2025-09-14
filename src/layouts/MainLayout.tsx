import { useState } from 'react'

// Components
import { Navbar } from '../components/Navbar'
import { WeatherCard } from '../components/WeatherCard'
import { ForecastTable } from '../components/ForecastTable'
import { Container } from '@mui/material'

export function MainLayout(){
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const handleSearch = async () => {
    }
    return (
        <>
            <Navbar 
                inputValue={inputValue}
                onChange={handleChange}
                onSubmit={handleSearch}
            />
            <Container sx={{ height: '75vh', display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'space-between' }, gap: 3.5, alignItems: 'center', mt: 4 }}>
            <WeatherCard />
            <ForecastTable />
            </Container>
        </>
    )
}