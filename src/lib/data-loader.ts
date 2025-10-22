export const loadData = async <T>(path: string): Promise<T> => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load data from ${path}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading data from ${path}:`, error);
    throw error;
  }
};

export const loadStaticData = <T>(data: T): T => {
  return data;
};

export interface SiteConfig {
  name: string;
  logo: string;
  tagline: string;
  language: string;
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
}

export interface ThemeConfig {
  colors: {
    brand: {
      blue: string;
      green: string;
      black: string;
    };
    text: {
      hero: string;
      muted: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
      muted: string;
    };
    border: {
      default: string;
      muted: string;
    };
  };
  layout: {
    sidebarWidth: string;
    mainWidth: string;
    squaresConfig: {
      speed: number;
      size: number;
      borderColor: string;
    };
  };
  typography: {
    primaryFont: string;
    secondaryFont: string;
  };
}

export interface AnimationConfig {
  hero: {
    text1: { duration: number; ease: string; delay: number };
    text2: { duration: number; ease: string; delay: number };
    text3: { duration: number; ease: string; delay: number };
    greenBox: { duration: number; ease: string; delay: number };
  };
  offers: {
    cards: {
      duration: number;
      ease: string;
      stagger: number;
      scrollTrigger: {
        start: string;
        end: string;
        toggleActions: string;
      };
    };
  };
  testimonials: {
    marquee: {
      speed: number;
      pauseOnHover: boolean;
    };
  };
}

