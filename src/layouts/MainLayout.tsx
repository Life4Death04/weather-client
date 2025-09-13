import { Navbar } from '../components/Navbar'
import { WeatherCard } from '../components/WeatherCard'
import { ForecastTable } from '../components/ForecastTable'
import { Container } from '@mui/material'

export function MainLayout(){
    return (
        <>
            <Navbar />
            <Container sx={{ height: '75vh', display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', lg: 'space-between' }, gap: 3.5, alignItems: 'center', mt: 4 }}>
            <WeatherCard />
            <ForecastTable />
            </Container>
        </>
    )
}