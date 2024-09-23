# Mente Ativa: IA Inclusiva

## Resumo da Aplicação

### Objetivo da Aplicação
- O objetivo principal é ajudar neurodivergentes, especialmente pessoas com TEA (Transtorno do Espectro Autista) e TDAH, a compreender melhor os textos, reescrevendo-os de maneira mais acessível.
- A aplicação utiliza IA para transformar textos complexos em versões simplificadas, tornando-os mais fáceis de entender e processar.

### Interface da Aplicação
- **Tela Inicial:** Um layout com animação de múltiplos símbolos do infinito, criando um fundo visual dinâmico.
- **Botão "Iniciar":** Leva o usuário para a tela de inserção e processamento de textos.
- **Tela de Processamento:** Permite ao usuário inserir um texto, que é enviado à IA para ser processado e simplificado. O resultado é exibido abaixo da caixa de texto.

### Tecnologias Utilizadas
- **Frontend:** Desenvolvido com **React Native**, usando `react-navigation` para gerenciar as telas e animações para uma melhor experiência do usuário.
- **Backend:** A aplicação está conectada localmente ao **Ollama**, uma plataforma de IA que roda o modelo **Mistral** para processar e reescrever textos.
- **Integração com a IA:** Faz uso do Axios para se comunicar com o Ollama e realizar o processamento do texto via API.

### Animações e Design
- **Fundo Animado:** Imagens em loop contínuo de símbolos do infinito criam uma sensação de movimento suave.
- **Acessibilidade:** O design segue diretrizes de acessibilidade para neurodivergentes, com cores suaves e interface clara e objetiva.

---

## Uso Técnico do Ollama

### Configuração do Ollama
- O Ollama está configurado para rodar em um servidor local via Docker, com uma API que processa textos utilizando o modelo **Mistral**.
- A comunicação com a API se dá através de requisições HTTP no endpoint `/api/generate`.

### Modelo Mistral
- O modelo **Mistral** é otimizado para reescrever textos no formato de instrução (`[INST]...[/INST]`), gerando respostas claras e acessíveis para os usuários.
- Esse modelo é especialmente útil para reformular textos complexos de maneira que fiquem mais fáceis de entender para neurodivergentes.

### Integração com Axios
- O **Axios** é usado para fazer requisições POST à API do Ollama, enviando o texto e recebendo as respostas da IA de maneira assíncrona.
- As respostas da IA são processadas em tempo real e exibidas conforme a API responde.

---

## Próximos Passos

1. **Melhorar o Front-End:**
   - Continuar ajustando a interface para garantir uma experiência de usuário mais fluida e visualmente agradável.
   - Introduzir elementos de design mais modernos e acessíveis para neurodivergentes, como controles de contraste de cor e modos de leitura facilitados.

2. **Implementar Servidor Externo:**
   - Configurar um servidor no meu computador local, acessível via internet, para que o aplicativo possa ser utilizado de qualquer lugar.
   - Garantir que o Ollama funcione remotamente e possa lidar com múltiplas requisições.

3. **Limitar Respostas da IA:**
   - Definir padrões de resposta específicos da IA que melhor ajudem neurodivergentes, como resumos, explicações passo a passo e parágrafos curtos e objetivos.
   - Ajustar o modelo Mistral para gerar saídas mais consistentes e ajustadas às necessidades do público-alvo.

### Sugestões Futuras (Aceito Sugestões de Todos!)
- **Integração com Dispositivos Móveis:** Expandir o projeto para incluir funcionalidades de voz, permitindo que os textos sejam lidos em voz alta para o usuário.
- **Ajustes de Personalização:** Permitir que o usuário configure o nível de simplificação dos textos processados pela IA, para ajustar conforme suas necessidades específicas.
- **Suporte a Múltiplos Idiomas:** Expandir o suporte para outras línguas, além do português, para ajudar neurodivergentes que falam outras línguas.

## Uso Técnico do Ollama

### Configuração do Ollama
- O Ollama foi configurado localmente em um servidor utilizando Docker, rodando a API com o modelo **Mistral**.
- A aplicação faz requisições HTTP para o endpoint `/api/generate` da API do Ollama.

### Modelo Mistral
- O modelo de linguagem **Mistral** processa prompts no formato de instruções (`[INST]...[/INST]`), retornando textos mais simples e compreensíveis.
- Ideal para reformular textos complexos em formatos mais acessíveis para neurodivergentes.

### Integração com Axios
- **Axios** é utilizado para realizar requisições POST para a API do Ollama, enviando o texto a ser processado e recebendo a resposta de forma assíncrona.

### Processamento em Tempo Real
- A resposta da API é manipulada de forma incremental, exibindo o texto conforme ele é processado pela IA.
- O sistema captura pedaços da resposta do Ollama e exibe no aplicativo assim que o processamento é concluído.

---
