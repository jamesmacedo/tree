import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
    input: './src/main.js',
    output: {
        file: './build/tree-node.min.js',
        format: 'es',
        name: 'tree-node',
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      terser()
    ]
}

