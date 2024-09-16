import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["selector"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				rougeScript: ['RougeScript', 'cursive']
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900',
			},
			animation: {
				typewriter: "typewriter 2s steps(11) forwards",
				caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				dark: '#09090B',
				white: '#FAFAFA',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
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
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				typewriter: {
					to: {
						left: "100%"
					}
				},
				blink: {
					'0%': {
						opacity: '0',
					},
					'0.1%': {
						opacity: '1',
					},
					'50%': {
						opacity: '1',
					},
					'50.1%': {
						opacity: '0',
					},
					'100%': {
						opacity: '0',
					},
				},
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
