/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rebeqa', 'Inter', 'system-ui', 'sans-serif'],
        'rebeqa': ['Rebeqa', 'Inter', 'system-ui', 'sans-serif'],
        'sonder': ['Sonder Regular', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': 'rgb(166, 217, 226)',
        'primary-light': 'rgb(231, 234, 247)',
        'primary-dark': 'rgb(57, 83, 112)',
        'secondary': 'rgb(251, 201, 108)',
        'accent': 'rgb(241, 132, 72)',
        'success': '#10b981',
        'warning': 'rgb(251, 201, 108)',
        'error': '#ef4444',
        'blue': 'rgb(166, 217, 226)',
        'light-blue': 'rgb(231, 234, 247)',
        'dark-blue': 'rgb(57, 83, 112)',
        'yellow': 'rgb(251, 201, 108)',
        'orange': 'rgb(241, 132, 72)',
        'gray-50': '#f8fafc',
        'gray-100': '#f1f5f9',
        'gray-200': '#e2e8f0',
        'gray-300': '#cbd5e1',
        'gray-400': '#94a3b8',
        'gray-500': '#64748b',
        'gray-600': '#475569',
        'gray-700': '#334155',
        'gray-800': '#1e293b',
        'gray-900': '#0f172a',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
