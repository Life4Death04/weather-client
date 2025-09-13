import { Card, CardContent, Typography, Box, Divider } from '@mui/material';

import SunnyIcon from '@mui/icons-material/Sunny';

export function WeatherCard() {
  return (
    <Card sx={{maxWidth: 350, color: 'text.primary', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h3" component="div" sx={{ fontWeight: '600', fontSize: { xs: '2rem', sm: '2.5rem' } }}>
          San Francisco
        </Typography>
        <Typography variant="subtitle1" component="div" sx={{ opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          Today, 10:00 AM
        </Typography>
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <SunnyIcon sx={{ fontSize: { xs: '6rem', sm: '8rem' }, color: '#1293ec' }} />
          <Typography variant="body2" sx={{ ml: 1, fontWeight: 'bold', fontSize: { xs: '2rem', sm: '4rem' } }}>
            25°C
          </Typography>
          <Typography variant="body2" sx={{ ml: 1, opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1.2rem' } }}>
            Partly Cloudy
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                Humidity
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                60%
            </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                Wind
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, fontSize: { xs: '0.8rem', sm: '1rem' } }}>
                15 km/h
            </Typography>
            </Box>   
        </Box>
      </CardContent>
    </Card>
  );
}