// polyfill.ts
import { ReadableStream } from 'web-streams-polyfill';

(globalThis as any).ReadableStream = ReadableStream;

// Para `File`, puedes crear un mock vacío
(globalThis as any).File = class {
    constructor() { /* mock vacio */ }
};
