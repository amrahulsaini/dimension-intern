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
    			},
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
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px) rotate(0deg)'
    				},
    				'50%': {
    					transform: 'translateY(-20px) rotate(2deg)'
    				}
    			},
    			'float-slow': {
    				'0%, 100%': {
    					transform: 'translateY(0px) rotate(0deg)'
    				},
    				'50%': {
    					transform: 'translateY(-10px) rotate(-1deg)'
    				}
    			},
    			'float-gentle': {
    				'0%, 100%': {
    					transform: 'translateY(0px) scale(1)'
    				},
    				'50%': {
    					transform: 'translateY(-8px) scale(1.02)'
    				}
    			},
    			'pulse-glow': {
    				'0%, 100%': {
    					opacity: '0.8',
    					transform: 'scale(1)',
    					boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
    				},
    				'50%': {
    					opacity: '1',
    					transform: 'scale(1.05)',
    					boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)'
    				}
    			},
    			'gradient-shift': {
    				'0%, 100%': {
    					backgroundPosition: '0% 50%'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%'
    				}
    			},
    			'gradient-border': {
    				'0%, 100%': {
    					backgroundPosition: '0% 50%'
    				},
    				'50%': {
    					backgroundPosition: '100% 50%'
    				}
    			},
    			'neon-glow': {
    				'0%': {
    					boxShadow: '0 0 5px rgba(139, 92, 246, 0.5), inset 0 0 5px rgba(139, 92, 246, 0.2)'
    				},
    				'100%': {
    					boxShadow: '0 0 20px rgba(139, 92, 246, 0.8), inset 0 0 20px rgba(139, 92, 246, 0.4)'
    				}
    			},
    			'fade-in-up': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in-down': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(-30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'fade-in-left': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'fade-in-right': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(30px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			'scale-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'scale(0.9)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'scale(1)'
    				}
    			},
    			'scale-bounce': {
    				'0%': {
    					transform: 'scale(1)'
    				},
    				'50%': {
    					transform: 'scale(1.1)'
    				},
    				'100%': {
    					transform: 'scale(1)'
    				}
    			},
    			'spin-slow': {
    				from: {
    					transform: 'rotate(0deg)'
    				},
    				to: {
    					transform: 'rotate(360deg)'
    				}
    			},
    			'slide-in-right': {
    				'0%': {
    					transform: 'translateX(100%)'
    				},
    				'100%': {
    					transform: 'translateX(0)'
    				}
    			},
    			'slide-in-left': {
    				'0%': {
    					transform: 'translateX(-100%)'
    				},
    				'100%': {
    					transform: 'translateX(0)'
    				}
    			},
    			'slide-up': {
    				'0%': {
    					transform: 'translateY(100%)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			},
    			'bounce-horizontal': {
    				'0%, 100%': {
    					transform: 'translateX(0)'
    				},
    				'50%': {
    					transform: 'translateX(10px)'
    				}
    			},
    			wiggle: {
    				'0%, 100%': {
    					transform: 'rotate(-3deg)'
    				},
    				'50%': {
    					transform: 'rotate(3deg)'
    				}
    			},
    			heartbeat: {
    				'0%, 100%': {
    					transform: 'scale(1)'
    				},
    				'50%': {
    					transform: 'scale(1.1)'
    				}
    			},
    			typewriter: {
    				'0%': {
    					width: '0ch'
    				},
    				'100%': {
    					width: '20ch'
    				}
    			},
    			blink: {
    				'0%, 50%': {
    					opacity: '1'
    				},
    				'51%, 100%': {
    					opacity: '0'
    				}
    			},
    			'blink-caret': {
    				'from, to': {
    					borderColor: 'transparent'
    				},
    				'50%': {
    					borderColor: 'rgba(139, 92, 246, 0.75)'
    				}
    			},
    			'particle-float': {
    				'0%': {
    					transform: 'translateY(100vh) rotate(0deg)',
    					opacity: '0'
    				},
    				'10%': {
    					opacity: '1'
    				},
    				'90%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'translateY(-10vh) rotate(360deg)',
    					opacity: '0'
    				}
    			},
    			glow: {
    				'0%, 100%': {
    					boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)'
    				},
    				'50%': {
    					boxShadow: '0 0 20px rgba(139, 92, 246, 1), 0 0 30px rgba(139, 92, 246, 0.8)'
    				}
    			},
    			morph: {
    				'0%, 100%': {
    					borderRadius: '50%'
    				},
    				'25%': {
    					borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
    				},
    				'50%': {
    					borderRadius: '70% 30% 30% 70% / 30% 70% 70% 30%'
    				},
    				'75%': {
    					borderRadius: '30% 70% 70% 30% / 70% 30% 30% 70%'
    				}
    			},
    			rainbow: {
    				'0%': {
    					filter: 'hue-rotate(0deg)'
    				},
    				'100%': {
    					filter: 'hue-rotate(360deg)'
    				}
    			},
    			shimmer: {
    				'0%': {
    					transform: 'translateX(-100%)'
    				},
    				'100%': {
    					transform: 'translateX(100%)'
    				}
    			},
    			elastic: {
    				'0%': {
    					transform: 'scale(0)'
    				},
    				'50%': {
    					transform: 'scale(1.2)'
    				},
    				'100%': {
    					transform: 'scale(1)'
    				}
    			},
    			rubber: {
    				'0%': {
    					transform: 'scale3d(1, 1, 1)'
    				},
    				'30%': {
    					transform: 'scale3d(1.25, 0.75, 1)'
    				},
    				'40%': {
    					transform: 'scale3d(0.75, 1.25, 1)'
    				},
    				'50%': {
    					transform: 'scale3d(1.15, 0.85, 1)'
    				},
    				'65%': {
    					transform: 'scale3d(0.95, 1.05, 1)'
    				},
    				'75%': {
    					transform: 'scale3d(1.05, 0.95, 1)'
    				},
    				'100%': {
    					transform: 'scale3d(1, 1, 1)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			float: 'float 6s ease-in-out infinite',
    			'float-slow': 'float-slow 8s ease-in-out infinite',
    			'float-gentle': 'float-gentle 4s ease-in-out infinite',
    			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
    			'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
    			'gradient-border': 'gradient-border 8s ease infinite',
    			'neon-glow': 'neon-glow 3s ease-in-out infinite alternate',
    			'fade-in-up': 'fade-in-up 0.8s ease-out',
    			'fade-in-down': 'fade-in-down 0.8s ease-out',
    			'fade-in-left': 'fade-in-left 0.8s ease-out',
    			'fade-in-right': 'fade-in-right 0.8s ease-out',
    			'scale-in': 'scale-in 0.6s ease-out',
    			'scale-bounce': 'scale-bounce 0.5s ease-out',
    			'spin-slow': 'spin-slow 3s linear infinite',
    			'slide-in-right': 'slide-in-right 0.5s ease-out',
    			'slide-in-left': 'slide-in-left 0.5s ease-out',
    			'slide-up': 'slide-up 0.5s ease-out',
    			'bounce-horizontal': 'bounce-horizontal 2s ease-in-out infinite',
    			wiggle: 'wiggle 1s ease-in-out infinite',
    			heartbeat: 'heartbeat 1.5s ease-in-out infinite',
    			typewriter: 'typewriter 3s steps(20) infinite',
    			blink: 'blink 1s step-end infinite',
    			'blink-caret': 'blink-caret 1s step-end infinite',
    			'particle-float': 'particle-float 8s ease-out infinite',
    			glow: 'glow 2s ease-in-out infinite',
    			morph: 'morph 8s ease-in-out infinite',
    			rainbow: 'rainbow 3s linear infinite',
    			shimmer: 'shimmer 2s ease-in-out infinite',
    			elastic: 'elastic 0.8s ease-out',
    			rubber: 'rubber 1s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;