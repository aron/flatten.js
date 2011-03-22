jQuery.flatten()
================

Flattens a deeply nested object into a object containing only keys and
values. Previously nested objects have the hieracy represented as
a keypath in their property key.

_NOTE: This plugin is not dependant on jQuery. If included on a page where
jQuery is not present it will simply add itself to the global object. In
the case of a web browser the `window` object._

jQuery.flatten(object [, delimiter])
------------------------------------

### Parameters

    object    - A deeply nested Object to flatten.
    delimiter - A delimiter to use in the keypaths (default: ".")

### Returns

Returns the flattened object.

### Examples

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

    jQuery.flatten(data);
    //=> Returns {
    //     track: {
    //       'track.name': 'Michelle',
    //       'track.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul/Michelle',
    //       'track.album.name': 'Rubber Soul'
    //       'track.album.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
    //       'track.album.tracks': 12
    //       'track.artist.name': 'The Beatles',
    //       'track.artist.url': 'http://www.last.fm/music/The+Beatles'
    //     }
    //   }

Without jQuery loaded on the page.

    keypath(data);

jQuery.expand()
================

Expands a previously flattened object restoring keys with keypaths
into full objects. Also accepts an optional `delimiter` to manually
specify a keypath.

jQuery.expand(object [, delimiter])
------------------------------------

### Parameters

    object    - A flattened Object to restore.
    delimiter - A delimiter to use in the keypaths (default: ".")

### Returns

Returns the newly expanded object.

### Examples

    var data = {
      track: {
        'track.name': 'Michelle',
        'track.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul/Michelle',
        'track.album.name': 'Rubber Soul'
        'track.album.url': 'http://www.last.fm/music/The+Beatles/Rubber+Soul'
        'track.album.tracks': 12
        'track.artist.name': 'The Beatles',
        'track.artist.url': 'http://www.last.fm/music/The+Beatles'
      }
    }

    jQuery.expand(data);
    //=> Returns data object as seen in flatten example above.

Without jQuery loaded on the page.

    expand(data);

.noConflict()
-------------

Both functions have a `.noConflict()` method that allows you to reassign
them to another variable in the same way as `jQuery.noConflict()`.

To assign the functions to another library (eg. Underscore):

    _.mixin({
      flattenObject: flatten.noConflict(),
      expandObject:  expand.noConflict()
    });

### Licence

Released under the MIT license

