<%!
Connection getConnection(){
    Connection conn=null;
    try{
 Class.forName("oracle.jdbc.driver.OracleDriver");
 conn =DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:XE","system","student");
    }
    catch(Exception e){}
    finally{return conn;}
}
%>
