/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var validNavigation = false;
 
//function endSession() {
//  // Browser or broswer tab is closed
//  // Do sth here ...
//  alert("bye");
//}
 
function wireUpEvents() {
  /*
  * For a list of events that triggers onbeforeunload on IE
  * check http://msdn.microsoft.com/en-us/library/ms536907(VS.85).aspx
  */
  window.onbeforeunload = function() {
      if (!validNavigation) {
         endSession();
      }
  }
 
  // Attach the event keypress to exclude the F5 refresh
  $(document).bind('keypress', function(e) {
    if (e.keyCode == 116){
      validNavigation = true;
    }
  });
 
  // Attach the event click for all links in the page
  $("a").bind("click", function() {
    validNavigation = true;
  });
 
  // Attach the event submit for all forms in the page
  $("form").bind("submit", function() {
    validNavigation = true;
  });
 
  // Attach the event click for all inputs in the page
  $("input[type=submit]").bind("click", function() {
    validNavigation = true;
  });
   
}
 
// Wire up the events as soon as the DOM tree is ready
$(document).ready(function() {
  wireUpEvents();  
});
function logout()
{
    
    
    $("#logoutDailog").html("<div style='margin-left: 5%;'><div style='float:left'><img height='30px' src='images/help.png'></img></div><div style='float:left;margin-left: 10%;'>Unsaved data will be lost <br> Do you want to logout?</div></div>");
    $("#logoutDailog").dialog({
        title: 'Message',
        modal: true,
        width: 270,
//        maxWidth: 'auto',
        height: 135,
        buttons: {
            Yes: function () {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
                
                window.location.href="logout";
                
            },
            No: function () {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
            }
        }
    });
    
    
    
    
}