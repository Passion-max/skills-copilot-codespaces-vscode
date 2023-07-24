// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const cors = require('cors');
const commentRouter = require('./routes/comments');

app.use(cors());

app.use(bodyParser.json());

app.use('/comments', commentRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));