import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  res.send(`
    <html>
      <body>
        <iframe src="https://app.codechum.com" style="width:100%; height:100vh; border:none;"></iframe>
      </body>
    </html>
  `);
});

const port = parseInt(process.env.PORT) || 8081;
app.listen(port, () => {
  console.log(`app: listening on port ${port}`);
});
