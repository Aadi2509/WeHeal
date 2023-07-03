const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {Configuration, OpenAIApi} = require('openai');

const config = new Configuration({
    apiKey: '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'
});

const openai = new OpenAIApi(config);

const app = express();
app.use(bodyParser.json());
app.use(cors());

//endpoint
app.post('/chat/completions', async (req, res) => {
    const { prompt } = req.body;
    try {
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
        });
    
        
        const reply = completion.choices[0].message.content;
        res.send(reply);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
      }
});

const port = 8080;
app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})