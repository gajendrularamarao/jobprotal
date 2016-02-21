var oldJSON = {};

var name1 = $("#first_name").val();
var comp_code = $("#comp_code").val();
var purch_org = $("#purch_org").val();
var suppl_code = $('#vendorCode').val();
var baskettype = $('#baskettypehid').val();
if (name1 != null)
{
    oldJSON.name1 = name1.toUpperCase();
}


var specialKeys = new Array();
specialKeys.push(8); //Backspace
specialKeys.push(9); //Tab
specialKeys.push(46); //Delete
specialKeys.push(36); //Home
specialKeys.push(35); //End
specialKeys.push(37); //Left
specialKeys.push(39); //Right
specialKeys.push(32); //Space






function err_msg(id, msg) {
    $(id).fadeIn(1000).html(msg);
   
    var fid = id.slice(5);   
    $("#" + fid).focus();
}
//function uemail(ele) {
//    var err = 'dis_' + ele;
//    var id = "#" + err;
//    var str = $("#email_id").val();
////    if (!str) {
////        var msg = "Enter  Email Address";
////        err_msg(id, msg);
////        return false;
////    }
//
//    var patt = /^[a-zA-Z0-9_.-]+@[a-zA-Z]([a-zA-Z0-9.]{2,})+\.[a-zA-Z0-9.]{2,}$/;
//
//    var res = patt.test(str);
//
//    if (str && res == false)
//    {
//        var msg = "Enter Valid Email";
//        err_msg(id, msg);
//        return false;
//    }
//
//    $("#dis_email_id").hide();
//}

function IsSpecialCharPD(e, ele) {
    
    var err = 'error_' + ele;
    var sp_readonly = $('#' + ele).attr("readonly");
    if (sp_readonly != 'readonly') {
        var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
//        alert(keyCode);
        if ((keyCode == 32) || (keyCode == 46)||(keyCode == 43)||(keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)) {
        
        }
        else {
            $("#" + err).fadeIn(500);
            $("#" + err).fadeOut(1500);
            return false;
        }
    }
}



function CheckPassword(ele) {
    var re;
    var err = 'dis_' + ele;
    var id = "#" + err;
    var str = $("#pwd").val();


    if (str && str.length < 5)
    {
        var msg = "Password must contain atleast five characters!";
        err_msg(id, msg);
        return false;
    }
    re = /[0-9]/;
    if (str && !re.test(str))
    {
        var msg = "Password must contain atleast one number (0-9)!";
        err_msg(id, msg);
        return false;
    }
    re = /[a-z]/;
    if (str && !re.test(str))
    {
        var msg = "password must contain at least one lowercase letter (a-z)!";
        err_msg(id, msg);
        return false;
    }
    re = /[A-Z]/;
    if (str && !re.test(str))
    {
        var msg = "password must contain at least one Uppercase letter (A-Z)!";
        err_msg(id, msg);
        return false;
    }
    re = /([!,%,&,@,#,$,^,*,?,_,~])/;
    if (str && !re.test(str))
    {
        var msg = "password must contain at least one Special Character!";
        err_msg(id, msg);
        return false;
    }

    var patt = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;
    var res = patt.test(str);
    if (str && res == false)
    {
        var msg = "Enter Password As Specified";
        err_msg(id, msg);
        return false;
    }

    $("#dis_pwd").hide();


};



function checkPasswordMatch() {


    var pass = $("#pwd").val();
    var confirmPassword = $("#password2").val();
    if (pass == confirmPassword) {
        $("#dis_password2").html("");
    }
    else
    {
        $("#dis_password2").show();
        $("#dis_password2").html("Passwords do not match.");
     
    }

}

function resetAllValues() {

    $('.registerate').find('input:text').val('');
    $('#experience_summary').val('');
    $('.registerate').find('input:hidden').val('');
    $('.registerate').find('input:password').val('');
    $('.all_errors').hide();
    $('.img-preview').hide();   
    $("#crpXbtn").val("Cancel");
    $("#crpbtn").val("Crop");
    $("#tel_no_a").attr("disabled","disabled");
    $("#mob_a").attr("disabled","disabled");
    $("#pwd").removeAttr('disabled');
    $("#password2").removeAttr('disabled');
    

}




function formsubmit() {
   // alert("user_reg");
    var userdataVal = userdataValidation();
   //  alert(userdataVal);
    var doy = $(".dateselector-year option:selected").val();  //dateofbirth
    var dom = $(".dateselector-month option:selected").val();  //dateofbirth
    var dod = $(".dateselector-day option:selected").val();


    if (userdataVal) {
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: 'register',
            data: {
                first_name: $("#first_name").val(),
                middle_name: $("#middle_name").val(),
                last_name: $("#last_name").val(),
                nick_name: $("#nick_name").val(),
                phone_number: $("#tel_no_a").val() + "-" + $("#tel_no_c").val() + "-" + $("#phone_number").val(),
                mobile_number: $("#mob_a").val() + "-" + $("#mobile_number").val(),
                email_id: $("#email_id").val(),
                alternate_email: $("#email").val(),
                date: dod,
                month: dom,
                year: doy,
                user_name: $("#user_name").val(),
                password: $("#pwd").val(),
                confirm_password: $("#confirm_password").val(),
                country: $("#region").val(),
                locale: $("#usr_lcle").val(),
                role: $("#usr_rle").val(),
                add_role: $("#add_rle").val(),
                report_to: $("#usr_rpt").val(),
                plant: $("#usr_plnt").val(),
                address1: $("#address1").val(),
                address2: $("#address2").val(),
                experience_summary: $("#experience_summary").val(),
                filepath: $("#profilepichidden").val(),
                usr_orgid: $("#usr_orgid").val(),
            },
            cache: false,
            success: function(result) {

//alert(result);
                var response = "";
                if (result.lastIndexOf("Register") > -1) {
                    
                    response = "Registration Successfully Completed.";
                } else
                {
                    response = "Registration Failed.";

                }

                $("#dialog").html(response);
                $("#dialog").dialog({
                    height: 120,
                    minWidth: 350,
                    maxWidth: 'auto',
                    modal: true,
                    title: "Message",
                    buttons: {
                        Ok: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            if (response.lastIndexOf("Successfully") > -1) {
                                    window.location.reload();

                            }
                        }
                    }
                });              
            },
            error: function(result) {
                alert(result);
            }
        });
    }
//    else
//    {
//       $("#divDOM").remove();
//        
//        $("<div/>", {'id': 'divDOM'}).html(UsrErrRslt + "In Personal Data").dialog({
//            'title': 'Error ',
//            modal: true,
//            height: 120,
//            minWidth: 200,
//            maxWidth: 'auto',
//            buttons: {
//                Ok: function () {
//                    $(this).html("");
//                    $(this).dialog("close");
//                    $(this).dialog("destroy");
//                }
//            }});
//    }
    // $("#registerForm").submit();

}
var UsrErrRslt = "";
function userdataValidation()
{
//    alert("hi");
    var fname = $("#first_name").val();   // firstname
    UsrErrRslt = "";
    var lname = $("#last_name").val();    //lastname
    var mnumber = $("#mobile_number").val();  //mobilenumber
    var usremail = $("#email_id").val();   //email
    var doy = $(".dateselector-year option:selected").val();  //dateofbirth
    var dom = $(".dateselector-month option:selected").val();  //dateofbirth
    var dod = $(".dateselector-day option:selected").val();  //dateofbirth
    var uname = $("#user_name").val();      //username
    var upass = $("#pwd").val();         //password
    var cpass = $("#password2").val();       //confirmpassword
    var uReg = $("#region").val();         //region
    var uLcle = $("#usr_lcle").val();         //locale
    var uRle = $("#usr_rle").val();           //role
    var uRprt = $("#usr_rpt").val();         //report to
    var uPlnt = $("#usr_plnt").val();        //plant   
    var Trim_captch = $("#Usercaptch").val();
    var charPos = Trim_captch.charAt(4);
    if (charPos == " ")
    {
        var res = Trim_captch.replace(charPos, "");
        var ucptch = res;
       // alert(ucptch);
    }
    else {
        var ucptch = Trim_captch;
    }
    var ccptch = $("#Matchcaptch").val();
    var uOrgId = $("#usr_orgid").val();
    
    
    var alphaNumeric = /^[a-zA-Z0-9&()\s]+$/;
    var alpha = /^[a-zA-Z\s]+$/;
    var nameAlpha = alpha.test(fname);
    var name1Alpha = alpha.test(lname);


    var mobileNo = /^\d{10}$/;
    var mobUsr = mobileNo.test(mnumber);

    var mail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.]([a-zA-Z0-9.]{1,})+\.[a-zA-Z0-9.]{2,}$/;
    var PiLogmail = /^[a-zA-Z0-9_.-]+@(pilog)+\.[a-zA-Z0-9.]{2,}$/;
    var emailUsr = mail.test(usremail);
    var pilogUsr = PiLogmail.test(usremail);
    

    var passwrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,15}$/;
    var upasswrd = passwrd.test(upass);
    var cnfrmpss = passwrd.test(cpass);

    if (!fname) {
        var id = "#dis_first_name";
        var msg = "Enter First Name";
        err_msg(id, msg);
//        UsrErrRslt += "Enter Name,";
      AtvAccr("basic");
        return false;

    }
    $("#dis_first_name").hide();

    if (!lname) {
        var id = "#dis_last_name";
        var msg = "Enter Last Name";
        err_msg(id, msg);
        UsrErrRslt += "Enter Last Name,";
         AtvAccr("basic");
        return false;
    }
    $("#dis_last_name").hide();
    if (fname && (nameAlpha == false)) {
        var id = "#dis_first_name";
        var msg = "Should be Alphabet";
        err_msg(id, msg);
         AtvAccr("basic");
        return false;
    }
    $("#dis_first_name").hide();
    if (lname && (name1Alpha == false)) {
        var id = "#dis_last_name";
        var msg = "Should be Alphabet";
        err_msg(id, msg);
      AtvAccr("basic");
        return false;
    }
    $("#dis_last_name").hide();
    if (!uname) {
        var id = "#dis_user_name";
        var msg = "Enter USER NAME";
        err_msg(id, msg);
  //      UsrErrRslt += "Enter USER NAME,";
             AtvAccr("basic");
        return false;
    }
    $("#dis_user_name").hide();
    
     if (!uReg) {
        var id = "#dis_region";
        var msg = "Select Region";
        err_msg(id, msg);
      //  UsrErrRslt += "Select Region,";
         AtvAccr("basic");
        return false;
    }

    $("#dis_region").hide();
///////////////////////////////////////////////////

if (!uRle) {
        var id = "#dis_usr_rle";
        var msg = "Select Role";
        err_msg(id, msg);
      //  UsrErrRslt += "Select Role,";
       AtvAccr("basic");
        return false;
    }
    $("#dis_usr_rle").hide();
///////////////////////////////////////////////////
if(uRle!="FUNCT_CONSULTANT"){
    if (!upass) {
        var id = "#dis_pwd";
        var msg = "Enter Password ";
        err_msg(id, msg);
    //    UsrErrRslt += "Enter Password,";
     AtvAccr("basic");
        return false;
    }
    $("#dis_pwd").hide();
    if (upass && (upasswrd == false)) {
        var id = "#dis_pwd";
        var msg = "Should be Valid Password";
        err_msg(id, msg);
         AtvAccr("basic");
        return false;
    }

    $("#dis_pwd").hide();
    if (!cpass) {
        var id = "#dis_password2";
        var msg = "Enter Confirm Password";
        err_msg(id, msg);
   //     UsrErrRslt += "Enter Confirm Password,";
     AtvAccr("basic");
        return false;
    }
     $("#dis_password2").html("");
    
}
else 
    {
    $("#password_star").hide();
    $("#pwd").html("disable","disabled");
    $("#password2_star").hide();
    $("#password2").html("disable","disabled");
    }
   
   /////////////////  
   
      if (!uLcle) {
        var id = "#dis_usr_lcle";
        var msg = "Select Locale";
        err_msg(id, msg);
     //   UsrErrRslt += "Select Locale,";
         AtvAccr("basic");
        return false;
    }
    $("#dis_usr_lcle").hide();
    if (!uOrgId) {
        var id = "#dis_usr_orgid";
        var msg = "Select Organisation ID";
        err_msg(id, msg);
     //   UsrErrRslt += "Select Locale,";
         AtvAccr("basic");
        return false;
    }
    $("#dis_usr_orgid").hide();
     if (!uPlnt) {
        var id = "#dis_usr_plnt";
        var msg = "Select Plant";
        err_msg(id, msg);
     //   UsrErrRslt += "Select Plant,";
         AtvAccr("basic");
        return false;
    }
    $("#dis_usr_plnt").hide();
    
    
      if (uRle.lastIndexOf("REQUESTOR") > -1)
  {
    if (!uRprt) {
        var id = "#dis_usr_rpt";
        var msg = "Select Report To";
        err_msg(id, msg);
     //   UsrErrRslt += "Select Report To,";
      AtvAccr("basic");
        return false;
    }
    $("#dis_usr_rpt").hide();
  }else {
      $("#dis_usr_rpt").html("");
//   return true;
    }
  
    if ((doy == "") || (dom == "") || (dod == "")) {
        var id = "#dis_dateofbirth";
        var msg = "Select Date Of Birth";
        err_msg(id, msg);
     //   UsrErrRslt += "Select Date Of Birth,";
         AtvAccr("basic");
        return false;
    }
    $("#dis_dateofbirth").hide();
    
    
    if (!ucptch)
    {
         $("#dis_Usercaptch").show();
        $("#dis_Usercaptch").html("Should Not Be Null");
         AtvAccr("basic");
          return false;
    } 
    
    if (ucptch && (ucptch == ccptch)) {
        $("#dis_Usercaptch").html("");
    
    }
    else
    {
        $("#dis_Usercaptch").html("Captch do not match.");
         $("#dis_Usercaptch").show();
         AtvAccr("basic");
         return false;

    }
    
    if (!usremail) {
        var id = "#dis_email_id";
        var msg = "Enter Email Id";
        err_msg(id, msg);
      //  UsrErrRslt += "Enter Email Id,";
       AtvAccr("basic");
        return false;
    }
    $("#dis_email_id").hide();
    if (uRle != "FUNCT_CONSULTANT")
    {
        if (usremail && (emailUsr == false)) {
            var id = "#dis_email_id";
            var msg = "Should be Valid Email Id";
            err_msg(id, msg);
            AtvAccr("basic");
            return false;
        }    
        else {
           $("#dis_email").html("");
        }
    }
    else
    {       

        if (usremail && (pilogUsr == false)) 
        {
            var id = "#dis_email_id";
            var msg = "Should be PiLog Email Id";
            err_msg(id, msg);
            AtvAccr("basic");
            return false;

        }
        else {
           $("#dis_email").html("");
        }
    }
    
    /////////////////////////////////////////////

    if (!mnumber) {
        var id = "#dis_mobile_number";
        var msg = "Enter Mobile Number";
        err_msg(id, msg);
       // UsrErrRslt += "Enter Mobile Number,";
        AtvAccr("basic");
        return false;
    }
    $("#dis_mobile_number").hide();
    if (mnumber && (mobUsr == false)) {
        var id = "#dis_mobile_number";
        var msg = "Mobile No Doesn't Match the Prescribed Format";
        err_msg(id, msg);
         AtvAccr("basic");
        return false;
    }
    $("#dis_mobile_number").hide();
    
//    if (uname) {
//
//        if (!userNameValidate()) {
//
//            var id = "#dis_user_name";
//            var msg = "UserName Already Exist.";
//            err_msg(id, msg);
//             AtvAccr("basic");
//            return false;
//        }
//    }

    
    return true;

}


function AtvAccr(param)
{
    if(param == "basic"){
      $("#accordion").accordion({
        collapsible: true,
        active: 0,
        });
    }    
    if(param == "Addat"){
      $("#accordion").accordion({
        collapsible: true,
        active: 0,
        });
    }    
}
$("#dateofbirth").datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: "dd-mm-yy",
    showOn: "button",
    buttonImage: 'pagepics/images/date_picker_icon.png',
    buttonImageOnly: true

});

function RegisterName(ele) {
    var ele = ele;
    var unwantedSpaceValid = unwantedSpaces(ele);
    if (unwantedSpaceValid == true) {
        var str = $("#" + ele).val();
        var err = 'dis_' + ele;
        var patt_an = /^[0-9]+$/;
        var patt_spchar = /^[&()\s]+$/;
        var patt_seq_spchar = /^(.*)[`!@#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-][~!@`#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-](.*)$/;
        var patt = /^[a-zA-Z\s]+$/;
        
        var res = patt.test(str);
        
        var res_an = patt_an.test(str);
        var res_spchar = patt_spchar.test(str);
        var res_seq_spchar = patt_seq_spchar.test(str);

        var id = "#" + err;
        if(ele == "first_name"){
            var msg = "Enter First Name";
        }
        if(ele == "last_name"){
            var msg = "Enter Last Name";
        }
        
        if (res_an == true) {
            var msg = "Enter only Alphabets";
            err_msg(id, msg);
            return false;
        }
        if (res_spchar == true) {
            err_msg(id, msg);
            return false;
        }
        if (res_seq_spchar == true) {
            err_msg(id, msg);
            return false;
        }
        if (str && res == false)
        {
            var msg = "Enter only Alphabets";
            err_msg(id, msg);
            return false;
        }
        $(id).hide();

        str = str.trim();
        $("#" + ele).val(str);

        return true;
    } else
        return false;
}


function IsSpecialCharSpace(e, id) {
    // console.log("AKLSJD");
    var err = 'error_' + id;
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    if ((keyCode >= 33 && keyCode <= 37) || (keyCode == 39) || (keyCode >= 42 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
        $("#" + err).fadeIn(500);
        $("#" + err).fadeOut(1500);
        return false;
    }
}
function IsSpecialChar(e, ele) {
    var err = 'error_' + ele;
    var sp_readonly = $('#' + ele).attr("readonly");
    // console.log("Readonly in IsSpecialChar::" + sp_readonly);
    if (sp_readonly != 'readonly')
    {
        var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
        if ((keyCode == 32) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)) {
        }
        else {
            $("#" + err).fadeIn(500);
            $("#" + err).fadeOut(1500);
            return false;
        }
    }
}

function IsSpecialCharPM(e, ele) {
    var err = 'error_' + ele;
    var sp_readonly = $('#' + ele).attr("readonly");
    if (sp_readonly != 'readonly') {
        var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
        if ((keyCode >= 48 && keyCode <= 57) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)) {
        }
        else {
            $("#" + err).fadeIn(500);
            $("#" + err).fadeOut(1500);
            return false;
        }
    }
}

function unwantedSpaces(ele) {
    var str1 = $("#" + ele).val();
    var patt1 = /(^\s*)|(\s*$)/gi;
    var patt2 = /[ ]{2,}/gi;
    if ((patt1.test(str1) == true) || (patt2.test(str1) == true)) {
        str1 = str1.replace(/(^\s*)/gi, "");
        str1 = str1.replace(/[ ]{2,}/gi, " ");
        str1 = str1.trim();
        $("#" + ele).val(str1);
        return true;
    } else
        return true;
}

function IsSpecialChar1(e, ele) {
    var sp_readonly = $('#' + ele).attr("readonly");
    var err = 'error_' + ele;
    if (sp_readonly != 'readonly') {
        var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
        if ((keyCode == 47) || (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)) {
        }
        else {
            $("#" + err).fadeIn(500);
            $("#" + err).fadeOut(1500);
            return false;
        }
    }
    return ret;
}


function IsBackspace(e, ele) {
    var err = 'error_' + ele;
    var sp_readonly = $('#' + ele).attr("readonly");
    if (sp_readonly != 'readonly') {
        var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
        if ((specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode)) {
        }
        else {
            $("#" + err).fadeIn(500);
            $("#" + err).fadeOut(1500);
            return false;
        }
    }
}

function Gen_IsMobNumber(ele) {
    var err = 'dis_' + ele;
    var id = "#" + err;
    var str = $("#" + ele).val();
    $(id).html("");


//    if (!str) {
//        var msg = "Enter Mobile Number";
//        err_msg(id, msg);
//        return false;
//    }
    var patt = /^\d{10}$/;
    var res = patt.test(str);

    var patt1 = /(^\s*)|(\s*$)/gi;
    var patt2 = /[ ]{1,}/gi;

    if ((patt1.test(str) == true) || (patt2.test(str) == true)) {
        str = str.replace(/(^\s*)/gi, "");
        str = str.replace(/[ ]{1,}/gi, "");

        $(ele).val(str);
    }

    if (str) {
        if (res == false)
        {
            var msg = "Mobile Number Doesn't Match<br> the Prescribed Format";
            err_msg(id, msg);
            return false;
        }

        $(id).html("");

    }

}

function gemail(ele) {
    var err = 'dis_' + ele;
    var id = "#" + err;
    var str = document.getElementById("email_id").value;
    

    var patt = /^[a-zA-Z0-9_.-]+@[a-zA-Z]([a-zA-Z0-9.]{2,})+\.[a-zA-Z0-9.]{2,}$/;
    
    
   if(usrRle!="FUNCT_CONSULTANT"){ 
    var res = patt.test(str);
    
    if (res == false)
    {
        var msg = "Enter Valid Email";
        err_msg(id, msg);

    }
    else {
        document.getElementById("dis_email").innerHTML = "";

    }
   }
  
}

function Gen_IsTelNumber(ele) {
    var err = 'dis_' + ele;
    var id = "." + err;
    var str = $("#" + ele).val();

    if (ele == "phone_number") {
        var std = $("#tel_no_c").val();

    }

    var patt = /^[0-9]{6,8}$/;
    var res = patt.test(str);

    var patt1 = /(^\s*)|(\s*$)/gi;
    var patt2 = /[ ]{1,}/gi;

    if ((patt1.test(str) == true) || (patt2.test(str) == true)) {
        str = str.replace(/(^\s*)/gi, "");
        str = str.replace(/[ ]{1,}/gi, "");

        document.getElementById(ele).value = str;
    }
    if (str && std) {
        if (res == false)
        {
            var msg = "Telephone Number Doesn't Match<br> the Prescribed Format";
            err_msg(id, msg);
            return false;
        }
        else {
//            $(".all_errors").hide();
            $(id).hide();
            // return true;
        }
    }
    else if (str && !std) {
        if (res == false)
        {
            var msg = "Telephone Number Doesn't Match<br> the Prescribed Format";
            err_msg(id, msg);
            return false;
        }
        else {
            var msg = "Enter STD Code";
            err_msg(id, msg);
            return false;
        }

    }
    else if (!str && std) {
        var msg = "Enter Telephone Number";
        err_msg(id, msg);
        return false;
    }
    else {
//        $(".all_errors").hide();
        $(id).hide();
        //return true;
    }
    $(id).html("");
}

function Gen_IsStdcode(ele) {

    var err = 'dis_' + ele;
    var id = "." + err;
    var str = document.getElementById(ele).value;

    if (ele == "tel_no_c") {
        var tel = $("#phone_number").val();
    }

    if (ele == "fax_no_c") {

        var tel = $("#fax_no_b").val();
        console.log(tel);
    }

    var patt1 = /(^\s*)|(\s*$)/gi;
    var patt2 = /[ ]{1,}/gi;

    if ((patt1.test(str) == true) || (patt2.test(str) == true)) {
        str = str.replace(/(^\s*)/gi, "");
        str = str.replace(/[ ]{1,}/gi, "");

        document.getElementById(ele).value = str;
    }

    var patt = /^[0-9]{3,5}$/;
    var res = patt.test(str);

    if (str && tel) {
        if (res == false)
        {
            var msg = "STD Code Doesn't Match<br> the Prescribed Format";
            err_msg(id, msg);
            return false;
        }
        else {
//            $(".all_errors").hide();
            $(id).hide();
            // return true;
        }
    }
    else if (str && !tel) {
        if (res == false)
        {
            var msg = "STD Code Doesn't Match<br> the Prescribed Format";
            err_msg(id, msg);
            return false;
        }
        else {
            if (ele == "fax_no_c") {
                var msg = "Enter Fax Number";
            } else {
                var msg = "Enter Telephone Number";
            }
            err_msg(id, msg);
            return false;
        }
    }
    else if (!str && tel) {
        var msg = "Enter STD Code ";
        err_msg(id, msg);
        return false;
    }
    else {
//        $(".all_errors").hide();
        $(id).hide();
        // return true;
    }
    function IsAlphabet(ele) {
        var str = document.getElementById(ele).value;
        if (!str) {
            document.getElementById(err).innerHTML = "";
        }
        else {
            var err = 'dis_' + ele;
            var patt = /[a-zA-Z\s]+$/;
            var res = patt.test(str);

            if (res == false)
            {
                document.getElementById(err).innerHTML = "Enter only alphabets";
            }
            else {
                document.getElementById(err).innerHTML = "";
            }
        }
    }
}

//function userNameValidate() {
//   
//    $.ajax({
//        type: "post",
//        traditional: true,
//        dataType: 'html',
//        url: 'userNameValidate',
//        data: {
//            user_name: $("#user_name").val(),
//        },
//        cache: false,
//        success: function(result) {
//
//            // alert(result);
//
//            if (result == 'false') {
//  
//                var id = "#dis_user_name";
//                var msg = "UserName Already Exist.";
//                err_msg(id, msg);
//             
//
//            } 
//        },
//        error: function(result) {
//            alert(result);
//        }
//    });
//
//    //return response;
//}

function userNameValidate() {
    var str =$("#user_name").val();
    var patt_seq_spchar = /^(.*)[`!@#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-][~!@`#$%^&*()=_+{}\[\]\\|:;"'<>?,./\-](.*)$/;    
    var res_seq_spchar = patt_seq_spchar.test(str);
    
    if (res_seq_spchar == true) {
        $("#dis_user_name").html("Sequential special </br>characteres are not allowed");
        $("#dis_user_name").show();
        return false;
    }
  
    else {
   $("#dis_user_name").html("");
    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: 'userNameValidate',
        data: {
            user_name: $("#user_name").val(),
        },
        cache: false,
        success: function(result) {
        
            // alert(result);

            if (result == 'false') {
  
                var id = "#dis_user_name";
                var msg = "UserName Already Exist.";
                err_msg(id, msg);
             

            } 
        },
        error: function(result) {
            alert(result);
        }
    });

    //return response;
}
$(id).hide();
}
$(document).ready(function() {
    resetAllValues();
$(".ui-dialog-titlebar-close").hover(function(){
 
    $(this).addClass('ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only');
});

    $('#rstCptch').click(function() {
        $("#dis_Usercaptch").html("");
    });

    $("#user_reg").click(function() {
        var userdataVal = userdataValidation();
    });
    $("#crpbtn").click(function()
    {
        $("#overlay").hide();
        $(".modal1").hide();
        $(".preview-lg").show();

    });
    $("#crpXbtn").click(function()
    {
        $("#overlay").hide();
        $(".modal1").hide();
    });
    $(".fileUpload").click(function()
    {
        $(".img-preview").hide();
    });
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: 0,
        width: 300
    });
    
  
    
    $('#profilepic').ajaxfileupload({
        'action': 'UploadFile',
        'onComplete': function(response) {
            $('#upload').hide();
            $('#message').show();

            var statusVal = JSON.stringify(response.message);
            $(".overlay").show();
            $(".modal1").show();

            //alert(statusVal);
            var obj = JSON.parse(statusVal);
            var filename = obj.filename;
            var filestring = obj.fileString;

            $("#profilepichidden").val(filename);
            $(".cropper-bg").css('background-image', 'url(data:image/png;base64,"+ filestring + ")');
            $(".cropper-bg").css('');
            //
            //
            //$("#img-container").html(" <img id='image' style='vertical-align:middle;'  class='imageclass' src='data:image/png;base64," + filestring + " alt='Picture'/>");
            //    $("#imgDisplay").html(" <img id='image' style='vertical-align:middle;'  class='imageclass' src='data:image/png;base64," + filestring + " alt='Picture'/>");
//			if(statusVal == "false")
//			{
//				$("#message").html("<font color='red'>"+ JSON.stringify(response.message) +" </font>");
//			}	
//			if(statusVal == "true")
//			{
//				$("#message").html("<font color='green'>"+ JSON.stringify(response.message) +" </font>");
//			}			
        },
        'onStart': function() {
            $('#upload').show();
            $('#message').hide();
        }
    });


});


function loadnewcaptcha() {

    var req = {};
    req.url = "captcha";
    req.async = false;
    req.type = "POST";
    req.traditional = true;
    req.cache = false;
    req.success = function(response) {
//                   alert("Captch::"+response);
        // var Cstring = JSON.parse(response);
        $("#CaptchTxt").html("" + response);
        $("#Matchcaptch").val(response);
        $('#Usercaptch').val('');
        var $para = $('#CaptchTxt');
        var tokens = $para.text().split('');
        var i = 0;
        i = (i + 1) % tokens.length;
        $para.html('<p style="margin-left: 5px;padding-left: 10px;">'+'<span class=onecolor>' + tokens.slice(0, 1).join('') + '</span>'+'<span class=othercolor>' + tokens.slice(1, 2).join('') + '</span>'+
                '<span class=onecolor>' + tokens.slice(2, 3).join('') + '</span>'+'<span class=othercolor>' + tokens.slice(3, 4).join('') + '</span>'+'</p>'+
                 '<p style="margin-top: -15px; margin-left: 80px;">'+'<span class=onecolor>' + tokens.slice(4, 5).join('') + '</span>'+
                 '<span class=othercolor>' + tokens.slice(5, 6).join('') + '</span>'+'<span class=onecolor>' + tokens.slice(6, 7).join('') + '</span>'
                  +'<span class=othercolor>' + tokens.slice(7, tokens.length).join('') + '</span>'+'</p>');
    };
//        $para.html('<p>'+'<span class=onecolor>' + tokens.slice(0, 1).join('') + '</span>'+'<span class=onecolor>' + tokens.slice(1, 2).join('') + '</span>'+
//                '<span class=onecolor>' + tokens.slice(2, 3).join('') + '</span>'+'<span class=onecolor>' + tokens.slice(3, 4).join('') + '</span>'+
//                '<span class=onecolor>' + tokens.slice(4, 5).join('') + '</span>'+'<span class=onecolor>' + tokens.slice(5, 6).join('') + '</span>'+'</p>'+
//                '<p style="margin-top: -18px; margin-left: 100px;">'+'<span class=othercolor>' + tokens.slice(6, 7).join('') + '</span>'+'<span class=othercolor>' + tokens.slice(7, 8).join('') + '</span>'+
//                '<span class=othercolor>' + tokens.slice(8, 9).join('') + '</span>'+'<span class=othercolor>' + tokens.slice(9, 10).join('') + '</span>'+
//                '<span class=othercolor>' + tokens.slice(10, 11).join('') + '</span>'+' <span class=othercolor>' + tokens.slice(11, tokens.length).join('') + '</span>'+'</p>');
//    };

    $.ajax(req);

}
;

setInterval(function(){loadnewcaptcha()}, 54000);

//function checkCaptchMatch() {
//
//    var captch = $("#Matchcaptch").val();
//    var confirmcaptch = $("#Usercaptch").val();
//
////    if (!confirmcaptch)
////    {
////        $("#dis_Usercaptch").html("Should Not Be Null");
////    } 
//    if (captch == confirmcaptch) {
//        $("#dis_Usercaptch").html("");
//        return true;
//    }
//    else
//    {
//        $("#dis_Usercaptch").html("Captch do not match.");
//         $("#dis_Usercaptch").show();
//return false;
//    }
//
//}


function checkCaptchMatch() {
    var captch = $("#Matchcaptch").val();
    var TrimCaptch = $("#Usercaptch").val();

    var charPos = TrimCaptch.charAt(4);

    if (charPos == " ")
    {
        var res = TrimCaptch.replace(charPos, "");
        var confirmcaptch = res;
//alert(confirmcaptch);
    }
    else {
        var confirmcaptch = $("#Usercaptch").val();
    }

//    if (!confirmcaptch)
//    {
//        $("#dis_Usercaptch").html("Should Not Be Null");
//    } 
     if (confirmcaptch && (captch != confirmcaptch) ){
        $("#dis_Usercaptch").html("Captch do not match.");
        $("#dis_Usercaptch").show();
        return false;
        
    }
    else
    {
        $("#dis_Usercaptch").html("");
        return true;
    }


    $("#dis_Usercaptch").html("");
}

function uemail(ele) {
    var err = 'dis_' + ele;
    var id = "#" + err;
    var str = $("#email_id").val();
//    if (!str) {
//        var msg = "Enter  Email Address";
//        err_msg(id, msg);
//        return false;
//    }

    var patt = /^[a-zA-Z0-9_.-]+@[a-zA-Z]([a-zA-Z0-9.]{2,})+\.[a-zA-Z0-9.]{2,}$/;

    var res = patt.test(str);

    if (str && res == false)
    {
        var msg = "Enter Valid Email";
   
        err_msg(id, msg);
        return true;
    }else {
       // alert("hiii");
   $("#dis_email_id").hide();
    $.ajax({
       
        type: "post",
        traditional: true,
        dataType: 'html',
        url: 'emailIdValidate',
        data: {
            email_id: $("#email_id").val()
        },
        cache: false,
        success: function(result) {
        
             //alert(result);
            // alert(result);

            if (result == 'false') 
            {
  
                var id = "#dis_email_id";
                var msg = "Email Already Exist.";
                err_msg(id, msg);
                return true;
 
            } 
        },
        error: function(result) {
            alert(result);
        }
    });
    }

   // $("#dis_email_id").hide();
}//uemail