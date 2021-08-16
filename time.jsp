<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.util.Date" %>
<%@ page import="java.text.SimpleDateFormat" %>
<html>
   <head>
      <title> TOMCAT 웹 서비스 시작</title>
   </head>
   <body>
      <h2>TOMCAT 웹 서비스  시작하기</h2>
      <%
         String myname="최정우";
         String today=(new java.util.Data()).toLocaleString();
      %>
      <strong><%= myname %></strong> 홈페이지에 오신 것을 환영합니다.<br>
      오늘은 : <%= today %> 입니다.
      </P>
   </body>
</html>