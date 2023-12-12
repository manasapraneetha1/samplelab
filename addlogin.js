<%@page import="java.sql.*" %>
<%@include file="getConnection.jsp" %>
<%
    Connection conn = null;
    
    try {
        String Name = request.getParameter("Name");
        String Email = request.getParameter("Email");
        String Phone = request.getParameter("Phone");
        String Address = request.getParameter("Address");
        String Gender = request.getParameter("Gender");
        String Age = request.getParameter("Age");
        int patientID = 1;
        
        conn = getConnection();
        PreparedStatement ps_count = conn.prepareStatement("select max(patientID)+1 from patients");
        ResultSet rs = ps_count.executeQuery();
        if(rs.next()){
            patientID = rs.getInt(1);
        }
        out.println(Name + "==" + email + "==" + phone + "==" + address + "==" + gender + "==" + age);
        
        PreparedStatement ps = conn.prepareStatement("insert into patients(Name,email,phone,address,gender,age,patientID) values(?,?,?,?,?,?,?)");
        ps.setString(1, Name);
        ps.setString(2, Email);
        ps.setString(3, Phone);
        ps.setString(4, Address);
        ps.setString(5, Gender);
        ps.setString(6, Age);
        ps.setInt(7, patientID);
        ps.executeUpdate();
    } catch (Exception e) {
        out.println(e.getMessage());
    } finally {
        if (conn != null) {
            conn.close();
        }
    }
%>
