import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero-img": "url('/men-s-shoes-clothing-accessories.jpg')",
          "woman-shoes-img" : "url('/woman-shoes.png')",
          "nike-men-img" : "url('/nike-men.jpg')",
          "nike-kids-img" : "url('/nike-kids-shoes.jpg')",
          "nike-woman-img" : "url('/nike-just-do-it-woman.jpg')",
          "nike-running-img" : "url('/nike-just-do-it-running.jpg')",
          "nike-football-img" : "url('/nike-just-do-it-football.jpg')",
          "nike-dunk-img" : "url('/nike-just-do-it-dunk.png')",
      },
      animationFillMode: {
        none: "none",
        forwards: "forwards",
        backwards: "backwards",
        both: "both",
      },
      animation : {
        'scale-rotate': 'scaleAndRotate 2s ease-in-out 1',
      },
      keyframes: {
        scaleAndRotate : {
          '0%': {
            rotate: '0deg',
            scale: '0.75'
          },
          '100%': {
            rotate: '-20deg',
            scale: '1.25',
            'animation-fill-mode': 'forwards',
          },
        }
      },
    },
  },
  plugins: [],
};
export default config;
