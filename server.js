var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
    title: 'Article-One | Vipul Singh',
    heading: 'Article One',
    date: 'August 11, 2017',
    content: `
                <p>
                    Hello Everyone! This is my first aricle on IMAD. So be tune to see more upcoming latest artices on lifes.
                </p>
                <p>
                    Hello Everyone! This is my first aricle on IMAD. So be tune to see more upcoming latest artices on lifes.
                </p>
                <p>
                    Hello Everyone! This is my first aricle on IMAD. So be tune to see more upcoming latest artices on lifes.
                </p>
                <p>
                    Hello Everyone! This is my first aricle on IMAD. So be tune to see more upcoming latest artices on lifes.
                </p>`
    },
    'article-two': {
        title: 'Article-Two | Vipul Singh',
        heading: 'Article Two',
        date: 'August 12, 2017',
        content: `<p>
                    Hello Everyone! This is my second aricle on IMAD. So be tune to see more upcoming latest artices on lifes.
                  </p>
               `
    },
    'article-three': {
        title: 'Article-Three | Vipul Singh',
        heading: 'Article Three',
        date: 'August 13, 2017',
        content: `<p>
                    Hello Everyone! This is my third aricle on IMAD. So be tune to see more upcoming latest artices on lifes.
                  </p>
                  `
    }
};

function createTemplate(data){

var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmlTemplate = `
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr />
                    <h3>
                        ${heading}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        ${content}
                    </div>
                </div>
            </body>
        </html>
        `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    //articleName == article-one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function(req, res){
   res.send('Article-Two is requested and will serve here'); 
});

app.get('/article-three', function(req, res){
   res.send('Article-Three is requested and will serve here'); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
