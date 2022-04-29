console.log = () => {};
var webpackConfig = require('../webpack.config');
const fs = require('fs');
const chai = require('chai');
const assert = chai.assert;
describe('', () => {
  it('', () => {
    assert.isOk(
      fs.existsSync('./webpack.config.js'),
      'Did you create a **webpack.config.js**?'
    );
    assert.isDefined(webpackConfig.mode, 'Did you define a `mode` attribute?');
    assert.equal(
      webpackConfig.mode,
      'development',
      "Did you set the `mode` to `'development'`?"
    );
    assert.isDefined(
      webpackConfig.module,
      'Did you define a `module` attribute?'
    );
    assert.isObject(
      webpackConfig.module,
      'Did you define `module` as an object?'
    );
    assert.isDefined(
      webpackConfig.module.rules,
      'Did you define a `rules` attribute inside of `module`?'
    );
    assert.isArray(
      webpackConfig.module.rules,
      'Did you define `rules` as an array?'
    );
    const requiredRules = ['Text', 'CSS', 'PNG', 'Font'];
    const foundRules = [];
    for (let i = 0; i < webpackConfig.module.rules.length; i++) {
      let rule = webpackConfig.module.rules[i];
      assert.property(rule, 'test', 'Did you define a `test` for each rule?');
      if (String(rule.test) === String(/\.txt$/i)) {
        assert.property(
          rule,
          'type',
          'Did you define the `type` for text files?'
        );
        assert.propertyVal(
          rule,
          'type',
          'asset/source',
          'Did you define the correct `type` for text files?'
        );
        foundRules.push('Text');
      } else if (String(rule.test) === String(/\.css$/i)) {
        assert.property(
          rule,
          'use',
          'Did you define the loader(s) the CSS files should use?'
        );
        if (Object.prototype.toString.call(rule.use) !== '[object Array]') {
          assert.property(
            rule.use,
            'loader',
            'Did you define a loader for the CSS rule?'
          );
          assert.deepPropertyVal(
            rule.use,
            'loader',
            ['style-loader', 'css-loader'],
            'Did you set the loaders of CSS to the proper values?'
          );
        } else {
          assert.deepPropertyVal(
            rule,
            'use',
            ['style-loader', 'css-loader'],
            'Did you set the loaders of CSS to the proper values?'
          );
        }
        foundRules.push('CSS');
      } else if (String(rule.test) === String(/\.png$/i)) {
        assert.property(
          rule,
          'type',
          'Did you define the `type` for pictures?'
        );
        assert.propertyVal(
          rule,
          'type',
          'asset/resource',
          'Did you define the correct `type` for pictures?'
        );
        foundRules.push('PNG');
      } else if (String(rule.test) === String(/\.ttf$/i)) {
        assert.property(
          rule,
          'type',
          'Did you define the `type` for font files?'
        );
        assert.propertyVal(
          rule,
          'type',
          'asset/resource',
          'Did you define the correct `type` for text files?'
        );
        foundRules.push('Font');
      } else {
        assert.isOk(
          String(rule.test) === String(/\.txt$/i),
          `One of the tests '${rule.test}' for your rules is not recognized, please ensure your test exactly matches the hint`
        );
      }
    }
    assert.sameMembers(
      foundRules,
      requiredRules,
      'Did you specify all of the required `rules`?'
    );
  });
});
