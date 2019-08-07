## Node Console Logger
    
    module for log consoled data in the logs files with time stamp , event type. every event will be logged with unique ref Id.

## Installation

    npm install node-console-logger --save

## Usage
```js
var logger = require('node-console-logger');

logger.info("title","description"); //for log the event type info
logger.err("error name ","error description ");//for log the event type error

Note : we can pass sencond argument as object also 

logger.err("error name ",{"type":"error","message"::"invalid credentials"});//for log the event type error

```    

## License

MIT