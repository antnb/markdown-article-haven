
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideDown: {
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				scaleIn: {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.3s ease-in-out',
				'slide-up': 'slideUp 0.3s ease-in-out',
				'slide-down': 'slideDown 0.3s ease-in-out',
				'scale-in': 'scaleIn 0.3s ease-in-out'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'var(--tw-prose-body)',
						p: {
							marginTop: '1.5em',
							marginBottom: '1.5em',
							lineHeight: '1.75'
						},
						h1: {
							fontSize: '2.5rem',
							fontWeight: '700',
							marginTop: '2em',
							marginBottom: '1em',
							lineHeight: '1.2'
						},
						h2: {
							fontSize: '1.75rem',
							fontWeight: '600',
							marginTop: '1.8em',
							marginBottom: '0.8em',
							lineHeight: '1.3'
						},
						h3: {
							fontSize: '1.3rem',
							fontWeight: '600',
							marginTop: '1.5em',
							marginBottom: '0.6em',
							lineHeight: '1.4'
						},
						code: {
							color: 'var(--tw-prose-code)',
							fontWeight: '500',
							padding: '0.2em 0.4em',
							backgroundColor: 'hsl(var(--muted))',
							borderRadius: 'var(--radius-sm)'
						},
						pre: {
							backgroundColor: 'hsl(var(--muted))',
							padding: '1.25em 1.5em',
							borderRadius: 'var(--radius)',
							marginTop: '1.5em',
							marginBottom: '1.5em',
							overflow: 'auto'
						},
						a: {
							color: 'hsl(var(--primary))',
							textDecoration: 'underline',
							textUnderlineOffset: '2px',
							fontWeight: '500',
							'&:hover': {
								color: 'hsl(var(--primary)/0.8)'
							}
						},
						blockquote: {
							borderLeftWidth: '4px',
							borderLeftColor: 'hsl(var(--border))',
							paddingLeft: '1em',
							fontStyle: 'italic'
						},
						ul: {
							marginTop: '1.25em',
							marginBottom: '1.25em',
							paddingLeft: '1.625em',
							listStyleType: 'disc'
						},
						ol: {
							marginTop: '1.25em',
							marginBottom: '1.25em',
							paddingLeft: '1.625em',
							listStyleType: 'decimal'
						},
						li: {
							marginTop: '0.5em',
							marginBottom: '0.5em'
						},
						hr: {
							marginTop: '2em',
							marginBottom: '2em'
						},
						table: {
							width: '100%',
							marginTop: '1.5em',
							marginBottom: '1.5em',
							borderCollapse: 'collapse'
						},
						th: {
							color: 'hsl(var(--foreground))',
							fontWeight: '600',
							textAlign: 'left',
							padding: '0.75em',
							borderBottomWidth: '1px',
							borderColor: 'hsl(var(--border))'
						},
						td: {
							padding: '0.75em',
							borderBottomWidth: '1px',
							borderColor: 'hsl(var(--border))'
						},
						img: {
							marginTop: '1.5em',
							marginBottom: '1.5em',
							borderRadius: 'var(--radius)'
						}
					}
				}
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography")
	],
} satisfies Config;
