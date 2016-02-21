<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<html>
    <head>
       
        <title>Time out</title>
        <meta http-equiv="Cache-Control" content="no-cache"/>
        <meta http-equiv="Pragma" content="no-cache"/>
        <meta http-equiv="Expires" content="0"/>
        <script type='text/javascript'>
            if (navigator.appName=="Microsoft Internet Explorer") {        
                document.write("<link rel='stylesheet' type='text/css' href='stylesheets/jupiter.css'>")
            } else if (navigator.appName=="Netscape") {
                document.write("<link rel='stylesheet' type='text/css' href='stylesheets/jupiter-net.css'>")
            }
        </script>
        <!--Includes the javascript to disable rightclick menu-->
        <script type='text/javascript' src="<c:url value="/"/>include/ddisable.js"></script>
        
        
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/4_2.css" type="text/css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/responsive_grid.css" type="text/css" />
        
        <script src="<c:url value="/"/>js/jquery-1.10.2.js"></script>
        <script src="<c:url value="/"/>js/valid.js"></script>
        <script src="${pageContext.request.contextPath}/jqwidgets/jqx-all.js"></script>
        <!--<script src="<c:url value="/"/>js/jquery-ui.js"></script>-->
        
        <!--<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>-->

        <style>

            #comp_body{
                margin-top: 10%;
                /*text-align: center;*/
                margin-left: 40%;
                background-color: #EDEDED !important;
                /*color: #2779aa;*/
            }
            .flipWrapper {
                float: left;
                -webkit-perspective: 1000;
                width: 300px;
                height: 125px;
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
                height: 40%;
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
            a:hover{
                text-decoration: none;
                color: #000000;
            }
            .comp_icon{margin-left: 6px;
                       width: 60px;
                       height: 60px;
            }
        </style>
                
    </head>
  
    <body>
        
        <div id="wrapper" >
            <header id="uHeader">
                <div class="apex_grid_container clearfix">
                    <div class="apex_cols apex_span_12">

                        <div class="logoBar">
                            <h1><a href="#" id="uLogo"><img src="${pageContext.request.contextPath}/images/PiLog Logo.png" height="35" /></a></h1>
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

                <div class="flipWrapper">
                    <div class="card card1" style="float:left">
                        <div class="face front">

                            <div  class="toprow">
                                <!--<div class="comp_name"><a url="" >GRID</a></div>-->
                                <div class="comp_name">Message</div>
                            </div>
                            <div  class="middlerow">
                                <div style="float:left;padding-top: 5%;">
                                    <img src="<c:url value="/"/>images/exclamation5.png" height="35px" width="35px"/>
                                </div>  
                                <div style='color: graytext;padding-top: 5%;'>Your login has expired.</div>
                                
                            </div>

                            <div  class="bottomrow">


                        <a href="<c:url value="/"/>" style="text-decoration: none;padding-top: 10%;"><input type="button" value="Ok"/></a>

                            </div>
                        </div>

                    </div>
                </div>



            </div>
            <%@ include file="footer1.jsp" %>
        </div>  
<!--        <table height="95%" align="center">
            <tr>
                <td valign="middle" align="center">
                    <center>
                        <hr/>
                        <P class="p1" align="center">Your login has expired.</P>
                        <hr/>
                        <input type="button" name="goToMenu" value="Time Out" onclick="javascript : window.top.location.href= '<c:url value="/"/>'" class="but"/>
                        <br/>
                    </center>
                </td>
            </tr>
        </table>-->
    </body>
</html>
