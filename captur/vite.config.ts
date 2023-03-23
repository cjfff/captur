import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginImp from "vite-plugin-imp";
import path, { resolve } from "path";

const libConfig = {
  lib: {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    name: "Captur",
    fileName: (format) => `Captur.${format}.js`,
    formats: ["es", "umd"]
  },
};

const rollupOptions = {
  emptyOutDir: false,
  cssCodeSplit:  false,
  rollupOptions: {
    input: resolve(__dirname, "./src/entry.tsx"),
    output: {
      format: "iife",
      dir: resolve(__dirname, "./dist"),
      entryFileNames: "Captur.js",
      assetFileNames: "style.css"
    }
  }
};

const build = process.env?.library ? libConfig : rollupOptions;

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
        'process.env.NODE_ENV': process.env.prod === "production" ?  '"production"' : '"development"'
    },
    plugins: [
      vitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name) => `antd/es/${name}/style`
          }
        ]
      }),
      react({
        babel: {
          plugins: ["@babel/plugin-proposal-optional-chaining"]
        }
      })
    ],
    optimizeDeps: {
      include: ["react/jsx-runtime"]
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        { find: /^~/, replacement: "" }
      ]
    },
    build,
    server: {
      proxy: {
        "/apis": {
          target: "https://localhost:3001",
          changeOrigin: true
        }
      }
    }
  };
});
