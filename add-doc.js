<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<%@include file="getConnection.jsp" %>
<%
    Connection conn = null;
    int doctorID=1;
    
    try {
        String Name = request.getParameter("Name");
        String Phone = request.getParameter("Phone");
        String Email = request.getParameter("Email");
        String Specialistin = request.getParameter("Specialistin");
        
        conn = getConnection();
        PreparedStatement ps_count = conn.prepareStatement("select max(doctorID)+1 from doctor");
        ResultSet rs = ps_count.executeQuery();
        if(rs.next()){
            doctorID = rs.getInt(1);
        }
        out.println(Name + "==" + Phone + "==" + Email + "==" + Specialistin);
        PreparedStatement ps = conn.prepareStatement("insert into doctor(Name,Phone,Email,Specialistin,doctorID) values(?,?,?,?,?)");
        ps.setString(1, Name);
        ps.setString(2, Phone);
        ps.setString(3, Email);
        ps.setString(4, Specialistin);
         ps.setInt(5, doctorID);
        int i = ps.executeUpdate();
        if(i>0){%>
        <div style="padding:7%;width:100%;margin-top:7%;background-color:#f0f0f0;color:#4a4a4a;font-size:160%">Doctor registered with ID : <%=doctorID%></div>
       <% }
        
    } catch (Exception e) {
        out.println(e.getMessage());
    } finally {
        if (conn != null) {
            conn.close();
        }
    }
%>
