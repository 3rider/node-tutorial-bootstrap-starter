let express = require('express'),
    app = express();

app.use(express.static('./static'));

let server = app.listen(3000, () => {
  let { address, port } = server.address();
  console.log(`伺服器已建立${address}:${port}`);
});
