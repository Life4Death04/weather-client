import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@mui/material";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import type { ForecastData } from "../types";

type ForecastTableProps = {
    values?: ForecastData;
}

export function ForecastTable({ values }: ForecastTableProps) {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: { xs: '100%', sm: 400, lg: 700 }, height: { xs: 'fit-content', md:'100%'}, boxShadow: 3 }}>
            <Typography variant="h3" gutterBottom component="div" sx={{ p: 2, px: { xs: 2, sm: 4 }, pb: 0, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.5rem' } }}>
                7-Day Weather Forecast
            </Typography>
        <Table>
            <TableHead sx={{ display: { xs: 'none', sm: 'table-header-group' } }}>
                <TableRow sx={{ opacity: 0.8, px: { xs: 0, sm: 3 } }}>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Weather</TableCell>
                    <TableCell align="center">High/Low</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {values?.daily.time.map((date, index) => (
                    <TableRow key={index}>
                        <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                            {new Date(date).toLocaleDateString('en-US', { weekday: 'long' })}
                        </TableCell>
                        <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                            {getWeatherIcon({ weatherCode: values.daily.weather_code[index], adaptativeSize: false })}
                        </TableCell>
                        <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                            {`
                              ${values.daily.temperature_2m_max[index] ?? '--'} 
                              ${values.units.temperature_2m_max ?? '°C'} /
                                ${values.daily.temperature_2m_min[index] ?? '--'}${values.units.temperature_2m_min ?? '°C'}
                            `}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}