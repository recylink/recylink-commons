// import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'
// import typescript from '@rollup/plugin-typescript'
// import postcss from 'rollup-plugin-postcss'
// import dts from 'rollup-plugin-dts'

// import terser from '@rollup/plugin-terser';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external'

// const packageJson = require('./package.json')

// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: packageJson.main,
//         format: 'cjs',
//         sourcemap: true
//       },
//       {
//         file: packageJson.module,
//         format: 'esm',
//         sourcemap: true
//       }
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve(),
//       commonjs(),
//       typescript({
//         tsconfig: './tsconfig.json',
//         exclude: [/\.test.((js|jsx|ts|tsx))$/, /\.stories.((js|jsx|ts|tsx|mdx))$/]
//       }),
//       postcss(),
//       terser()
//     ],
//     context: 'window'
//   },
//   {
//     input: 'dist/esm/index.d.ts',
//     output: [{file: 'dist/index.d.ts', format: 'esm'}],
//     plugins: [dts()],
//     external: [/\.css$/],
//     context: 'window'
//   }
// ]


const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const postcss = require('rollup-plugin-postcss')
const dts = require('rollup-plugin-dts').default
const terser = require('@rollup/plugin-terser')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const packageJson = require('./package.json')

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        inlineDynamicImports: true,
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        "compilerOptions": {
          "target": "ES2015",
          "esModuleInterop": true,
          "forceConsistentCasingInFileNames": true,
          "strict": true,
          "strictNullChecks": false,
          "skipLibCheck": true,
      
          "jsx": "react",
          "module": "ESNext",
          "declaration": true,
          "declarationDir": "dist/cjs",
          "sourceMap": true,
          "outDir": "dist/cjs",
          "moduleResolution": "node",
          "allowSyntheticDefaultImports": true,
          "emitDeclarationOnly": true,
          "allowJs": true,
          "noImplicitAny": false
        },
        // declaration: true,
        // declarationDir: 'dist/cjs',
        exclude: [/\.test.((js|jsx|ts|tsx))$/, /\.stories.((js|jsx|ts|tsx|mdx))$/]
      }),
      postcss(),
      nodeResolve({
        extensions: ['.css']
      }),
      terser()
    ],
    context: 'window'
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: packageJson.module,
        format: 'esm',
        sourcemap: true,
        inlineDynamicImports: true,
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        "compilerOptions": {
          "target": "ES2015",
          "esModuleInterop": true,
          "forceConsistentCasingInFileNames": true,
          "strict": true,
          "strictNullChecks": false,
          "skipLibCheck": true,
      
          "jsx": "react",
          "module": "ESNext",
          "declaration": true,
          "declarationDir": "dist/esm",
          "sourceMap": true,
          "outDir": "dist/esm",
          "moduleResolution": "node",
          "allowSyntheticDefaultImports": true,
          "emitDeclarationOnly": true,
          "allowJs": true,
          "noImplicitAny": false
        },
        exclude: [/\.test.((js|jsx|ts|tsx))$/, /\.stories.((js|jsx|ts|tsx|mdx))$/]
      }),
      postcss(),
      nodeResolve({
        extensions: ['.css']
      }),
      terser()
    ],
    context: 'window'
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{file: 'dist/index.d.ts', format: 'esm'}],
    plugins: [dts()],
    external: [/\.css$/],
    context: 'window'
  }
]
