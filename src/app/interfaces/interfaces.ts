import { StaticImageData } from "next/image";

export interface NavbarProps {
    showNavbar: string,
}
export interface ThemeProps {
    theme: 'light' | 'dark'
}
export interface ItemData {
    image: string;
    title: string;
    description: string;
    link: string;
}
