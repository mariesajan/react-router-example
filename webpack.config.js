module.exports = {
  context: __dirname,
  entry: './jsx/client.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react'],
          plugins: ['react-html-attrs']
        }
    }]
  },
  output: {
    path:  __dirname,
    filename: 'client.min.js'
  }
}
