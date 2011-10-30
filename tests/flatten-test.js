(function (undefined) {
  var expanded, flattened, altFlattened;

  module('flatten()');

  expanded = {
    simple: 'okay',
    complex: {
      a: {
        b: {
          d: 'e'
        },
        c: {
          f: {
            g: 'h',
            i: 'j'
          }
        }
      }
    }
  };

  flattened = {
    'simple': 'okay',
    'complex.a.b.d':   'e',
    'complex.a.c.f.g': 'h',
    'complex.a.c.f.i': 'j'
  };

  altFlattened = {
    'simple': 'okay',
    'complex:a:b:d':   'e',
    'complex:a:c:f:g': 'h',
    'complex:a:c:f:i': 'j'
  }

  test('It should flatten an object into a flat structure', function () {
    deepEqual(flatten(expanded), flattened);
  });

  test('it should handle a custom delimiter', function () {
    deepEqual(flatten(expanded, ':'), altFlattened);
  });

  test('it should handle null properties as non objects', function () {
    deepEqual(flatten({param: null}), {param: null});
  });

  module('expand()');

  test('It should expand a flattened object into a deep structure', function () {
    deepEqual(expand(flattened), expanded);
  });

  test('it should handle a custom delimiter', function () {
    deepEqual(expand(altFlattened, ':'), expanded);
  });

  module('flatten.noConflict()');

  test('it should return the flatten function and restore state', function () {
    var _flatten = flatten;
    equal(flatten.noConflict(), _flatten);
    equal(this.flatten, undefined);
  });

  module('expand.noConflict()');

  test('it should return the expand function and restore state', function () {
    var _expand = expand;
    equal(expand.noConflict(), _expand);
    equal(this.expand, undefined);
  });
}());
