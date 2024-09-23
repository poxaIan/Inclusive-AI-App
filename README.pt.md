## Índice
- [NeuroVita: IA Inclusiva](#neurovita-ia-inclusiva)
  - [Resumo da Aplicação](#resumo-da-aplicação)
    - [Objetivo da Aplicação](#objetivo-da-aplicação)
    - [Interface da Aplicação](#interface-da-aplicação)
    - [Tecnologias Utilizadas](#tecnologias-utilizadas)
    - [Animações e Design](#animações-e-design)
  - [Uso Técnico do Ollama](#uso-técnico-do-ollama)
    - [Configuração do Ollama](#configuração-do-ollama)
    - [Modelo Mistral](#modelo-mistral)
    - [Integração com Axios](#integração-com-axios)
    - [Processamento em Tempo Real](#processamento-em-tempo-real)
  - [Configuração do Ambiente React Native](#configuração-do-ambiente-react-native)
    - [1. Instalar o Node.js e npm](#1-instalar-o-nodejs-e-npm)
    - [2. Instalar o React Native CLI](#2-instalar-o-react-native-cli)
    - [3. Instalar e Configurar o Android Studio](#3-instalar-e-configurar-o-android-studio)
    - [4. Configuração do Java para Gradle](#4-configuração-do-java-para-gradle)
    - [5. Rodando o Projeto NeuroVita](#5-rodando-o-projeto-neurovita)
    [Informações de Contato](#informações-de-contato)


### NeuroVita: IA Inclusiva

## Resumo da Aplicação

### Objetivo da Aplicação
- O objetivo principal é ajudar neurodivergentes, especialmente pessoas com TEA (Transtorno do Espectro Autista) e TDAH, a compreender melhor os textos, reescrevendo-os de maneira mais acessível.
- A aplicação utiliza IA para transformar textos complexos em versões simplificadas, tornando-os mais fáceis de entender e processar.

### Interface da Aplicação
- **Tela Inicial:** Um layout com animação de múltiplos símbolos do infinito, simbolo criado pela comunidade de neurodivergentes, criando um fundo visual bonito e dinâmico.
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

### Processamento em Tempo Real
- A resposta da API é manipulada de forma incremental, exibindo o texto conforme ele é processado pela IA.
- O sistema captura pedaços da resposta do Ollama e exibe no aplicativo assim que o processamento é concluído.


# Configuração do Ambiente React Native

### 1. Instalar o Node.js e npm

1. Instale o **Node Version Manager (nvm)**:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

2. Atualize o terminal:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3. Instale a versão mais recente do Node.js:
```bash
nvm install 20
```

4. Verifique a instalação:
```bash
node -v
npm -v
```

### 2. Instalar o React Native CLI

1. Instale o CLI do React Native globalmente:
```bash
npm install -g react-native-cli
```

### 3. Instalar e Configurar o Android Studio

1. Faça o download do Android Studio e extraia o arquivo .tar.gz.

2. Navegue até o diretório extraído e inicie o Android Studio:
```bash
cd android-studio/bin
./studio.sh
```

3. Durante a configuração inicial, instale o SDK Android e as ferramentas de compilação:
   - Abra o SDK Manager no Android Studio e instale a versão mais recente da SDK Platform e Build Tools.

4. Configure o ANDROID_HOME no seu arquivo `.bashrc` (ou `.zshrc`):
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

5. Aplique as mudanças:
```bash
source ~/.bashrc
```

### 4. Configuração do Java para Gradle

1. Instale o OpenJDK 17:
```bash
sudo apt install openjdk-17-jdk
```

2. Adicione a variável JAVA_HOME ao seu arquivo `.bashrc`:
```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
```

3. Aplique as mudanças:
```bash
source ~/.bashrc
```

4. Verifique se o Java foi instalado corretamente:
```bash
java -version
```

### 5. Rodando o Projeto NeuroVita

1. Navegue até o diretório do projeto:
```bash
cd /caminho/do/projeto
```

2. Instale as dependências do projeto:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Abra o emulador no Android Studio ou conecte um dispositivo Android via USB.

5. Para rodar o aplicativo no emulador ou dispositivo conectado:
```bash
npx react-native run-android
```

## Informações de Contato
Se você quiser saber mais sobre o projeto ou entrar em contato comigo, pode me encontrar nos seguintes canais:

- <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" width="20"/> **E-mail:** ian.mgsouza@gmail.com
- <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" width="20"/> **LinkedIn:** [https://www.linkedin.com/in/ian-miranda-gomes-de-souza-3257a1222/](https://linkedin.com/in/ian-miranda-gomes-de-souza-3257a1222)

Fique à vontade para me contatar para discussões sobre o projeto, colaborações, ou oportunidades profissionais!


