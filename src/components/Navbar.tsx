// Navbar
// App header with brand and a compact search box.
// - Delegates state and behavior to parent via controlled props.

import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import CloudIcon from '@mui/icons-material/Cloud';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import type { NavbarProps } from '../types';

// Styled search container: border + hover background, responsive width
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #ccc',
  color: '#555',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '300px',
  },
}));

// Styled input with responsive font size and focus width expansion
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('xs')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
  },
}));

 /**
 * Navbar
 * @param inputValue - Current search text
 * @param onChange - Input change handler
 * @param onSubmit - Click handler for search icon
 * @returns Navbar component
 */
export function Navbar({ inputValue, onChange, onSubmit }: NavbarProps){
    return(
        <AppBar position="static" sx={{ bgcolor: 'white'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Brand logo and title */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CloudIcon sx={{ color: '#1293ec', mr: { xs: 1, sm: 2 }, fontSize: { xs: '1.5rem', sm: '2rem', } }} />
                        <Typography variant="h1" component="div" sx={{ color: '#263143', fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>
                            WeatherWise
                        </Typography>
                    </Box>
                    <Search>
                        {/* Click to trigger parent onSubmit (e.g., chain geocoding + weather) */}
                        <IconButton 
                          aria-label="search"
                          onClick={onSubmit}
                        >
                          <SearchIcon />
                        </IconButton>
                        <StyledInputBase
                            value={inputValue}
                            onChange={onChange}
                            placeholder="Search for city..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
        </AppBar>
    )
}