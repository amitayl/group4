const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();

const port = 5555;

app.use(express.static(path.join(__dirname, 'search')));
app.use(express.json());

app.post('/', (req, res) => {
    try {
        const name = req.body.name;
        const score = req.body.score;

        const topTen = JSON.parse(fs.readFileSync('scores.json'));

        if (topTen.length === 0) {
            topTen.push({ "name": name, "score": score })
        }
        else {
            for (let index = 0; index < topTen.length; index++) {
                if (topTen[index].score < score) {
                    topTen.splice(index, 0, { "name": name, "score": score });
                    break;
                }
                else {
                    topTen.push({ "name": name, "score": score })
                }

            }
            if (topTen.length > 10) {
                topTen.splice(topTen.length - 1, 1);
            }
        }

        
        const writeStream = fs.createWriteStream('scores.json');
        writeStream.write(JSON.stringify(topTen));
        res.send(topTen);

    } catch (error) {
        res.sendStatus(500);
    }

})

app.get('/', (req, res) => {
    res.send('Moshiko');
})

app.listen(port, () => console.log(`Server is running on ${port}`));