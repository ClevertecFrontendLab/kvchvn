import { useMediaQuery } from 'react-responsive';

const SIZES = {
    xl: 1280,
    lg: 1024,
    md: 835,
    // like semi-medium
    smd: 768,
    sm: 600,
    xs: 480,
} as const;

export const useMedia = (size: keyof typeof SIZES) => useMediaQuery({ maxWidth: SIZES[size] });
