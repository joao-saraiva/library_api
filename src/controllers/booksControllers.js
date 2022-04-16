import books from '../models/Book.js';

class BookController{
  static getAllBooks = (req, res) => {
    books.find().populate('author').exec((err,books) => {
      res.status(200).json(books);
    })
  }

  static getBook = (req, res) => {
    books.findById(req.params.id, (err, book) => {
      if(err){
        res.status(400).send('Wrong Id');
      }else{
        res.status(200).send(book);
      }
    })
  }

  static getBooksByPublisher = (req, res) => {
    books.find({'publisher': req.query.publisher}, {}, (err, books) => {
      if(err){
        res.status(500).send({message: `${err.message}, invalid param`});
      }else{
        res.status(200).send(books);
      }
    })
  }

  static createBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - failed to create a book`});
      }else{
        res.status(201).send(book.toJSON());
      }
    });
  }

  static updateBook = (req, res) => {
    books.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send('Success on update');
      }else{
        res.status(500).send({message: `${err.message} - failed to update a book`});
      }
    })
  }

  static deleteBook = (req, res) => {
    books.findByIdAndDelete(req.params.id, (err) => {
      if(err) {
        res.status(500).send({message: err.message});
      }else{
        res.status(200).send({message: 'Success on Delete'});
      }
    })
  }

}

export default BookController