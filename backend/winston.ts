import { createLogger, transports, format, LogMethod } from 'winston'

enum logLevel {
    error = 'error',
    warn = 'warn',
    info = 'info',
    debug = 'debug',
    silly = 'silly',
}

function customLog(_level: logLevel, _service: string, _msg: string): void {
    const logger = createLogger({
        level: 'silly',
        transports: [new transports.Console()],
        defaultMeta: {
            service: _service,
        },
        format: format.combine(
            format.align(),
            format.colorize(),
            format.timestamp({
                format: 'HH:mm:ss.SSS',
            }),
            format.printf(({ timestamp, level, message, service }) => {
                return `[${timestamp}] ${level} ${service}: ${message}`
            })
        ),
    })

    logger.log(_level, _msg)
}

export { customLog, logLevel }
