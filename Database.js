let mongoose = require('mongoose');
const server = process.env.SERVER; // REPLACE WITH YOUR DB SERVER
const database = process.env.DATABASE;      // REPLACE WITH YOUR DB NAME
/**
 * Class representing a database connection.
 */
class Database {
    /**
     * Create a database connection instance and connect to the database.
     */
    constructor() {
        this._connect()
    }

    /**
     * Connect to the MongoDB database.
     * @private
     */
    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`)
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}
module.exports = new Database()