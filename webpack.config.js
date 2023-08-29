const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'development';

  return [
    {
      name: 'client',
      entry: './client/src/index.ts', // Client TypeScript entry file
      output: {
        filename: 'client.bundle.js',
        path: path.resolve(__dirname, 'dist/client'),
      },
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          // Add other rules for client-side assets (e.g., CSS, images) here
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './client/src/index.html',
          filename: 'index.html',
        }),
        // Add other plugins for client-side here
      ],
    },
    {
      name: 'server',
      target: 'node',
      entry: './server/src/index.ts', // Server TypeScript entry file
      output: {
        filename: 'server.bundle.js',
        path: path.resolve(__dirname, 'dist/server'),
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          // Add other rules for server-side assets here
        ],
      },
      // Add other server-specific plugins and configuration here
    },
  ];
};
