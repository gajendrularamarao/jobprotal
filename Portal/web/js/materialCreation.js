function fetchgridddwInfo(dddwid, gridrowid, gridname, datafieldname, value) {
    //rowid,gridrowid,gridname,datafield,value
    //-for grid level popups
    var re = new RegExp(' ', 'g');
    value = value.replace(re, "_");

    clickVisionDDDW(dddwid, gridrowid, gridname, datafieldname, value);
    // clickVisionDDDW(92, 'uom_Text', '');

}
$(document).ready(function () {
    
    

$("#MM_ATTACHMENTS_GRID").hide();
$("#MM_ATTACHMENTS_TABLE").css('width','50%');


 //AUTO COMPLETE CALLS
    
    matGrpupAutoComplete();
    matTypeAutoComplete();
    uomAutoComplete();
    descriptorAutoCompleteData();

   // docItemAutoComplete();
    docTypeAutoComplete();
    vendorIdAutoComplete();
    
    //AUTO COMPLETE CALLS END

    getERPByOrgId();

$( "#descriptor_Text" ).on( "autocompleteclose", function( event, ui ) {
    
    
   $( "#descriptor_Text" ).trigger("onchange");
    
} );


    $(".accordian").accordion({
        theme: 'energyblue',
        collapsible: true,
        heightStyle: "content",
        active: false,
        autoHeight: false
    });

    var date = new Date();
    var d = date.getDate();
    var day = (d < 10) ? '0' + d : d;
    var m = date.getMonth() + 1;
    var month = (m < 10) ? '0' + m : m;
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
    var dd = day + "-" + month + "-" + year;
    
    
    
    $("#regDate_Tex").val(dd);
   


    
    
    

////Extension creation End


});








// @DILEEP START



//######################## FOR ENABLING AND DIABLING BASED ON REG STEPS COPLETED  MATL CREATION ##################

function disablePropertiesTab() {


//    var proprtyName = $('#proprtyName_Text').val();
//    var proprtyValue = $('#proprtyValue_Text').val();
//    var proprtyDataRange = $('#proprtyDataRange_Text').val();
//    var proprtyDataType = $('#proprtyDataType_Text').val();
//    var proprtyUom = $('#proprtyUom_Text').val();

    $('#mmpropertiesupdate').attr("disabled", true);
    $('#proprtyName_Text').attr("disabled", true);
    $('#proprtyValue_Text').attr("disabled", true);
    $('#proprtyDataRange_Text').attr("disabled", true);
    $('#proprtyDataType_Text').attr("disabled", true);
    $('#proprtyUom_Text').attr("disabled", true);

}
function disableDocumentsTab() {


    // var ref8 = $('#ref8_Text').val();

    $('#docNo_Text').attr("disabled", true);
    $('#docType_Text').attr("disabled", true);
    $('#docItem_Text').attr("disabled", true);
    $('#revision_Text').attr("disabled", true);
    $('#position_Text').attr("disabled", true);
    $('#supplId_Text').attr("disabled", true);
    $('#supplName_Text').attr("disabled", true);
    $('#mmDocumentsUpdate').attr("disabled", true);

}
function disableAttachmentsTab() {

    var attachmentFiles = $('#attachmentFiles').val();

    $('#attachmentFiles').attr("disabled", true);


}
function disableReferencesTab() {

//    var referenceNo = $('#referenceNo_Text').val();
//    var referenceType = $('#referenceType_Text').val();
//    var refVendorId = $('#vendorId_Text').val();
//    var refVendorName = $('#vendorName_Text').val();

    $('#mmAttachUpdate').attr("disabled", true);
    $('#referenceNo_Text').attr("disabled", true);
    $('#referenceType_Text').attr("disabled", true);
    $('#vendorId_Text').attr("disabled", true);
    $('#vendorName_Text').attr("disabled", true);
    $('#mmReferenceUpdate').attr("disabled", true);

}

function enablePropertiesTab() {

    $('#proprtyName_Text').attr("disabled", false);
    $('#proprtyValue_Text').attr("disabled", false);
    $('#proprtyDataRange_Text').attr("disabled", false);
    $('#proprtyDataType_Text').attr("disabled", false);
    $('#proprtyUom_Text').attr("disabled", false);

}
function enableDocumentsTab() {


    $('#ref1_Text').attr("disabled", false);
    $('#ref2_Text').attr("disabled", false);
    $('#ref3_Text').attr("disabled", false);
    $('#ref4_Text').attr("disabled", false);
    $('#ref5_Text').attr("disabled", false);
    $('#ref6_Text').attr("disabled", false);
    $('#ref7_Text').attr("disabled", false);
    $('#ref8_Text').attr("disabled", false);

}
function enableAttachmentsTab() {



    $('#attachmentFiles').attr("disabled", false);


}
function enableReferencesTab() {

    $('#referenceNo_Text').attr("disabled", false);
    $('#referenceType_Text').attr("disabled", false);
    $('#vendorId_Text').attr("disabled", false);
    $('#vendorName_Text').attr("disabled", false);

}












//######################## UTILITY FUNCTION  ####################################

function errorMsg(response) {


    $("#dialog").html(response);
    $("#dialog").dialog({
        modal: true,
        height: 180,
        title: "Alert",
        minWidth: 300,
        maxWidth: 'auto',
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });
}
// NON NULL
function nonNull(val) {
    val = val != null ? val : "";
    return val;

}


//GETTING IMG BASED ON CONCEPT ID

var isValidDescriptor=false;
function getDescriptorImg() {
    
   console.log("getDescriptorImg :::START ");
    matGrpupAutoComplete();

    var data = $('#descriptor_Text').val();

    if (validateData("OrgnTerminology", "term", data) == false) 
    {
     
        plsSelectDescriptor();

    } else {
        

        isValidDescriptor = true;
        
        var descriptor = $('#descriptor_Text').val();
        var conceptId = $('#conceptId').val();    
        
        
        

        $('#materialGrp_Text').val(getMaterialGroup(descriptor,conceptId));
        $('#materialGrp_Text').prop("disabled", true);        
        $('.materialGrp_Text').show();

        $('#uom_Text').prop("disabled", true);
        $('#uom_Text').val(getUom(descriptor,conceptId));
        $("#uom_Text").prop("disabled", true);
        $('.uom_Text').show(); 

        var url = "getDescriptorImg";
        var data = {};
        data.descriptor = descriptor,
        data.conceptId = conceptId;
        var async = false;
        var cache = false;
        var success = function (result) {
            var data = JSON.parse(result);
            $('#descImage').attr('src', data.blobString);
            $('#img_td').css("display", "block");
        };
        var req = {};
        req.type = "POST";
        req.url = url;
        req.data = data;
        req.async = async;
        req.success = success;
        $.ajax(req);
    }
    
    
    
    
    console.log("getDescriptorImg :::END ");
}



function getMaterialGroup(descriptor,conceptId)
{
    
    var matGroup=[];
      $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            async: false,
            url: 'getMaterialGroups',
            cache: false,
            data:{
                
                descriptor:descriptor,
                conceptId:conceptId,
                
                
                
            },
            success: function (result) {    
                
            //  alert(result);
            
            var matGrparray=JSON.parse(result);
            
            
            
            // alert(matGrparray.data[0].col1);
           matGroup=[];
           matGroup.push(matGrparray.data[0].col1);
           
        },
        error: function (result) {
            console.log(result);
        }
        });
    
    console.log("BEFORE RETURN::: "+matGroup[0]);
    return matGroup[0];
    
    
}

function getUom(descriptor,conceptId){
    
    
    var resultUom="";
    
    var matUOM=[];
      $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            async: false,
            url: 'getUom',
            cache: false,
            data:{
                
                descriptor:descriptor,
                conceptId:conceptId,
                
                
                
            },
            success: function (result) {  
                console.log(result);
                //alert(result);
                
          
            var UOMSObject=JSON.parse(result);
            
           var resultUom= UOMSObject.data;
           if(resultUom.length==1){
                matUOM=[];
           matUOM.push(resultUom[0].col1);
           }
           
//                else if(resultUom.length>1){
//           matUOM=[];
//           matUOM.push(resultUom[0].col1);
//       }
       
                else{
           matUOM=[];
           matUOM.push("");
           
           }

        },
        error: function (result) {
            console.log(result);
        }
        });
    
    console.log("BEFORE RETURN::: "+matUOM[0]);
    return matUOM[0];
    
    
}




















function validatorDilogue(messge,focusId){
   
    $("#dialog").html(messge);
    $("#dialog").dialog({
        modal: true,
        height: 150,
        title: "Alert",
        minWidth: 300,
        maxWidth: 'auto',
        buttons: {
            Ok: function () {
                $(this).dialog("close");
                $("#" + focusId).val("");
                $("#" + focusId).focus();

            }
        }
    });
}






function plsSelectDescriptor(){
    
    $("#dialog").html("Please Select Valid Descriptor !");
    $("#dialog").dialog({
        modal: true,
        height: 150,
        title: "Alert",
        minWidth: 300,
        maxWidth: 'auto',
        buttons: {
            Ok: function () {
                $(this).dialog("close");

                $("#descriptor_Text").val("");                
                $('#materialGrp_Text').val("");
                $('#materialGrp_Text').attr("disabled", "disabled");
                $("#materialGrp_Text").prop("disabled", true);
                $('.materialGrp_Text').hide(); 
                
                $('#uom_Text').attr("disabled", "disabled");
                $("#uom_Text").prop("disabled", true);
                $('.uom_Text').hide(); 
            
                $('#img_td').css("display", "block");
                $('#descImage').attr('src', 'images/no-image.jpg');
                $("#conceptId").val("");   
                $("#uom_Text").val("");
                $("#uom_Text").prop("disabled", true);



            }
        }
    });
}


//"From OrgnTerminology where term=:descriptor";


function validateData(tableName,columnName,data){
    

    
    var descAvailbilty=false;
   
      $.ajax({
            type: "post",
            traditional: true,
            dataType: 'html',
            async: false,
            url: 'checkData',
            cache: false,
            data:{
                
                tableName:tableName,
                columnName:columnName,
                data:data
                
                
            },
            success: function (result) {    
                
             
            obj=JSON.parse(result);
            
            if (obj.RESULT == "true")
       
                {
            
                descAvailbilty = true;
                $("#conceptId").val(obj.CONCEPT_ID);


            } else if (obj.RESULT == "false") {
            
                descAvailbilty = false;

            }

        },
        error: function (result) {
            console.log(result);
        }
        });
        
       
    return descAvailbilty;
    
}





























//######################## OTHER FUNCTIONS  ####################################

// TO GET REGISTRATION STEPS COMPLETED 
function stepActions(stepCompleted) {
    if (stepCompleted == 0) {

        $('#step1').removeClass('active').addClass('done');
        // $('#step1').addClass('active');

//        disablePropertiesTab();
//        disableReferencesTab();
//        disableAttachmentsTab();
//        disableDocumentsTab();

    }
    else if (stepCompleted == 1) {

        $('#step1').removeClass('active').addClass('done');
        $('#step2').addClass('active');

//        enablePropertiesTab();
//        disableReferencesTab();
//        disableAttachmentsTab();
//        disableDocumentsTab();




    }
    else if (stepCompleted == 2) {

        $('#step1').removeClass('active').addClass('done');
        $('#step2').removeClass('active').addClass('done');
        $('#step3').addClass('active');

//        enablePropertiesTab();
//        enableReferencesTab();
//        disableAttachmentsTab();
//        disableDocumentsTab();

    }
    else if (stepCompleted == 3) {


        $('#step1').removeClass('active').addClass('done');
        $('#step2').removeClass('active').addClass('done');
        $('#step3').removeClass('active').addClass('done');
        $('#step4').addClass('active');

//        enablePropertiesTab();
//        enableReferencesTab();
//        enableAttachmentsTab();
//        disableDocumentsTab();

    }
    else if (stepCompleted == 4) {

        $('#step1').removeClass('active').addClass('done');
        $('#step2').removeClass('active').addClass('done');
        $('#step3').removeClass('active').addClass('done');
        $('#step4').removeClass('active').addClass('done');
         $('#step5').addClass('active');
//        enablePropertiesTab();
//        enableReferencesTab();
//        enableAttachmentsTab();
//        enableDocumentsTab();


    }
        else if (stepCompleted == 5) {

        $('#step1').removeClass('active').addClass('done');
        $('#step2').removeClass('active').addClass('done');
        $('#step3').removeClass('active').addClass('done');
        $('#step4').removeClass('active').addClass('done');
        $('#step5').removeClass('active').addClass('done');
//        enablePropertiesTab();
//        enableReferencesTab();
//        enableAttachmentsTab();
//        enableDocumentsTab();


    }

}

// TO GET ERP OF THE USER
function getERPByOrgId() {

    $.ajax({
        type: "post",
        traditional: true,
        dataType: 'html',
        url: 'getERPByOrgId',
        cache: false,
        success: function (result) {

            //  alert(result);
            $("#erp_Text").val(result);


        },
        error: function (result) {
          //  alert(result);
        }
    });


}


//######################## FOR AUTO COPLETES IN MATL CREATION ####################################
//MATERIAL TYPE AUTO COMPLETE
function matTypeAutoComplete() {

        var enteredString=$('#materialType_Text').val();  

        console.log("INSIDE MAT TYPE");
        
        var listbankdata = "";
        $.ajax({
            type: "POST",
            traditional: true,
            url: 'getMatTypeAutoComplete',
            cache: false,
            data: {
                reqType: "BMtrlType",
                enteredString: enteredString
                //term: enteredString
            },
            
            success: function(responseText) {               
            ;
               // console.log(JSON.stringify(responseText));
                var data = JSON.parse(responseText);
                var availableTags = [];
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    

                    $("#materialType_Text").autocomplete({
                    source: function(request, response) {
                        var results = $.ui.autocomplete.filter(data, request.term);
                        response(results.slice(0, 6));
                    }

                });  
                console.log("completed");
            }
            , error: function(resT) {
            }        
            
        });   
}
//MATERIAL GROUP AUTO COMPLETE
function matGrpupAutoComplete() {
    
   

    var enteredString = $('#materialGrp_Text').val();
          //  console.log(enteredString);  

     
        var listbankdata = "";
        $.ajax({
            type: "POST",
            traditional: true,
            url: 'getMatGroupAautoComplete',
            cache: false,
            data: {
                reqType: "BMtrlGroups",
                enteredString: enteredString
                //term: enteredString
            },
            
            success: function(responseText) {               
     
                console.log(JSON.stringify(responseText));
                var data = JSON.parse(responseText);
                var availableTags = [];
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    

                    $("#materialGrp_Text").autocomplete({
                    source: function(request, response) {
                        var results = $.ui.autocomplete.filter(data, request.term);
                        response(results.slice(0, 6));
                    }

                });  
                console.log("completed");
            }
            , error: function(resT) {
            }        
            
        });       
        
    
}
//UOM AUTO COMPLETE
function uomAutoComplete() {
    
   

    var enteredString = $('#uom_Text').val();

    var listbankdata = "";
    $.ajax({
        type: "POST",
        traditional: true,
        url: 'getUOMAautoComplete',
        cache: false,
        data: {
            reqType: "OrgnTerminology",
            enteredString: enteredString
            //term: enteredString
        },

        success: function(responseText) {               

           // console.log(JSON.stringify(responseText));
          var data = JSON.parse(responseText);
            var availableTags = [];
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    

                $("#uom_Text").autocomplete({
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(data, request.term);
                    response(results.slice(0, 6));
                }

            });  
                $(".uomCol").autocomplete({
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(data, request.term);
                    response(results.slice(0, 6));
                }

            });  
                    console.log("completed UOM");
        }
        , error: function(resT) {
        }        

    });       
}
//DOCITEM AUTO COMPLETE
function docItemAutoComplete() {
    
   

    var enteredString = $('#docItem_Text').val();

 
    $.ajax({
        type: "POST",
        traditional: true,
        url: 'getDocItemAutoCompleteData',
        cache: false,
        data: {
            reqType: "ORecordDocument",
            enteredString: enteredString
            //term: enteredString
        },

        success: function(responseText) {               

           // console.log(JSON.stringify(responseText));
          var data = JSON.parse(responseText);
            var availableTags = [];
                 

                $("#docItem_Text").autocomplete({
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(data, request.term);
                    response(results.slice(0, 6));
                }

            });  
                    console.log("completed DOC ITEM");
        }
        , error: function(resT) {
        }        

    });       
}
//DOCUMENT TYPE  AUTO COMPLETE
function docTypeAutoComplete() {
    
   

    var enteredString = $('#docType_Text').val();

 
    $.ajax({
        type: "POST",
        traditional: true,
        url: 'getDocTypeAutoCompleteData',
        cache: false,
        data: {
            reqType: "ORecordDocument",
            enteredString: enteredString
            //term: enteredString
        },

        success: function(responseText) {               

            //console.log(JSON.stringify(responseText));
          var data = JSON.parse(responseText);
            var availableTags = [];
                 

                $("#docType_Text").autocomplete({
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(data, request.term);
                    response(results.slice(0, 6));
                }

            });  
                    console.log("completed DOC TYPE");
        }
        , error: function(resT) {
        }        

    });       
}
//VENDOR ID  AUTO COMPLETE
function vendorIdAutoComplete() {
    
   

    var enteredString = $('#vendorId_Text').val();

 
    $.ajax({
        type: "POST",
        traditional: true,
        url: 'getVendorIdAutoCompleteData',
        cache: false,
        data: {
            reqType: "BVendors",
            enteredString: enteredString
            //term: enteredString
        },

        success: function(responseText) {               

         ///   console.log(JSON.stringify(responseText));
          var data = JSON.parse(responseText);
            var availableTags = [];
                 

                $("#vendorId_Text").autocomplete({
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(data, request.term);
                    response(results.slice(0, 6));
                }

            });  
            
                $("#supplId_Text").autocomplete({
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(data, request.term);
                    response(results.slice(0, 6));
                }

            }); 
            
                    console.log("completed DOC TYPE");
        }
        , error: function(resT) {
        }        

    });       
}
//DESCRIPTOR  AUTO COMPLETE
function descriptorAutoCompleteData() {
    
   

    var enteredString = $('#descriptor_Text').val();

    var listbankdata = "";
    $.ajax({
        type: "POST",
        traditional: true,
        url: 'getDescriptAutoCompleteData',
        cache: false,
        data: {
            reqType: "OrgnTerminology",
            enteredString: enteredString
            //term: enteredString
        },

        success: function(responseText) {               

           // console.log(JSON.stringify(responseText));
          var data = JSON.parse(responseText);
            var availableTags = [];
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    
//                for (var i = 0; i < data.length; i++) {
//                    availableTags.push(data[i].DESCRIPTION);
//                }                    

                $("#descriptor_Text").autocomplete({
                source: function(request, response) {
                    var results = $.ui.autocomplete.filter(data, request.term);
                    response(results.slice(0, 6));
                    
                    
                },
                select: function (event, ui) {
           //alert(ui.item.label);
           // $('#descriptor_Text').val(ui.item.value);
           
            $('#conceptId').val(ui.item.id);
            
           // $( "#descriptor_Text" ).trigger("onchange");
          
        }

            });  
                   
          
            console.log("completed UOM");
        }
        , error: function(resT) {
        }        

    });  
    
    
}


// @DILEEP END











































///FILE ATTACHMENT END


//@AZMATH START



//@AZMATH END