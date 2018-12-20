import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 5001;

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'), (error) => {
    if (error) {
      res.status(500).send(error);
    }
  });
});

const { log } = console;
app.listen(PORT, () => {
  log('Server started on port: ', PORT);
});
