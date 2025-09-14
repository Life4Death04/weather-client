import { Card, CardContent, Typography, Box, Divider } from '@mui/material';
import { getWeatherIcon } from '../utils/getWeatherIcon';
import { getWeatherDescription } from '../utils/getWeatherDescription';
import type { CurrentWeatherData } from '../types';

type WeatherCardProps = {
  values: CurrentWeatherData | undefined;
}

export function WeatherCard({ values }: WeatherCardProps) {
  return (
    <Card sx={{width: { xs: '100%' }, maxWidth: 350, color: 'text.primary', boxShadow: 3, height: { xs: 'fit-content', md:'100%'}, px: { xs: 2, sm: 4 } }}>
      <CardContent>
        <Typography variant="h3" component="div" sx={{ fontWeight: '600', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          {values?.city ?? ''}{values?.country ?? ''}
        </Typography>
        <Typography variant="subtitle1" component="div" sx={{ opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          {new Date(values?.current.time ?? '').toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) ?? '--'}
        </Typography>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          {getWeatherIcon({ weatherCode: values?.current.weather_code ?? -1, adaptativeSize: true })}
          <Typography variant="body2" sx={{ ml: 1, fontWeight: 'bold', fontSize: { xs: '2rem', sm: '4rem' } }}>
            {`
              ${values?.current.temperature_2m ?? '--'} 
              ${values?.units.temperature_2m ?? '°C'}
            `}
          </Typography>
          <Typography variant="body2" sx={{ ml: 1, opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1.2rem' } }}>
            {getWeatherDescription(values?.current.weather_code ?? -1)}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                Humidity
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                {`
                  ${values?.current.relative_humidity_2m ?? '--'} 
                  ${values?.units.relative_humidity_2m ?? '%'}
                `}
            </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                Wind
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                {`
                  ${values?.current.wind_speed_10m ?? '--'} 
                  ${values?.units.wind_speed_10m ?? 'km/h'}
            `}</Typography>
            </Box>   
        </Box>
      </CardContent>
    </Card>
  );
}