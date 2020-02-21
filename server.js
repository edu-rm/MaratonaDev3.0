// configurando o servidor

const express = require("express")
const server = express()

//configurar o servidor para apresentar arquivos extras/estaticos

server.use(express.static('public'))

//habilitar body do form

server.use(express.urlencoded({ extended:true }))

//configurando a template engine

const nunjucks = require("nunjucks")
nunjucks.configure("./", {
    express : server, // voce vai usar o express e ela aqui se chama server
    noCache : true,
})



const donors = [
    {
        name : "Diego",
        blood: "AB"
    },
    {
        name : "Nome 2",
        blood: "AB+"
    },
    {
        name : "Fulano",
        blood: "O-"
    },
    {
        name : "Ciclano",
        blood: "AB"
    }
]






//configurar a apresentação da página

server.get("/", function(req, res){
    return res.render("index.html", { donors })
})

server.post("/", function(req, res){
    const nome = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    donors.push({
        name: nome,
        blood : blood
    })

    return res.redirect("/")
})


//ligar o servidor e permitir acesso na porta 3000
server.listen(3000)