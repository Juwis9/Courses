var path = require('path');
var util = require('util');
var v8 = requier('v8')
console.log(path.basename(__filename));
console.log(path.join(__dirname, 'www', 'img', 'home', 'uploads'));
util.log('No debería usar esto, si no modulos de terceros');
