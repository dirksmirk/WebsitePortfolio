import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-30px) translateX(20px) rotate(2deg)',
          },
          '50%': {
            transform: 'translateY(-10px) translateX(-25px) rotate(-1deg)',
          },
          '75%': {
            transform: 'translateY(20px) translateX(15px) rotate(1deg)',
          }
        },
        'float-reverse': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(25px) translateX(-30px) rotate(-2deg)',
          },
          '50%': {
            transform: 'translateY(-15px) translateX(20px) rotate(1deg)',
          },
          '75%': {
            transform: 'translateY(10px) translateX(-10px) rotate(-1deg)',
          }
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1)',
          },
          '33%': {
            transform: 'translateY(-25px) scale(1.05)',
          },
          '66%': {
            transform: 'translateY(15px) scale(0.95)',
          }
        },
        'drift': {
          '0%': {
            transform: 'translateX(-120px) translateY(0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translateX(80px) translateY(-40px) rotate(90deg)',
          },
          '50%': {
            transform: 'translateX(120px) translateY(30px) rotate(180deg)',
          },
          '75%': {
            transform: 'translateX(-80px) translateY(-20px) rotate(270deg)',
          },
          '100%': {
            transform: 'translateX(-120px) translateY(0px) rotate(360deg)',
          }
        },
        'orbit': {
          '0%': {
            transform: 'rotate(0deg) translateX(60px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(60px) rotate(-360deg)',
          }
        },
        'sway': {
          '0%, 100%': {
            transform: 'translateX(0px) translateY(0px) rotate(0deg)',
          },
          '20%': {
            transform: 'translateX(35px) translateY(-15px) rotate(2deg)',
          },
          '40%': {
            transform: 'translateX(-20px) translateY(-30px) rotate(-1deg)',
          },
          '60%': {
            transform: 'translateX(-35px) translateY(10px) rotate(-2deg)',
          },
          '80%': {
            transform: 'translateX(20px) translateY(25px) rotate(1deg)',
          }
        },
        'random-move': {
          '0%': {
            transform: 'translateX(0px) translateY(0px) rotate(0deg)',
          },
          '14%': {
            transform: 'translateX(50px) translateY(-30px) rotate(45deg)',
          },
          '28%': {
            transform: 'translateX(-40px) translateY(-60px) rotate(90deg)',
          },
          '42%': {
            transform: 'translateX(-80px) translateY(20px) rotate(135deg)',
          },
          '57%': {
            transform: 'translateX(30px) translateY(70px) rotate(180deg)',
          },
          '71%': {
            transform: 'translateX(90px) translateY(40px) rotate(225deg)',
          },
          '85%': {
            transform: 'translateX(-20px) translateY(-20px) rotate(270deg)',
          },
          '100%': {
            transform: 'translateX(0px) translateY(0px) rotate(360deg)',
          }
        },
        'spiral': {
          '0%': {
            transform: 'rotate(0deg) translateX(0px) translateY(0px)',
          },
          '25%': {
            transform: 'rotate(90deg) translateX(40px) translateY(-40px)',
          },
          '50%': {
            transform: 'rotate(180deg) translateX(80px) translateY(0px)',
          },
          '75%': {
            transform: 'rotate(270deg) translateX(40px) translateY(40px)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(0px) translateY(0px)',
          }
        },
        'zigzag': {
          '0%': {
            transform: 'translateX(0px) translateY(0px)',
          },
          '12.5%': {
            transform: 'translateX(40px) translateY(-30px)',
          },
          '25%': {
            transform: 'translateX(-30px) translateY(-60px)',
          },
          '37.5%': {
            transform: 'translateX(60px) translateY(-40px)',
          },
          '50%': {
            transform: 'translateX(-50px) translateY(20px)',
          },
          '62.5%': {
            transform: 'translateX(30px) translateY(60px)',
          },
          '75%': {
            transform: 'translateX(-40px) translateY(40px)',
          },
          '87.5%': {
            transform: 'translateX(20px) translateY(-10px)',
          },
          '100%': {
            transform: 'translateX(0px) translateY(0px)',
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'bounce': 'bounce 1s infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 12s ease-in-out infinite',
        'drift': 'drift 15s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'sway': 'sway 14s ease-in-out infinite',
        'random-move': 'random-move 18s ease-in-out infinite',
        'spiral': 'spiral 16s linear infinite',
        'zigzag': 'zigzag 22s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
