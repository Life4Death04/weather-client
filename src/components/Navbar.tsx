import { AppBar, Toolbar, Typography, IconButton, Container, Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import CloudIcon from '@mui/icons-material/Cloud';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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

export function Navbar(){
    return(
        <AppBar position="static" sx={{ bgcolor: 'white'}}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CloudIcon sx={{ color: '#1293ec', mr: { xs: 1, sm: 2 }, fontSize: { xs: '1.5rem', sm: '2rem', } }} />
                        <Typography variant="h1" component="div" sx={{ color: '#263143', fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' } }}>
                            WeatherWise
                        </Typography>
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search for city..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
        </AppBar>
    )
}