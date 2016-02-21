<%-- 
    Document   : Login Test
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
//

function submitTest()
{
    var selectedvals=new Array();
//    alert("submitTest");
    var totalcount=$("#answersSubmit").val();
    console.log("totalcount::"+totalcount);
    if (totalcount > 0) {
    
        for (var i = 0, max = totalcount; i < max; i++) {

var nameAtt="name"+(i+1);
console.log("nameAtt:::"+nameAtt);
             var val=$('input[name='+nameAtt+']:checked').val();
             console.log("val::"+val);
             if (val != null) {
     selectedvals.push(val);
}
            
    }
}
   $("#answerQues").val(selectedvals);
   $("#totalQues").val(totalcount);
   $("#testSubmit").submit();
//    alert(selectedvals);
}

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
   

        <div id="wrapper">

            <%@ include file="header.jsp" %>

<!--            <div id="body">
                
                <div id="imgregion">
                    
                    welcome to Test
                    
                    
                    
                        
                   
                   
                </div>
                <div class="overlay" id="overlay" style="display:none;"></div>
        <div id="wait" style="display:none;border-style: none;background: transparent;width:100%
                             ;height:89px;position:absolute;position:absolute;top: 50%;margin-top: -50px;">
            <img src='${pageContext.request.contextPath}/images/demo_wait.gif' width="64" height="64" style="left: 50%;"/></img><br></br>
            <h1 style="font-size:20px;text-wrap:none;color:#fff;width:100%;left: 20%;margin-left: -150px; ">Please wait while credentials have been Authenticated..</h1>
        </div>
                
            </div>-->
           
        </div>
            <div id="logoutDailog"></div>
            <table style="text-align: center;" width="100%">
                <c:set value="0" var="listcnt"/>
                <c:forEach items="${quesList}" var="quesList" varStatus="listCount">

                    <c:set value="${listCount.count}" var="listcnt"/>
                    <tr>
                        <td>${listCount.count}.${quesList.quesName}</td>
                   
                    </tr>
                    <tr>
                        <td><input type="radio" value="A_${quesList.id}" name="name${listCount.count}"/>A.${quesList.optionA}</td>
                        <td><input type="radio" value="B_${quesList.id}" name="name${listCount.count}"/>B.${quesList.optionB}</td>
                    </tr>
                    <tr>
                        <td><input type="radio" value="C_${quesList.id}" name="name${listCount.count}"/>C.${quesList.optionC}</td>
                        <td><input type="radio" value="D_${quesList.id}" name="name${listCount.count}"/>D.${quesList.optionD}</td>
                    </tr>

                </c:forEach>
                    
            </table>
                <form action="testSubmit" method="post" id="testSubmit" style="text-align: center">
                 <input type="hidden" id="answersSubmit" value="${listcnt}">
                 <input type="hidden" id="answerQues" name="answerQues" value="">
                  <input type="hidden" id="totalQues" name="totalQues" value="">
                <input type="button" value="Submit Test" onclick="submitTest()"/>
            </form>
    </body>
</html>