# libquassel
Javascript library to connect and interact with Quassel IRC server.

## Install
```sh
npm install --production libquassel
```

## Development
```sh
npm install libquassel
```

In order to create a browser compatible file, run the following command
```sh
# for nodejs 0.12 to 4.x
grunt lts
# for nodejs >=5
grunt stable
```

## Getting Started
```javascript
var Quassel = require('../lib/libquassel.js');
var quassel = new Quassel(
        "quassel.domain.tld", // Quasselcore address
        4242, // Quasselcore port
        // Options:
        //   nobacklogs (default false): if true, do not handle backlogs
        //   backloglimit: number of backlogs to request per buffer at connection
        //   securecore (default true): if false, do not use SSL to connect to the core
        {backloglimit: 10}, 
        function(next) {
    next("user", "password");
});

quassel.on('network.init', function(networkId) {
    network = quassel.getNetworks().get(networkId);
    // ...
});

// ...

quassel.connect();
```

## Documentation
[1.0.3](https://magne4000.github.com/libquassel/1.0.3 "libquassel 1.0.3 documentation")

## Examples
See _test/manual.js_ for details.

## License
Copyright (c) 2014-2016 Joël Charles  
Licensed under the MIT license.
