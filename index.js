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

let usuario = {
    "nombre":"ana", "edad":"25"
}

app.get('/usuario', (req, res) => {
  res.json(usuario);  
});

let productos = ["Mouse", "Teclado", "Monitor"];

app.get('/productos', (req, res) => {
    res.json(productos);
});

let materias = [{"nombre": "matemática"}, {"nombre":"lengua"}]

app.get('/materias', (req, res) => {
    res.json(materias);
})