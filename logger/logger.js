let winston = require('winston');

let logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: './logger/error.log', level: 'error' }),
      //new winston.transports.File({ filename: './logger/combined.log' })
    ]
  });
   
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  // 
  if (true) {
    logger.add(new winston.transports.Console({
      format: winston.format.simple()
    }));
  }

 module.exports.writeLog = (level, msg) => {
     logger.log(level,msg)};
 

