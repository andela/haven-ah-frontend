import express from 'express';

const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 5001;

const { log } = console;
app.listen(PORT, () => {
  log('Server started on port: ', PORT);
});
