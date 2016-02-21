<%-- 
    Document   : header2
    Created on : 10 Aug, 2015, 12:34:04 PM
    Author     : naidu
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<% String sUserCde = (String) session.getAttribute("ssUsername");
    String sRole = (String) session.getAttribute("ssRolename");
    String ssOrgname = (String) session.getAttribute("ssOrgname");
    String sUserlocat = (String) session.getAttribute("ssUserlocat");%>
<header id="uHeader">
    <div class="apex_grid_container clearfix">
        <div class="apex_cols apex_span_12">
            <div class="logoBar">
                <h1><a href="http://www.pilog.in" id="uLogo" target="_blank"><img src="<c:url value="/"/>images/PiLog Logo.png" height="35" /></a>
                </h1>
                <!--                <div class="userBlock1">
                                    <a href="menu.jsp" id="text" style="font: 11px/20px Helvetica Neue,Helvetica,Arial,sans-serif;
                                       font-weight: bolder; height: 20px;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0);text-transform: capitalize;  padding: 2px;">
                                        <img src="images/f_spacer.gif" class="navIcon home" />Home
                                    </a>    
                                </div>-->
                <div class="userBlock">
                      <img src="<c:url value="/"/>images/organization_icon.png" class="navIcon user" alt="">
                    <span>${labelobj['Organization'] != null ? labelobj['Organization']:"Organization"} :<%= ssOrgname%></span>
                    <img src="<c:url value="/"/>images/f_spacer.gif" class="navIcon user" alt="">
                    <span>User :<%= sUserCde%></span>
                    <span>
                        <img src="<c:url value="/"/>images/role_icon.png" style="vertical-align: top; width: 13px; height: 14px; margin:2px;"/>
                        Role: <%= sRole%></span>
                    <span>
                        <img src="<c:url value="/"/>images/instance_icon.png" style="vertical-align: top; width: 13px; height: 14px; 
                             margin:2px;">Instance: <%= sUserlocat%></span>
                </div>
            </div>
        </div>
    </div>
</header>
