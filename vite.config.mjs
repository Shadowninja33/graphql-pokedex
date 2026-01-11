import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    classicEmberSupport(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
  server: {
    proxy: {
      // '/api': 'localhost:8888',
      '/api': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true,
        secure: false,
        autoRewrite: true,
        rewrite: (path) => {
          console.log('In rewrite');
          return path.replace(/^\/api/, '');
        },
      },
    },
  },
});
