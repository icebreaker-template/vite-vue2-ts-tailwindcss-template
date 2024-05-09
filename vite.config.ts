import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import Inspect from 'vite-plugin-inspect'
import { createFilter, } from '@rollup/pluginutils';
import { parse } from '@babel/parser'
import traverse from '@babel/traverse'
import MagicString from 'magic-string'
import { parse as parseVue } from '@vue/compiler-sfc'


// import { dirname, resolve } from 'node:path'
// import { fileURLToPath } from 'node:url'

// export const DIR_DIST = typeof __dirname !== 'undefined'
//   ? __dirname
//   : dirname(fileURLToPath(import.meta.url))

// export const DIR_CLIENT = resolve(DIR_DIST, '../dist/client')

function ppp(): Plugin[] {
  const jsIdRE = /\.(js)($|\?)/
  const tsIdRE = /\.(ts)($|\?)/
  const vueIdRE = /\.(vue)($|\?)/
  const filter = createFilter([], [/node_modules/])
  return [
    {
      name: 'xxx-serve',
      enforce: 'pre',
      apply: 'serve',
      transform(code, id, options) {
        if (filter(id)) {
          if (vueIdRE.test(id)) {
            const { script, scriptSetup } = parseVue({
              source: code
            })
            const ms = new MagicString(code)
          } else if (tsIdRE.test(id)) {
            const ast = parse(code, {
              sourceType: 'unambiguous',
              plugins: ['typescript']
            })
            const ms = new MagicString(code)
            traverse(ast, {

            })
            console.log(ast)
            return {
              code
            }
          } else if (jsIdRE.test(id)) {
            const ast = parse(code, {
              sourceType: 'unambiguous',
            })
            const ms = new MagicString(code)
            console.log(ast)
            return {
              code
            }
          }
        }

      },
    },
    {
      name: 'xxx-build',
      enforce: 'pre',
      apply: 'build',
      transform(code, id, options) {
        return {
          code
        }
      },
    }
  ]
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy(), Inspect()],
  resolve: {
    extensions: ['.vue']
  }
})
