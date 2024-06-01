import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    // если раздавать статику через nginx, то надо делать проксирование на index.html
    historyApiFallback: true, // работает только для dev-server
    hot: true, // изменения без перезагрузки страницы (для реакта нужен еще один доп. плагин @pmmmwh/react-refresh-webpack-plugin + react-refresh-typescript)
  };
}
