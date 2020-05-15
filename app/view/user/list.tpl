<html>
  <head>
    <title>User</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul>
      {% for item in users %}
        <li>{{ item._id }}</li>
        <li>{{ item.realName }}</li>
        <li>{{ item.password }}</li>
        <li>{{ item.mobile }}</li>
        <li>{{ item.createdAt }}</li>
      {% endfor %}
    </ul>
  </body>
</html>
