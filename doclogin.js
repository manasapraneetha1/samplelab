<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.sql.DriverManager" %>
<%@ include file="getConnection.jsp" %>

<%
Connection conn = null;
try {
    conn = getConnection();
    String doctorID = request.getParameter("doctorID");
    String password = request.getParameter("password");
    String phone = request.getParameter("phone");

    String query = "SELECT * FROM doctor WHERE doctorID = ? AND phone = ?";
    PreparedStatement statement = conn.prepareStatement(query);
    statement.setString(1, doctorID);
    statement.setString(2, password);
    ResultSet resultSet = statement.executeQuery();

    if (resultSet.next()) {
        session.setAttribute("doc_ID", doctorID);

        String countQuery =  "select p.firstname,p.lastname,a.patientID,a.fee,a.apointment_date,a.appointmentID from patients p,apointment a WHERE A.patientID=p.patientID and a.selectdoctor=1 and a.apointment_date=to_date('2023-06-10','yyyy-mm-dd')";
        Statement countStatement = conn.createStatement();
        ResultSet countResultSet = countStatement.executeQuery(countQuery);

        int apointment_ID = 0;
        if (countResultSet.next()) {
            apointment_ID = countResultSet.getInt("appointmentID");
        }

        countResultSet.close();
        countStatement.close();

        response.sendRedirect("doc_profile.jsp?apointment_ID=" + apointment_ID);
    } else {
        response.sendRedirect("logindoc.jsp?msg=LoginFailed");
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
