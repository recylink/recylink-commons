const path = require('path');

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, 'src', 'index.ts'),
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
}