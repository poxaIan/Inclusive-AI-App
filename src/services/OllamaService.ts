import axios from 'axios';

const baseURL = 'http://104.198.52.46:11434/api'; // Certifique-se de usar o IP correto

export const processWithOllama = async (
  inputText: string,
  outputType: string,
  language: string
): Promise<string> => { // Retorna apenas uma string
  try {
    const response = await axios.post(`${baseURL}/generate`, {
      model: 'llama3.1',
      prompt: `<s>[INST] ${inputText} [/INST]`,
      outputType,
      language,
      stream: false,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (response.data && response.data.response) {
      return response.data.response; // Retorna somente o texto
    } else {
      throw new Error('Resposta inesperada do servidor');
    }
  } catch (error: any) {
    console.error('Erro ao processar com o Ollama:', error);
    throw new Error('Erro ao processar o texto.');
  }
};

