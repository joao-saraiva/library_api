import mongoose from "mongoose";

mongoose.connect('mongodb+srv://joao:123@cluster0.8qyrz.mongodb.net/alura-node');

let db = mongoose.connection;

export default db