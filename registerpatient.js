<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<title>Patient Registration Form</title>
<style>
body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
}

form {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

</style>
</head>
<body>
<h1>Patient Registration Form</h1>
<form action="add_patient.jsp" method="post">
<input type="text" name="firstName" placeholder="First Name">
<input type="text" name="lastName" placeholder="Last Name">
<input type="text" name="email" placeholder="Email">
<input type="text" name="phone" placeholder="Phone Number">
<input type="text" name="address" placeholder="address">
<input type="text" name="gender" placeholder="gender">
<input type="text" name="age" placeholder="age"><!-- age in words -->
<input type="text" name="patientID" placeholder="Patient ID">
<input type="submit" value="Submit">
</form>
</body>
</html>
