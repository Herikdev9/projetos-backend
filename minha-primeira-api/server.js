const express = require('express');
const app = express();      

//Middleware para permitir que o express entenda JSON no corpo das requisições 
app.use(express.json());

//Rota GET inicial (teste de saude da API)
app.get('/', (req,res) => {
    res.json({mensagem: 'API Node.js rodando com sucesso!'});
});

//Rota POST (simulando o envio de dados)
app.post('/usuarios', (req,res) =>{
    const{ nome, cargo } = req.body;
    res.status(201).json({
        status: 'criado',
        usuario:{ nome, cargo }
    });
});

//definindo a porta do servidor 
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`servidor rodadando em http://localhost:${PORTA}`)
})