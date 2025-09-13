import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@mui/material";
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudIcon from '@mui/icons-material/Cloud';

export function ForecastTable(){
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
                <TableRow key={1}>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>Monday</TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                        <SunnyIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: '#eff300ff' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>75°F / 55°F</TableCell>
                </TableRow>
                <TableRow key={2}>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>Tuesday</TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                        <CloudIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'gray' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>72°F / 54°F</TableCell>
                </TableRow>
                <TableRow key={3}>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>Wednesday</TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                        <WaterDropIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'blue' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>70°F / 56°F</TableCell>
                </TableRow>
                <TableRow key={3}>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>Wednesday</TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                        <WaterDropIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'blue' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>70°F / 56°F</TableCell>
                </TableRow>
                <TableRow key={3}>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>Wednesday</TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                        <WaterDropIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'blue' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>70°F / 56°F</TableCell>
                </TableRow>
                <TableRow key={3}>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>Wednesday</TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                        <WaterDropIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'blue' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>70°F / 56°F</TableCell>
                </TableRow>
                <TableRow key={3}>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>Wednesday</TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>
                        <WaterDropIcon sx={{ verticalAlign: 'middle', mr: 0.5, color: 'blue' }} />
                    </TableCell>
                    <TableCell align="center" sx={{ opacity: 0.8, fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}>70°F / 56°F</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    );
}