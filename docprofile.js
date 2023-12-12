<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.sql.DriverManager" %>
<%@ include file="getConnection.jsp" %>
<html>
    <body>
<%
Connection conn = null;
try {
    conn = getConnection();
    String doctorID= (String) session.getAttribute("doc_ID");
    String countQuery =  "select p.firstname,p.lastname,a.patientID,a.fee,a.apointment_date,a.appointmentID from patients p,apointment a WHERE A.patientID=p.patientID and a.selectdoctor=? and a.apointment_date=to_date('2023-06-10','yyyy-mm-dd')";
       PreparedStatement ps=conn.prepareStatement(countQuery);
       ps.setString(1,doctorID);
       ResultSet rs = ps.executeQuery();
    int appointmentCount=0;%>
    <table border="1">
        <tr>
            <td>AppointMent ID</td>
            <td>Date</td>
             <td>Patient ID</td>
              <td>Name</td>
        </tr>
   <% while(rs.next()){%>
   <tr>
       <td><%=rs.getString(6)%></td>   
       <td><%=rs.getString(5)%></td>
        <td><%=rs.getString(3)%></td>
         <td><%=rs.getString(1)%> <%=rs.getString(2)%></td>
   </tr>
   
       <% appointmentCount++;
    }
    

   
    

    %>
    </table>
    
    <h1>Welcome, Doctor!</h1>
    <p>Appointment Count: <%= appointmentCount %></p>
    
    </body>
    </html>
    <%
} catch (Exception e) {
    out.println(e.getMessage());
} finally {
    if (conn != null) {
        conn.close();
    }
}
%>
