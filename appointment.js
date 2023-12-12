<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.*" %>
<%@include file="getConnection.jsp" %>
<!DOCTYPE html>
<html>
<head>
  <title>Patient Appointment</title>
  <style>
    body {
      background-color: #F5F5F5;
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
    
    .form-group input,
    .form-group select {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    
    .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4169E1;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      border: none;
      transition: background-color 0.3s;
    }
    
    .btn:hover {
      background-color: #6495ED;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Patient Appointment</h2>
    <form action="add_appoint.jsp" method="post">
      <div class="form-group">
        <label for="ID">Patient ID:</label>
        <input type="text" id="ID" name="PatientID" placeholder="Enter patient ID" required>
      </div>
      <div class="form-group">
        <label for="doctor">Select Doctor:</label>
        <select id="doctor" name="SelectDoctor" required>
          <option value="">Select a doctor</option>
          <%Connection conn = getConnection();
        PreparedStatement ps_count = conn.prepareStatement("SELECT doctorID,Name FROM doctor");
        ResultSet rs = ps_count.executeQuery();
        while (rs.next()) {
            %>
            <option value="<%=rs.getString(1)%>"><%=rs.getString(2)%></option>
            <%}%>
        </select>
      </div>
      <div class="form-group">
        <label for="date">apointment_date:</label>
        <input type="date" id="date" name="apointment_date" required>
      </div>
      <div class="form-group">
          <label  for ="fee">Fee:</label>
          <input type="text" id="name" name="Fee" placeholder="Should pay 600" required>
      </div>
      <div class="form-group">
        <input type="submit" class="btn" value="Submit Appointment">
      </div>
      
    </form>
  </div>
</body>
</html>
