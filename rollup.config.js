import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        dir: 'dist/cjs',
        preserveModules: true,
        exports: 'auto'
      },
      {
        format: 'esm',
        dir: 'dist/esm',
        preserveModules: true,
      }
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ clean: true }),
      terser({
        output: { comments: false },
        compress: { drop_console: true }
      })
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];