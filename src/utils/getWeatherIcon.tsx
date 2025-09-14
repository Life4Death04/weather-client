import type { ReactNode } from "react";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbCloudyOutlinedIcon from '@mui/icons-material/WbCloudyOutlined';
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

type getWeatherIconProps = {
    weatherCode: number;
    adaptativeSize?: boolean;
};

export function getWeatherIcon({ weatherCode, adaptativeSize }: getWeatherIconProps): ReactNode {
    let baseStyle = { verticalAlign: 'middle', mr: 0.5, fontSize: adaptativeSize ? { xs: '6rem', sm: '8rem' } : '2rem' };
    switch (weatherCode) {
        case 0:
        case 1:
        case 2:
            return <WbSunnyOutlinedIcon sx={{ ...baseStyle, color: '#ebb822' }} />;

        case 3:
        case 45:
        case 48:
            return <WbCloudyOutlinedIcon sx={baseStyle} />;

        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
        case 80:
        case 81:
        case 82:
            return <BeachAccessOutlinedIcon sx={{ ...baseStyle, color: '#1a92f5ff' }} />;

        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return <AcUnitOutlinedIcon sx={baseStyle} />;

        case 95:
        case 96:
        case 99:
            return <ThunderstormOutlinedIcon sx={baseStyle} />;

        default:
            return <ErrorOutlineOutlinedIcon sx={baseStyle} />;
    }
}