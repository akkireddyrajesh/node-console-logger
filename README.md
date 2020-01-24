## Node Console Logger
    
    module for log consoled data in the logs files with time stamp , event type. every event will be logged with unique ref Id.

## Installation

    npm install node-console-logger --save

## Usage

```js
var logger = require('node-console-logger');

logger.log({filePath:'/dynamic_logs/all_events.log', level:"error" ,msg:"msg title", msgData:{"user":"name"}});
//O/P:  [error] [2020-01-24T05:42:25.511Z] [eventRefId:log-1579844545511] message:{msg title}, messageDesc :{"user":"name"}

//Depricated
logger.info("title","description"); //for log the event type info
logger.err("error name ","error description ");//for log the event type error

```    

# Configuration: 

1. log file will be created in working directory +path [you have given], for example you are using logger in finprogateway node application the logs will be      generated in finprogateway/dynamic_logs/all_events.log
2. default filePath is 'logs/all_events.log' 


## License

MIT