<html>
  <head>
    <title>User</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul>
        <li>{{ user._id }}</li>
        <li>{{ user.realName }}</li>
        <li>{{ user.password }}</li>
        <li>{{ user.mobile }}</li>
        <li>{{ user.createdAt }}</li>
    </ul>
  </body>
</html>
