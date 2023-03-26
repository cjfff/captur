import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react({
        babel: {
          plugins: [
            '@babel/plugin-proposal-optional-chaining',
            [
              'import',
              {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: (name) => {
                  return `${name}/style`
                },
              },
              'antd',
            ],
          ],
        },
      }),
      /* 类型检查 */
      checker({ typescript: true }),
      /* eslint检查 */
      checker({
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: /^~/, replacement: '' },
      ],
    },
    build: {
      sourcemap: true,
      outDir: 'build',
      assetsDir: 'static',
    },
    server: {
      hmr: {
        overlay: false,
      },
      proxy: {
        '/captur': {
          target: env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  }
})
