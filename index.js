/**
 * ref: https://stackoverflow.com/questions/56090851/winston-logging-object 
 */

var winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { splat, simple, combine, timestamp, label, printf } = format;
var exports = module.exports = {};


let setFilePath=(path)=>{
    const baseUrl=process.cwd(); //current working directory mostly app.js
    if(!path) path='/logs/all_events.log';
    return baseUrl+path;
}
exports.info = function (msg, msgData) {
    console.log('[WARN] logger.info is depricated. Use logger.log instead');
}
exports.error = function (msg, msgData) {
    console.log('[WARN] logger.error is depricated. Use logger.log instead');
}

/**
 * @logObj
 * file:"./logs/debug_events.log"
 * msg:"message title"
 * msgData: Object
 */
exports.log = function (logObj) {
    logfilename = setFilePath(logObj.filePath);
    const myFormat = printf(({ level, message, timestamp, metadata }) => {
        // preparing log formate with event level and timestamp and log message 
        let result = `[${level}] [${timestamp}] [eventRefId:log-${Date.now()}] message:{${message}}`;
        //log message description
        if (metadata) result += `, messageDesc :${metadata ? JSON.stringify(metadata) : null}`;
        return result;
    });

    let logger = winston.createLogger({
        format: combine(
            format.json(),
            // format.colorize(),
            simple(),
            timestamp(),
            format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
            myFormat

        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({
                level: 'info',
                filename: logfilename,
                handleExceptions: true,
                json: true,
                maxsize: 524288000, //5MB
                maxFiles: 50000000,
                colorize: true,
                timestamp: true,
            }),
            // new winston.transports.Console({
            //     level: 'debug',
            //     filename: './logs/debug_events.log',
            //     handleExceptions: true,
            //     json: true,
            //     maxsize: 5242880, //5MB
            //     maxFiles: 5,
            //     colorize: true,
            //     timestamp: true,
            // })
        ],
        exitOnError: false
    })


    logger.log(logObj.level || 'info', logObj.msg, logObj.msgData);
}