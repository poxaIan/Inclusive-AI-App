## English

### NeuroVita: Inclusive AI

## Application Summary

### Application Goal
- The main goal is to help neurodivergents, especially people with ASD (Autism Spectrum Disorder) and ADHD, better understand texts by rewriting them in a more accessible way.
- The application uses AI to transform complex texts into simplified versions, making them easier to understand and process.

### Application Interface
- **Home Screen:** A layout with an animation of multiple infinity symbols, a symbol created by the neurodivergent community, creating a beautiful and dynamic visual background.
- **"Start" Button:** Takes the user to the text insertion and processing screen.
- **Processing Screen:** Allows the user to input a text, which is sent to the AI for processing and simplification. The result is displayed below the text box.

### Technologies Used
- **Frontend:** Developed with **React Native**, using `react-navigation` to manage screens and animations for a better user experience.
- **Backend:** The application is locally connected to **Ollama**, an AI platform running the **Mistral** model to process and rewrite texts.
- **AI Integration:** Uses Axios to communicate with Ollama and process the text via API.

### Animations and Design
- **Animated Background:** Continuously looping images of infinity symbols create a smooth motion effect.
- **Accessibility:** The design follows accessibility guidelines for neurodivergents, with soft colors and a clear and objective interface.

---

## Technical Use of Ollama

### Ollama Configuration
- Ollama is configured to run on a local server via Docker, with an API that processes texts using the **Mistral** model.
- Communication with the API is done through HTTP requests to the `/api/generate` endpoint.

### Mistral Model
- The **Mistral** model is optimized to rewrite texts in the instruction format (`[INST]...[/INST]`), generating clear and accessible responses for users.
- This model is especially useful for reformulating complex texts to make them easier for neurodivergents to understand.

### Axios Integration
- **Axios** is used to make POST requests to the Ollama API, sending the text and receiving responses from the AI asynchronously.
- The AI's responses are processed in real-time and displayed as the API responds.

### Real-Time Processing
- The API response is handled incrementally, displaying the text as it is processed by the AI.
- The system captures pieces of the Ollama response and displays them in the app as soon as the processing is completed.

---

# React Native Environment Setup

### 1. Install Node.js and npm

1. Install the **Node Version Manager (nvm)**:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

2. Update the terminal:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

3. Install the latest version of Node.js:
```bash
nvm install 20
```

4. Verify the installation:
```bash
node -v
npm -v
```

### 2. Install the React Native CLI

1. Install the React Native CLI globally:
```bash
npm install -g react-native-cli
```

### 3. Install and Configure Android Studio

1. Download Android Studio and extract the .tar.gz file.

2. Navigate to the extracted directory and start Android Studio:
```bash
cd android-studio/bin
./studio.sh
```

3. During the initial setup, install the Android SDK and build tools:
   - Open the SDK Manager in Android Studio and install the latest version of SDK Platform and Build Tools.

4. Configure ANDROID_HOME in your `.bashrc` (or `.zshrc`) file:
```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

5. Apply the changes:
```bash
source ~/.bashrc
```

### 4. Java Configuration for Gradle

1. Install OpenJDK 17:
```bash
sudo apt install openjdk-17-jdk
```

2. Add the JAVA_HOME variable to your `.bashrc` file:
```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
```

3. Apply the changes:
```bash
source ~/.bashrc
```

4. Verify if Java was installed correctly:
```bash
java -version
```

### 5. Running the NeuroVita Project

1. Navigate to the project directory:
```bash
cd /path/to/project
```

2. Install the project dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open the emulator in Android Studio or connect an Android device via USB.

5. To run the app on the emulator or connected device:
```bash
npx react-native run-android
```

## Português

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


