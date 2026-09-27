Orientação 

Página 1 (Cadastro): Deverá criar um usuário no Firebase Authentication utilizando o provedor E-mail/senha e o restante dos dados, gravar no Firestore, trazendo inclusive, o UID do usuário para os atributos no Firestore.  
Página 2 (Login): Deverá fazer a validação dos valores dos campos do Login no Firebase Authentication. Se os dados estiverem corretos, mudar para a página Principal, caso contrário, informar o usuário com uma mensagem na tela que o usuário não está cadastrado.
Página 3 (Principal): Deverá trazer os dados do usuário como: nome, sobrenome e data de nascimento e informá-las na tela.  

Deverá fazer o build e deploy do projeto e hospedar em um ambiente nuvem em que qualquer pessoa possa acessá-lo. 

Realizar a entrega no formato ZIP, com todo o código do projeto da forma com que foi feito, mas exclua a pasta node_modules na hora de entregar (ela sozinha tem em torno de 500 MB e será recriada com o comando npm init.

## Referências

### Bibliotecas
#### React Router Dom
[npm](https://www.npmjs.com/package/react-router-dom)
[doc](https://reactrouter.com/)
[repo](https://github.com/remix-run/react-router)

#### Documentações
[getting started with firebase](https://firebase.google.com/docs/auth/web/start?hl=pt-br)
[gettting started with firestore](https://firebase.google.com/docs/firestore/quickstart?hl=pt-br)
[Add data to Cloud Firestore](https://firebase.google.com/docs/firestore/manage-data/add-data)
[MDN | localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
[useNavigate](https://reactrouter.com/api/hooks/useNavigate#usenavigate)

#### Repositório
[Firebase / Snippets-web](https://github.com/firebase/snippets-web)