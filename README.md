# Fast Feet

## Descrição do projeto

O projeto Fast Feed é um sistema de gestão de entregas que visa facilitar o processo de transporte e entrega de encomendas. Com uma interface intuitiva e funcionalidades específicas para diferentes tipos de usuários, o Fast Feed atende tanto aos entregadores quanto aos administradores responsáveis pela gestão do sistema.

## Requisitos📄

### Requisitos Funcionais atendidos✅

- [x] RF01 Deve conter dois tipos de usuário entregador/e ou admin.
- [x] RF02 Deve ser possível realizar login com CPF e Senha.
- [x] RF03 Deve ser possível realizar a criação, leitura, atualização e exclusão dos entregadores.
- [x] RF04 Deve ser possível realizar a criação, leitura, atualização e exclusão das encomendas.
- [x] RF05 Deve ser possivel realizar a criação, leitura, atualização e exclusão dos destinatários.
- [x] RF06 Deve ser possível marcar uma encomenda como aguardando (Disponível para retirada).
- [x] RF07 Deve ser possível marcar uma encomenda como devolvida.
- [x] RF08 Deve ser possível alterar a senha de um usuário.
- [x] RF09 Deve ser possível listar as entregas de um usuário.
- [x] RF10 Apenas usuários com perfil de administrador têm permissão para realizar operações de criação, leitura, atualização e exclusão nas encomendas.
- [x] RF11 Apenas usuários com perfil de administrador têm permissão para realizar operações de criação, leitura, atualização e exclusão dos entregadores.
- [x] RF12 Apenas usuários com perfil de administrador têm permissão para realizar operações de riação, leitura, atualização e exclusão dos destinatários.
- [x] RF13 Somente o entregador que retirou a encomenda tem autorização para marcá-la como entregue.
- [x] RF14 Apenas os administradores podem modificar a senha de um usuário.
- [x] RF15 Os entregadores não têm permissão para listar as encomendas de outros entregadores.

### Requisitos não Funcionais 🚫

- [x] RNF01 O sistema deve garantir que as informações de login (CPF e Senha) sejam protegidas através de criptografia e medidas de segurança adequadas.
- [x] RNF02 O sistema deve implementar um controle de acesso robusto para garantir que apenas usuários autorizados possam realizar operações específicas, de acordo com seu perfil de usuário (administrador ou entregador).
- [x] RNF03 O sistema deve ser capaz de lidar com um grande número de usuários e transações simultâneas, garantindo tempos de resposta rápidos e eficiência em todas as operações.
- [x] RNF04 O sistema deve ser altamente disponível, minimizando o tempo de inatividade e garantindo que os usuários possam acessá-lo quando necessário.
- [x] RNF05 O sistema deve garantir a integridade dos dados em todas as operações, evitando a perda ou corrupção de informações importantes.
- [x] RNF06 O sistema deve fornecer uma interface intuitiva e fácil de usar, garantindo que os usuários possam realizar suas tarefas de forma eficiente, mesmo sem treinamento extensivo.
- [x] RNF07 O sistema deve ser projetado para ser escalável, permitindo que ele cresça conforme a demanda aumenta, sem comprometer o desempenho ou a disponibilidade.
- [x] RNF08 O sistema deve ser compatível com diferentes dispositivos e navegadores, garantindo uma experiência consistente para os usuários em todas as plataformas.
- [x] RNF09 O sistema deve ser facilmente mantido e atualizado, com código limpo e documentação adequada para facilitar futuras modificações e melhorias.

## Tecnologias 🌐

- NodeJS
- React
- JavaScript
- PrismaJS
- MySQL

## Instalação ⚙ ️

### Backend setup

```bash
  cd api
  npm install
```

make your .env file based on .env.dev

```bash
  npm run migrate:dev
  npm run dev
```

### Frontend setup

```bash
  cd web
  npm install
  npm run dev
```

## Demonstração 🎣

https://fast-feet.vercel.app

<!-- https://vercel.com/felieps-projects/fast-feet -->
<!-- https://dashboard.render.com/web/srv-cptb5fuehbks73f29730 -->

## Teste 🧪

## Autores 👤

- [@DreLuis](https://www.github.com/DreLuis)
- [@Felipe-Borba](https://www.github.com/Felipe-Borba)
- [@Vieira-Leonardo](https://www.github.com/vieira-leonardo)
- [@jonatasmedeiros155](https://www.github.com/jonatasmedeiros155)
