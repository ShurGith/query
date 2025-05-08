import { pool } from "../DB.js";


export const getProducts = async (req, res) => {
   // throw new Error('Method not implemented.');
    try {
        const [result] = await pool.query("SELECT * FROM products");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};
export const getProductById = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
};
export const newProduct = async (req, res) => {
    const { name, description, price } = req.body;
    const [rows] = await pool.query("INSERT INTO products (name, description, price) VALUES (?, ?, ?)", [name, description, price]);
    res.send({
        id: rows.insertId,
        name, description, images, features,
        active, oferta, descuento, units, 
        starts, user_id, price
    });
};
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const [result] = await pool.query("UPDATE products SET name = IFNULL(?, name), description = IFNULL(?, description), price = IFNULL(?, price) WHERE id = ?", [name, description, price, id]);
    console.log(result);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Product not found" });
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
    res.json(rows[0]);
};
export const deleteProduct = async (req, res) => {
    const [result] = await pool.query("DELETE FROM products WHERE id = ?", [req.params.id]);
    if (result.affectedRows <= 0) return res.status(404).json({ message: "Product not found" });
    res.sendStatus(204);
};
