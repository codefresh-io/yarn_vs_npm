//http://stackoverflow.com/questions/40186104/yarn-warning-on-docker-build
var assert = require('assert');

describe('os tests', ()=>{
  it('interfaces', ()=>{
     var nt = require('../network_os');
     assert(!nt.isOffline());
  });
})
