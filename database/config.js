const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('Base de datos On-line');

    } catch (error) {
        console.log(error);
        throw new Error('Error al momento de iniciar la base de datos');
    }

} 

module.exports = {
    dbConnection
}