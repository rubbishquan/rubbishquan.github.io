var express = require('express')
var app = express()
app.set('port', process.env.PORT || 80)

app.set('view',path.join(__dirname,'/pages/hexo'))

app.set('view engine','ejs')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.bodyParser())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname,'pages')))
app.listen(app.get('port'))
