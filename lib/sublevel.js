var thru = require('through2').obj;
var sep = '\xff';

module.exports = function(db) {

  return sublevel()

  function sublevel(prefix){

    var useprefix = ''
    if(prefix){
      useprefix = prefix + sep
    }
    
    return {
      sublevel: function(sub) {
        return sublevel(prefix ? useprefix + sub : sub);
      },

      put: function(key, value, opts, cb) {
        if (typeof opts === 'function') {
          cb = opts;
          opts = undefined;
        }
        return db.put(useprefix + key, value, opts, cb);
      },

      get: function(key, opts, cb) {
        if (typeof opts === 'function') {
          cb = opts;
          opts = undefined;
        }
        return db.get(useprefix + key, opts, cb);
      },

      del: function(key, opts, cb) {
        if (typeof opts === 'function') {
          cb = opts;
          opts = undefined;
        }
        return db.del(useprefix + key, opts, cb);
      },

      batch: function (ops_, cb) {
        var ops = ops_.slice();
        for (var i = 0; i < ops.length; i++) {
          ops[i] = {
            key: useprefix + ops_[i].key,
            type: ops_[i].type,
            value: ops_[i].value
          };
        }
        return db.batch(ops, cb);
      },

      createWriteStream: function(opts) {
        var ws = db.createWriteStream(opts);
        if (prefix) {
          var w = ws;
          ws = thru(function(chunk, enc, cb) {
            chunk.key = useprefix + chunk.key;
            cb(null, chunk);
          });
          w.on('error', ws.emit.bind(ws, 'error'));
          ws.pipe(w);
        }
        return ws;
      },

      createReadStream: function(opts) {
        opts = opts || {};
        var end = '';

        if (prefix) {
          if (opts.start) opts.start = useprefix + opts.start;
          else opts.start = useprefix;
          if (opts.end) opts.end = useprefix + opts.end;
          else opts.end = useprefix + sep;
        }
        var rs = db.createReadStream(opts);

        if (prefix) {
          var r = rs;
          rs = thru(function(chunk, enc, cb) {
            chunk.key = chunk.key.slice(prefix.length);
            cb(null, chunk);
          });
          r.on('error', rs.emit.bind(rs, 'error'));
          r.pipe(rs);
        }

        return rs;
      }
    };
  }
};
