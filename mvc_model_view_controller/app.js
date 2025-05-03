const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const tarefaController = require('./controllers/tarefaController')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('./', tarefaController.exibirTarefas)
app.get('/adicionar', (req, res) => res.render('adicionarTarefa'))
app.get('/adicionar', tarefaController.adicionarTarefa)
app.get('/remover/id', tarefaController.removerTarefa)

const PORT = 3000

app.listen(PORT,() => console.log(`servidor rodando na porta ${PORT}`))
