<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.sql.*" %>
<%@page import="java.sql.DriverManager"%>
<%@include file="getConnection.jsp" %>
<%
Connection conn = null;
try {
    conn = getConnection();
    String patientID = request.getParameter("patientID");
    String password = request.getParameter("password");
    String phone = request.getParameter("phone");
    
            String query = "SELECT * FROM patients WHERE patientID = ? AND phone = ?";
            PreparedStatement statement = conn.prepareStatement(query);
            statement.setString(1, patientID);
            statement.setString(2, password);
            ResultSet resultSet = statement.executeQuery();

            if(resultSet.next()){
                session.setAttribute("pat_id", patientID);
                 response.sendRedirect("pat_profile.jsp");
           }else{
            response.sendRedirect("loginpat.jsp?msg=LoginFailed");
            }
            resultSet.close();
            statement.close();
    
  

} catch (Exception e) {
    out.println(e.getMessage());
} finally {
    if (conn != null) {
        conn.close();
    }
}
%>
