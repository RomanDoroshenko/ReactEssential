const path = require('path');
module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    port: 3000
  }
};
