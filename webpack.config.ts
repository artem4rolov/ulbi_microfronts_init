import * as path from 'path';
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
} from './config/build/types/types';
import * as webpack from 'webpack';
import 'webpack-dev-server';
import { buildWebpack } from './config/build/build-webpack';

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
  platform: BuildPlatform;
}

module.exports = (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    ouput: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  });

  return config;
};
