
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
export interface LangProps {
    defaultValue: string;
    items: Array<{value: string; label: string}>;
  };

export interface Category {
    id: number;
    title: string;
    image: string;
  }

export interface CategoryProps {
    data: Category[];
  }