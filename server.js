var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : 'Article One | Vii',
        heading : 'Article One',
        date : 'July 25, 2017',
        content : `<p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>
            <p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>
            <p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>`
    },
    'article-two' : {
        title : 'Article Two | Vii',
        heading : 'Article Two',
        date : 'December 27, 2017',
        content : `<p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my second Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>
            <p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my second Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>
            <p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my second Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>`
    },
    'article-three' : {
        title : 'Article Three | Vii',
        heading : 'Article Three',
        date : 'July 4, 2017',
        content : `<p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my third Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>
            <p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my third Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>
            <p>Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my third Article and will be copied multiple times right in the page as where as in other two articles. Lorem ipsum is the best way, but there is nothing here so I'll say that this is the content for my first Article and will be copied multiple times right in the page as where as in other two articles.
            </p>`
    }
};


function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>This is ${heading}</h3>
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

var counter=0;
app.get('/counter', function(req,res) {
   counter++;
   res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
