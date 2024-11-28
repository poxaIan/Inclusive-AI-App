// services/TextProcessingService.ts

import { processWithOllama } from './OllamaService';

// Função para traduzir o código do idioma para uma string legível
const getLanguageName = (lang: string) => {
  return lang === 'pt' ? 'português' : 'inglês';
};

// Função que processa o texto de acordo com o tipo de saída e o idioma
export const handleProcessText = async (
  inputText: string,
  outputType: string,
  language: string,
  setOutputText: React.Dispatch<React.SetStateAction<string>>,
  navigation: any
) => {
  try {
    if (!inputText.trim()) {
      setOutputText("Por favor, insira um texto para processar.");
      return;
    }

    console.log("Enviando o texto para o Ollama...");

    let prompt = '';

    if (outputType === 'tdah') {
      prompt = `Por favor, em ${getLanguageName(language)}, resuma o seguinte texto em uma lista organizada, destacando os pontos principais em tópicos curtos e fáceis de entender. Cada tópico deve conter uma ideia clara e objetiva. Utilize uma estrutura de tópicos com frases curtas, que ajudem a manter o foco do leitor. \n\n Texto: ${inputText}`;
    } else if (outputType === 'tea') {
      prompt = `Explique, em ${getLanguageName(language)}, o seguinte texto de forma simples e clara. Organize as ideias usando uma linguagem direta e precisa. Evite metáforas, ironias ou ambiguidades. Certifique-se de que cada frase contenha apenas uma ideia, para facilitar a compreensão. \n\n Texto: ${inputText}`;
    }

    console.log("Prompt: ", prompt);

    setOutputText("Processando...");

    // Processa o texto usando a função com a IA
    const response = await processWithOllama(prompt, outputType, language);
    console.log("Resposta da API:", response);

    if (typeof response === 'string') {
      setOutputText(response); // Atualiza o estado com a resposta da API
      navigation.navigate('OutputScreen', { outputText: response }); // Navega para a tela de saída
    } else {
      console.error("Erro: Resposta não é uma string.");
      setOutputText("Erro ao processar o texto.");
    }
  } catch (error) {
    console.error("Erro ao processar o texto:", error);
    setOutputText("Erro ao processar o texto.");
  }
};
