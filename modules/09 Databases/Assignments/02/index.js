const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');


const app = express();

const port = 5000;
const dbUrl = 'mongodb://127.0.0.1:27017';

app.use(express.json());
app.use(cors());

const onConnect = (err, databases) => {
    if (err) return console.error("ERROR OCCURED:", err);

    const dbName = 'CarDB';
    const db = databases.db(dbName);
    const collectionName = 'Cars';
    const collection = db.collection(collectionName);

    // task 1
    app.get('/cars', (request, response) => {
        collection.find().toArray((err, data) => {
            if (err) return console.error("ERROR OCCURED:", err);

            console.log("data", data);
            response.send(data);
        })
    });

    // task 2
    app.get('/cars/:licenceNumber', async (request, response) => {

        const carsDetailes = await collection.find({ LicenseNumber: request.params.licenceNumber }).toArray();
        for (const carDetailes of carsDetailes) {
            console.log(carDetailes);
            response.send(carDetailes);
        }
    });


    app.post('/cars', (request, response) => {
        const { LicenseNumber, Manufacturer, Model, Year, KM, Price } = request.body;
        if (!LicenseNumber || !Manufacturer || !Model || !Year || !KM || !Price)
            responseWithStatus(500, response, "Missing Data");
        try {
            console.log("POST");
            collection.insertOne({ LicenseNumber, Manufacturer, Model, Year, KM, Price });
            // response.sendStatus(200);
            // response.status(200).send({
            //     message: "Added successfully"
            // });
            responseWithStatus(200, response, "Added successfully");
        }
        catch (ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.delete('/recipe', (request, response) => {
        const { name } = request.query;
        if (!name) responseWithStatus(200, response, "Missing Data");
        try {
            collection.deleteOne({ name });
            responseWithStatus(200, response, "Deleted successfully");
        }
        catch (ex) {
            responseWithStatus(500, response, ex);
        }
    });

    app.put('/recipe', (request, response) => {
        const { name } = request.query;
        const { newName, newIngredients, newPrice } = request.body;
        if (!name || !newName || !newIngredients || !newPrice) responseWithStatus(500, response, "Missing Data");
        try {
            collection.updateOne({ name }, { $set: { name: newName, ingredients: newIngredients, price: newPrice } });
            responseWithStatus(200, response, "Updated successfully");
        }
        catch (ex) {
            responseWithStatus(500, response, ex);
        }
    })
}

function responseWithStatus(status, response, message) {
    response.status(status).send({
        message
    });
}

mongo.MongoClient.connect(dbUrl, onConnect);

app.listen(port, () => console.log("Server is running on port: " + port));