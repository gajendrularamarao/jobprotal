
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<footer id="uFooter">
    <div class="apex_grid_container clearfix">
        <div class="apex_cols apex_span_12">
            <div class="uFooterContent">

                <div id="customize"></div>
                <span class="uFooterVersion1">
                   ${labelobj['Copyright &copy; 2016 PiLog'] != null ? labelobj['Copyright &copy; 2016 PiLog']:" Copyright &copy; 2016 PiLog"}
                </span>
                <span class="uFooterVersion">
                    <a href="<c:url value="/"/>modulechooser" id="text">
                        <img src="<c:url value="/"/>images/f_spacer.gif" class="navIcon home" />${labelobj['Home'] != null ? labelobj['Home']:"Home"}
                    </a>
                </span>
                <span class="uFooterVersion">
                    <a href="#" id="text">
                       <img src="<c:url value="/"/>images/phone.png" style="vertical-align: middle; height: 16px;width: 16px;" />${labelobj['Contact'] != null ? labelobj['Contact']:"Contact"}
                    </a>
                </span>
                <span class="uFooterVersion">
                    <a href="#" id="text">
                        <img src="<c:url value="/"/>images/t&c.png" style="vertical-align: middle; height: 16px; width: 16px;" />${labelobj['Terms of Use'] != null ? labelobj['Terms of Use']:"Terms of Use"}
                    </a>
                </span>
                <span class="uFooterVersion">
                    <a href="#" id="text">
                         <img src="<c:url value="/"/>images/f_spacer.gif" class="navIcon help" />${labelobj['Help'] != null ? labelobj['Help']:"Help"}
                    </a>
                </span>
                <!--<span class="uFooterVersion" style="float:right;">Contact</span>-->
            </div>
        </div>
    </div>
</footer>