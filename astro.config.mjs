import { defineConfig } from 'astro/config';

export default defineConfig({
  root: './web',
  output: 'static',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always'
});
