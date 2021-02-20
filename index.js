const { CommandoClient } = require('discord.js-commando')
const path = require('path')

require('dotenv').config()

const client = new CommandoClient({
    commandPrefix: '!',
    owner: '98477133139054592'
})

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['first', 'Your First Command Group'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`)
})

client.on('error', console.error)

client.login(process.env.BOT_TOKEN)
