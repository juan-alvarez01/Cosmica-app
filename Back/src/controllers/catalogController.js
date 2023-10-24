const Product = require('../models/products'); 

  const catalogController = {};

  catalogController.createProduct = async (req, res) => {
    console.log("Recibida solicitud POST en /products", );

    try {
      const { name, game_producer, gender, description, release, age, platform } = req.body;
      const image = { filename: req.file.filename,  path: `http://localhost:5000/uploads/${req.file.filename}`};
      console.log(image);
      console.log(name, game_producer, gender, description, release, age, platform);
      const newGame = new Product({  image: image.path, name, game_producer, gender, description, release, age, platform });
      await newGame.save();
      res.json({ message: 'Juego agregado con éxito' });
    } catch (error) {
      console.error('Error al guardar el juego:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  catalogController.listProducts = async (req, res) => {
    try {
      const products = await Product.find(); 
      res.json(products);
    } catch (error) {
      console.error('Error al listar los productos:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  module.exports = catalogController;
