<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Patient Login</title>
</head>
<body>
    <h1>Patient Login</h1>
    <form method="post" action="patient_login.jsp">
        <label for="username">patientID: </label>
        <input type="text" id="patientID" name="patientID" required><br><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
