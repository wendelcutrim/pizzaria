const pizzas = require('../database/Pizzas.json');

const PizzasController = {
    listar: (req, res) => {
        res.render('pizzas', { pizzas, busca: '' });
    },

    mostrar: (req,res)=>{

        let idProxima;
        let idAnterior;

        let id = req.params.id;

        let posicao = pizzas.findIndex(p => p.id == id);

        let pizza = pizzas[posicao];

        if(posicao == pizzas.length - 1){
            idProxima = pizzas[0].id
        } else {
            idProxima = pizzas[posicao + 1].id;
        }
        
        if(posicao == 0){
            idAnterior = pizzas[pizzas.length - 1].id;
        } else {
            idAnterior = pizzas[posicao - 1].id;
        }
        
        res.render('pizza.ejs',{pizza, idAnterior, idProxima});
    },

    buscar: (req,res)=>{
        const trechoBuscado = req.query.q;
        console.log(trechoBuscado);

        if(trechoBuscado == ''){
            res.redirect('/');
        }else{
            let resultado = pizzas.filter(p=> p.nome.toLocaleUpperCase().includes(trechoBuscado.toUpperCase()));
            res.render('pizzas', { pizzas: resultado, busca: trechoBuscado });

        }
    }

}

module.exports = PizzasController;