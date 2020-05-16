<html>
  <head>
    <title>SWAP</title>
    <link rel="stylesheet" href="/public/css/main.css" />    
  </head>
  <body>
    {% for key, value in data%}
    <p>{{ key +'|'+ value}}</p>
    {% endfor %}
  </body>
</html>
