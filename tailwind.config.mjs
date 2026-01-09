/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Identidade Visual Asa Branca Informática
        'ice-gray': '#F5F7FA',        // Fundo cinza-gelo
        'vibrant-yellow': '#FFD700',  // Amarelo vibrante para CTAs e destaques
        'deep-black': '#0A0A0A',      // Preto profundo para títulos
        'soft-gray': '#6B7280',       // Cinza suave para textos secundários
        'accent-yellow': '#FFC107',   // Amarelo de acento alternativo
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {
        asabranca: {
          'primary': '#FFD700',        // vibrant-yellow
          'secondary': '#FFC107',      // accent-yellow
          'accent': '#FFD700',
          'neutral': '#0A0A0A',        // deep-black
          'base-100': '#F5F7FA',       // ice-gray
          'base-200': '#E5E7EB',
          'base-300': '#D1D5DB',
          'info': '#3B82F6',
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#EF4444',
        },
      },
    ],
    darkTheme: false, // Desabilita tema escuro para manter consistência
    base: true,
    styled: true,
    utils: true,
  },
};

