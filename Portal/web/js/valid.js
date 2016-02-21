var oldJSON = {};
$(function() {


    /* */

//    var response = new $.jqx.response();
//    var browser = response.browser;
//    //$("#browser").html("browser: " + browser.name + " " + browser.version);
////    alert(browser.name);
////    alert(response.os.name);
////    if(browser.name == "Safari" && response.os.name == "Mac OS X"){
//    if (browser.name == "Safari") {
//        $(".gear").css("width", "2px");
//        $(".edit").css("width", "2px");
//        $(".register").css("width", "2px");
////        alert($(".gear").css("width"));
//    }
//    else {
//        $(".gear").css("width", "16px");
//        $(".edit").css("width", "16px");
//        $(".register").css("width", "16px");
////        alert($(".gear").css("width"));
//    }

    /* */

    $('input[type="button"]').each(function() {
        var value = $(this).val();
        var size = value.length;
        // playing with the size attribute
        $(this).attr('width', size - 2 + 'px');
    });





    var descriptor = $("#descriptor_Text").val();
    var conceptId = $("#conceptId").val();
    var erp_Text = $("#erp_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var materialGrp_Text = $("#materialGrp_Text").val();
    var uom_Text = $("#uom_Text").val();
    var regDate_Tex = $("#regDate_Tex").val();
    var originator_Text = $("#originator_Text").val();

    oldJSON.descriptor = descriptor;
    oldJSON.conceptId = conceptId;
    oldJSON.erp = erp_Text;
    oldJSON.materialType = materialType_Text;
    oldJSON.materialGroup = materialGrp_Text;
    oldJSON.uom = uom_Text;
    oldJSON.regDate = regDate_Tex;
    oldJSON.originator = originator_Text;

    $(document).ajaxStart(function() {
        $("#wait").css("display", "block");
    });
    $(document).ajaxComplete(function() {
        $("#wait").css("display", "none");
    });

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
        width: 300
    });

    $("#materialtypedialog").dialog({
        autoOpen: false,
        width: 400,
        height: 400,
        title: "Material Type",
        show: {
        },
        hide: {
        }
    });
    $("#materialgroupdialog").dialog({
        autoOpen: false,
        width: 400,
        height: 400,
        title: "Material Group",
        show: {
        },
        hide: {
        }
    });


    $("#plant_dialog").dialog({
        autoOpen: false,
        width: 400,
        height: 520,
        title: "Business Unit",
        show: {
        },
        hide: {
        }
    });
    $("#uom_dialog").dialog({
        autoOpen: false,
        width: 350,
        height: 500,
        title: "UoM",
        show: {
        },
        hide: {
        }
    });
    $("#status_dialog").dialog({
        autoOpen: false,
        width: 400,
        height: 500,
        title: "Status",
        show: {
        },
        hide: {
        }
    });
    $("#prop_uom_dialog").dialog({
        autoOpen: false,
        width: 350,
        height: 500,
        title: "UoM",
        show: {
        },
        hide: {
        }
    });
    $("#descriptor_dialog").dialog({
        autoOpen: false,
        width: 450,
        height: 550,
        title: "Descriptor",
        show: {
        },
        hide: {
        }
    });




    $("#mmc_Register").click(function() {


        if(topPannelValidation()){

        var domain = $("#domain_Text").val();
        var orgId = $("#orgId_Text").val();
        //   var recordNo = $("#recordNo_Text").val();
        var descriptor = $("#descriptor_Text").val();
        var conceptId = $("#conceptId").val();
//        if (descriptor == "" || descriptor == null) {
//            plsSelectDescriptor();
//            return false;
//            
//        }



        var erpNo = $("#erpNo_Text").val();
//        if (erpNo == "" || erpNo == null) {
//            errorMsg("Please Enter ERP!");
//            return false;
//            $("#erpNo_Text").focus();
//        }






        var materialType = $("#materialType_Text").val();
        
//        if (materialType == "" || materialType == null) {
//
//            errorMsg("Please Select Material Type!");
//            return false;
//
//        } else if (!validateData("BMtrlType", "id.type", materialType)) {
//            validatorDilogue("Please Select Valid Material Type!", "materialType_Text");
//            return false;
//        }




        var materialGrp = $("#materialGrp_Text").val();
//        if (materialGrp == "" || materialGrp == null) {
//            errorMsg("Please Select Material Group!");
//            return false;
//
//        } else if (!validateData("BMtrlGroups", "id.mtrlGroup", materialGrp)) {
//            validatorDilogue("Please Select Valid Material Grouop !", "materialGrp_Text");
//            return false;
//        }

        var uom = $("#uom_Text").val();
//        if (uom == "" || uom == null) {
//            errorMsg("Please Select UOM!");
//            return false;
//
//        } else if (!validateData("OrgnTerminology", "abbreviation", uom)) {
//            validatorDilogue("Please Select Valid UoM!", "uom_Text");
//            return false;
//        }
        
               

        var originator = $("#originator_Text").val();
        var regDate = $("#regDate_Tex").val();
        var shortDesc = $("#shortDesc_TextArea").val();





        var erp = $("#erp_Text").val();





        $.ajax({
            url: "materialRegister",
            async: false,
            cache: false,
            method: "POST",
            data: {
                orgId: orgId,
                descriptor: descriptor,
                conceptId: conceptId,
                materialType: materialType,
                materialGrp: materialGrp,
                uom: uom,
                originator: originator,
                regDate: regDate,
                erp: erp,
            },
            success: function(response) {

                var recordarray = response.split(":");

                if (response.indexOf("Registered Successfully!") > -1)


                {
                    response = recordarray[0];
                    var recordNo = recordarray[1];

                    $("#mmc_Register").hide();
                    $("#Save").show();
                    $("#Submit").show();
                    $("#Delete").show();
                    $("#mmc_DuplicateChk").show();
                    $("#accdiv").show();
                    $("#Generate_Description").show();
                    $("#status_Text").parent().show();
                    $("#Generate_Description").prop("disabled",true);

                    var role = $("#rolehid").val();
                    console.log("role:::" + role);
                    var status = "";
                    if (role.lastIndexOf("REQUESTOR") > -1)
                    {
                        status = "A1-REGISTERED";

                    } else if (role.lastIndexOf("STEWARD") > -1 || role.lastIndexOf("MANAGER") > -1)
                    {
                        status = "A4-CAT REGISTERED";

                    }
                    $("#status_Text").val(status);

                    $("#status_Text").show();
                    $(".statusLabel").show();



                    $("#recordNo_Text").val(recordNo);

                    fetchPropertiesTabData();
                    stepActions(1);

                    var baskettype = $('#baskettypehid').val();
                    var baskettype1 = $('#baskettypehid1').val();


                    var descriptor = $("#descriptor_Text").val();
                    var conceptId = $("#conceptId").val();
                    var erp_Text = $("#erp_Text").val();
                    var materialType_Text = $("#materialType_Text").val();
                    var materialGrp_Text = $("#materialGrp_Text").val();
                    var uom_Text = $("#uom_Text").val();
                    var regDate_Tex = $("#regDate_Tex").val();
                    var originator_Text = $("#originator_Text").val();
                    var recordNo_Text = $("#recordNo_Text").val();
                    oldJSON.descriptor = descriptor;
                    oldJSON.conceptId = conceptId;
                    oldJSON.erp = erp_Text;
                    oldJSON.materialType = materialType_Text;
                    oldJSON.materialGroup = materialGrp_Text;
                    oldJSON.uom = uom_Text;
                    oldJSON.regDate = regDate_Tex;
                    oldJSON.originator = originator_Text;
                    oldJSON.recordNo = recordNo_Text;

                    oldJSON.status = $("#statushid").val();
                    //var qstr = "/materialcreation";
                    //window.location.href = qstr;

                } else {

                    errorMsg("Registration Failed!");


                }

            },
            error: function(e) {
              //  alert(e.message)
            },
        });


}
    });

    $("#Save").click(function() {
        save(true);
    });    
    

    $("#Submit").click(function() {
        
        if(topPannelValidation()){
            
            var saveFlag=false;
            saveFlag=save(false);           
            if(saveFlag)
         
            {  
                var conf_mesg = $("#Submit").attr('data-conf');
                $("#dialog").html(conf_mesg);
                $("#dialog").dialog(
                        {
                    title: 'Message',
                    modal: true,
                    height: 120,
                    minWidth: 300,
                    maxWidth: 'auto',
                    buttons: {
                        Yes: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                            submitReg('SUBMIT', '');

                        },
                        No: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");


                        }
                    }
                });   
        
        }
        }
    });
    
    
    
    $("#Approve").click(function() {
        var conf_mesg = $("#Approve").attr('data-conf');
        $("#dialog").html(conf_mesg);
        $("#dialog").dialog({
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            buttons: {
                Yes: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    submitReg('APPROVE', '');

                },
                No: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");


                }
            }
        });


    });
    $("#Delete").click(function() {

        var conf_mesg = $("#Delete").attr('data-conf');
        $("#dialog").html(conf_mesg);
        $("#dialog").dialog({
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            buttons: {
                Yes: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");



                    returnReasonFun('DELETE');

//                   submitReg('DELETE');

                },
                No: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");


                }
            }
        });

    });
    $("#Return").click(function() {

        var conf_mesg = $("#Return").attr('data-conf');
        $("#dialog").html(conf_mesg);
        $("#dialog").dialog({
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            buttons: {
                Yes: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
//                   submitReg('RETURN');
                    returnReasonFun('RETURN');
                },
                No: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");


                }
            }
        });

    });
    $("#Return_Approver").click(function() {

        var conf_mesg = $("#Return_Approver").attr('data-conf');
        $("#dialog").html(conf_mesg);
        $("#dialog").dialog({
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            buttons: {
                Yes: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    returnReasonFun('RETURN (APPROVER)');
                    //  submitReg('RETURN (APPROVER)');

                },
                No: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");


                }
            }
        });

    });
    $("#Return_Requestor").click(function() {

        var conf_mesg = $("#Return_Requestor").attr('data-conf');
        $("#dialog").html(conf_mesg);
        $("#dialog").dialog({
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            buttons: {
                Yes: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");

                    returnReasonFun('RETURN (REQUESTOR)');



                },
                No: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");


                }
            }
        });

    });
    $("#Duplicate_Check").click(function() {
//        Duplicate_Check();
        window.open('dupRes?recordNo_Text=' + $("#recordNo_Text").val());

    });
    ////////////////////////////////////////////////////////////////////////////////////
    ////Extension creation Start
    $("#Extend").click(function() {
        var baskettype = $('#baskettypehid').val();

        var data = {};

        var recordNo = $("#recordNo_Text").val();
        var descriptor = $("#descriptor_Text").val();
        var erp = $("#erp_Text").val();

        var materialType = $("#materialType_Text").val();
        var plant = $("#plant_Text").val();
        var materialGrp = $("#materialGrp_Text").val();

        var uom = $("#uom_Text").val();
        var originator = $("#originator_Text").val();
        var regDate = $("#regDate_Tex").val();
        var baskettype = $('#baskettypehid').val();

        var orgId = $("#orgId_Text").val();
        var conceptId = $("#conceptId").val();
        //var erpNo = $("#erpNo_Text").val();
        var shortDesc = $("#shortDesc_TextArea").val();

        data.descriptor = descriptor;
        data.conceptId = conceptId;
        data.erp = erp_Text;
        data.materialType = materialType_Text;
        data.materialGroup = materialGrp_Text;
        data.uom = uom_Text;
        data.regDate = regDate_Tex;
        data.originator = originator_Text;
        data.recordNo = recordNo;
        data.baskettype = baskettype;

        data.plant = plant;

        var jsonString = JSON.stringify(data);



        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "materialExtension",
            cache: false,
            data: {'jsonData': jsonString

            },
            success: function(response) {

                var result = JSON.parse(response);

                var resultdialogprops = {};
                if (response.lastIndexOf("Extended") > -1) {
                    resultdialogprops.width = 300;
                    resultdialogprops.height = 120;
                } else
                {
                    resultdialogprops.minWidth = 300;
                    resultdialogprops.maxWidth = 750;
                    resultdialogprops.width = 500;
                    resultdialogprops.minHeight = 150;
                    resultdialogprops.maxHeight = 300;
                }
                //$("#result").dialog(resultdialogprops);
//                        resultdialogprops={};

                resultdialogprops.buttons = {};
                resultdialogprops.modal = true;
                resultdialogprops.title = 'Message';
                resultdialogprops.buttons = {};
                resultdialogprops.buttons.Ok = function() {

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    // var search_url = 'searchresults.jsp?baskettype=' + $('#baskettypehid').val();
                    // console.log("zero:::search_url==" + search_url);
                    if (response.lastIndexOf("Extended") > -1)
                    {
                        window.location = result.url;
                    }
                }
                $("#dialog").html(result.Message);
                $("#dialog").dialog(resultdialogprops);

            },
            error: function(response) {
                $("#dialog").html(response);
                $("#dialog").dialog({
                    title: 'Message',
                    modal: true,
                    minWidth: 300,
                    maxWidth: 'auto',
                    height: 120,
                    buttons: {
                        Ok: function() {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }
                });

            }
        });




    });
////Extension creation End


    $("#Generate_Description").click(function() {



        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "generateRecordDescription",
            cache: false,
            data:
                    {
                        //type: selectedValue,
                        items: JSON.stringify({
                            recordNo_Text: $("#recordNo_Text").val(),
                            descriptor: $("#descriptor_Text").val(),
                            plant_Text: $("#plant_Text").val(),
                            materialType: $("#materialType_Text").val(),
                            materialGrp: $("#materialGrp_Text").val(),
                            uom: $("#uom_Text").val(),
                            conceptId: $("#conceptId").val(),
                            status_Text: $("#status_Text").val()
                        })


                    },
            success: function(response) {


                var responseJSON = JSON.parse(response);

                stepActions(responseJSON.STEPS);

                $("#shortDesc_Text").val(responseJSON.shortdesc);
                var resultdialogprops = {};
                resultdialogprops.buttons = {};
                //resultdialogprops.width = 400;
                resultdialogprops.modal = true;
                resultdialogprops.title = responseJSON.title;
                resultdialogprops.buttons = {};
                resultdialogprops.buttons.Ok = function() {
                    //$(this).css('color', 'darkblue');
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    //  alert("see now");
                    //$("#ui-id-4").click();
                    fetchErpTabData()
                    $(".accordian").accordion({
                        active: 4
                    });
                    // alert("have u observed anything");

                };
                //$("#dialog").css('text-align','center');
                $("#dialog").html("<div style='margin-top:30px;margin-left:30px;'>" + responseJSON.MESSAGE + "</div>");
                $("#dialog").dialog(resultdialogprops);
            }
















        });





        //Duplicate_Check();
    });
    $("#descriptionsupdate").click(function() {

        fetchDescriptionsTabData();
    });



//    ////Extension creation Start
//    $("#Extend").click(function () {
//
//
//      
//        var recordNo = $("#recordNo_Text").val();
//        var descriptor = $("#descriptor_Text").val();
//        var erp = $("#erp_Text").val();
//
//        var materialType = $("#materialType_Text").val();
//        var plant = $("#plant_Text").val();
//        var materialGrp = $("#materialGrp_Text").val();
//
//        var uom = $("#uom_Text").val();
//        var originator = $("#originator_Text").val();
//        var regDate = $("#regDate_Tex").val();
//        var baskettype = $('#baskettypehid').val();
//
//
//
//
//
//        var orgId = $("#orgId_Text").val();
//        var conceptId = $("#conceptId").val();
//        //var erpNo = $("#erpNo_Text").val();
//        var shortDesc = $("#shortDesc_TextArea").val();
//
//        console.log("plant ::: " + plant);
//        console.log("materialType ::: " + materialType);
//
//
//
//        $.ajax({
//            url: "materialExtension",
//            async: false,
//            cache: false,
//            method: "POST",
//            data: {
//                //  orgId: orgId,
//                descriptor: descriptor,
//                conceptId: conceptId,
//                recordNo: recordNo,
//                materialType: materialType,
//                materialGrp: materialGrp,
//                uom: uom,
//                plant: plant,
//                originator: originator,
//                regDate: regDate,
//                erp: erp
//            },
//            success: function (response) {
//
//                var result = JSON.parse(response);
//
//                $("#dialog").html(result.Message);
//                $("#dialog").dialog({
//                    title: 'Message',
//                    modal: true,
//                    height: 120,
//                    minWidth: 300,
//                    maxWidth: 'auto',
//                    buttons: {
//                        Ok: function () {
//                            $(this).dialog("close");
//
//
//
//
//                            if (response.lastIndexOf("Extended") > -1)
//                            {
////                                $(location).attr('href', result.url);
//                                window.location = result.url;
//                            }
//                        }
//                    }
//                });
//
//
//            },
//            error: function (e) {
//                alert(e.message)
//            },
//        });
//
//
//
//    });

    // for new change request
    $("#Change").click(function() {

        var conf_mesg = $("#Change").attr('data-conf');
        $("#dialog").html(conf_mesg);
        $("#dialog").dialog({
            title: 'Message',
            modal: true,
            height: 120,
            minWidth: 300,
            maxWidth: 'auto',
            buttons: {
                Yes: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");
                    changeRequests();


                },
                No: function() {
                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");


                }
            }
        });
    });

});


function returnReasonFun(controlind)
{
    $("#dialog").html("Reason: <BR><BR><textarea id='returnreason' value='' rows='4' cols='50'/><br><div id='dailog_error_id' style='color:red;display:none;'>Please Enter Reason</div>");
    $("#dialog").dialog({
        title: 'Comments',
        modal: true,
        height: 230,
        minWidth: 350,
        maxWidth: 'auto',
        buttons: {
            Ok: function() {
                var returnReason = $("#returnreason").val();
                console.log("returnReason:::" + returnReason);
                returnReason = returnReason.trim();
                if (returnReason != '' && returnReason != null) {
                    $("#dailog_error_id").hide();

                    $(this).html("");
                    $(this).dialog("close");
                    $(this).dialog("destroy");

                    submitReg(controlind, returnReason);
                } else
                {
                    $("#dailog_error_id").show();
                }


            }
        }
    });



}
function submitReg(controlind, returnreason) {


    var baskettype = $('#baskettypehid').val();
    //  alert("Save::::"+baskettype);
    var data = {};
    var descriptor = $("#descriptor_Text").val();
    var conceptId = $("#conceptId").val();
    var erp_Text = $("#erp_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var materialGrp_Text = $("#materialGrp_Text").val();
    var uom_Text = $("#uom_Text").val();
    var regDate_Tex = $("#regDate_Tex").val();
    var originator_Text = $("#originator_Text").val();
    var recordNo_Text = $("#recordNo_Text").val();
    var status = $("#statushid").val();
    var objectid = $("#objecthid").val();
    var comment_Text = $("#comment_Text").val();
    var businessUnit = $("#plant_Text").val();
    data.descriptor = descriptor;
    data.conceptId = conceptId;
    data.erp = erp_Text;
    data.materialType = materialType_Text;
    data.materialGroup = materialGrp_Text;
    data.uom = uom_Text;
    data.regDate = regDate_Tex;
    data.originator = originator_Text;
    data.recordNo = recordNo_Text;
    data.baskettype = baskettype;
    data.status = status;
    data.objectid = objectid;
    data.controlType = controlind;
    data.newerpComment = returnreason;
    data.olderpComment = comment_Text;
    data.businessUnit = businessUnit;

    var jsonString = JSON.stringify(data);

//         if (baskettype.indexOf("Registrations") > -1)
//            {

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "regSubmit",
        cache: false,
        data: {'jsonData': jsonString

        },
        success: function(result) {
            console.log("FIRST:::result::" + result);
            var res = "";
            var qstr = "";
            var jsonObj = JSON.parse(result);

            result = jsonObj.Message
            qstr = jsonObj.url;

            $("#dialog").html(result);
            $("#dialog").dialog({
                title: 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                buttons: {
                    Ok: function() {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        if (result.lastIndexOf("Successfully") > -1)
                        {
                            window.location.href = qstr;

                        }

                    }
                }
            });


//                                oldJSON = newJSON;
            //foreignVendorResult = "Foreign Vendors Data Update Successfull";
        },
        error: function(result) {
            $("#result").html(result);
            $("#result").dialog({
                title: 'Message',
                modal: true,
                minWidth: 300,
                maxWidth: 'auto',
                height: 120,
                buttons: {
                    Ok: function() {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }
            });
            //foreignVendorResult = "Error occured while updating foreign Vendors data.";
        }
    });


//            }

}
function Duplicate_Check() {

    var req = {};
    req.url = 'DuplicateCheck';
    req.method = 'post';
    req.async = true;
    req.data = {};
    req.data.recordNo_Text = $("#recordNo_Text").val();

    req.success = function(response) {
        var array = JSON.parse(response);
        if (array.length == 0) {
            $("#dialog").empty();
            $("#dialog").html('No Duplicates Found').dialog({
                title: 'Duplicate Check',
                buttons:
                        {
                            ok: function() {

                                $(this).dialog('close');
                            }

                        },
                autoOpen: true


            });

        } else
            Duplicate_Check_Table(array);

    };
    $.ajax(req);
}

function Duplicate_Check_Table(array) {

    $("#dddw").empty();
    //$("#dddw").append("<div id='ddGrid'></div>");
    var source =
            {
                localdata: array,
                datafields:
                        [
                            {name: 'record_no', type: 'string'}

                        ],
                datatype: "JSON"
            };
    var adapter = new $.jqx.dataAdapter(source);
    $("<div></div>").jqxGrid(
            {
                width: '150',
                theme: 'energyblue',
                source: adapter,
                filterable: true,
                enabletooltips: true,
                showfilterrow: true,
                height: 360,
                columnsresize: true,
                sortable: true,
                columns: [
                    {text: 'Record No', align: 'center', datafield: 'record_no', width: "120", cellsalign: 'left'}

                ]
            }).appendTo("#dddw");
    //$("#dddw").css("overflow", "hidden");
    $("#dddw").dialog({
        title: 'Duplicate List'
        , width: 180
        , modal: true
        , close: function() {
            $(this).empty();
            $(this).dialog('close');
            $(this).dialog('destroy');
        }
    });
    //$("#dddw").dialog({height: 450,width: 400});

}
function changeRequests() {

    var baskettype = $('#baskettypehid').val();
    //  alert("Save::::"+baskettype);
    var data = {};
    var descriptor = $("#descriptor_Text").val();
    var conceptId = $("#conceptId").val();
    var erp_Text = $("#erp_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var materialGrp_Text = $("#materialGrp_Text").val();
    var uom_Text = $("#uom_Text").val();
    var regDate_Tex = $("#regDate_Tex").val();
    var originator_Text = $("#originator_Text").val();
    var recordNo_Text = $("#recordNo_Text").val();
    var status = $("#statushid").val();
    var objectid = $("#objecthid").val();
    var comment_Text = $("#comment_Text").val();
    var businessUnit = $("#plant_Text").val();
    data.descriptor = descriptor;
    data.conceptId = conceptId;
    data.erp = erp_Text;
    data.materialType = materialType_Text;
    data.materialGroup = materialGrp_Text;
    data.uom = uom_Text;
    data.regDate = regDate_Tex;
    data.originator = originator_Text;
    data.recordNo = recordNo_Text;
    data.baskettype = baskettype;
    data.status = status;
    data.objectid = objectid;
    data.olderpComment = comment_Text;
    data.businessUnit = businessUnit;

    var jsonString = JSON.stringify(data);

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: "changeReq",
        cache: false,
        data: {'jsonData': jsonString

        },
        success: function(result) {
            console.log("FIRST:::result::" + result);
            var res = "";
            var qstr = "";
            var jsonObj = JSON.parse(result);

            result = jsonObj.Message
            qstr = jsonObj.url;

            $("#dialog").html(result);
            $("#dialog").dialog({
                title: 'Message',
                modal: true,
                height: 120,
                minWidth: 300,
                maxWidth: 'auto',
                buttons: {
                    Ok: function() {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                        if (result.lastIndexOf("Successfully") > -1)
                        {
                            window.location.href = qstr;

                        }

                    }
                }
            });



        },
        error: function(result) {
            $("#result").html(result);
            $("#result").dialog({
                title: 'Message',
                modal: true,
                minWidth: 300,
                maxWidth: 'auto',
                height: 120,
                buttons: {
                    Ok: function() {
                        $(this).html("");
                        $(this).dialog("close");
                        $(this).dialog("destroy");
                    }
                }
            });

        }
    });
}//changeRequests


function  topPannelValidation(){
        
           var erp=$("#plant_Text").attr("data-erp");
           
           var matTypeLable="";
           var descriptLable="";
           var matGroupLable="";
           var result=false;
           
           if(erp=="SAP" || erp=="sap"){
              
            matTypeLable = "Material Type";
            descriptLable = "Descriptor";
            matGroupLable = "Material Group";
               
           }
           else if(erp=="DYNAMICS" || erp=="dynamics"){
               
            matTypeLable = "Item Type";
            descriptLable = "Descriptor";
            matGroupLable = "Item Category";
            
            
           }
           else if(erp=="ORACLE" || erp=="oracle"){
            matTypeLable = "Template Id";
            descriptLable = "ICC";
            matGroupLable = "Category Id";
               
           }
        
        var descriptor=$("#descriptor_Text").val();
        
        var instance = $("#plant_Text").val();
        var materialType = $("#materialType_Text").val();
        var materialGrp = $("#materialGrp_Text").val();
        var instance = $("#plant_Text").val();
        var uom = $("#uom_Text").val();
        
        
        
        if (descriptor == "" || descriptor == null) {

            errorMsg("Please Select "+descriptLable);
           // return false;
            result=false;
            
        }else if (instance == "" || instance == null) {

            errorMsg("Invalied Instance!");
           // return false;
            result=false;
        }else if (materialType == "" || materialType == null) {

            errorMsg("Please Select "+matTypeLable);
            //return false;
            result=false;

        } else if (!validateData("BMtrlType", "id.type", materialType)) {
            validatorDilogue("Please Select Valid "+materialType , "materialType_Text");
            //return false;
            result=false;
        }else if (materialGrp == "" || materialGrp == null) {
            errorMsg("Please Select "+matGroupLable);
            //return false;
            result=false;

        } else if (!validateData("BMtrlGroups", "id.mtrlGroup", materialGrp)) {
            validatorDilogue("Please Select Valid "+matGroupLable, "materialGrp_Text");
            //return false;
            result=false;
        }else if (uom == "" || uom == null) {
            errorMsg("Please Select UOM!");
            //return false;
            result=false;
            

        } else if (!validateData("OrgnTerminology", "abbreviation", uom)) {
            validatorDilogue("Please Select Valid UoM!", "uom_Text");
           // return false;
           result=false;
        }else{
            
            result=true;
        }
        
        return result;
        
    }
    
function save(messageFlag) {


    var saveResult = false;

    if (topPannelValidation())
    {


        var baskettype = $('#baskettypehid').val();
        var baskettype1 = $('#baskettypehid1').val();
//             alert("Save::::"+baskettype1);
        var newJSON = {};
        var descriptor = $("#descriptor_Text").val();
        var conceptId = $("#conceptId").val();
        var erp_Text = $("#erp_Text").val();
        var materialType_Text = $("#materialType_Text").val();
        var materialGrp_Text = $("#materialGrp_Text").val();
        var uom_Text = $("#uom_Text").val();
        var regDate_Tex = $("#regDate_Tex").val();
        var originator_Text = $("#originator_Text").val();
        var recordNo_Text = $("#recordNo_Text").val();
        newJSON.descriptor = descriptor;
        newJSON.conceptId = conceptId;
        newJSON.erp = erp_Text;
        newJSON.materialType = materialType_Text;
        newJSON.materialGroup = materialGrp_Text;
        newJSON.uom = uom_Text;
        newJSON.regDate = regDate_Tex;
        newJSON.originator = originator_Text;
        newJSON.recordNo = recordNo_Text;
        newJSON.baskettype = baskettype;
        newJSON.status = $("#statushid").val();

//         if (baskettype.indexOf("Registrations") > -1)
//            {
        var updateJSON = {};
        updateJSON.old = oldJSON;
        updateJSON.new = newJSON;
        var jsonString = JSON.stringify(updateJSON);
        $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            url: "regUpdate",
            cache: false,
            async: false,
            data: {'jsonData': jsonString,
                'baskettype': baskettype
            },
            success: function (result) {

                if (messageFlag)
                {
                    console.log("FIRST:::result::" + result);
                    var res = "";
                    var qstr = "";
                    var jsonObj = JSON.parse(result);

                    result = jsonObj.Message
                    qstr = jsonObj.url;
//                                if (result.lastIndexOf(":") > -1)
//                                {
//                                    var strarray = result.split(":");
//                                    result = strarray[0];
//                                    qstr = strarray[1];
//
//                                }
//                                 console.log("result::" + result);
//                                 console.log("qstr::" + qstr);
                    $("#dialog").html(result);
                    $("#dialog").dialog({
                        title: 'Message',
                        modal: true,
                        height: 120,
                        minWidth: 300,
                        maxWidth: 'auto',
                        buttons: {
                            Ok: function () {
                                $(this).html("");
                                $(this).dialog("close");
                                $(this).dialog("destroy");
                                if (result.lastIndexOf("Successfully") > -1)
                                {

                                    if (baskettype1 != 'New Registrations') {

                                        window.location.href = qstr;
                                    }


                                }

                            }
                        }
                    });


                    oldJSON = newJSON;
                    //foreignVendorResult = "Foreign Vendors Data Update Successfull";
                } else {
                   
                    saveResult = true;
                }

                saveResult = true;
            },
            error: function (result) {
                $("#result").html(result);
                $("#result").dialog({
                    title: 'Message',
                    modal: true,
                    minWidth: 300,
                    maxWidth: 'auto',
                    height: 120,
                    buttons: {
                        Ok: function () {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }
                });
                //foreignVendorResult = "Error occured while updating foreign Vendors data.";
            }
        });

    }
 
    return saveResult;
}
