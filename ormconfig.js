require('dotenv').config();

module.exports = {
    type: process.env.DATABASE_TYPE,
    url: process.env.DATABASE_URL,
    logging: false,
    extra: {
        ssl: { //certificado de segurança do Heroku. Só é necessário por causa do Heroku.
            rejectUnauthorized: false
        }
    },
    migrations: [
        'src/database/migrations/**/*'
    ],
    entities: [
        'src/database/entities/**/*'
    ],
    cli: {
        entitiesDir: 'src/database/entities',
        migrationsDir: 'src/database/migrations'
    }
}