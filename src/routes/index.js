import express from 'express';
import bookRoutes from './booksRoutes.js';
import authorRoutes from './authorsRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send('Hello World')
  })

  app.use(
    express.json(),
    bookRoutes,
    authorRoutes
  )
}

export default routes;