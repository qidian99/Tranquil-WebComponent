import path from 'path';
import { lstatSync, readdirSync } from 'fs';

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => path.join(source, name)).filter(isDirectory);

export default config => {
  // console.log(config);
  // getDirectories('src/').map((dir) => {
  //   config.resolve.alias[dir.replace('src/', '')] = path.resolve(__dirname, dir);
  // });
  config.node.process = true;
  config.node.Buffer = true;
  const aliases = config.resolve.alias;
  aliases.react = "preact-compat";
  aliases["react-dom"] = "preact-compat";
  // aliases["core-js"] = path.resolve(__dirname, 'core-js');

  // config.resolve.alias.inherits$ = path.resolve(__dirname, 'node_modules/inherits/inherits_browser');
  // Solve the process not defined issue in react-pdf
  // config.node.process = 'mock';
  // config.node.Buffer = true;
  // Solve util.inherits is not a function
  // https://github.com/webpack/webpack/issues/1019
  // config.resolve.mainFields = ['browser', 'module', 'main'];
  // aliases.src = path.resolve(__dirname, 'src');
  // aliases.util = path.resolve(__dirname, 'src', 'wcs', 'util');
  // aliases.wcs = path.resolve(__dirname, 'src', 'wcs');
  // aliases.components = path.resolve(__dirname, 'src', 'wcs', 'components');
  return config;
};
