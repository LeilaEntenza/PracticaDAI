import express from "express";

const app = express();
const port = 3000;

app.listen(port, () =>{
    
})
app.use(express.json());

app.get('/',  (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get('/numero', (req, res) =>{
    res.send(42);
});



app.get('/usuario', (req, res) => {
    let usuario = {
        nombre:"ana", edad:"25"
    }
  res.json(usuario);  
});



app.get('/productos', (req, res) => {
    let productos = ["Mouse", "Teclado", "Monitor"];
    res.json(productos);
});



app.get('/materias', (req, res) => {
    let materias = [{"nombre": "matemática"}, {"nombre":"lengua"}]
    res.json(materias);
})

/*
- Incorporar un array de objetos "Persona"
    - Armar un endpoint que agregue una nueva persona
    - Armar un endpoint que muestre los datos del array persona

- Armar un endpoint para borrar a una persona en particular
    -Chequear que la persona a borrar exista. Sino mostrar un mensaje de "Persona no encontrada"

*/

let personas = [];
app.post('/persona', (req, res) => {
    let nombre = req.body;
    personas.push(nombre);
    res.send(nombre);
})

app.get('/personas', (req, res) => {
    res.json(personas);
})

app.delete('/eliminar:indice', (req, res) => {
    const indice = Number(req.params.indice);
    if (isNaN(indice) || personas[indice] == null){
        return res.send("Persona no encontrada")
    }
    personas.splice(indice, 1);
    res.send("Persona eliminada");
})