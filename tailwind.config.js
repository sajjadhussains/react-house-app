/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1318px", // Extra-large devices (custom)
        "2xl": "1536px", // 2XL devices (default)
      },
      container: {
        center: true, // Centers the container on the page
        padding: "1rem", // Padding for small screens
        screens: {
          sm: "100%", // Full-width container on small screens
          md: "768px", // Custom container width on medium screens
          lg: "1024px", // Custom container width on large screens
          xl: "1318px", // Custom container width on extra-large screens
          "2xl": "1536px", // Custom container width on 2XL screens
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
