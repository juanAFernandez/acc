import path from "path";
import fs from "fs";
import * as cheerio from 'cheerio';
import sass from "sass";

export async function analyzeComponent(componentDir: string) {
    const htmlPath = path.join(componentDir, 'component.html');
    const scssPath = path.join(componentDir, 'component.scss');

    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const scssContent = fs.readFileSync(scssPath, 'utf8');

    // Extraer clases del HTML
    const $ = cheerio.load(htmlContent);
    const classesInHtml: Set<string> = new Set();
    $('[class]').each((_, el) => {
        const classAttr = $(el).attr('class');
        classAttr?.split(' ').forEach(c => classesInHtml.add(c));
    });

    // Compilar SCSS a CSS
    const result = sass.renderSync({ file: scssPath });
    const cssContent = result.css.toString();

    // Extraer clases de CSS
    const classesInCss: Set<string> = new Set();
    // Aquí usarías postcss para parsear y extraer clases
    // (dejo como ejercicio completar esa parte)

    // Comparar
    const missingClasses = Array.from(classesInHtml).filter(c => !classesInCss.has(c));
    console.log('Clases usadas en HTML sin definir:', missingClasses);
}
