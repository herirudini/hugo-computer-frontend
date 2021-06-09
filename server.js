function requireHTTPS(req, res, next) {
if (!req.secure && req.get('x-forwareded-proto') !== 'https') {
return res.redirect('https://' + req.get('host') + req.url)
}
next()
}
const express = require("express");
const app = express();
app.use(requireHTTPS)
app.use(express.static('./dist/e-commerce'));
app.get('/*', function(req,res){
res.sendFile('index.html', {root: 'dist/e-commerce'})
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
