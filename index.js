const { CommandoClient } = require('discord.js-commando')
const path = require('path')
const tasks = require('./tasks')

require('dotenv').config()

const client = new CommandoClient({
    commandPrefix: '!',
    owner: process.env.OWNER_ID
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
    tasks.start(client)
})

client.on('error', console.error)

client.login(process.env.BOT_TOKEN)
