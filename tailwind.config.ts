import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Définissez vos couleurs personnalisées ici
        indigo: {
          50: '#f0f5ff',
          100: '#e5edff',
          // Ajoutez d'autres nuances de couleur si nécessaire
        },
        lime: {
          50: '#f7fee7',
          100: '#ecfccb',
          // Ajoutez d'autres nuances de couleur si nécessaire
        },
        sky: {
          50: '#f0f9ff',
          100: '#c8e1ff',
          // Ajoutez d'autres nuances de couleur si nécessaire
        },
      },
    },
  },
  plugins: [],
};
export default config;
