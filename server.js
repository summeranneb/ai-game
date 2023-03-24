const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Replace 'your_openai_api_key' with your actual API key
const openaiApiKey = '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';

app.use(express.json());
app.use(express.static('public'));

app.post('/api/generate-text', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: prompt,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 1,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
      }
    );

    res.json(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while generating text.');
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
