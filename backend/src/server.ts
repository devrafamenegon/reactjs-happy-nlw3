// ROTA = CONJUNTO
// RECURSOS = USUÁRIO

// MÉTODOS HTTP = GET, POST, PUT, DELETE
// PARÂMETROS

// GET = Buscando informação (lista, item)
// POST = Criando informação

// PUT = Editando informação
// DELETE = Deletando informação

// Query Params: http://localhost:3333/users?search=diego 
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body http://localhost:3333/users (enviar dados compostas)

// console.log(request.query);   (Query Params)
// console.log(request.params);  (Route Params)
// console.log(request.body);    (Body)



import express from 'express'; // importando o express
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection'; // importando o banco de dados

import routes from './Routes'; // separando as rotas em um arquivo e passando elas para o server por aqui
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json()); // define que as respostas do servidor serão feitas em formato .json (objetos)
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333); // ouvir a porta 3333



