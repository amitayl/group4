const express = require('express');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

const messages = [];

// Read
app.get('/', (request, response) => {
    responseJson(response, messages);
});

 // Delete
app.delete('/', (request, response) => {
    const messageId = Number(request.query.id);
    const messageIndex = getIndexById(messages, messageId);
    if (messageIndex >= 0)
    {
        messages.splice(messageIndex, 1);
    }
    responseJson(response, "ok");
});

// Update
app.put('/', (request, response) => {
    // update by id and not by name
    const messageId = Number(request.query.id);
    const messageIndex = getIndexById(messages, messageId);
    messages[messageIndex].author = request.body.author;
    messages[messageIndex].messgae = request.body.messgae;
    responseJson(response, "ok");
});

// Create
app.post('/', (request, response) => {
    const newMessageId = Math.floor(Math.random() * 10000);
    const newMessageAuthor = request.body.author;
    const newMessageMessage = request.body.message;
    messages.push({
        id: newMessageId,
        author : newMessageAuthor,
        massage: newMessageMessage
    });
    responseJson(response, "ok");
});

function getIndexById(arr, id) {
    return arr.findIndex( item => item.id === id);
}

function responseJson(response, result) {
    response.json({
        result
    });
}

app.listen(8000, () => console.log("server is running in port 8000"));