
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!--[if HTML5]><![endif]-->
<!doctype html>
<!--[if lt IE 7 ]> <html class="ie6 no-css3 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7 no-css3 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8 no-css3 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9" lang="en"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
    <head>
        <!--[if !HTML5]>
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
        <meta charset="UTF-8">
        <title>Login</title>
        <script src="${pageContext.request.contextPath}/js/jquery-1.10.2.js"></script>
        <script src="${pageContext.request.contextPath}/jqwidgets/jqx-all.js"></script>
        <script src="<c:url value="/"/>js/jquery-ui.js"></script>
        <script src="<c:url value="/"/>js/valid.js"></script>

        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery-ui.min.css" type="text/css">


        <!--          <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.4/moment.min.js"></script>-->
        <!--<script src="js/valid.js"></script>-->

        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/apex.min.css" type="text/css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery-ui.min.css" type="text/css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery-ui.css" type="text/css" />
<!--        [if IE]><link rel="stylesheet" href="${pageContext.request.contextPath}/css/apex_ie.min.css?v=4.2.0.00.27" type="text/css" /><![endif]-->


        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/4_2.css" type="text/css" />
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/responsive_grid.css" type="text/css" />
<!--         <link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery-ui.css" type="text/css" />-->


        <script type="text/javascript" src="${pageContext.request.contextPath}/js/com_skillbuilders_sbip_password.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js/apex_session_timeout.min.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.ui.button.js"></script>


        <!--<script src="${pageContext.request.contextPath}/js/desktop_all.min.js" type="text/javascript"></script>-->
        <script src="${pageContext.request.contextPath}/js/legacy.min.js" type="text/javascript"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js/modernizr.min.js"></script>
        <!--[if lt IE 9]><script type="text/javascript" src="${pageContext.request.contextPath}/js/respond.min.js"></script><![endif]-->

        <!--        <script type="text/javascript" src="${pageContext.request.contextPath}/js/copy.js"></script>-->

        <style type="text/css">
            .fb_td{padding-left: 5%;}
            .linkdin_td{padding-left: 5%;}
            .twtr_td{padding-left: 5%;}
            .gpp_td{padding-right: 5%;}
            .overlay {
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                background-color: rgba(0,0,0,0.5);
                z-index: 10;}

            #waitback{
                width: 500px;
                height: 200px;
                line-height: 90px;
                position: fixed;
                top: 50%;
                left: 50%;
                margin-top: -100px;
                margin-left: -185px;
                background-color: #f1c40f;
                border-radius: 5px;
                text-align: center;
                z-index: 11;
            }
            td label{    margin-left: 30%;}
            section.uRegion > div.uRegionContent{
                padding: 0px !important;
                margin: 6px;
            }

            div.fieldContainer > label {
                color: #404040;
                display: inline-block;
                font: 13px/16px "Helvetica Neue",Helvetica,Arial,sans-serif;
                padding: 3px 8px 3px 0px;
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
            a:hover{
                text-decoration: none;
                color: #000000;
            }
            .comp_icon{margin-left: 6px;
                       width: 60px;
                       height: 60px;
            }
            .errorMsgRed{
                color: #000000;padding-top: 5%;

            }
            .errorMsgGreen{
                color: #000000;padding-top: 5%;

            }
        </style>
        <style type="text/css">
            .inputtext { width: 184px; height: 20px;}
        </style>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="-1" />
        <meta http-equiv="Cache-Control" content="no-cache" />

        <style>
            header#uHeader nav ul.uMainNav li a {
                border-left: 1px solid rgba(255, 255, 255, 0.15);
                color: rgba(0, 0, 0, 0.75);
                display: block;
                float: left;
                font: bold 12px/36px "Helvetica Neue",Helvetica,Arial,sans-serif;
                padding: 0 16px;
                text-align: center;
                text-decoration: none;
                text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
                transition: background 0.1s ease 0s;
            }

            section.uAlertRegion{background-color: #fff;}
            #topline {   
                background-color:rgb(77, 134, 208);
                color: rgb(211, 109, 36);           
                height: 10px;
            }
            div.fieldContainer > label{font: 19px/16px "Helvetica Neue",Helvetica,Arial,sans-serif;}
            /*           .data td:nth-child(odd){padding-right: 70px;width: 40%}*/
            .social-links a{text-decoration: none;}
        </style>

        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
    </head>
    <%	session.invalidate();
        String ssAutoStart = "";

        if (request.getParameter("ssAutoStart") != null) {
            ssAutoStart = request.getParameter("ssAutoStart");
        }

    %>
    <body>
        
        
        <!--        onsubmit="return(submit());-->
        <!--[if lte IE 6]><div id="outdated-browser">You are using an outdated web browser. For a list of supported browsers, please reference the Oracle Application Express Installation Guide.</div><![endif]-->
        <form action="<c:url value="/"/>loginhandler" method="post" name="wwv_flow" id="wwvFlowForm"   autocomplete="off">
            <input type=hidden id=ssAutoStart name=ssAutoStart value="<%=ssAutoStart%>">

            <div id="uBodyContainer">
                <div id="uThreeColumns">
                    <div class="apex_grid_container">
                        <div class="apex_cols apex_span_3" id="uLeftCol">
                            <aside>
                                ${errorMsg}
                            </aside>
                        </div>
                        <div class="apex_cols apex_span_5" id="uMidCol" style="margin-left: 5%;">

                            <section class="uRegion uWhiteRegion uAlertRegion  clearfix" id="R437236180427752739">
                                <hr id="topline">
                                <div class="uRegionHeading">

                                    <h1>Login</h1>
                                </div>
                                <div class="uRegionContent clearfix">

                                    <div class="apex_row">
                                        <div class="apex_cols apex_span_5 alpha">
                                            <div class="apex_row">
                                                <div class="apex_cols apex_span_5 alpha">
                                                    <div class="fieldContainer vertical" id="P101_USERNAME_CONTAINER" style="text-align: center;">
                                                        <table style="margin-left: 5%;">

                                                            <tbody>

                                                                <tr>
                                                                    <td align="left" nowrap class="apex_span_2"><label for="P101_USERNAME" class="uRequired">Username 
                                                                            <img src="${pageContext.request.contextPath}/images/f_spacer.gif" alt="" class="uAsterisk" />
                                                                            <span class="visuallyhidden">(Value Required)</span></label>
                                                                        <button  class="uButton iconButton iconOnly altButton help itemHelpButton" onclick="uShowItemHelp('P101_USERNAME');
                                                                                return false;" id="hb_P101_USERNAME" type="button" title="Help Text"><span><i></i></span></button>


                                                                    </td>                                                                


                                                                    <td align="right"> <input type="hidden" name="p_arg_names"/>
                                                                        <input type="text" name="rsUsername" id="rsUsername" value="" class="apex_span_2"/>                                                                                                                                
                                                                    </td>
                                                                <tr>
                                                                <tr colspan="2" style="text-align: center">
                                                            <span style="display: inline; width: 100%;" class="uItemHelp" id="P101_USERNAME"></span>
                                                            <span class="uItemHelp" id="P101_PASSWORD"></span>
                                                            </tr>    

                                                            </tbody>
                                                        </table>  
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="apex_row">
                                                <div class="apex_cols apex_span_5 alpha omega">
                                                    <div class="fieldContainer vertical" id="P101_PASSWORD_CONTAINER">
                                                        <table style="margin-left: 5%;">
                                                            <tr>
                                                                <td nowrap class="apex_span_2"><label for="P101_PASSWORD" class="uRequired">Password 
                                                                        <img src="${pageContext.request.contextPath}/images/f_spacer.gif" alt="" class="uAsterisk" />
                                                                        <span class="visuallyhidden">(Value Required)</span></label>
                                                                    <button class="uButton iconButton iconOnly altButton help itemHelpButton" onclick="uShowItemHelp('P101_PASSWORD');
                                                                            return false;" id="hb_P101_PASSWORD" type="button" title="Help Text"><span><i></i></span></button>
                                                                    <span class="uItemHelp" id="P101_PASSWORD"></span>
                                                                </td>
                                                                <td align="right">
                                                                    <input type="hidden" name="p_arg_names" value="466872352851272593" />
                                                                    <input type="password" name="rsPassword" id="rsPassword" value=""  class="apex_span_2"/>

                                                                </td>
                                                            </tr>
                                                            <!--                                                            <tr colspan="2">
                                                                                                                            <span class="uItemHelp" id="P101_PASSWORD"></span>
                                                                                                                        </tr>  -->
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="apex_row">
                                                <div class="apex_cols apex_span_5 alpha omega">
                                                    <div class="fieldContainer vertical" id="P101_PASSWORD_CONTAINER">
                                                        <table style="margin-left: 5%;">
                                                            <tr>
                                                               
                                                                
                                                            </tr>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="apex_row">
                                                <div class="apex_cols apex_span_5 alpha omega">
                                                    <div class="fieldContainer vertical" id="P101_PASSWORD_CONTAINER">
                                                        <table  style="margin-left: 5%;" >
                                                            <tr>
                                                                <td>
                                                                    <div class="apex_span_2" id="uRightCol" >
                                                                        <aside>

                                                                        </aside>
                                                                    </div>
                                                                </td>
                                                                <td align="left"  >

                                                                    <button  id="login_button" class="uButton uHotButton  iconButton user apex_span_1" onclick="frmsubmit();" type="button" >
                                                                        <span><i class="iL"></i>Login<i class="iR"></i></span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>                                           
                                        </div>

                                    </div>
                                    <!--                                    <div class="apex_row">
                                                                            <div class="apex_cols apex_span_5 alpha omega">
                                                                                <section class="uRegion uBorderlessRegion  clearfix" id="R416045860802373601" >
                                                                                    <div class="uRegionContent clearfix">
                                                                                        <table>
                                                                                            <tr>
                                                                                               
                                                                                                <td  class="apex_row ">
                                                                                                    <a href="${pageContext.request.contextPath}/registerForm" style="text-decoration: none">Register</a>
                                                                                                </td>
                                                                                                <td   class="apex_row apex_span_2" nowrap>
                                                                                                    <a href="${pageContext.request.contextPath}/fpswd_help.jsp" style="text-decoration: none">Forgot Password?</a>
                                                                                                </td>
                                                                                                <td  class="apex_row apex_span_3">
                                                                                                    <a href="javascript:popupURL('feedback.jsp');" style="text-decoration: none">Feedback</a>
                                                                                                </td>
                                                                                                <td   class="apex_row apex_span_2" nowrap>
                                                                                                    <a href="#" style="text-decoration: none">Getting Started</a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </div>
                                                                                </section>
                                                                            </div>
                                                                        </div>-->
                                    <div class="apex_row">
                                        <div class="apex_cols apex_span_5 alpha omega">
                                            <section class="uRegion uBorderlessRegion  clearfix" id="R416045860802373601" >

                                                <div class="uRegionContent clearfix">

<!--                                                    <table>
                                                        <tbody  align="left">
                                                            <tr>
                                                                <td >
                                                                    <a href="${pageContext.request.contextPath}/registerForm" style="text-decoration: none;padding-left: 47px">Register</a>
                                                                </td>
                                                                <td >
                                                                    <a href="#" style="text-decoration: none">Forgot Password?</a>
                                                                    <a href="${pageContext.request.contextPath}/fpswd_help.jsp" style="text-decoration: none">Forgot Password?</a>
                                                                </td>
                                                                <td >
                                                                    <a href="#" style="text-decoration: none">Feedback</a>
                                                                    <a href="javascript:popupURL('feedback.jsp');" style="text-decoration: none">Feedback</a>
                                                                </td>
                                                                <td >
                                                                    <a href="#" style="text-decoration: none">Getting Started</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>-->
                                            <table style="width:95%;margin-left: 2%;">
                                                <tr>
                                                    <td style="width:20%;padding-left:5%">
                                                        <a href="${pageContext.request.contextPath}/registerForm" style="text-decoration: none">Register</a>
                                                    </td>
                                                    <td style="width:30%;padding-left:2%" nowrap>
                                                        <a href="${pageContext.request.contextPath}/fpswd_help.jsp" style="text-decoration: none">Forgot Password?</a>
                                                    </td>
                                                    <td style="width:20%;padding-left:4%" nowrap>
                                                        <a href="javascript:popupURL('feedback.jsp');" style="text-decoration: none">Feedback</a>
                                                    </td>
                                                    <td style="text-align: right;padding-right:5%;width:30%" >
                                                        <a href="#" style="text-decoration: none">Getting Started</a>
                                                    </td>
                                                </tr>
                                            </table>

                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                    <div class="apex_row">
                                        <div class="apex_cols apex_span_5 alpha omega">
                                            <section class="uRegion uBorderlessRegion  clearfix" id="R416045860802373601" >

                                                <div class="uRegionContent clearfix">
                                                    <hr>
                                                    <table style="width:95%;margin-left: 3%;">
                                                        <tbody  align="left">
                                                            <tr>
                                                                <td class="fb_td">
                                                                    <a href="#" target="_blank" style="text-decoration: none">&nbsp;
                                                                        <img src="${pageContext.request.contextPath}/images/facebook.png" style="margin-right:2px"/>Facebook</a>
                                                                </td>
                                                                <td class="linkdin_td">
                                                                    <a href="#" target="_blank" style="text-decoration: none">&nbsp
                                                                        <img src="${pageContext.request.contextPath}/images/LinkedIn.png" style="margin-right:2px"/>LinkedIn</a>
                                                                </td>
                                                                <td class="twtr_td">
                                                                    <a href="#" target="_blank" style="text-decoration: none;">&nbsp;
                                                                        <img src="${pageContext.request.contextPath}/images/twitter.png" style="margin-right:2px"/>Twitter</a>
                                                                </td>
                                                                <td class="gpp_td">
                                                                    <a href="#" target="_blank" style="text-decoration: none">&nbsp
                                                                        <img src="${pageContext.request.contextPath}/images/g.png" style="margin-right:2px"/>Google+</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <hr>
                                                </div>
                                            </section>
                                            
                                        </div>
                                    </div>
                                </div>
                
                                <span class="uButtonContainer">

                                </span>
                            </section>
                            <div class="apex_cols apex_span_2" id="uRightCol">
                                <aside>

                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <input type="hidden" name="p_md5_checksum" value=""  />
            <input type="hidden" name="p_page_checksum" value="60D3216FE8A941F4682D6CCACF6D0FB6" id="pPageChecksum" />
        </form>
        <div id="result"></div>
        <!--        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>-->
        <script type="text/javascript">
            $(function() {

//                $(window).on('beforeunload', function() {
//                    var e = $.Event('webapp:page:closing');
//                    $(window).trigger(e); // let other modules determine whether to prevent closing
//                    if (e.isDefaultPrevented()) {
//                        // e.message is optional
//                        return 'You have unsaved stuff. Are you sure to leave?';
//                    }
//                });


//                $(window).bind("beforeunload", function() {
//                    return "Do you really want to close?";
//                });


//                $('#login_button').click(function(){
//    submit();
//    
//    
//  });

                //$('#wwvFlowForm').submit();
                $('#rsUsername').keypress(function(e) {
                    var key = e.which;
                    if (key == 13)  // the enter key code
                    {
                        $('#login_button').click();
                        return false;
                    }
                });
                $('#rsPassword').keypress(function(e) {
                    var key = e.which;
                    if (key == 13)  // the enter key code
                    {
                        $('#login_button').click();
                        return false;
                    }
                });



            });
            function frmsubmit() {
                console.log("submit");
                var user = document.getElementById('rsUsername').value;
                var user = user.trim();
                document.getElementById('rsUsername').value = user;
                var pass = document.getElementById('rsPassword').value;
                var pass = pass.trim();
                document.getElementById('rsPassword').value = pass;
//                  alert("user:::"+user+":::::pass::"+pass);
                console.log("user::::::::pass:::::");
                if (user == null || user == "")
                {
                    document.getElementById('rsUsername').focus();
                    document.getElementById("P101_USERNAME").innerHTML = 'Username Cannot be Null';
                    $("#P101_USERNAME").show();
                    $("#P101_PASSWORD").hide();
                    $("#P101_USERPASSWORD").hide();
                } else
                if (pass == null || pass == "")
                {
                    document.getElementById('rsPassword').focus();
                    document.getElementById("P101_PASSWORD").innerHTML = 'Enter a valid password';
                    $("#P101_PASSWORD").show();
                    $("#P101_PASSWORD").css("display", "inline-block");
                    $("#P101_USERNAME").hide();
                    $("#P101_USERPASSWORD").hide();
                } else
                if ((user == null || user == "") && (pass == null || pass == ""))
                {
                    //P101_USERPASSWORD
                    document.getElementById("P101_USERPASSWORD").innerHTML = '<br>Please Enter username and password';
                    // alert('');
                    $("#P101_USERPASSWORD").show();
                    $("#P101_USERNAME").hide();
                    $("#P101_PASSWORD").hide();
                } else {
                    $("#P101_USERNAME").hide();
                    $("#P101_PASSWORD").hide();
                    $("#P101_USERPASSWORD").hide();
                    $(".overlay").css("display", "block");
                    $("#wait").css("display", "block");
                    $("#waitback").css("display", "block");
                    $("#wwvFlowForm").submit();
                    //  submitLogin(user,pass);
                }
                return true;

            }


        </script>
        <div class="overlay" id="overlay" style="display:none;"></div>

        <div id="wait" style="display:none;">
            <!--             <div style="background-color:rgb(235, 236, 237);width:50%;margin-left: -15%;border: 1px solid rgb(90, 153, 232);border-radius: 10px;">
                        <img src='${pageContext.request.contextPath}/images/demo_wait.gif' width="64" style="margin-left: 45%;" /></img>            
                        <h1 style="font-size: 20px; color: rgb(90, 153, 232); width: 100%;  margin-left: 8%; " ><span>Please wait while credentials have been Authenticated..</span></h1><br>
                 
                    </div>-->
            <div class="flipWrapper" style="width: 450px;height: 125px">





                <div class="card card1" style="float:left">
                    <div class="face front">

                        <div class="toprow">
                            <!--<div class="comp_name"><a url="" >GRID</a></div>-->
                            <div class="comp_name">Message</div>
                        </div>
                        <div class="middlerow">

                            <div style="float:left;padding-top: 5%;">
                                <img src='${pageContext.request.contextPath}/images/demo_wait.gif' height="35px" width="35px">
                            </div>  




                            <div class="errorMsgRed" style="float:left;">Please wait while credentials have been Authenticated..</div>

                        </div>


                    </div>

                </div>
            </div>
        </div>


    </body>
</html>