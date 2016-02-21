<%-- 
    Document   : Register
    Created on : 19 Nov, 2015, 10:20:37 AM
    Author     : pilog
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en"><head> 
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="A basic demo of Cropper.">
        <meta name="keywords" content="HTML, CSS, JS, JavaScript, jQuery plugin, image cropping, image crop, image move, image zoom, image rotate, image scale, front-end, frontend, web development">
        <meta name="author" content="Fengyuan Chen">

        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/cropper.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css">
        <title>User Registration</title>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery-ui.css"/>


        <script src="${pageContext.request.contextPath}/js/jquery-1.10.2.js"></script>
        <script src="${pageContext.request.contextPath}/js/valid.js"></script>
        

        <script src="${pageContext.request.contextPath}/js/jquery-ui.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.8.4/moment.min.js"></script>


        <!--<script src="javascript/dddw.js"></script>-->
        <!--<script src="js/valid.js"></script>-->
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/jquery-ui.min.css" type="text/css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/4_2.css" type="text/css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/tab_view.css" type="text/css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/responsive_grid.css" type="text/css">       
        <script  type="text/javascript" src="${pageContext.request.contextPath}/js/VisionDDW.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.ajaxfileupload.js"></script>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/registercss.css" type="text/css"/>
        <script  type="text/javascript" src="${pageContext.request.contextPath}/js/Registerjs.js"></script>
        <!--<script src="${pageContext.request.contextPath}/js/jquery.dateselector.js"></script>-->
        <script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/cropper.js"></script>
        <script src="${pageContext.request.contextPath}/js/main.js"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.ui.button.js"></script>
        <style> .ui-accordion .ui-accordion-content th {font-weight: bolder; font-family: Arial, Helvetica, sans-serif;}</style>
    </head>    

    <body onload="loadnewcaptcha();">
        <style>
            .ui-accordion .ui-accordion-content{overflow:hidden; }
        </style>   
        <header id="uHeader" >
            <div class="apex_grid_container clearfix">
                <div class="apex_cols apex_span_12">
                    <div class="logoBar">
                        <h1>                 </h1>
                        <div class="userBlock">
                            <!--<a href="register.jsp">-->
                            <a href="${pageContext.request.contextPath}/" >
                                <img src="${pageContext.request.contextPath}/images/f_spacer.gif" class="navIcon register" alt="">Login
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </header>



        <div id="confirm_dailog"></div>
        <div class="uBreadcrumbsContainer " id="R231296491821032121">
            <div class="apex_grid_container">
                <div class="apex_cols apex_span_12">
                    <div class="uBreadcrumbs">
                        <ul>
                            <li class="uStartCap"><span></span></li>
                            <li>
                                <a href="${pageContext.request.contextPath}/" >LogIn</a>
                            </li> 
                            <li class="uSeparator"><span></span></li>
                            <li class="active"><span>Registration</span></li> 
                            <li class="uEndCap">
                                <span></span>
                            </li>
                        </ul>
                    </div>
                    <br>

                    <div  id="user_registration" class="registerate">
                        <form action="register" id="registerForm" enctype="multipart/form-data" method="post">
                            <div class="form"> 

                                <!--<table border="0" id="taxDataForm"  >-->    
                                <table  border="0">  

                                    <col  class="col1" />
                                    <col class="col2"/>

                                    <col class="col3" />
                                    <col class="col4" />

                                    <tr>                                
                                        <th>Name</th> 
                                    </tr>
                                    <tr>                                
                                        <th>
                                            <input id="first_name" name="first_name" type="text" placeholder="First"  onkeypress="return IsSpecialChar(event, id);" style="text-transform:uppercase;"  onblur="return RegisterName(id)">                                    
                                            <span id="error_first_name" class="all_errors" style="color: red; display: none"><br>* Special Characters not allowed</span>
                                    <div id="dis_first_name" class="all_errors" style="color: red;" ></div>
                                    </th>                                                                    
                                    <!--                                    <th>
                                                                        <input id="middle_name" name="middle_name" placeholder="Middle" onkeypress="return IsSpecialChar(event, id);" style="text-transform:uppercase;" onblur="IsAlphabet(id)" type="text"/>
                                                                         <span id="error_middle_name" class="all_errors" style="color: red; display: none"><br>* Special Characters not allowed</span>
                                                                        <div id="dis_middle_name" class="all_errors" style="color: red;font-size:10px"></div>
                                                                        </th>                            -->
                                    <!--<th>Last Name<sup style="color: red">*</sup></th>-->
                                    <th>
                                        <input id="last_name" name="last_name" type="text" placeholder="Last" onkeypress="return IsSpecialCharSpace(event, id);" style="text-transform:uppercase;"  onblur="RegisterName(id)">
                                        <span id="error_last_name" class="all_errors" style="color: red; display: none"><br>* Special Characters not allowed</span>
                                    <div id="dis_last_name" class="all_errors" style="color: red;" ></div>
                                    </th>                                                              
                                    <!--<th>Nick Name</th>-->
                                    <!--                                    <th>
                                                                        <input id="nick_name"  name="nick_name" placeholder="Nick" onkeypress="return IsSpecialChar(event, id);" style="text-transform:uppercase;" onblur="IsAlphabet(id)" type="text"/>
                                                                        <span id="error_nick_name" class="all_errors" style="color: red; display: none"><br>* Special Characters not allowed</span>
                                                                        <div id="dis_nick_name" class="all_errors" style="color: red;font-size:10px"></div>
                                                                        </th>-->
                                    <th>User Name<sup style="color: red">*</sup></th>
                                    <th><input id="user_name" name="user_name" type="text" >
                                        <span id="error_user_name" class="all_errors" style="color: Red; display:none"><br></span>
                                    <div id="dis_user_name" class="all_errors" style="color: red" ></div>
                                    <div id="error_user" class="all_errors" style="color: red" ></div>
                                    </th>  
                                    </tr>
                                    <tr>
                                        <th>Date Of Birth<sup style="color: red">*</sup></th>
                                        <th>
                                            <select class="dateselector-year" name="year">
                                                <option value="">Year</option>
                                            </select>
                                            <select class="dateselector-month" name="month">
                                                <option value="">Month</option>
                                                <option value="00" class="thirty1">January</option>
                                                <option value="01" class="feb">February</option>
                                                <option value="02" class="thirty1">March</option>
                                                <option value="03" class="thirty0">April</option>
                                                <option value="04" class="thirty1">May</option>
                                                <option value="05" class="thirty0">June</option>
                                                <option value="06" class="thirty1">July</option>
                                                <option value="07" class="thirty1">August</option>
                                                <option value="08" class="thirty0">September</option>
                                                <option value="09" class="thirty1">October</option>
                                                <option value="10" class="thirty0">November</option>
                                                <option value="11" class="thirty1">December</option>
                                            </select>

                                            <select class="dateselector-day" name="date">
                                                <option value="">Day</option>
                                            </select>    
                                            <span id="error_dateofbirth" class="all_errors" style="color: Red; display:none"><br></span>
                                    <div id="dis_dateofbirth" class="all_errors" style="color: red" ></div>
                                    </th>


                                    <th>Role<sup style="color: red">*</sup></th>
                                    <th>
                                        <select id="usr_rle" name="role">
                                            <option value="0"><--Select Role--></option>
                                             <option value="1">Admin Role</option>
                                              <option value="2">Seekar Role</option>
                                              <option value="3">Employer Role</option>
                                        </select>&nbsp;
                                        
                                        <span id="error_usr_rle" class="all_errors" style="color: Red; display:none"><br></span>
                                    <div id="dis_usr_rle" class="all_errors" style="color: red" ></div>
                                    </th>
                                    </tr>
                                    <tr class="fun_row">
                                        <th>Password<sup class="password_star" style="color: red">*</sup></th>
                                        <th>
                                            <input type="password" name="password"  id="pwd" onblur="CheckPassword(id);" placeholder="EX:Name@1" title="EX:Name@1">
                                            <span id="error_pwd" class="all_errors" style="color: Red; display:none"><br></span>
                                    <div id="dis_pwd" class="all_errors" style="color: red" ></div>
                                    </th>
                                    <th nowrap>Confirm Password<sup class="password2_star" style="color: red">*</sup></th>
                                    <th>
                                        <input id="password2" name="confirm_password" type="password" onblur="return checkPasswordMatch();" placeholder="EX:Name@1" title="EX:Name@1">
                                        <span id="error_password2" class="all_errors" style="color: Red;"><br></span>
                                        <!--<div id="CheckPasswordMatch" class="all_errors" style="color: red"></div>--> 
                                    <div id="dis_password2" class="all_errors" style="color: red" ></div>
                                    </th>                                                                       
                                    </tr>

                                    <tr>
                                        <th>Email ID<sup style="color: red">*</sup></th>
                                        <th>
                                            <input type="text"   id="email_id"  name="email_id"  /> 
                                            <span id="error_email_id" class="all_errors" style="color: Red; display:none"><br></span>
                                    <div id="dis_email_id" class="all_errors" style="color: red" ></div>
                                    </th> 


                                    <th>Mobile Number<sup style="color: red">*</sup></th>
                                    <th>
                                        <input type="text" value="+91" size="2"  maxlength="5" id="mob_a" title="Contry Code" disabled = "disabled" >
                                        <input type="text" maxlength="10" name="mobile_number"  size="13" id="mobile_number" onkeypress="return IsSpecialCharPM(event, id);"  placeholder="9320028798" title="EX:9320028798">           
                                        <span id="error_mobile_number" class="all_errors" style="color: Red; display:none"><br>Enter only Numbers</span>
                                    <div id="dis_mobile_number" class="all_errors  " style="color: red" ></div>
                                    </th>                            
                                    </tr>
                                </table>    
<!--onblur="return Gen_IsMobNumber(id)"-->
                            </div>

                            <table>
                                <tr>
                                    <td colspan="6" align="center">
                                        <b>
                                            <input id="user_reg" value="Register" type="button"   onclick="formsubmit()"/>                                      
                                        </b>
                                        <b>
                                            <input id="user_cancel" value="Clear"  type="button" onClick="resetAllValues();">
                                        </b>                                    
                                    </td>
                                </tr>
                                </tbody></table>	
                        </form>
                        <div class="uRegionContent clearfix">
                            <hr class="registertop">
                            <table id="socialiconsce"  >
                                <tbody>
                                    <tr>
                                        <td align="center" >
                                            <a href="#" target="_blank" style="text-decoration: none" class="socialregi">&nbsp;
                                                <img src="${pageContext.request.contextPath}/images/facebook.png" class="pciscss">Facebook</a>
                                        </td>
                                        <td>
                                            <a href="#" target="_blank" style="text-decoration: none">&nbsp;
                                                <img src="${pageContext.request.contextPath}/images/LinkedIn.png" class="pciscss">LinkedIn</a>
                                        </td>
                                        <td>
                                            <a href="#" target="_blank" style="text-decoration: none">&nbsp;
                                                <img src="${pageContext.request.contextPath}/images/twitter.png" class="pciscss">Twitter</a>
                                        </td>

                                    </tr>


                                </tbody></table>
                            <hr class="registerbottom">
                        </div>
                    </div> 

                    <div id="wait" style="display:none;border-style: none;background: transparent;width:69px;
                         height:89px;position:absolute;position:absolute;top: 50%;left: 50%;margin-top: -50px;margin-left: -100px;">
                        <img src="${pageContext.request.contextPath}/images/demo_wait.gif" height="64" width="64"><br>
                    </div>
                    <link href="${pageContext.request.contextPath}/css/progression.min.css" rel="stylesheet" type="text/css">
                    <!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>-->
                    <!--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>-->
                    <script type="text/javascript" src="${pageContext.request.contextPath}/js/progression.min.js"></script>
                    <script>
                                         jQuery(document).ready(function ($) {

                                             $(document).ajaxStart(function () {
                                                 $("#wait").css("display", "block");
                                             });
                                             $(document).ajaxComplete(function () {
                                                 $("#wait").css("display", "none");
                                             });



                                         });


                    </script>



                    <div id="wait" style="display:none;border-style: none;background: transparent;width:69px;
                         height:89px;position:absolute;position:absolute;top: 50%;left: 50%;margin-top: -50px;margin-left: -100px;">
                        <img src="${pageContext.request.contextPath}/images/demo_wait.gif" height="64" width="64"><br>
                    </div>


                    <div id="dddw"></div>
                    <div id="dialog"></div>
                </div>
            </div>
        </div>

        <br>

<!--        <footer id="uFooter">
            <div class="apex_grid_container clearfix">
                <div class="apex_cols apex_span_12">
                    <div class="uFooterContent">

                        <div id="customize"></div>
                        <span class="uFooterVersion1">
                            Copyright © 2015 PiLog
                        </span>
                        <span class="uFooterVersion">
                            <a href="${pageContext.request.contextPath}/" id="text">
                                <img src="${pageContext.request.contextPath}/images/f_spacer.gif" class="navIcon login">Login
                            </a>
                        </span>
                        <span class="uFooterVersion">
                            <a href="#" id="text">
                                <img src="${pageContext.request.contextPath}/images/privacy_policy.png" style="vertical-align: middle; height: 16px; width: 16px;">Privacy Policy
                            </a>
                        </span>
                        <span class="uFooterVersion">
                            <a href="#" id="text">
                                <img src="${pageContext.request.contextPath}/images/phone.png" style="vertical-align: middle; height: 16px;width: 16px;"/>Contact
                            </a>
                        </span>
                        <span class="uFooterVersion">
                            <a href="${pageContext.request.contextPath}/termsofuse.jsp" id="text">
                                <img src="${pageContext.request.contextPath}/images/t&amp;c.png" style="vertical-align: middle; height: 16px; width: 16px;">Terms of Use
                            </a>
                        </span>
                        <span class="uFooterVersion">
                            <a href="${pageContext.request.contextPath}/help.jsp" id="text">
                                <img src="${pageContext.request.contextPath}/images/f_spacer.gif" class="navIcon help">Help
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>-->





    </body>
</html>