var faker = require('faker');

module.exports = {
    initializeContext: initializeContext
}

function initializeContext(context, events, done) {
    context.vars['name'] = faker.name.findName();

    context.ws.on('message', function(receivedMessage) {
        console.log(receivedMessage);
    });

    return done();
}
