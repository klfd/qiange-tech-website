import { defineConfig } from 'vite'

export default defineConfig({
  // 配置静态资源处理
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  
  // 构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 确保静态资源正确处理
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  
  // 开发服务器配置
  server: {
    port: 3000,
    open: true
  },
  
  // 预览服务器配置
  preview: {
    port: 4173
  }
})