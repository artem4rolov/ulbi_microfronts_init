import { BuildOptions } from 'typescript';
import { removeDataTestIdBabelPlugin } from './remove-data-test-id-babel-plugin';

export function buildBabelLoader(isDev: boolean) {
  const plugins = [];

  if (isDev) {
  }

  // если это продовая сборка
  if (!isDev) {
    plugins.push([removeDataTestIdBabelPlugin, { props: ['data-test-id'] }]);
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      // эти настройки могут быть в файле babel.config.json
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: isDev ? 'automatic' : 'classic' }],
        ],
        plugins: plugins.length ? plugins : [],
      },
    },
  };
}
