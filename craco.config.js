module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const svgRuleIndex = webpackConfig.module.rules.findIndex((rule) =>
        rule.test?.toString().includes("svg")
      );

      if (svgRuleIndex !== -1) {
        const svgRule = webpackConfig.module.rules[svgRuleIndex];
        svgRule.use = [
          {
            loader: "@svgr/webpack",
            options: {
              throwIfNamespace: false,
            },
          },
          "url-loader",
        ];
      }

      return webpackConfig;
    },
  },
};
