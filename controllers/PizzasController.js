const pizzas = require('../database/Pizzas.json');

const PizzasController = {
    listar: (req, res) => {
        res.render('pizzas', { pizzas });
    },

    mostrar: (req,res)=>{
        const { id } = req.params;
        const pizza = pizzas.find((p)=> p.id == id);
        res.render('pizza', { pizza });
    },

    buscar: (req,res)=>{
        const trechoBuscado = req.query.q;
        console.log(trechoBuscado);

        if(trechoBuscado == ""){
            res.redirect('/');
        }else{
            let resultado = pizzas.filter( p=> p.nome.toLocaleUpperCase().includes(trechoBuscado.toUpperCase()));
            res.render('pizzas', { pizzas: resultado, busca: trechoBuscado });

        }
    }

}

module.exports = PizzasController;