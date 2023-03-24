const player1Input = document.getElementById('player1Input');
const player2Input = document.getElementById('player2Input');
const submitPrompt = document.getElementById('submitPrompt');
const aiGeneratedText = document.getElementById('aiGeneratedText');

// Replace 'your_openai_api_key' with your actual API key
const openaiApiKey = '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';

async function fetchGeneratedText(prompt) {
  const response = await fetch('/api/generate-text', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: prompt,
    }),
  });

  const data = await response.json();
  return data;
}  const data = await response.json();
  return data;
}

submitPrompt.addEventListener('click', async () => {
  const prompt = `${player1Input.value} ${player2Input.value}`;
  const generatedText = await fetchGeneratedText(prompt);
  aiGeneratedText.innerText = generatedText;
});
