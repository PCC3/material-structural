import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://structuralproject.es', // Tu dominio real
  base: '/academia', // <--- ¡ESTO ES LO IMPORTANTE!
  integrations: [
    starlight({
      title: 'Academia Structural',
      // ... el resto de tu configuración ...
    }),
  ],
});