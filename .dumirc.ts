import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  alias: {
    '@hankliu/rc-footer': path.resolve('src'),
    '@hankliu/rc-footer/es': path.resolve('src'),
  },
  favicons: ['https://avatars0.githubusercontent.com/u/9441414?s=200&v=4'],
  themeConfig: {
    name: 'Image',
    logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  },
});
