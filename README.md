flatten()
=========

Flattens a deeply nested object into a object containing only keys and
values. Previously nested objects have the hierarchy represented as
a keypath in their property key.

flatten(object [, delimiter])
-----------------------------

### Parameters

    object    - A deeply nested Object to flatten.
    delimiter - A delimiter to use in the keypaths (default: ".")

### Returns

Returns the flattened object.

### Examples

```javascript
var data = {
  track: {
    name: 'Michelle',
    url: 'http://www.last.fm/music/The+Beatles/Rubber+Soul/Michelle',
    album: {
      name: 'Rubber Soul'
      url: 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
      tracks: 12
    },
    artist: {
      name: 'The Beatles',
      url: 'http://www.last.fm/music/The+Beatles'
    }
  }
};

flatten(data);
// => returns {
//   'track.name': 'Michelle',
//   'track.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul/Michelle',
//   'track.album.name': 'Rubber Soul'
//   'track.album.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
//   'track.album.tracks': 12
//   'track.artist.name': 'The Beatles',
//   'track.artist.url': 'http://www.last.fm/music/The+Beatles'
// }
```

To use with node.js:

```javascript
var flatten = require('flatten').flatten;
flatten(data);
```

expand()
========

Expands a previously flattened object restoring keys with keypaths
into full objects. Also accepts an optional `delimiter` to manually
specify a keypath.

expand(object [, delimiter])
----------------------------

### Parameters

    object    - A flattened Object to restore.
    delimiter - A delimiter to use in the keypaths (default: ".")

### Returns

Returns the newly expanded object.

### Examples

```javascript
var data = {
  'track.name': 'Michelle',
  'track.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul/Michelle',
  'track.album.name': 'Rubber Soul'
  'track.album.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
  'track.album.tracks': 12
  'track.artist.name': 'The Beatles',
  'track.artist.url': 'http://www.last.fm/music/The+Beatles'
};

expand(data);
// => returns data object as seen in flatten example above.
```

To use with node.js:

```javascript
var expand = require('flatten').expand;
expand(data);
```

.noConflict()
-------------

Both functions have a `.noConflict()` method that allows you to reassign
them to another variable in the same way as `jQuery.noConflict()`.

To assign the functions to another library (eg. Underscore):

```javascript
// Extend underscore.js
_.mixin({
  flattenObject: flatten.noConflict(),
  expandObject:  expand.noConflict()
});

// Extend jQuery
$.extend({
  flatten: flatten.noConflict(),
  expand:  expand.noConflict()
});
```

### Licence

Released under the MIT license
