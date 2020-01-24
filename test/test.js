const logger = require('..');

//Depricated
logger.info("info log", "msg desc");


let path='/dynamic_logs/all_events.log';
logger.log({filePath:path, level:"error" ,msg:"msg title", msgData:{"user_name":"rajesh"}});
