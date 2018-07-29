// Bot config

require('dotenv').config();

// Import the discord.js module
const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const path = require('path');

// Create an instance of Discord that we will use to control the bot
const client = new Commando.Client({
    commandPrefix: '~',
    owner: '351799282874974211',
    disabledEvents: [true]
});

// Token for your bot, located in the Discord application console - https://discordapp.com/developers/applications/me/
const token = process.env.BOT_TOKEN;

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['memes', 'These commands will be used for various memes']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

// Gets called when our bot is successfully logged in and connected
client.on('ready', () => {
    console.log('Bot Started and connected to Server');
    client.user.setActivity('Thot Patrol');
});

client.login(token);

// Event to listen to messages sent to the server where the bot is located
// client.on('message', message => {
//     // So the bot doesn't reply to iteself
//     if (message.author.bot) return;

//     // Check if the message starts with the `~` trigger
//     if (message.content.indexOf('~') === 0) {
//         // Get the user's message excluding the `~`
//         var text = message.content.substring(1);
//         text.toLowerCase();

//         // Reverse the message
//         var reversed = '';
//         var i = text.length;

//         while (i > 0) {
//             reversed += text.substring(i - 1, i);
//             i--;
//         }

//         // Reply to the user's message
//         message.reply(reversed);
//     }
// });

// Express web app

const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
    http.get('http://discordjs-heroku.herokuapp.com');
   }, 900000);