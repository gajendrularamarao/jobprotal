
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<html>
    <head>
        <title>Logout</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv='Cache-Control' content='no-cache'/>
        <meta http-equiv='Pragma' content='no-cache'/>
        <meta http-equiv='Expires' content='0'/>
        <script type='text/javascript'><!--Checks which browser is used-->
                    if (navigator.appName=='Microsoft Internet Explorer'){
        document.write("<link rel='stylesheet' type='text/css' href='<c:url value="/"/>stylesheets/jupiter.css'>");
} else if (navigator.appName=='Netscape'){
   document.write("<link rel='stylesheet' type='text/css' href='stylesheets/jupiter-net.css'>");
   }
   </script>
   <link rel="stylesheet" href="<c:url value="/"/>css/4_2.css" type="text/css" />
   <script src="<c:url value="/"/>javascript/jquery.min_v1_5_2.js"></script>
   <script src="<c:url value="/"/>jvaascript/modernizr_v2_8_2.js"></script>
   <script src="<c:url value="/"/>javascript/pageloader.js"></script>
    </head>
    <body onload="javascript:closeOrAlert()" class="loginBody">
        <div class="se-pre-con1"></div>
        <table  align="center" class="loginTable" width="100%">
            <tr>
                <td valign="middle" align="center" style="color: #336699;text-align: center;font: bold 15px Arial">
            <center>
                <br>
                The System has logged you out successfully. This page can now be closed.
                <br>
            </center>
        </td>
    </tr>
</table>
   
<script type="text/javascript">
    function closeOrAlert() {
        if (navigator.appName == 'Microsoft Internet Explorer') {
            top.window.opener = top;
            top.window.open('', '_parent', '');
            top.window.close();
        }
    }
</script>     
    </body>

    <body onload='javascript:parent.window.location.href = "<c:url value="/"/>";'>
</body>
   

</html>
