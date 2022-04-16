import authors from '../models/Author.js';

class AuthorController{
  static getAllAuthors = (req, res) => {
    authors.find((err,authors) => {
      res.status(200).json(authors);
    })
  }

  static getAuthor = (req, res) => {
    authors.findById(req.params.id, (err, author) => {
      if(err){
        res.status(400).send('Wrong Id');
      }else{
        res.status(200).send(author);
      }
    })
  }

  static createAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - failed to create a author`});
      }else{
        res.status(201).send(author.toJSON());
      }
    });
  }

  static updateAuthor = (req, res) => {
    authors.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).send('Success on update');
      }else{
        res.status(500).send({message: `${err.message} - failed to update a author`});
      }
    })
  }

  static deleteAuthor = (req, res) => {
    authors.findByIdAndDelete(req.params.id, (err) => {
      if(err) {
        res.status(500).send({message: err.message});
      }else{
        res.status(200).send({message: 'Success on Delete'});
      }
    })
  }

}

export default AuthorController