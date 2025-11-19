# 🌌 Planetário Virtual

Uma experiência 3D interativa e imersiva para explorar o Sistema Solar, construída com Next.js e React Three Fiber.

![Planetário Virtual](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-3D-orange?style=for-the-badge&logo=three.js)

## ✨ Características

### 🎨 Design Premium
- **Glassmorphism moderno** com efeitos de blur e transparência
- **Paleta de cores suave** otimizada para conforto visual
- **Animações fluidas** e transições suaves
- **Tipografia elegante** com gradientes e efeitos de glow
- **Responsivo** - funciona perfeitamente em desktop, tablet e mobile

### 🚀 Experiência Interativa
- **Tela de boas-vindas** com animação de estrelas cintilantes
- **Câmera dinâmica** que segue planetas selecionados durante sua órbita
- **Visualização 3D realista** dos planetas com:
  - Rotação própria e orbital
  - Atmosfera com efeito de brilho
  - Luas orbitando seus planetas
  - Anéis de Saturno animados
  - Linhas de órbita translúcidas

### 📊 Informações Detalhadas
Cada planeta inclui dados completos:
- Nome e descrição
- Tamanho relativo
- Gravidade
- Temperatura média
- Duração do dia
- Distância do Sol (em UA)

### 🎮 Controles Intuitivos
- **Arrastar**: Rotacionar a visualização
- **Scroll**: Zoom in/out
- **Clique**: Selecionar planeta e ver detalhes
- **Botão X**: Fechar painel de detalhes

## 🛠️ Tecnologias

- **[Next.js 16](https://nextjs.org/)** - Framework React com Turbopack
- **[React 18](https://react.dev/)** - Biblioteca UI
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer para Three.js
- **[Three.js](https://threejs.org/)** - Biblioteca 3D WebGL
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Helpers úteis para R3F
- **CSS Modules** - Estilos com escopo local

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <https://github.com/DaviVasconcelos07/Planetario-virtual.git>
cd testeAntigravity
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 🎯 Como Usar

1. **Tela de Boas-vindas**
   - Aguarde as animações de entrada
   - Clique em "Explorar Agora" para entrar no sistema solar

2. **Navegação**
   - Use o mouse para arrastar e rotacionar a visualização
   - Use a roda do mouse para zoom
   - Clique em qualquer planeta para ver seus detalhes

3. **Visualização de Planetas**
   - A câmera seguirá automaticamente o planeta selecionado
   - Veja informações detalhadas no painel lateral
   - Clique no X para fechar e retornar à visão geral

## 📁 Estrutura do Projeto

```
testeAntigravity/
├── app/
│   ├── globals.css          # Estilos globais e design tokens
│   ├── layout.js            # Layout principal
│   ├── page.js              # Página inicial
│   └── planet-label.css     # Estilos dos labels dos planetas
├── components/
│   ├── UI/
│   │   ├── Overlay.js       # Interface de usuário principal
│   │   ├── Overlay.module.css
│   │   ├── WelcomeScreen.js # Tela de boas-vindas
│   │   └── WelcomeScreen.module.css
│   ├── CameraController.js  # Controle de câmera com tracking
│   ├── Moon.js              # Componente de lua
│   ├── OrbitLine.js         # Linhas de órbita
│   ├── Planet.js            # Componente de planeta
│   ├── SaturnRings.js       # Anéis de Saturno
│   ├── Scene.js             # Cena 3D principal
│   ├── SolarSystem.js       # Sistema solar completo
│   └── Sun.js               # Sol com efeito de brilho
├── data/
│   └── planets.js           # Dados dos planetas
└── package.json
```

## 🎨 Sistema de Design

### Paleta de Cores
```css
--bg-space: #0a0e27              /* Fundo escuro */
--text-primary: #f0f4ff          /* Texto principal */
--text-secondary: #b8c5e0        /* Texto secundário */
--accent-primary: #6366f1        /* Roxo primário */
--accent-glow: #7dd3fc           /* Azul brilhante */
--accent-soft: #a78bfa           /* Roxo suave */
```

### Efeitos
- **Glassmorphism**: `backdrop-filter: blur(20px)`
- **Transições**: `0.3s ease` para interações suaves
- **Animações**: Fade-in, slide-in, scale com cubic-bezier

## 🌟 Recursos Técnicos

### Camera Tracking
O sistema de câmera usa `getWorldPosition()` do Three.js para rastrear continuamente a posição 3D do planeta selecionado, atualizando a cada frame com interpolação suave via `lerp`.

### Hierarquia de Componentes 3D
```
SolarSystem
└── Planet (grupo orbital)
    └── Planet Group (rastreado pela câmera)
        ├── Mesh do Planeta
        ├── Atmosfera (shader customizado)
        ├── Anéis (se Saturno)
        └── Luas
```

### Shaders Customizados
- **Atmosfera**: Shader GLSL para efeito de brilho atmosférico
- **Sol**: Material emissivo com intensidade animada

## 🚀 Build para Produção

```bash
npm run build
npm start
```

O build otimizado será criado na pasta `.next/`.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linter

## 🎓 Aprendizados

Este projeto demonstra:
- Integração de Three.js com React
- Gerenciamento de estado 3D complexo
- Animações e transições suaves
- Design system moderno com CSS variables
- Glassmorphism e efeitos visuais premium
- Rastreamento de objetos 3D em tempo real
- Shaders GLSL customizados

