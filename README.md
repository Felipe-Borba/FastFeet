# Fast Feet

Como se trata de um desafio, ele necessita de alguns conhecimentos além dos abordados, então é importante ter autonomia para conseguir pesquisar essas coisas caso não saiba como resolver. Por isso, lembre-se, tenha calma e acredite no seu processo.

Nesta atividade, não vamos mais descrever detalhadamente rotas e propriedades dos registros a serem criadas, mas sim, as regras e requisitos que a API deve ter. O motivo disso é para vocês também exercitarem o desenvolvimento e a estruturação dessa parte.

Nesse desafio desenvolveremos uma API (em Node.JS) e um front-end (React.js) para controle de encomendas de uma transportadora fictícia, a FastFeet.

## Requisitos

### Requisitos Funcionais

- [ ] RF01  Deve conter dois tipos de usuário entregador/e ou admin.
- [ ] RF02 Deve ser possível realizar login com CPF e Senha.
- [ ] RF03 Deve ser possível realizar a criação, leitura, atualização e exclusão dos entregadores.
- [ ] RF04 Deve ser possível realizar a criação, leitura, atualização e exclusão das encomendas.
- [ ] RF05 Deve ser possivel realizar a criação, leitura, atualização e exclusão dos destinatários.
- [ ] RF06 Deve ser possível marcar uma encomenda como aguardando (Disponível para retirada).
- [ ] RF07 Deve ser possível marcar uma encomenda como devolvida.
- [ ] RF08 Deve ser possível alterar a senha de um usuário.
- [ ] RF09 Deve ser possível listar as entregas de um usuário.
- [ ] RF10 Apenas usuários com perfil de administrador têm permissão para realizar operações de criação, leitura, atualização e exclusão nas encomendas.
- [ ] RF11 Apenas usuários com perfil de administrador têm permissão para realizar operações de criação, leitura, atualização e exclusão dos entregadores.
- [ ] RF12 Apenas usuários com perfil de administrador têm permissão para realizar operações de riação, leitura, atualização e exclusão dos destinatários.
- [ ] RF13 Ao marcar uma encomenda como entregue, o sistema exige o envio de uma foto como parte do processo.
- [ ] RF14 Somente o entregador que retirou a encomenda tem autorização para marcá-la como entregue.
- [ ] RF15 Apenas os administradores podem modificar a senha de um usuário.
- [ ] RF16 Os entregadores não têm permissão para listar as encomendas de outros entregadores.


### Requisitos não Funcionais

- [ ] RNF01 O sistema deve garantir que as informações de login (CPF e Senha) sejam protegidas através de criptografia e medidas de segurança adequadas.
- [ ] RNF02 O sistema deve implementar um controle de acesso robusto para garantir que apenas usuários autorizados possam realizar operações específicas, de acordo com seu perfil de usuário (administrador ou entregador).
- [ ] RNF03 O sistema deve ser capaz de lidar com um grande número de usuários e transações simultâneas, garantindo tempos de resposta rápidos e eficiência em todas as operações.
- [ ] RNF04 O sistema deve ser altamente disponível, minimizando o tempo de inatividade e garantindo que os usuários possam acessá-lo quando necessário.
- [ ] RNF05 O sistema deve garantir a integridade dos dados em todas as operações, evitando a perda ou corrupção de informações importantes.
- [ ] RNF06 O sistema deve ser capaz de registrar todas as atividades dos usuários, incluindo operações realizadas, datas e horas, permitindo uma auditoria eficaz e rastreamento de atividades suspeitas.
- [ ] RNF07 O sistema deve fornecer uma interface intuitiva e fácil de usar, garantindo que os usuários possam realizar suas tarefas de forma eficiente, mesmo sem treinamento extensivo.
- [ ] RNF08 O sistema deve ser projetado para ser escalável, permitindo que ele cresça conforme a demanda aumenta, sem comprometer o desempenho ou a disponibilidade.
- [ ] RNF09  O sistema deve ser compatível com diferentes dispositivos e navegadores, garantindo uma experiência consistente para os usuários em todas as plataformas.
- [ ] RNF10 O sistema deve ser facilmente mantido e atualizado, com código limpo e documentação adequada para facilitar futuras modificações e melhorias.

## Tecnologias
- NodeJS
- React
- JavaScript
- PrismaJS
- MySQl

## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```
    
## Demonstração

Insira um gif ou um link de alguma demonstração


## Teste
## Autores

- [@DreLuis](https://www.github.com/DreLuis)
- [@Felipe-Borba](https://www.github.com/Felipe-Borba)
- [@Vieira-Leonardo](https://www.github.com/vieira-leonardo)
- [@jonatasmedeiros155](https://www.github.com/jonatasmedeiros155)
