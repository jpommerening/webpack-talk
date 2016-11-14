const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
   entry: {
      main: './index.js'
   },

   output: {
      path: path.resolve( './dist/' ),
      publicPath: '/dist/',
      filename: '[name].js'
   },

   plugins: [
      new webpack.SourceMapDevToolPlugin( {
         filename: '[name].js.map'
      } )
   ],

   resolve: {
      root: [ path.resolve( './node_modules' ) ],
      extensions: [ '', '.js' ]
   },

   module: {
      loaders: [
         {  // load javascript with babel
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         },
         {  // load yaml
            test: /\.yml$/,
            loader: 'json-loader!yaml-loader'
         },
         {  // load images and fonts with the file-loader
            // (out-of-bundle in dist/assets/)
            test: /\.(gif|jpe?g|png|ttf|woff2?|svg|eot|otf)(\?.*)?$/,
            loader: 'file-loader'
         },
         {  // ... after optimizing graphics with the image-loader
            test: /\.(gif|jpe?g|png|svg)$/,
            loader: 'img-loader?progressive=true'
         },
         {  // resolve CSS url()s and dependencies with the css loader
            test: /\.css$/,
            loader: 'style-loader!css-loader'
         },
         {  // load scss files by precompiling with the sass-loader
            test: /\.s[ac]ss$/,
            loader: 'style-loader!css-loader!sass-loader'
         },
         {  // markdown to HTML
            test: /\.md$/,
            loader: 'html-loader!markdown-it'
         }
      ]
   },
   fileLoader: {
      name: 'assets/[name]-[sha1:hash:hex:6].[ext]'
   },
   sassLoader: {
      includePaths: []
   },
   'markdown-it': {
      html: true,
      breaks: true,
      typographer: true,
      use: [
         [ require( 'markdown-it-attrs' ) ],
         [ require( 'markdown-it-front-matter' ), function(fm) {} ]
      ]
   }
};
