var faker = require('faker');

module.exports = {
    initializeContext: initializeContext
}

function initializeContext(context, events, done) {
    context.vars['name'] = faker.name.findName();

    return done();
}
