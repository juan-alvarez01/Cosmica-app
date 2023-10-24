console.log("Hola desde node");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const catalogRouter = require('./routes/Catalog');
const userRouter = require('./routes/User');

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/uploads', express.static('public/uploads'));

server.use('/api/products',catalogRouter);
server.use('/api/users', userRouter);

async function bootstrap( ) {

    await mongoose.connect('mongodb+srv://user:1234@cosmica.aj2eagy.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
    db.once('open', () => {
    console.log('Conexión exitosa a MongoDB Atlas');
    });
    server.listen(5000, () => 
    console.log('servidor ejecutandose en http://localhost:5000'));
}
bootstrap()
.catch(err => console.error(err));