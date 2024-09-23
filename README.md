🇧🇷 [Português](README.pt.md)

## Table of Contents
- [NeuroVita: Inclusive AI](#neurovita-inclusive-ai)
  - [Application Summary](#application-summary)
    - [Application Goal](#application-goal)
    - [Application Interface](#application-interface)
    - [Technologies Used](#technologies-used)
    - [Animations and Design](#animations-and-design)
  - [Technical Use of Ollama](#technical-use-of-ollama)
    - [Ollama Configuration](#ollama-configuration)
    - [Mistral Model](#mistral-model)
    - [Axios Integration](#axios-integration)
    - [Real-Time Processing](#real-time-processing)
  - [React Native Environment Setup](#react-native-environment-setup)
    - [1. Install Node.js and npm](#1-install-nodejs-and-npm)
    - [2. Install the React Native CLI](#2-install-the-react-native-cli)
    - [3. Install and Configure Android Studio](#3-install-and-configure-android-studio)
    - [4. Java Configuration for Gradle](#4-java-configuration-for-gradle)
    - [5. Running the NeuroVita Project](#5-running-the-neurovita-project)
    [Contact Information](#contact-information)

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

## Contact Information
If you'd like to know more about the project or get in touch with me, you can reach me via the following channels:

- <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" width="20"/> **E-mail:** ian.mgsouza@gmail.com
- <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" width="20"/> **LinkedIn:** [https://www.linkedin.com/in/ian-miranda-gomes-de-souza-3257a1222/](https://linkedin.com/in/ian-miranda-gomes-de-souza-3257a1222)


Feel free to contact me to discuss the project, collaborate, or explore professional opportunities!
