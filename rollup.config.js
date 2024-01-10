import commonjs from '@rollup/plugin-commonjs'; // 处理cjs模块依赖
import resolve from '@rollup/plugin-node-resolve'; // 处理外部依赖

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
  },
  plugins: [commonjs(), resolve()]
}