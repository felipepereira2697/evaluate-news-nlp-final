var path = require('path')
const axios = require('axios');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors())
app.use(express.static('dist'))

app.get('/', function (req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    
    console.log('Example app listening on port 8080!')

})

app.post('/analysis', async function (req, res) {

    const text = req.body.name;

    return await axios
			.post('https://api.meaningcloud.com/sentiment-2.1',{},
				{params: {
						url: text,
						key: process.env.API_KEY,
						lang: 'en',
					},
				}
			)
    .then(result => {

        const newData = {
            agreement: result.data.agreement,
            score_tag: result.data.score_tag,
            irony: result.data.irony,
            confidence: result.data.confidence,
            text: result.data.sentence_list[0].text
        }
        res.send(newData);
    })
    .catch(error => {
        console.error(error);
    });
    
})
