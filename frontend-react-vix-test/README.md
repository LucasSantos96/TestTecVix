# Relatório de Entrega

## 📝 Observações do Desenvolvedor

> Gostaria de informar que, apesar de ter cumprido a vasta maioria dos requisitos técnicos solicitados, o módulo de Cadastro de Funcionários não foi finalizado em sua totalidade (faltando a migração de alguns campos específicos de perfil no banco de dados) devido ao esgotamento do prazo de entrega.
> 
> 
> No entanto, foi extremamente gratificante realizar este teste. Tive a oportunidade de aplicar conhecimentos em **Zustand**, **Prisma**, **Material UI (custom sx styling)** e **Clean Architecture** no Node.js. Aprendi muito durante o processo e estou à total disposição para "trocar uma ideia" em uma conversa técnica, onde poderei explicar melhor minhas decisões de arquitetura e como eu finalizaria os pontos pendentes.
> 

## 1. Infraestrutura e Setup Inicial

- **Environment Setup**: Configuração completa dos ambientes de Frontend e Backend através de arquivos `.env`, garantindo a comunicação correta com a API e o banco de dados.

## 2. Autenticação e Segurança (JWT)

- **Auth System**: Implementação de um sistema de login e registro funcional com autenticação via **Token JWT**.
- **Route Guarding**: Proteção de rotas privadas, garantindo que apenas usuários autenticados acessem o dashboard, enquanto as rotas de login/register permanecem públicas.
- **Password Hashing**: Integração do `bcryptjs` no backend para garantir que as senhas dos usuários e das VMs sejam armazenadas de forma segura.

## 3. Gestão de Máquinas Virtuais (VMs)

- **CRUD e Ciclo de Vida**: Implementação das funções de `start`, `pause`, `stop` e `edit` das VMs, tanto em formato de Card quanto em Tabela.
- **Dashboard Visual**: Criação de gráficos (mocados) para monitoramento de CPU e Memória, elevando a qualidade visual da Home.
- **Filtros Avançados**: Sistema de busca por nome, status, BrandMaster e a funcionalidade exclusiva de "Apenas minhas VMs", que filtra recursos baseado na empresa do usuário logado.
- **Banco de Dados**: Atualização do Schema Prisma para incluir campos críticos como `location` (ETaskLocation), `hasBackup` e senhas de acesso.

## 4. Módulos Administrativos (White Label & MSP)

- **Cadastro de MSP**: Desenvolvimento de um fluxo de cadastro em duas etapas (Step-by-Step) com integração de busca por CEP/CNPJ e filtros de status (POC).
- **Cadastro de Funcionários**: Criação da interface de gestão de colaboradores baseada no design fornecido, incluindo formulários estilizados e uma tabela de usuários com badges de permissão e status.

---

### ⬇️ Vou deixar a baixo o checklist com as tasks feitas ⬇️

**✅ Tarefas do Desafio**

**📋 Configuração Inicial**

- [x]  Criar arquivo `.env` baseado no `.env.example` (backend)
- [x]  Criar arquivo `.env` baseado no `.env.exemple` (frontend)

---

**🔐 Autenticação e Autorização**

- [x]  Implementar as rotas de CRUD para usuários
- [x]  Implementar rota de login do usuário
- [x]  Implementar tela de login `/login`
- [x]  Implementar rota de register do usuário
- [x]  Implementar tela de register `/register`
- [x]  Implementar autenticação com token JWT
- [x]  Proteger as rotas da aplicação (exceto login e register) para que somente usuários logados possam acessar
- [x]  Adicionar credenciais de usuários de teste no README e/ou `.env.example`

---

**🗄️ Updates no Banco de Dados**

- [x]  Adicionar coluna `pass` na tabela `VM` (senha da VM, respeitando regras de segurança)
- [x]  Adicionar coluna `location` do tipo `ETaskLocation` na tabela `VM`
- [x]  Adicionar coluna `hasBackup` na tabela `VM`

---

**🏠 Funcionalidades da Home Page**

**VM Card List:**

- [x]  Implementar a função de **start** da VM
- [x]  Implementar a função de **pause** da VM
- [x]  Implementar os gráficos (mocados) de **Uso de CPU**
- [x]  Implementar os gráficos (mocados) de **Uso de Memória**

---

**➕ Criação de VM**

- [x]  Implementar a lista dropdown dos **sistemas operacionais**
- [x]  Implementar corretamente a **criação de uma VM**
- [x]  Possibilitar a aceitação de **configurações dos cards de sugestão**

---

**💾 Gerenciamento de VMs (My VMs)**

**Filtros:**

- [x]  Implementar filtro de **pesquisa** (busca por nome)
- [x]  Implementar filtro por **status da VM**
- [x]  Implementar filtro por **MSP/BrandMaster**
- [x]  Implementar filtro **"Apenas minhas VMs"** (VMs exclusivas da mesma BrandMaster do usuário logado)

**Ações:**

- [x]  Possibilitar **stop/start** da VM pela tabela
- [x]  Possibilitar **stop/start** da VM pelo modal de edição

**Modal de Edição:**

- [x]  Trazer corretamente as **informações da VM** no modal
- [x]  Possibilitar editar: **senha da VM**
- [x]  Possibilitar editar: **nome da VM**
- [x]  Possibilitar editar: **vCPU**
- [x]  Possibilitar editar: **Memória**
- [x]  Possibilitar editar: **Disco**
- [x]  Possibilitar editar: **habilitar/desabilitar backup**

**Exclusão:**

- [x]  Possibilitar **deletar VM** (somente usuários tipo `admin` podem deletar)

---

**🏢 Cadastro de MSP**

**Referências visuais**: `screenshots/CadastroDeMSPStep01.png` e `screenshots/CadastroDeMSPStep02.png`

- [x]  Implementar componente para **cadastro de MSP em 2 etapas**
- [x]  Possibilitar **criar um novo MSP**
- [x]  Possibilitar **editar um MSP já existente**
- [x]  Adicionar campos de **endereço** (ou puxar pelo CEP e/ou CNPJ)
- [x]  Implementar filtros de **search**
- [x]  Implementar flag de **"Mostrar somente os que estão em POC"**

---

**👥 Cadastro de Funcionários**

**Referência visual**: `screenshots/CadastroDeFuncionarios.png`

- [x]  Implementar a tela de **cadastro de funcionários** seguindo a imagem de referência
- [x]  Atentar para a **responsividade**
- [x]  Considerar as **traduções** (i18n)

---

**🎨 Configuração White Label**

- [ ]  Permitir que a **logo da empresa** do usuário seja alterada
- [ ]  Somente usuários **admin** podem realizar essa alteração

---

**👤 Configuração de Perfil e Notificações**

- [ ]  Permitir a edição das **informações de contato**
- [ ]  Permitir a edição da **senha**
- [ ]  Permitir a edição da **imagem de perfil** do usuário logado

---

**🌟 Tarefas Opcionais/Diferenciais**

**Testes**

- [ ]  Implementar **testes de snapshot**
- [ ]  Implementar **testes unitários**
- [ ]  Implementar **testes de integração**
- [ ]  Implementar **testes E2E (end-to-end)**

**Documentação Swagger**

- [ ]  Fazer a **documentação Swagger da API**
- [ ]  Verificar a rota `/docs` na API para visualizar a documentação
