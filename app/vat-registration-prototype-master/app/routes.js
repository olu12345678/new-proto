const express = require('express')
const router = express.Router()

// when you create a new version, add the javascript routes folder to this list 

require('./routes/0-0-1/routing.js')(router);
require('./routes/0-0-2/routing.js')(router);
require('./routes/0-0-3/routing.js')(router);
require('./routes/0-0-4/routing.js')(router);
require('./routes/0-0-5/routing.js')(router);
require('./routes/0-0-6/routing.js')(router);
require('./routes/0-0-7/routing.js')(router);
require('./routes/0-0-8/routing.js')(router);
require('./routes/0-1-0/routing.js')(router);
require('./routes/0-2-0/routing.js')(router);
require('./routes/0-3-0/routing.js')(router);
require('./routes/0-4-0/routing.js')(router);
require('./routes/0-5-0/routing.js')(router);
require('./routes/0-6-0/routing.js')(router);
require('./routes/0-7-0/routing.js')(router);
require('./routes/0-8-0/routing.js')(router);
require('./routes/0-9-0/routing.js')(router);
require('./routes/0-10-0/routing.js')(router);
require('./routes/0-11-0/routing.js')(router);
require('./routes/0-12-0/routing.js')(router);
require('./routes/0-13-0/routing.js')(router);
require('./routes/0-14-0/routing.js')(router);
require('./routes/0-15-0/routing.js')(router);
require('./routes/0-16-0/routing.js')(router);
require('./routes/0-17-0/routing.js')(router);
require('./routes/0-18-0/routing.js')(router);
require('./routes/0-19-0/routing.js')(router);

//MVP flows only 
require('./routes/0-0-6/mvp.js')(router);
require('./routes/0-0-7/mvp.js')(router);
require('./routes/0-0-8/mvp.js')(router);
require('./routes/0-1-0/mvp.js')(router);
require('./routes/0-2-0/mvp.js')(router);
require('./routes/0-3-0/mvp.js')(router);
require('./routes/0-4-0/mvp.js')(router);
require('./routes/0-5-0/mvp.js')(router);
require('./routes/0-6-0/mvp.js')(router);
require('./routes/0-7-0/mvp.js')(router);
require('./routes/0-8-0/mvp.js')(router);
require('./routes/0-9-0/mvp.js')(router);
require('./routes/0-10-0/mvp.js')(router);
require('./routes/0-11-0/mvp.js')(router);
require('./routes/0-12-0/mvp.js')(router);
require('./routes/0-13-0/mvp.js')(router);
require('./routes/0-14-0/mvp.js')(router);
require('./routes/0-15-0/mvp.js')(router);
require('./routes/0-16-0/mvp.js')(router);
require('./routes/0-17-0/mvp.js')(router);
require('./routes/0-18-0/mvp.js')(router);
require('./routes/0-19-0/mvp.js')(router);

module.exports = router