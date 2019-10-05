const path = require('path');
const glob = require('glob');
const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');

module.exports = withSass(withOptimizedImages({
  cssModules: false
}));

// module.exports = withSass ({
  

//   webpack: (config) => {
  
//     config.module.rules.push({
//       test: /\.(png|jpg|gif)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     });

//     return config;
//   },

//   cssModules: false,

// });

// module.exports = {
//   webpack: config => {
//   config.module.rules.push(
//     {
//       test: /\.(css|scss)/,
//       loader: 'emit-file-loader',
//       options: {
//         name: 'dist/[path][name].[ext]',
//       },
//     },
//     {
//       test: /\.css$/,
//       use: ['babel-loader', 'raw-loader', 'postcss-loader'],
//     },
//     {
//       test: /\.s(a|c)ss$/,
//       use: [
//         'babel-loader',
//         'raw-loader',
//         'postcss-loader',
//         {
//           loader: 'sass-loader',
//           options: {
//             includePaths: ['styles', 'node_modules']
//               .map(d => path.join(__dirname, d))
//               .map(g => glob.sync(g))
//               .reduce((a, c) => a.concat(c), []),
//           },
//         },
//       ],
//     },
//   );

//   return config;
// },

// stats: "verbose",

// };
