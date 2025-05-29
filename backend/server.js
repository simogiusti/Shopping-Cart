const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// connessione MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/shopping_cart')
  .then(() => console.log("MongoDB Connesso"))
  .catch(err => console.error("Errore di connessione:", err));

// schema per i prodotti
const ProductSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  prezzo: Number
});

const Product = mongoose.model("Product", ProductSchema, 'prodotti');

// schema per il carrello
const CarrelloSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  prezzo: Number
});

const Carrello = mongoose.model("Carrello", CarrelloSchema, 'carrello');

// get prodotti
app.get("/api/prodotti", async (req, res) => {
  try {
    const prodotti = await Product.find();
    res.json(prodotti);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get carrello
app.get("/api/carrello", async (req, res) => {
  try {
    const carrello = await Carrello.find();
    res.json(carrello);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// aggiungere un prodotto al carrello
app.post("/api/carrello", async (req, res) => {
  try {
    const nuovoProdotto = new Carrello(req.body);
    await nuovoProdotto.save();
    res.json(nuovoProdotto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// rimuovere un prodotto dal carrello
app.delete("/api/carrello/:id", async (req, res) => {
  try {
    await Carrello.findByIdAndDelete(req.params.id);
    res.json({ message: "Prodotto rimosso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("Server avviato su http://localhost:3000"));
