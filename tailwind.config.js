/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,vue,css}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: { /* Pantone 7684C */
					'50': '#f4f6fb',
					'100': '#e8ecf6',
					'200': '#cbd8ec',
					'300': '#9db5dc',
					'400': '#698fc7',
					'500': '#4672b1',
					'600': '#375d9c',
					'700': '#2b4779',
					'800': '#273d65',
					'900': '#253555',
					'950': '#192338',
					DEFAULT: '#4672b1',
					foreground: '#ffffff'
				},
				secondary: { /* Pantone Process Blue C */
					'50': '#f0f9ff',
					'100': '#e0f2fe',
					'200': '#b9e5fe',
					'300': '#7cd2fd',
					'400': '#36bcfa',
					'500': '#0ca4eb',
					'600': '#0082c8',
					'700': '#0167a3',
					'800': '#065886',
					'900': '#0b496f',
					'950': '#072e4a',
					DEFAULT: '#0ca4eb',
					foreground: '#ffffff'
				},
				tertiary: { /* Pantone 319 C */
					'50': '#eefdfd',
					'100': '#d3f9fa',
					'200': '#adf2f4',
					'300': '#75e6eb',
					'400': '#26cad3',
					'500': '#1ab5c0',
					'600': '#1892a2',
					'700': '#1a7684',
					'800': '#1e5f6c',
					'900': '#1d505c',
					'950': '#0e353e',
					DEFAULT: '#1ab5c0',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
