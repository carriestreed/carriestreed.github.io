var express   = require('express'),
    PORT      = process.env.PORT || 3000,
    App       = express()

app.use(express.static('./'))

app.listen(PORT, function() {
  console.log('server is listening on port ' + PORT + '!')
});
