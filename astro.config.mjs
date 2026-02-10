import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Structural Project Docs', // El nombre que saldrá arriba a la izquierda
      defaultLocale: 'es', // Idioma principal
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      social: {
        github: 'https://github.com/TU_USUARIO/material-structural', // Pone el icono de GitHub
      },
      sidebar: [
        // AQUÍ ESTÁ LA MAGIA:
        // Le decimos que todo lo que haya en la carpeta 'guias' sea un grupo del menú
        {
          label: 'Material Didáctico',
          autogenerate: { directory: 'material' },
        },
      ],
    }),
  ],
});