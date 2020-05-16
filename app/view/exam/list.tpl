<html>
  <head>
    <title>Exam List</title>
    <link rel="stylesheet" href="/public/css/main.css" />    
  </head>
  <body>
    <table>
      <tr>
        <th>no</th>
        <th>name</th>
        <th>course</th>
        <th>grade</th>
        <th>status</th>        
      </tr>
      {% for item in exams %}
      <tr>
        <td>{{ item.no }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.course }}</td>
        <td>{{ item.grade }}</td>
        <td>{{ item.status }}</td>
      </tr>
      
      {% endfor %}
    </table>
  </body>
</html>
