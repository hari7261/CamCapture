module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensure Tailwind scans all relevant files
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))', // Map the `--border` variable to a custom color
      },
    },
  },
  plugins: [],
};
