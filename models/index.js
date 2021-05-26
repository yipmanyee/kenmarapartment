const mongoose = require('mongoose');
const Kenmar = require('./models/kenmar');

const url = 'mongodb://localhost:27017/portfolio';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {

    console.log('Connected correctly to server');

    const newPortfolio = new Kenmar({
        name: 'Kenmar Apartment',
        description: 'Your affordable apartment in Tacoma'
    });

    newPortfolio.save()
    .then(Kenmar => {
        console.log(kenmar);
        return Kenmar.find();
    })
    .then(Kenmar => {
        console.log(kenmar);
        return Kenmar.deleteMany();
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});