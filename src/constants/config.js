const ENV = import.meta.env.VITE_ENV || 'development';

const CONFIG = {
  development: {
    BASE_URL: import.meta.env.VITE_API_BASE_URL,
  },
  production: {
    BASE_URL: import.meta.env.VITE_API_BASE_URL,
  },
  staging: {
    BASE_URL: import.meta.env.VITE_API_BASE_URL,
  },
};

const currentConfig = CONFIG[ENV];

export const BASE_URL = currentConfig.BASE_URL;
