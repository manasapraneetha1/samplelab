<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<%@page import="java.sql.DriverManager"%>
<%@include file="getConnection.jsp" %>

<%
    Connection conn = null;
    int appointmentID = 1;
    
    try {
        String patientID = request.getParameter("PatientID");
        String selectDoctor = request.getParameter("SelectDoctor");
        String apointment_date = request.getParameter("apointment_date");
        String fee = request.getParameter("Fee");
        
        conn = getConnection();
        PreparedStatement ps_count = conn.prepareStatement("SELECT MAX(appointmentID)+1 FROM apointment");
        ResultSet rs = ps_count.executeQuery();
        if (rs.next()) {
            appointmentID = rs.getInt(1);
        }
        
        out.println("Patient ID: " + patientID + "<br>");
        out.println("Select Doctor: " + selectDoctor + "<br>");
        out.println("apointment_date: " + apointment_date + "<br>");
        out.println("Fee: " + fee + "<br>");
        
        PreparedStatement ps = conn.prepareStatement("INSERT INTO apointment(PatientID, SelectDoctor, apointment_date, Fee, appointmentID) VALUES (?, ?, to_date(?,'yyyy-mm-dd'), ?, ?)");
        ps.setString(1, patientID);
        ps.setString(2, selectDoctor);
        ps.setString(3, apointment_date);
        ps.setString(4, fee);
        ps.setInt(5, appointmentID);
        ps.executeUpdate();
    } catch (Exception e) {
        out.println(e.getMessage());
    } finally {
        if (conn != null) {
            conn.close();
        }
    }
%>
