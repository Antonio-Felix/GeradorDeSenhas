# 🔐 Gerador de Senhas

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Mobile](https://img.shields.io/badge/Mobile-Apps-FF6B6B?style=for-the-badge)

Um aplicativo móvel eficiente para geração de senhas seguras com cópia instantânea para área de transferência.

[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

</div>

## ✨ Características Principais

<div align="center">

| 🎯 Interface Moderna | 🔢 Controle Preciso | 📋 Cópia Rápida |
|---------------------|---------------------|-----------------|
| Design limpo e intuitivo | Slider para ajuste de 6-10 caracteres | Cópia com um toque |

| ⚡ Geração Instantânea | 🔒 Segurança | 🎨 Responsivo |
|----------------------|--------------|---------------|
| Senhas em milissegundos | Caracteres diversificados | Adaptável a diferentes telas |

</div>

## 🛠️ Tecnologias Utilizadas

<div align="center">

**Framework Principal**
<br>
![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=flat-square&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)

**Bibliotecas**
<br>
![Clipboard](https://img.shields.io/badge/Expo_Clipboard-4630EB?style=flat-square&logo=expo&logoColor=white)
![Slider](https://img.shields.io/badge/React_Native_Slider-FF6B6B?style=flat-square)

**Linguagem**
<br>
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

## 📦 Instalação e Configuração

### Pré-requisitos
- [Node.js](https://nodejs.org/) (v14 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Dispositivo móvel com [Expo Go](https://expo.dev/client) ou emulador

### 🎯 Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/GeradorDeSenhas.git
cd GeradorDeSenhas
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Instale as dependências específicas do Expo**
```bash
npx expo install expo-clipboard @react-native-community/slider
```

4. **Execute o projeto**
```bash
npx expo start
```

5. **Escaneie o QR Code** com o app Expo Go no seu celular

## 🎮 Como Usar

### 1. **Ajuste o Comprimento**
- Use o slider para escolher entre 6 e 10 caracteres
- Visualize em tempo real o número selecionado

### 2. **Gere a Senha**
- Toque no botão **"Gerar Senha"**
- A senha aparecerá instantaneamente na área designada

### 3. **Copie com Um Toque**
- Toque na senha gerada para copiar automaticamente
- Receba confirmação visual da cópia
- Cole em qualquer aplicativo desejado

### 4. **Gere Novamente**
- Repita o processo para novas senhas
- Cada geração cria combinações únicas

## 🔧 Estrutura do Projeto

```
GeradorDeSenhas/
├── assets/
│   └── iconLogo.png
├── App.js
├── app.json
├── package.json
└── README.md
```

## 🎨 Personalização

### Caracteres Utilizados
O aplicativo gera senhas usando um conjunto completo de caracteres:

- **Letras Minúsculas**: a-z
- **Letras Maiúsculas**: A-Z  
- **Números**: 0-9
- **Caracteres Especiais**: @#$%^&*()_+-=

## 📋 Funcionalidades Detalhadas

### 🔄 Algoritmo de Geração
- **Aleatoriedade**: Utiliza `Math.random()` para seleção aleatória
- **Segurança**: Combinação diversificada de caracteres
- **Performance**: Geração instantânea mesmo em dispositivos antigos

### 📋 Sistema de Cópia
- **Integração Nativa**: Usa `expo-clipboard` para acesso à área de transferência
- **Feedback Visual**: Alertas confirmando a cópia bem-sucedida
- **Toque Único**: Cópia realizada com um simples toque na senha

### 🎯 Experiência do Usuário
- **Interface Intuitiva**: Design claro e fácil de usar
- **Feedback Imediato**: Resposta visual para todas as ações
- **Acessibilidade**: Textos claros e contrastes adequados

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Desenvolvido por

[Antônio Félix](https://github.com/Antonio-Felix)  
*Desenvolvedor Mobile, Fullstack & Entusiasta de UX*

---

<div align="center">

### ⭐ Não esqueça de dar uma estrela no repositório se você gostou!

</div>
