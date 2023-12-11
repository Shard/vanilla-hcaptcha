import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import typescript from '@rollup/plugin-typescript';

export default {
    input: './src/index.ts',
    output: [{
        file: './dist/index.min.js',
        format: 'iife',
        name: 'bundle',
        sourcemap: true
    },{
        file: './dist/index.esm.js',
        format: 'esm',
        name: 'bundle',
        exports: 'named',
        sourcemap: true
    }],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        terser(),
        filesize()
    ]
};
