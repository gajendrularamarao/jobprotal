<%-- 
    Document   : menu
    Created on : Apr 14, 2015, 6:40:13 PM
    Author     : Naidu
--%>

<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <link rel="stylesheet" href="<c:url value="/"/>css/jquery-ui.css">
        <link rel="stylesheet" href="<c:url value="/"/>css/modal1.css">
        <script src="<c:url value="/"/>js/jquery-1.10.2.js"></script>
        <script src="<c:url value="/"/>js/valid.js"></script>
        <script src="${pageContext.request.contextPath}/jqwidgets/jqx-all.js"></script>
        <script src="<c:url value="/"/>js/jquery-ui.js"></script>
        
        <link rel="stylesheet" href="<c:url value="/"/>css/apex.min.css" type="text/css" />
        <link rel="stylesheet" href="<c:url value="/"/>css/jquery-ui.min.css" type="text/css" />
        <link rel="stylesheet" href="<c:url value="/"/>css/4_2.css" type="text/css" />
        <link rel="stylesheet" href="<c:url value="/"/>css/responsive_grid.css" type="text/css" />
        <!--[if lte IE 8]>
        <link rel="stylesheet" type="text/css" href="<c:url value="/"/>css/ie.css" />
<![endif]-->
        
      
        <script type="text/javascript" src="<c:url value="/"/>js/modernizr.min.js"></script>
        <script type="text/javascript" src="<c:url value="/"/>js/4_2.min.js"></script>
          <script src="<c:url value="/"/>js/logout.js"></script>
        <style>
            tr.spaceindex td {padding-bottom: 20px;}
        </style>
        <!--<link rel="stylesheet" href="<c:url value="/"/>css/jquery-ui.css" type="text/css" />-->
        <!--<script type="text/javascript" src="<c:url value="/"/>js/com_skillbuilders_sbip_password.min.js"></script>-->
        <!--<script type="text/javascript" src="<c:url value="/"/>js/apex_session_timeout.min.js"></script>-->
        <script type="text/javascript" src="<c:url value="/"/>js/jquery.ui.button.js"></script>
        <!-- Disable Right click-->
        <script src="<c:url value="/"/>js/pageloader.js" ></script>
        <style type="text/css">
            div.fieldContainer > label {
                color: #404040;
                display: inline-block;
                font: 13px/16px "Helvetica Neue",Helvetica,Arial,sans-serif;
                padding: 3px 8px 3px 0;
            }

            section.uRegion input.text_field, section.uRegion select.selectlist, section.uRegion input.password, section.uRegion input[type="text"], section.uRegion input[type="password"], section.uRegion textarea, table.uReport input.text_field, table.uReport select.selectlist, table.uReport input.password, table.uReport input[type="text"], table.uReport input[type="password"], table.uReport textarea, div.fieldContainer input.text_field, div.fieldContainer select.selectlist, div.fieldContainer input.password, div.fieldContainer input[type="text"], div.fieldContainer input[type="password"], div.fieldContainer textarea {
                -moz-border-bottom-colors: none;
                -moz-border-left-colors: none;
                -moz-border-right-colors: none;
                -moz-border-top-colors: none;
                background-color: #FFFFFF;
                border-color: #C0C0C0 #C0C0C0 #B0B0B0;
                border-image: none;
                border-radius: 2px 2px 2px 2px;
                border-style: solid;
                border-width: 1px;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) inset;
                color: #404040;
                font-size: 18px;
                line-height: 18px;
                margin: 0;
                padding: 4px;
                transition: border 0.1s ease 0s, box-shadow 0.1s ease 0s;
            }
        </style>
        <script type="text/javascript">
//        window.onbeforeunload = OnBeforeUnLoad;
//        function OnBeforeUnLoad () {
//            return "All data that you have entered will be lost!";
//        }

        
    </script>
           <script>
               
//window.onunload = function()
//{
//if ((window.event.clientX < 0) || (window.event.clientY<0)) // close button
//{
//alert("Window Closed");
//}
//else if (window.event.altKey == true) // ALT + F4
//{
//alert("Window Closed");
//}
//else // for all other unload events
//{
//alert("unload event");
//}
//}


function vendorMenu(href,module) {
    
    console.log("href::"+href);
    console.log("module::"+module);
     $.ajax({
            type: "POST",
            url: "vendorMenu",
            data: { 
                J_HL_MODULE:module
                
            },
            traditional: true,
            dataType: 'html',
            cache: false,
            success: function (response) {
               //console.log(response);
               window.location.href="<c:url value="/"/>"+href;
//                window.location.href=href;
            },
            error: function (e) {
                /* alert('Error: ' + e.message()); */
            }

        });
}
        </script>
        

    </head>
    <body >
  <div class="se-pre-con"></div>
      <%-- <c:set var="modulecode" value="${moduleCode}"/>
     
        <c:choose>
            <c:when test="${fn:contains(modulecode, 'MaterialMaster')}">
                 <c:set value="matreialMaster" var="mModule"/>
            </c:when>
            <c:otherwise>
                 <c:set value="#" var="mModule"/>
            </c:otherwise>
        </c:choose>
        
        <c:choose>
            <c:when test="${fn:contains(modulecode, 'VendorMaster')}">
                 <c:set value="vendorMaster" var="vModule"/>
            </c:when>
            <c:otherwise>
                 <c:set value="#" var="vModule"/>
            </c:otherwise>
        </c:choose>
        
        <c:choose>
            <c:when test="${fn:contains(modulecode, 'CustomerMaster')}">
                  <c:set value="customerMaster" var="cModule"/>
            </c:when>
            <c:otherwise>
                  <c:set value="#" var="cModule"/>
            </c:otherwise>
        </c:choose>
        
        <c:choose>
            <c:when test="${fn:contains(modulecode, 'ServiceMaster')}">
            <c:set value="serviceMaster" var="sModule"/>
            </c:when>
            <c:otherwise>
                <c:set value="#" var="sModule"/>
            </c:otherwise>
        </c:choose>--%>
        
        
        
        

        <div id="wrapper">

            <%@ include file="header.jsp" %>

            <div id="body">
                <div id="panel"></div>
                <div id="imgregion">
                    
                   
                    <h1>${result}</h1>
                   
                </div>
                <div class="overlay" id="overlay" style="display:none;"></div>
<!--        <div id="wait" style="display:none;border-style: none;background: transparent;width:100%
                             ;height:89px;position:absolute;position:absolute;top: 50%;margin-top: -50px;">
            <img src='${pageContext.request.contextPath}/images/demo_wait.gif' width="64" height="64" style="left: 50%;"/></img><br></br>
            <h1 style="font-size:20px;text-wrap:none;color:#fff;width:100%;left: 20%;margin-left: -150px; ">Please wait while credentials have been Authenticated..</h1>
        </div>-->
                <div id="logoutDailog"></div>
            </div>
           
        </div>
    </body>
</html>