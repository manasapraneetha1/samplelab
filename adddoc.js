<%@page import="java.sql.*"%>
<%@include file="getConnection.jsp" %>
<%
    Connection conn = null;
    
    try {
        String Name = request.getParameter("Name");
        String Phone = request.getParameter("Phone");
        String Email = request.getParameter("Email");
        String Specialistin = request.getParameter("Specialistin");
        
        conn = getConnection();
        ResultSet rs = ps_count.executeQuery();
        if(rs.next()){
        
        }
        out.println(Name + "==" + Phone + "==" + Email + "==" + Specalistin);
        PreparedStatement ps = conn.prepareStatement("insert into doctor(Name,Phone,Email,Specalistin) values(?,?,?,?)");
        ps.setString(1, Name);
        ps.setString(2, Phone);
        ps.setString(3, Email);
        ps.setString(4, Specalistin);
        ps.executeUpdate();
    } catch (Exception e) {
        out.println(e.getMessage());
    } finally {
        if (conn != null) {
            conn.close();
        }
    }
%>
