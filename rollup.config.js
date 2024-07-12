import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { readFile } from 'fs/promises'
import alias from "@rollup/plugin-alias"

const pJson = JSON.parse(
  await readFile(new URL('./package.json', import.meta.url))
)

export default {
  input: 'src/index.tsx',
  output: [
    {
      // deprecate with v2
      file: pJson.main,
      format: 'cjs',
      name: 'react-lib',
    },
    {
      file: pJson.module,
      format: 'esm',
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    external(),
    alias({
      entries: [
        { find: 'react', replacement: 'preact/compat' },
        { find: 'react-dom/test-utils', replacement: 'preact/test-utils' },
        { find: 'react-dom', replacement: 'preact/compat' },
        { find: 'react/jsx-runtime', replacement: 'preact/jsx-runtime' }
      ]
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.rollup.json' }),
    postcss(),
  ],
}
