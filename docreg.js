<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <title>Doctor Registration</title>
  <style>
    body {
      background-color: skyblue;
      font-family: Arial, sans-serif;
    }
    
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    h2 {
      text-align: center;
      color: #333;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 5px;
      color: #666;
    }
    
    .form-group input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #4169E1;
      background-color: #FFC0CB;
      color: #000;
    }
    
    .form-group input::placeholder {
      color: #FF1493;
    }
    
    .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: green;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      border: none;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color: darkgreen;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Doctor Registration</h2>
    <form action="add_doc.jsp" method="post">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="Name" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="Phone" pattern="[0-9]{10}" placeholder="Enter your phone number" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="Email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="specialist">Specialist In:</label>
        <input type="text" id="specialist" name="Specialistin" placeholder="Enter your specialization" required>
      </div>
      <div class="form-group">
        <input type="submit" class="btn" value="Register">
      </div>
    </form>
  </div>
</body>
    </html>
