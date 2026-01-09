"use strict";
const win = window;
const ANO_INICIO_CARREIRA = 2021;
win.tailwind = win.tailwind || { config: {} };
win.tailwind.config = {
    theme: {
        extend: {
            colors: {
                'brand-primary': '#1B5B64',
                'brand-dark': '#275a63',
            },
            fontFamily: {
                sans: ['Arial', 'sans-serif'],
            },
            animation: {
                'subir-suave': 'subirSuave 0.9s ease-out forwards',
            },
            keyframes: {
                subirSuave: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
};
// --- LÓGICA DINÂMICA (EXPERIÊNCIA) ---
document.addEventListener('DOMContentLoaded', () => {
    const contadorElemento = document.getElementById('contador-experiencia');
    if (contadorElemento) {
        const anoAtual = new Date().getFullYear();
        let anosExperiencia = anoAtual - ANO_INICIO_CARREIRA;
        if (anosExperiencia < 1)
            anosExperiencia = 1;
        contadorElemento.innerText = `+${anosExperiencia} anos projetando sonhos`;
    }
});
console.log("Configuração carregada. Ano atual: " + new Date().getFullYear());
