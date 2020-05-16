<html>
  <head>
    <title>User List</title>
    <link rel="stylesheet" href="/public/css/main.css" />    
  </head>
  <body>
    <table>
      <tr>
        <th>no</th>
        <th>name</th>
        <th>course</th>
        <th>grade</th>
        <th>limit</th>
        <th>status</th>
        <th>supOut</th>
        <th>subOut</th>
      </tr>
      {% for item in users %}
      <tr>
        <td>{{ item.no }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.course }}</td>
        <td>{{ item.grade }}</td>
        <td>{{ item.limit }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.supOut }}</td>
        <td>{{ item.subOut }}</td>        
      </tr>
      
      {% endfor %}
    </table>
  </body>
</html>
