import axios from 'axios';
import cheerio from 'cheerio';

/**
 * Processa um link fornecido pelo usuário para extrair o conteúdo relevante
 * @param linkText O link fornecido pelo usuário
 * @param outputType O tipo de saída (TDAH, TEA)
 * @param language O idioma escolhido (pt, en)
 * @returns O texto extraído e processado do HTML do link
 */
export const processLink = async (
  linkText: string,
  outputType: string,
  language: string
): Promise<string> => {
  try {
    // 1. Faz a requisição HTTP para buscar o HTML
    const response = await axios.get(linkText);
    const html = response.data;

    // 2. Usa cheerio para extrair o texto relevante
    const $ = cheerio.load(html);
    const extractedText: string[] = [];

    $('h1, h2, h3, p').each((_, element) => {
      const text = $(element).text();
      if (text) {
        extractedText.push(text.trim());
      }
    });

    const combinedText = extractedText.join('\n');

    // 3. Retorna o texto processado
    return combinedText;
  } catch (error) {
    console.error('Erro ao processar o link:', error);
    throw new Error('Não foi possível processar o link fornecido.');
  }
};
