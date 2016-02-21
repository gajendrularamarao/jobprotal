<%-- 
    Document   : errorPage
    Created on : 18 Nov, 2015, 5:07:25 PM
    Author     : Naidu
--%>

<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Error Page</title>


        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/4_2.css" type="text/css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/responsive_grid.css" type="text/css" />
        <script type="text/javascript" src="<c:url value="/"/>js/jquery-1.10.2.js"></script>
        <script src="${pageContext.request.contextPath}/js/valid.js"></script>
        <script src="${pageContext.request.contextPath}/jqwidgets/jqx-all.js"></script>
        <!--<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>-->
        
        <script>
            function selectRadio(){
                var value = $('input[name=terminate]:checked').val();
                var mod_url = $('#modulechooserurl').attr("url");
                mod_url = mod_url+"?terminate="+value;
                $('#modulechooserurl').attr("href",mod_url);
            }
        </script>
        <style>

            #comp_body{
                margin-top: 10%;
                margin-left: 35%;
                background-color: #EDEDED !important;
                /*color: #2779aa;*/
            }
            .flipWrapper {
                float: left;
                -webkit-perspective: 1000;
                /*                width: 350px;
                                height: 175px;*/
                position: relative;
            }
            .flipWrapper .card {
                width: 100%;
                height: 100%;
                border: 1px solid #B9CFED;
                border-radius: 10px;
            }
            .flipWrapper .card .face {
                width: 100%;
                height: 100%;
                font-size: 14px;
                /*font-weight: bold;*/
                text-align: center;
                line-height: 30px;
            }
            .flipWrapper .card .front {
                position: absolute;
                z-index: 1;
                background: #ffffff;
                border-radius: 10px;
            }



            .toprow{
                /*height: 12%;*/
                padding-left: 10px;
                /*border-radius: 6px 6px 0px 0px;*/
                background-image: linear-gradient(#C1D5EE, #85B3EF);
                color: #000;
                font-size: 13px;
                font-weight: bold;
                /*border: 1px solid #9AAEC8;*/
                background: #B9CFED url("../images/jquery-ui-theme/ui-bg_highlight-soft_90_b9cfed_1x100.png") repeat-x scroll 50% 50%;
                border-radius: 7px 7px 0px 0px;
            }
            .middlerow:not(.comp_name){
                /*padding: 10px 10px 0px 0px;*/
                width: 100%;
                /*height: 50%;*/
                text-align: left;
                /*line-height: 40px;*/
                text-align: center;
                text-indent: 25px;
                /*background-color: #FFFFFF;*/
                /*background-color: #EDEDED;*/
            }
            .comp_name {text-align: left;}
            .bottomrow{
                width: 100%;
                bottom: 0%;
                /*height: 20%;*/
                /* text-align: left;*/
                color: graytext;
                /*margin: 15px 20px;*/
                /*background-color: #d7ebf9;*/
                /*background-color: whitesmoke;*/
                /*border-radius: 0px 0px 10px 10px;*/
            }


            a{
                /*text-decoration: none;*/
                color: #2779aa;
                /*color: #fff;*/
            }
/*            a:hover{
                text-decoration: none;
                color: #000000;
            }*/
            .comp_icon{margin-left: 6px;
                       width: 60px;
                       height: 60px;
            }
            .errorMsgRed{
                color: graytext;padding-top: 5%;

            }
            .errorMsgGreen{
                color: graytext;padding-top: 5%;

            }
        </style>

    </head>
    <body>
        <div id="wrapper" >
            <header id="uHeader">
                <div class="apex_grid_container clearfix">
                    <div class="apex_cols apex_span_12">

                        <div class="logoBar">
                            <h1></a></h1>
                            <div class="userBlock">
                                <a href="${pageContext.request.contextPath}/registerForm">
                                    <img src="${pageContext.request.contextPath}/images/f_spacer.gif" class="navIcon register" alt="" />Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div class="apex_grid_container clearfix">
                        <div class="apex_cols apex_span_12">
                            <ul class="uMainNav">
                                <li style="margin-top: -5px;">
                                    <a class="active" href="<c:url value="/"/>">Login</a>
                                </li>
                                <!-- <li><a href="javascript:apex.submit('T_PAGE_1');">Home</a></li> -->
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div id='comp_body' >

                <c:choose>
                    <c:when test="${returnCde!='ALREADY_LOGGED_IN'}">

                        <div class="flipWrapper" style="width: 350px;height: 175px">
                        </c:when>
                        <c:otherwise>

                            <div class="flipWrapper" style="width: 450px;height: 250px;">
                            </c:otherwise>
                        </c:choose>


                        <div class="card card1" style="float:left">
                            <div class="face front">

                                <div  class="toprow">
                                    <!--<div class="comp_name"><a url="" >GRID</a></div>-->
                                    <div class="comp_name">Message</div>
                                </div>
                                <div  class="middlerow">
                                    <c:if test="${returnCde!='TESTNOTATTEND'}">
                                        <div style="float:left;padding-top: 5%;">
                                            <img src="<c:url value="/"/>images/exclamation5.png" height="35px" width="35px"/>
                                        </div>  
                                    </c:if>
                                    <c:choose>
                                        <c:when test="${returnCde!='TESTNOTATTEND'}">

                                            <div class="errorMsgRed">${errorMesg}</div>
                                        </c:when>
                                        <c:when test="${returnCde=='REGISTER'}">
                                            
                                            <div class="errorMsgRed">${errorMesg}</div>
                                        </c:when>
                                        <c:otherwise>
                                            <div style="float:left;padding-top: 5%;text-align: center;text-indent: 8px;color: graytext;width: 100%;">
                                                ${errorMesg}
                                            </div>
                                            <div class="errorMsgGreen"  style="text-align: left;">
                                                <span>Would you like to Attend the Test: </span><br>
                                               
                                            </div>
                                        </c:otherwise>
                                    </c:choose>



                                </div>

                                <div  class="bottomrow">
                                    <c:choose>
                                        <c:when test="${returnCde=='TESTNOTATTEND'}">
                                            <c:choose>
                                                <c:when test="${role !=null && role == 'FUNCT_CONSULTANT'}">
                                                    <div> <a href="#" style="text-decoration: none;"><input type="button" value="Yes"/></a> &nbsp;&nbsp;&nbsp;<a href="<c:url value="/"/>loginpage" style="text-decoration: none;"><input type="button" value="No"/></a></div>
                                                        </c:when>
                                                        <c:when test="${role !=null && role == 'ADMIN'}">
                                                    <div> <a href="#" style="text-decoration: none;"><input type="button" value="Yes"/></a> &nbsp;&nbsp;&nbsp;<a href="<c:url value="/"/>loginpage" style="text-decoration: none;"><input type="button" value="No"/></a></div>
                                                        </c:when>
                                                        <c:otherwise>
                                                        <div> <a href="<c:url value="/"/>test"  style="text-decoration: none;" id="modulechooserurl"><input type="button" value="Ok"/></a> &nbsp;&nbsp;&nbsp;<a href="<c:url value="/"/>" style="text-decoration: none;"><input type="button" value="Cancel"/></a></div>
                                                        </c:otherwise>
                                                    </c:choose>


                                        </c:when>
                                        <c:otherwise>
                                            <div> <a href="<c:url value="/"/>" style="text-decoration: none;"><input type="button" value="OK"/></a></div>
                                        </c:otherwise>
                                    </c:choose> 


                                </div>
                            </div>

                        </div>
                    </div>

                     <div class="overlay" id="overlay" style="display:none;"></div>
        <div id="wait" style="display:none;border-style: none;background: transparent;width:100%
                             ;height:89px;position:absolute;position:absolute;top: 50%;margin-top: -50px;">
            <img src='${pageContext.request.contextPath}/images/demo_wait.gif' width="64" height="64" style="left: 50%;"/></img><br></br>
            <h1 style="font-size:20px;text-wrap:none;color:#fff;width:100%;left: 20%;margin-left: -150px; ">Please wait while credentials have been Authenticated..</h1>
        </div>

                </div>
                <%@ include file="footer1.jsp" %>
            </div>  
    </body>
</html>
