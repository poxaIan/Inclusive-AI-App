
# Configuração de Ambiente de Desenvolvimento React Native no Ubuntu

Este guia detalha os passos necessários para configurar o ambiente de desenvolvimento **React Native** com **Android Studio** em uma distribuição **Ubuntu**. Ao seguir essas etapas, você estará apto a desenvolver e rodar aplicativos React Native em um dispositivo Android ou emulador.

---

## Índice
1. [Pré-requisitos](#pré-requisitos)
2. [Instalação do Node.js e npm](#1-instalação-do-nodejs-e-npm)
3. [Instalação do React Native CLI](#2-instalação-do-react-native-cli)
4. [Instalação e Configuração do Android Studio](#3-instalação-e-configuração-do-android-studio)
5. [Configuração do Java para Gradle](#4-configuração-do-java-para-gradle)
6. [Rodando o Projeto React Native](#5-rodando-o-projeto-react-native)
7. [Resolução de Problemas Comuns](#6-resolução-de-problemas-comuns)

---

## Pré-requisitos
- **Sistema Operacional:** Ubuntu (ou outra distribuição Linux baseada em Debian)
- **Espaço em disco:** Aproximadamente 10GB (para o Android Studio, SDKs e dependências)
- **Memória RAM:** Mínimo de 4GB (8GB recomendado)

---

## 1. Instalação do Node.js e npm
**React Native** depende do **Node.js** e do **npm** para o gerenciamento de pacotes e execução do ambiente de desenvolvimento. Use o **Node Version Manager (nvm)** para instalar a versão correta.

### Passos:
1. Instale o **nvm**:
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

---

## 2. Instalação do React Native CLI
O **React Native CLI** facilita a criação, execução e gerenciamento de projetos React Native.

### Passos:
1. Instale o CLI do React Native globalmente:
   ```bash
   npm install -g react-native-cli
   ```

---

## 3. Instalação e Configuração do Android Studio
O **Android Studio** fornece o emulador Android e as ferramentas necessárias para compilar aplicativos.

### Passos:
1. Faça o download do [Android Studio](https://developer.android.com/studio) e extraia o arquivo `.tar.gz`.

2. No terminal, navegue até o diretório extraído e inicie o Android Studio:
   ```bash
   cd android-studio/bin
   ./studio.sh
   ```

3. Durante a configuração inicial, instale o **SDK Android** e as ferramentas de compilação:
   - Abra o **SDK Manager** no Android Studio e instale a versão mais recente da **SDK Platform** e **Build Tools**.

4. Configure o **ANDROID_HOME** no seu arquivo **.bashrc** (ou **.zshrc**):
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

---

## 4. Configuração do Java para Gradle
O **Gradle**, responsável pela compilação de projetos Android, requer a instalação do **Java**.

### Passos:
1. Instale o **OpenJDK 17**:
   ```bash
   sudo apt install openjdk-17-jdk
   ```

2. Adicione a variável `JAVA_HOME` ao seu arquivo **.bashrc**:
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

---

## 5. Rodando o Projeto React Native
Com o ambiente configurado, você pode agora rodar seu aplicativo React Native.

### Passos:
1. Navegue até o diretório do projeto:
   ```bash
   cd /caminho/do/seu/projeto
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

---

## 6. Resolução de Problemas Comuns
### Erro `JAVA_HOME`:
- Verifique se o caminho do Java está corretamente configurado no arquivo **.bashrc** e que o Java 17 está instalado.

### Emulador Android não inicia:
- Certifique-se de que o SDK do Android e as ferramentas de build estão instalados corretamente.
- Verifique as variáveis de ambiente exportadas no **.bashrc**.

### Erros relacionados ao Gradle:
- Verifique se a versão correta do Java está sendo usada com o Gradle.
- Execute o comando abaixo para garantir que o Gradle esteja utilizando o Java 17:
   ```bash
   ./gradlew --version
   ```

---

## Conclusão
Agora, com o ambiente de desenvolvimento configurado, você pode começar a desenvolver e rodar seu aplicativo **React Native** com Android Studio. Caso encontre problemas adicionais, consulte a [documentação oficial do React Native](https://reactnative.dev/docs/environment-setup).

