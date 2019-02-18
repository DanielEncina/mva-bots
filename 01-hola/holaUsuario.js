var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    function(session) {
        builder.Prompts.text(session, 'Hola como te llamas?');
    }, (session, results) => {
        let nombre = results.response;
        session.send(`Hola ${ nombre }`);
    }
]);