
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<% String sUserCde = (String) session.getAttribute("ssUsername");
    String sRole = (String) session.getAttribute("ssRolename");
    String sUserlocat = (String) session.getAttribute("ssUserlocat");
String ssLocale = (String) session.getAttribute("ssLocale");
String ssOrgname = (String) session.getAttribute("ssOrgname");%>
<header id="uHeader">
    <div class="apex_grid_container clearfix">
        <div class="apex_cols apex_span_12">
            <div class="logoBar">
                <h1>
                </h1>
                <div class="userBlock">
                   
                    <img src="<c:url value="/"/>images/f_spacer.gif" class="navIcon user" alt="">
                    <span>${labelobj['User'] != null ? labelobj['User']:"User"}: <%= sUserCde%></span>
                   
                    <span>
                        <img src="<c:url value="/"/>images/role_icon.png" style="vertical-align: top; width: 13px; height: 14px; margin:2px;"/>
                         ${labelobj['Role'] != null ? labelobj['Role']:"Role"}: <%= sRole%></span>
                    <span>
                        
                    
<!--                     <a href="<c:url value="/"/>languageForm">
                        <img src="<c:url value="/"/>images/f_spacer.gif" class="navIcon gear" alt="">${labelobj['Settings'] != null ? labelobj['Settings']:"Settings"}</img>
                    </a>-->
                      <span class="setng">                      
                   <span class="main-menu"><a href="#"> <img src="<c:url value="/"/>images/gear_icon.png" class="navIcon gear" style="background-image:none;width:14px;height:14px" alt="">${labelobj['Settings'] != null ? labelobj['Settings']:"Settings"}</img></a></span>
<!--                     <div class="setng-drp-dwn">
                         <ul>                          
                             <li class="sub-menu"><a  href="<c:url value="/"/>languageForm">${labelobj['Language'] != null ? labelobj['Language']:"Language"}</a></li>                             
                         <li class="sub-menu"><a  href="#">Profile</a></li>
                         <li class="sub-menu"><a  href="#">Password</a></li>
                         </ul>
                     </div> -->
                    </span>
                    <a href="#"> <img src="<c:url value="/"/>images/feedback_icon.png" class="navIcon edit" style="background-image:none;width:14px;height:14px" alt="">${labelobj['feedback'] != null ? labelobj['feedback']:"feedback"}</a>
                    <a onClick="logout()" style="cursor: pointer; ">
                        <img src="<c:url value="/"/>images/logout.gif" style="vertical-align: middle; width: 14px; height: 14px; margin-left: 7px;margin-right: 4px;"/>${labelobj['Logout'] != null ? labelobj['Logout']:"Logout"}</a>
                </div>
            </div>
        </div>
    </div>
                
</header>
<!--                <div class="apex_grid_container clearfix">
                <div class="apex_cols apex_span_12">
                    <div class="uBreadcrumbs" id="Breadcrumbs" style="margin-top: 2%">
                        <ul >
                            <li class="uStartCap" s><span></span></li>
                            <li >
                                <a href="<c:url value="/"/>modulechooser">${labelobj['Home'] != null ? labelobj['Home']:"Home"}</a>

                            </li> 
                            <li class="uSeparator" ><span></span></li>
                            <li class="active"><span>Material Master</span></li> 

                            <li class="uEndCap" >

                                <span></span>
                            </li>

                        </ul>


                    </div>  
                </div>  
            </div>  -->