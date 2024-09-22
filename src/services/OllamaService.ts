import axios from 'axios';

const baseURL = 'http://10.0.2.2:11434/api';  // Certifique-se de usar o IP correto para o emulador ou dispositivo

// Função para enviar o texto para o Ollama Mistral com o formato de instrução
export const processWithOllama = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(`${baseURL}/generate`, {
      model: 'mistral',
      prompt: `<s>[INST] ${prompt} [/INST]`,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    console.log("Resposta da API:", response.data);  // Verifique o que está sendo retornado

    // Verifica se a resposta da API é uma string em JSON quebrada em várias linhas
    if (typeof response.data === 'string') {
      const linhas = response.data.split('\n');
      const partesConcatenadas = linhas.map(linha => {
        try {
          const objeto = JSON.parse(linha);
          return objeto.response;
        } catch (e) {
          return '';  // Caso não seja possível fazer o parse de alguma linha, retorna vazio
        }
      }).join('');

      return partesConcatenadas || 'Sem resposta disponível';
    }

    return 'Resposta inesperada do servidor';
  } catch (error) {
    console.error('Erro ao comunicar com o Ollama:', error);
    return 'Erro ao processar o texto com o Ollama';
  }
};
