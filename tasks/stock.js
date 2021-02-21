module.exports = {
    cronTime: '20 */15 * * * *',
    onTick: (client) => {
        client.channels.fetch(process.env.HEARTBEAT_CHANNEL_ID)
            .then(channel => channel.send(`Stock cron @ ${(new Date()).toLocaleString()}`))
            .catch(console.error)
    }
}
