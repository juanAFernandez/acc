import './polyfill.ts';
import { analyzeComponent } from './analyze.ts';

const args = process.argv.slice(2);
const componentPath = args[0];

if (!componentPath) {
    console.error('Por favor, proporciona la ruta del componente como argumento.');
    process.exit(1);
}

analyzeComponent(componentPath);