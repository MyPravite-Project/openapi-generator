(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenAPIPetstore);
  }
}(this, function(expect, OpenAPIPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenAPIPetstore.AnimalFarm();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AnimalFarm', function() {
    it('should create an instance of AnimalFarm', function() {
      // uncomment below and update the code to test AnimalFarm
      //var instane = new OpenAPIPetstore.AnimalFarm();
      //expect(instance).to.be.a(OpenAPIPetstore.AnimalFarm);
    });

  });

}));
