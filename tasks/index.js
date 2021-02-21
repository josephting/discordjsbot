const cron = require('node-cron')
const jobs = [
    require('./stock'),
]

function start(client) {
    if (jobs.length > 0) {
        jobs.forEach(job => {
            cron.schedule(job.cronTime, () => {
                job.onTick.call(this, client)
            }, {
                timezone: process.env.TIMEZONE
            })
        })
    }
}

module.exports.start = start
