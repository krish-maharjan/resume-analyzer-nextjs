module.exports = {
    // ...
    module: {
      rules: [
        // ...
        {
          test: /\.map$/,
          loader: "source-map-loader"
        }
      ]
    }
  };
  