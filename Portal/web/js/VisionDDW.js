/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function clickVisionDDDW(rowid, col1id, col2id, popuptype, value) {

    console.log("col1id" + col1id + ",col2id:" + col2id + ",popuptype" + popuptype + ",value:" + value + ",rowid:" + rowid);

    var country;
    var region;
    if (rowid == 2) {//general data region
        country = $("#country").val();
    }


    if (rowid == 20) {//Payment Tranasaction data region
        country = $("#bankcountry").val();
    }
//    if (rowid==24) {//Payment Tranasaction data city
//        region=$("#bankcountry").val();
//    }
    if (rowid == 24) {//general data city
        region = $("#region").val();
    }
    if (rowid == 25) {//Payment Tranasaction data city
        // region = $("#bankregion").val();
        region = $("#bankregioncode").val();
    }

    console.log("region::" + region);
    var witht;
    if (col1id.lastIndexOf("withholdingtaxpay") > -1 || col1id.lastIndexOf("wtt") > -1) {//wtt

        witht = "P";

    }
    if (col1id.lastIndexOf("withholdingtaxtype") > -1)
    {

        witht = "I";

    }
    console.log("witht::" + witht);
    var witht_tax;
    if (col1id.lastIndexOf("withholdingtaxcode") > -1)
    {
        console.log("===" + $("#withholdingtaxpay").val());
        var tax_pay = $("#withholdingtaxpay").val();
        if (tax_pay != '') {
            witht_tax = $("#withholdingtaxpay").val();//withholdingtaxtype
        } else
        {
            witht_tax = $("#withholdingtaxtype").val();//withholdingtaxtype

        }


    }
    if (col1id.lastIndexOf("wtc") > -1)
    {
        console.log("===" + $("#wtt").val());
        var tax_pay = $("#wtt").val();
        if (tax_pay != '') {
            witht_tax = $("#wtt").val();//withholdingtaxtype
        }


    }
    console.log("col1id::" + col1id);

    console.log("witht_tax::" + witht_tax);
    //

//    if (country ==null) {
//        country=$("#country1").val();
//    }
    console.log("country::" + country);
    var plant = '';
    var role = '';
   var conceptId="";
   var orgnName="";
   conceptId=$("#conceptId").val();
    plant = $("#usr_plnt").val();
    role = $("#usr_rle").val();
    orgnName = $("#usr_orgid").val();
    var divid = "dddw";
    var url = "dropDown";
    var data = {};
    data.jrowid = rowid;
    data.col1id = col1id;
    data.col2id = col2id;
    data.country = country;
    data.witht = witht;
    data.plant = plant;
    data.role = role;
    data.orgnName = orgnName;
    data.conceptId = conceptId;

    //data.title = title;
    var async = true;
    var success = function (result) {
        $("#" + divid).empty();
        var htmlbody = "";
        //$("#dddw").html(result).dialog({title:title});
        console.log("result::" + result);
        //  var resultJSON = JSON.parse(result);
//        if (col1id == "usr_orgid") {
//            htmlbody = "<style>table#sample-table { border-collapse: collapse;}table#sample-table td{border: 1px solid #000;}"
//                    + "table.x1r{border: 1px solid #000;}</style><div ><form name='searchform' action='#' method='GET'>"
//                    + "<fieldset><legend></legend><table class='x1r x4m' style='text-align: center; width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color: #3baae3;color: #ffffff;'>"
//                    + "<th style='width:30%'>" + resultJSON.J_COLHEADER1 + "</th></tr></thead><tbody><tr><td class='x1p1 x50' style='text-align:left;width:25%'>"
//                    + "<input type='text' style='width:99%' id='dddw_ag1' name='ag1' class='btn1' size='54'  value=''/></td></tr><tr><td style='text-align: center'>"
//                    //   + "<input type='hidden'  value ='"+country+"' id='country1'/>"
//                    + "<input name='search' type='button' style='margin-bottom: 4px;' onclick=" + "\"clickVisionDDDWR('" + rowid + "', '" + col1id + "', '" + col2id + "')" + "\" value ='Retrieve'/>"
//                    + "<input name='search' style='margin-bottom: 4px;padding-left:4px;margin-left: 8px;' type='reset' value='Clear'/></td></tr></tbody></table>"
//                    + "</fieldset></form></div><div><form  class = 'samp'>"
//                    + "<fieldset><legend></legend><br><table id='sample-table' class='x1h'  style='text-align: center;width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color:#3baae3;color: #ffffff;'>"
//                    + "<th style='color: #ffffff;width:25%'>" + resultJSON.J_COLHEADER1 + "</th>"
//                    + "</tr></thead></table> <div style='overflow:auto;max-height:320px;min-height:100px'> <table class='x1r x4m' style='text-align: center; width:100%'><tbody  id='tbody'>";
//
//        } else {
//            htmlbody = "<style>table#sample-table { border-collapse: collapse;}table#sample-table td{border: 1px solid #000;}"
//                    + "table.x1r{border: 1px solid #000;}</style><div><form name='searchform' action='#' method='GET'>"
//                    + "<fieldset><legend></legend><table class='x1r x4m' style='text-align: center; width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color: #3baae3;color: #ffffff;'>"
//                    + "<th style='width:25%'>" + resultJSON.J_COLHEADER1 + "</th><th >" + resultJSON.J_COLHEADER2 + "</th></tr></thead><tbody><tr><td class='x1p1 x50' style='text-align:left;width:25%'>"
//                    + "<input type='text' style='width:100%' id='dddw_ag1' name='ag1' class='btn1' size='10'  value=''/></td><td class='x1p1 x50' style='text-align:left;'>"
//                    + "<input type='text' style='width:99%' id='dddw_ag2' name='ag2' class='btn1' size='40'  value=''/></td></tr><tr><td style='text-align: center'>"
//                    //   + "<input type='hidden'  value ='"+country+"' id='country1'/>"
//                    + "<input name='search' type='button' style='margin-bottom: 4px;' onclick=" + "\"clickVisionDDDWR('" + rowid + "', '" + col1id + "', '" + col2id + "')" + "\" value ='Retrieve'/>"
//                    + "</td><td style='text-align: left'><input name='search' style='margin-bottom: 4px;' type='reset' value='Clear'/></td></tr></tbody></table>"
//                    + "</fieldset></form></div><div><form  class = 'samp'>"
//                    + "<fieldset><legend></legend><br><table id='sample-table' class='x1h'  style='text-align: center;width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color:#3baae3;color: #ffffff;'>"
//                    + "<th style='color: #ffffff;width:25%'>" + resultJSON.J_COLHEADER1 + "</th><th  style='color: #ffffff;'>" + resultJSON.J_COLHEADER2 + "</th>"
//                    + "</tr></thead></table><div style='overflow:auto;max-height:307px;min-height:100px'><table class='x1r x4m' style='text-align: center; width:100%'><tbody  id='tbody'>";
//       }
////        overflow: scroll;
//        var data = resultJSON.data;
//
//        for (var i = 0; i < data.length; i++) {
//            var ndata = data[i];
//            if (col1id == "usr_orgid") {
//                htmlbody = htmlbody + "<tr style='border-style:solid;border-width:1px' onclick=" + "\"popVisionDDDW2textboxs(this,'" + col1id + "','" + col2id + "','" + ndata.cde + "')" + "\">"
//                        + "<td  style='text-align:left;width:30%;border-style:solid;border-width:1px'>" + ndata.col1 + "</td>"
//                        + "</tr>";
//            } else {
//                htmlbody = htmlbody + "<tr  onclick=" + "\"popVisionDDDW2textboxs(this,'" + col1id + "','" + col2id + "','" + ndata.cde + "')" + "\">"
//                        + "<td  style='border-width:1px;border-style:solid;text-align:left;width:25%'>" + ndata.col1 + "</td>"
//                        + "<td  style='border-width:1px;border-style:solid;text-align:left;'>" + ndata.col2 + "</td></tr>";
//           }
//        }
//        htmlbody = htmlbody + "</tbody></table></div></fieldset></form></div>";

        var resultJSON = JSON.parse(result);
        console.log("resultJSON.J_COLHEADER1:" + resultJSON.J_COLHEADER1 + ", resultJSON.J_COLHEADER2:" + resultJSON.J_COLHEADER2);


        var gridData = resultJSON.data;


        $("#dddw").empty();
        $("#dddw").append("<input style='float:right' class='clear_filter' type='button' value='Clear' id='ddClear'/></div><div id='ddGrid'></div>");

        var col1_hidden = false;
        var col2_hidden = false;
        var col3_hidden = true;

        if (rowid == '92')
        {
            col3_hidden = false;

        }



        if (col1id == "usr_orgid") {




        }
//if (rowid == "91"){
//    col1_hidden=true;
//    
//    
//    
//}
        console.log("gridData:::" + JSON.stringify(gridData));

        var source =
                {
                    localdata: gridData,
                    datafields:
                            [
                                {name: 'col1', type: 'string'},
                                {name: 'col2', type: 'string'},
                                {name: 'col3', type: 'string'}

                            ],
                    datatype: "JSON"
                };
        var adapter = new $.jqx.dataAdapter(source);

        $("#ddGrid").jqxGrid(
                {
                    width: '100%',
                    theme: 'energyblue',
                    source: adapter,
                    filterable: true,
                    enabletooltips: true,
                    showfilterrow: true,
                    height: '360',
                    //    showtoolbar:true,
                    //   autoheight: true,
                    //                                        autorowheight: true,
                    columnsresize: true,
                    sortable: true,
                    columns: [
                        {text: resultJSON.J_COLHEADER1, hidden: col1_hidden, align: 'center', datafield: 'col1', width: "120", cellsalign: 'left'},
                        {text: resultJSON.J_COLHEADER2, hidden: col2_hidden, align: 'center', datafield: 'col2', width: "255", cellsalign: 'left'},
                        {text: 'Hidden Feild', hidden: col3_hidden, align: 'center', datafield: 'col3', width: "255", cellsalign: 'left'}

                    ]
                });

        $('#ddClear').on('click', function () {
            $('#ddGrid').jqxGrid('clearfilters');
        });
        $('#ddGrid').on('rowclick', function (event)
        {
            $(".all_errors").hide();
            var args = event.args;
            // row's bound index.
            var boundIndex = args.rowindex;
            // row's visible index.
            var visibleIndex = args.visibleindex;
            // right click.
            var rightclick = args.rightclick;
            // original event.
            var ev = args.originalEvent;

            var colValue = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "col1");
            var col2Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "col2");
            var col3Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "col3");

//    alert("col3Value:::"+col3Value);
//    alert("col2id::"+col2id);

            if (value != undefined)
            {
                //     rowid,gridrowid,gridname,datafield,value
                //     rowid, col1id, col2id, popuptype,value

                /// $("#"+col2id).se


                var datafieldArray = popuptype.split(",");

                //  datafieldArray[0];




                colValue = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "col1");
                console.log(colValue);
                col1id = col1id.replace("row:", "");
                var re = new RegExp('_', 'g');
                value = value.replace(re, ' ');
                console.log('col2id::' + col2id + ',datafield::' + datafieldArray[0] + ", rowid:" + col1id, ", value::" + value);
                $("#" + col2id).jqxGrid('setcellvalue', col1id, datafieldArray[0], colValue);
                if (datafieldArray.length > 1)
                {

                    re = new RegExp('#', 'g');
                    value=datafieldArray[1];
                    value = value.replace(re, '_');
                    $("#" + col2id).jqxGrid('setcellvalue', col1id, datafieldArray[1], col3Value);

                }

          
if (rowid == 88) {


                    $("#" + col2id).jqxGrid('setcellvalue', col1id, "VENDOR_NAME", col2Value);
                    // $("#" + col2id).jqxGrid('setcellvalue', col2id, "VENDOR_NAME", col2Value);
                } else
                if (rowid == 87 || rowid == 103) {


                    $("#" + col2id).jqxGrid('setcellvalue', col1id, datafieldArray[0], col2Value);


                }
            }
            else {
                

                if (rowid == 103) {

                    $("#referenceType_Text").attr("data-value", colValue);
                    $("#referenceType_Text").val(col2Value);

                } else if (rowid == 87) {
                  

                   
                    $("#docType_Text").val(col2Value);
                  
                     $("#docType_Text").attr("data-value", colValue);
              


                }else{
                    
                    $("#" + col1id).val(colValue);
                }


                

//            if (col2id != '') {
//              $("#"+col2id).val(col3Value);  
//        
//            }
                if (col2id.indexOf("conceptId") > -1) {

                    $("#" + col2id).val(col3Value);
                    $("#" + col1id).trigger("change");

                }else if(col2id.indexOf("vendorName_Text")>-1){
                    
                    
                          
                     $("#vendorName_Text").val( col2Value);
                }else if(col2id.indexOf("supplName_Text")>-1){
                    
                    
                          
                     $("#supplName_Text").val( col2Value);
                } else if (col2id != '') {

                    $("#" + col2id).val(col3Value);

                }

            }
            $("#dddw").dialog('close');
            //=============================================================================


            if (col1id == "usr_rle") {
                var RoleVal = $("#usr_rle").val();
                console.log("RoleVal:::" + RoleVal);
                if (RoleVal)
                {
                    $("#rpt_img").show();
                }
                else
                {
                    $("#rpt_img").hide();
                }

                if (RoleVal.lastIndexOf("REQUESTOR") > -1)//== "MM_REQUESTER") || (RleVal == "VM_REQUESTER") || (RleVal == "CM_REQUESTER") || (RleVal == "SM_REQUESTER")
                {
                    $(".mandatry").show();
                }
                else
                {
                    $(".mandatry").hide();
                }
                if (RoleVal == "FUNCT_CONSULTANT")
                {
                    $(".fun_row").hide();
//                    $(".password_star").html("");
//                    $("#pwd").attr("disabled", "disabled");
//                    $(".password2_star").html("");
//                    $("#password2").attr("disabled", "disabled");
                }
                else
                {
                    $(".fun_row").show();
//                    $("#pwd").removeAttr('disabled');
//                    $("#password2").removeAttr('disabled');
                }

            }

            if (col1id == "region") {
                var RegionVal = $("#region").val();

//                if (RegionVal == "IN")
//                {
//                    $("#mob_a").val("+91");
//                    $("#mob_a").attr("disabled", "disabled");
//                    $("#tel_no_a").val("+91");
//                    $("#tel_no_a").attr("disabled", "disabled");
//
//
//
//                }
//                else {
//                    $("#mob_a").removeAttr("disabled", "disabled");
//                    $("#mob_a").val("");
//                    $("#tel_no_a").removeAttr("disabled", "disabled");
//                    $("#tel_no_a").val("");
//                    
//                }
                
                $("#mob_a").val(col3Value);
                $("#tel_no_a").val(col3Value);
            }

        });




        //  popVisionDDDW2textboxs(this, '" + col1id + "', '" + col2id + "', '" + ndata.cde + "');





        //  $("#dddw").html(htmlbody);

        $("#dddw").css("overflow", "hidden");
        $("#dddw").dialog({
            title: resultJSON.J_HEADER,
            height: 450,
            width: 400,
            modal: true

        });

    };
    var req = {};
    req.url = url;
    req.data = data;
    req.async = async;
    req.type = "post";
    req.success = success;
    $.ajax(req);
}

function clickVisionDDDW_bkp(rowid, col1id, col2id) {
    var country;
    var region;
    if (rowid == 2) {//general data region
        country = $("#country").val();
    }
    if (rowid == 20) {//Payment Tranasaction data region
        country = $("#bankcountry").val();
    }
//    if (rowid==24) {//Payment Tranasaction data city
//        region=$("#bankcountry").val();
//    }
    if (rowid == 24) {//general data city
        region = $("#region").val();
    }
    if (rowid == 25) {//Payment Tranasaction data city
        // region = $("#bankregion").val();
        region = $("#bankregioncode").val();
    }

    console.log("region::" + region);
    var witht;
    if (col1id.lastIndexOf("withholdingtaxpay") > -1 || col1id.lastIndexOf("wtt") > -1) {//wtt

        witht = "P";

    }
    if (col1id.lastIndexOf("withholdingtaxtype") > -1)
    {

        witht = "I";

    }
    console.log("witht::" + witht);
    var witht_tax;
    if (col1id.lastIndexOf("withholdingtaxcode") > -1)
    {
        console.log("===" + $("#withholdingtaxpay").val());
        var tax_pay = $("#withholdingtaxpay").val();
        if (tax_pay != '') {
            witht_tax = $("#withholdingtaxpay").val();//withholdingtaxtype
        } else
        {
            witht_tax = $("#withholdingtaxtype").val();//withholdingtaxtype

        }


    }
    if (col1id.lastIndexOf("wtc") > -1)
    {
        console.log("===" + $("#wtt").val());
        var tax_pay = $("#wtt").val();
        if (tax_pay != '') {
            witht_tax = $("#wtt").val();//withholdingtaxtype
        }


    }
    console.log("col1id::" + col1id);

    console.log("witht_tax::" + witht_tax);
    //

//    if (country ==null) {
//        country=$("#country1").val();
//    }
    console.log("country::" + country);
    var plant='';
    var role='';
    plant=$("#usr_plnt").val();
    role= $("#usr_rle").val();
    var divid = "dddw";
    var url = "dropDown";
    var data = {};
    data.jrowid = rowid;
    data.col1id = col1id;
    data.col2id = col2id;
    data.country = country;
    data.witht = witht;
    data.plant = plant;
    data.role = role;

    //data.title = title;
    var async = true;
    var success = function (result) {
        $("#" + divid).empty();
        var htmlbody = "";
        //$("#dddw").html(result).dialog({title:title});
        console.log("result::" + result);
        //  var resultJSON = JSON.parse(result);
//        if (col1id == "usr_orgid") {
//            htmlbody = "<style>table#sample-table { border-collapse: collapse;}table#sample-table td{border: 1px solid #000;}"
//                    + "table.x1r{border: 1px solid #000;}</style><div ><form name='searchform' action='#' method='GET'>"
//                    + "<fieldset><legend></legend><table class='x1r x4m' style='text-align: center; width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color: #3baae3;color: #ffffff;'>"
//                    + "<th style='width:30%'>" + resultJSON.J_COLHEADER1 + "</th></tr></thead><tbody><tr><td class='x1p1 x50' style='text-align:left;width:25%'>"
//                    + "<input type='text' style='width:99%' id='dddw_ag1' name='ag1' class='btn1' size='54'  value=''/></td></tr><tr><td style='text-align: center'>"
//                    //   + "<input type='hidden'  value ='"+country+"' id='country1'/>"
//                    + "<input name='search' type='button' style='margin-bottom: 4px;' onclick=" + "\"clickVisionDDDWR('" + rowid + "', '" + col1id + "', '" + col2id + "')" + "\" value ='Retrieve'/>"
//                    + "<input name='search' style='margin-bottom: 4px;padding-left:4px;margin-left: 8px;' type='reset' value='Clear'/></td></tr></tbody></table>"
//                    + "</fieldset></form></div><div><form  class = 'samp'>"
//                    + "<fieldset><legend></legend><br><table id='sample-table' class='x1h'  style='text-align: center;width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color:#3baae3;color: #ffffff;'>"
//                    + "<th style='color: #ffffff;width:25%'>" + resultJSON.J_COLHEADER1 + "</th>"
//                    + "</tr></thead></table> <div style='overflow:auto;max-height:320px;min-height:100px'> <table class='x1r x4m' style='text-align: center; width:100%'><tbody  id='tbody'>";
//
//        } else {
//            htmlbody = "<style>table#sample-table { border-collapse: collapse;}table#sample-table td{border: 1px solid #000;}"
//                    + "table.x1r{border: 1px solid #000;}</style><div><form name='searchform' action='#' method='GET'>"
//                    + "<fieldset><legend></legend><table class='x1r x4m' style='text-align: center; width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color: #3baae3;color: #ffffff;'>"
//                    + "<th style='width:25%'>" + resultJSON.J_COLHEADER1 + "</th><th >" + resultJSON.J_COLHEADER2 + "</th></tr></thead><tbody><tr><td class='x1p1 x50' style='text-align:left;width:25%'>"
//                    + "<input type='text' style='width:100%' id='dddw_ag1' name='ag1' class='btn1' size='10'  value=''/></td><td class='x1p1 x50' style='text-align:left;'>"
//                    + "<input type='text' style='width:99%' id='dddw_ag2' name='ag2' class='btn1' size='40'  value=''/></td></tr><tr><td style='text-align: center'>"
//                    //   + "<input type='hidden'  value ='"+country+"' id='country1'/>"
//                    + "<input name='search' type='button' style='margin-bottom: 4px;' onclick=" + "\"clickVisionDDDWR('" + rowid + "', '" + col1id + "', '" + col2id + "')" + "\" value ='Retrieve'/>"
//                    + "</td><td style='text-align: left'><input name='search' style='margin-bottom: 4px;' type='reset' value='Clear'/></td></tr></tbody></table>"
//                    + "</fieldset></form></div><div><form  class = 'samp'>"
//                    + "<fieldset><legend></legend><br><table id='sample-table' class='x1h'  style='text-align: center;width:100%'>"
//                    + "<thead style='font-weight: normal; font-size: smaller;'><tr style='background-color:#3baae3;color: #ffffff;'>"
//                    + "<th style='color: #ffffff;width:25%'>" + resultJSON.J_COLHEADER1 + "</th><th  style='color: #ffffff;'>" + resultJSON.J_COLHEADER2 + "</th>"
//                    + "</tr></thead></table><div style='overflow:auto;max-height:307px;min-height:100px'><table class='x1r x4m' style='text-align: center; width:100%'><tbody  id='tbody'>";
//       }
////        overflow: scroll;
//        var data = resultJSON.data;
//
//        for (var i = 0; i < data.length; i++) {
//            var ndata = data[i];
//            if (col1id == "usr_orgid") {
//                htmlbody = htmlbody + "<tr style='border-style:solid;border-width:1px' onclick=" + "\"popVisionDDDW2textboxs(this,'" + col1id + "','" + col2id + "','" + ndata.cde + "')" + "\">"
//                        + "<td  style='text-align:left;width:30%;border-style:solid;border-width:1px'>" + ndata.col1 + "</td>"
//                        + "</tr>";
//            } else {
//                htmlbody = htmlbody + "<tr  onclick=" + "\"popVisionDDDW2textboxs(this,'" + col1id + "','" + col2id + "','" + ndata.cde + "')" + "\">"
//                        + "<td  style='border-width:1px;border-style:solid;text-align:left;width:25%'>" + ndata.col1 + "</td>"
//                        + "<td  style='border-width:1px;border-style:solid;text-align:left;'>" + ndata.col2 + "</td></tr>";
//           }
//        }
//        htmlbody = htmlbody + "</tbody></table></div></fieldset></form></div>";

        var resultJSON = JSON.parse(result);
        console.log("resultJSON.J_COLHEADER1:"+resultJSON.J_COLHEADER1+", resultJSON.J_COLHEADER2:"+resultJSON.J_COLHEADER2);
        
        
        var gridData = resultJSON.data;


        $("#dddw").empty();
        $("#dddw").append("<input style='float:right' class='clear_filter' type='button' value='Clear' id='ddClear'/></div><div id='ddGrid'></div>");

var col1_hidden=false;
var col2_hidden=false;
var col3_hidden=true;

if (col1id == "usr_orgid"){
    
    
    
    
}
//if (rowid == "91"){
//    col1_hidden=true;
//    
//    
//    
//}
//console.log("gridData:::"+JSON.stringify(gridData));

        var source =
                {
                    localdata: gridData,
                    datafields:
                            [
                                {name: 'col1', type: 'string'},
                                {name: 'col2', type: 'string'},
                                {name: 'col3', type: 'string'}

                            ],
                    datatype: "JSON"
                };
        var adapter = new $.jqx.dataAdapter(source);
        
        $("#ddGrid").jqxGrid(
                {
                    width: '100%',
                    theme: 'energyblue', 
                    source: adapter,
                    filterable:true,
                    enabletooltips: true,
                    showfilterrow: true,
                    height:'360',
                    
                //    showtoolbar:true,
                                        //   autoheight: true,
                    //                                        autorowheight: true,
                    columnsresize: true,
                    sortable: true,
                    columns: [
                        {text: resultJSON.J_COLHEADER1,hidden:col1_hidden, align: 'center', datafield: 'col1', width: "120", cellsalign: 'left'},
                        {text: resultJSON.J_COLHEADER2,hidden:col2_hidden, align: 'center', datafield: 'col2', width: "255", cellsalign: 'left'},
                        {text: 'Hidden Feild',hidden:col3_hidden, align: 'center', datafield: 'col3', width: "255", cellsalign: 'left'}

                    ]
                });

$('#ddClear').on('click', function () {
   $('#ddGrid').jqxGrid('clearfilters');
});
$('#ddGrid').on('rowclick', function (event) 
{
    var args = event.args;
    // row's bound index.
    var boundIndex = args.rowindex;
    // row's visible index.
    var visibleIndex = args.visibleindex;
    // right click.
    var rightclick = args.rightclick; 
    // original event.
    var ev = args.originalEvent;         
    
       var colValue = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "col1");
       var col3Value = $('#ddGrid').jqxGrid('getcellvalue', boundIndex, "col3");
        
//    alert("col3Value:::"+col3Value);
//    alert("col2id::"+col2id);
    $("#"+col1id).val(colValue);     
    
//            if (col2id != '') {
//              $("#"+col2id).val(col3Value);  
//        
//            }
            if (col2id.indexOf("conceptId") > -1) {

                $("#" + col2id).val(col3Value);
                $("#" + col1id).trigger("change");

            } else if (col2id != '') {

                $("#" + col2id).val(col3Value);

            }
     $("#dddw").dialog('close');
    //=============================================================================
    
    
     if (col1id == "usr_rle") {
            var RoleVal = $("#usr_rle").val();
            console.log("RoleVal:::"+RoleVal);
            if (RoleVal)
            {
                $("#rpt_img").show();
            }
            else
            {
                $("#rpt_img").hide();
            }

            if (RoleVal.lastIndexOf("REQUESTOR") > -1)//== "MM_REQUESTER") || (RleVal == "VM_REQUESTER") || (RleVal == "CM_REQUESTER") || (RleVal == "SM_REQUESTER")
            {
                $(".mandatry").show();
            }
            else
            {
                $(".mandatry").hide();
            }
            if(RoleVal=="FUNCT_CONSULTANT")            
                {
                $(".password_star").html("");
                $("#pwd").attr("disabled","disabled");
                $(".password2_star").html("");
                $("#password2").attr("disabled","disabled");
                }
            else
                {
                    $("#pwd").removeAttr('disabled');
                    $("#password2").removeAttr('disabled');
                }

        }
      
            if (col1id == "region") {
                var RegionVal = $("#region").val();

//                if (RegionVal == "IN")
//                {
//                    $("#mob_a").val("+91");
//                    $("#mob_a").attr("disabled", "disabled");
//                    $("#tel_no_a").val("+91"); 
//                    $("#tel_no_a").attr("disabled", "disabled");                   
//                }
//                else {
//                    $("#mob_a").removeAttr("disabled", "disabled");
//                    $("#mob_a").val("");
//                    $("#tel_no_a").removeAttr("disabled", "disabled");
//                    $("#tel_no_a").val("");
//                }
                $("#mob_a").val(col3Value);
                $("#tel_no_a").val(col3Value);
            }
    
}); 




      //  popVisionDDDW2textboxs(this, '" + col1id + "', '" + col2id + "', '" + ndata.cde + "');





      //  $("#dddw").html(htmlbody);

        $("#dddw").css("overflow", "hidden");
        $("#dddw").dialog({
            title: resultJSON.J_HEADER,
            height: 450,
            width: 400,
            modal: true
        });

    };
    var req = {};
    req.url = url;
    req.data = data;
    req.async = async;
    req.type = "post";
    req.success = success;
    $.ajax(req);
}


function popVisionDDDW2textboxs(elem, col1id, col2id, country_cde) {
    
    
//    console.log("popVisionDDDW2textboxs::col1id:::"+col1id)
    var s1 = elem.cells[0].firstChild;
    var s2 = "";
    if (col2id != '') {

        s2 = elem.cells[1].firstChild;
    }


    if (s1 != null)
    {
        s1 = s1.data.trim();
    }
    if (s2 != "")
    {
        s2 = s2.data.trim();
    }
    // console.log('s1:' + s1);

//    var s1 = elem.cells[0].val();
//    var s2 = elem.cells[1].val();
    console.log("value1 : " + s1 + " value2 : " + s2);
    console.log("col1id : " + col1id + " col2id : " + col2id);
    try {

        if (col1id == "bankregion") {

            if (col1id != null && col1id != "") {
                document.getElementById(col1id).value = s2;
            }
//            if (col2id != null && col2id != "") {

            document.getElementById("bankregioncode").value = s1;
            //}
        } else
        {
            if (col1id != null && col1id != "") {
                document.getElementById(col1id).value = s1;
            }
            if (col2id != null && col2id != "") {
                document.getElementById(col2id).value = s2;
            }

        }
        
        if (col1id == "usr_rle") {
            var RoleVal = $("#usr_rle").val();
            console.log("RoleVal:::"+RoleVal);
            if (RoleVal)
            {
                $("#rpt_img").show();
            }
            else
            {
                $("#rpt_img").hide();
            }

            if (RoleVal.lastIndexOf("REQUESTOR") > -1)//== "MM_REQUESTER") || (RleVal == "VM_REQUESTER") || (RleVal == "CM_REQUESTER") || (RleVal == "SM_REQUESTER")
            {
                $(".mandatry").show();
            }
            else
            {
                $(".mandatry").hide();
            }
            if(RoleVal=="FUNCT_CONSULTANT")            
                {
                $(".password_star").html("");
                $("#pwd").attr("disabled","disabled");
                $(".password2_star").html("");
                $("#password2").attr("disabled","disabled");
                }
            else
                {
                    $("#pwd").removeAttr('disabled');
                    $("#password2").removeAttr('disabled');
                }

        }
          
    if (col1id == "region") {
        var RegionVal = $("#region").val();
        
        if(RegionVal=="IN")
        {
            $("#mob_a").val("+91");
           $("#mob_a").attr("disabled","disabled");
            $("#tel_no_a").val("+91");
             $("#tel_no_a").attr("disabled","disabled");
            
        }
        else{
             $("#mob_a").removeAttr("disabled","disabled");
              $("#mob_a").val("");
             $("#tel_no_a").removeAttr("disabled","disabled");
              $("#tel_no_a").val("");
        }
    }

    } catch (e) {
        console.log(e);
    }

    if (col1id == "comp_code") {
        extendcompanycode();
    }
    if (col1id == "purch_org") {
        extendpurchaseorg();
    }

    if (col1id == "country") {
        $('#region').val('');
        $('#city').val('');
        $('#post_code').val('');
        $('.region_dd').show();
        $('.city').hide();
        if (s1.lastIndexOf("IN") > -1) {
            console.log("You reached");
            $('#trc_pe').attr("disabled", true);
            $('#fvd').css("display", "none");
            $('#trccertnum').attr("readonly", true);
            $('#pecertnum').attr("readonly", true);
            $("#datepicker3").datepicker("option", "disabled", true);
            $("#datepicker4").datepicker("option", "disabled", true);

        } else
        {

            $('#trc_pe').attr("disabled", false);
            $('#fvd').css("display", "inline-block");
            $('#trccertnum').attr("readonly", false);
            $('#pecertnum').attr("readonly", false);
            $("#datepicker3").datepicker("option", "disabled", false);
            $("#datepicker4").datepicker("option", "disabled", false);

        }

        // country code
        $("#tel_no_a").val(country_cde);
        $("#tel_no2_a").val(country_cde);
        $("#tel_no3_a").val(country_cde);
        $("#mob_a").val(country_cde);
        $("#mob2_a").val(country_cde);
        $("#mob3_a").val(country_cde);
        $("#fax_no_a").val(country_cde);


    }
    if (col1id == "region") {

        var country = $('#country').val();

        console.log("country::" + country);
        if (country == 'IN') {
            $('#city').val('');
            $('#post_code').val('');
            $('.city').show();
            $('#city').attr("readonly", true);



        } else
        {
            $('#city').val('');
            $('#post_code').val('');
            $('.city').hide();
            $('#city').attr("readonly", false);
        }

    }

    if (col1id == "bankcountry") {
        $('.bankregion_dd').show();
    }
    if (col1id == "bankregion") {


        var country = $('#bankcountry').val();

        console.log("country::" + country);
        if (country == 'IN') {

            $('.bankcity').show();
            $('#bankcity').attr("readonly", true);


        } else
        {
            $('.bankcity').hide();
            $('#bankcity').attr("readonly", false);
        }
        //  $('.bankcity').show();
    }

    if (col1id == "account_group") {

        VAGValidations(col1id, col2id, s1, s2, '');

    }

    if (col1id == "withholdingtaxpay")
    {
        var temp1 = $("#withholdingtaxpay").val();
        if (temp1) {
            $("#withholdingtaxtype").val("");
            $(".withholdingtaxtype").hide();
            $(".withholdingtaxpay").show();
            $("#withholdingtaxpay").prop("readonly", false);
            $("#withholdingtaxtype").prop("readonly", true);
            $("#withholdingtaxtype").prop("disabled", 'disabled');
            $("#withholdingtaxpay").attr("disabled", false);
        }
        else
        {

            $("#withholdingtaxtype").val("");
            $("#withholdingtaxpay").val("");
            $(".withholdingtaxpay").show();
            $(".withholdingtaxtype").show();
            $("#withholdingtaxtype").attr("disabled", "disabled");
            $("#withholdingtaxpay").attr("disabled", "disabled");

        }
    }
    if (col1id == "withholdingtaxtype")
    {
        var temp1 = $("#withholdingtaxtype").val();
        if (temp1) {
            $("#withholdingtaxpay").val("");
            $(".withholdingtaxpay").hide();
            $(".withholdingtaxtype").show();
            $("#withholdingtaxpay").prop("readonly", true);
            $("#withholdingtaxpay").prop("disabled", 'disabled');
            $("#withholdingtaxtype").prop("readonly", false);
            $("#withholdingtaxtype").attr("disabled", false);
        }
        else
        {

            $("#withholdingtaxtype").val("");
            $("#withholdingtaxpay").val("");
            $(".withholdingtaxpay").show();
            $(".withholdingtaxtype").show();
            $("#withholdingtaxtype").attr("disabled", "disabled");
            $("#withholdingtaxpay").attr("disabled", "disabled");

        }
    }

    $("#dddw").dialog("close");
    if (col1id == "country" || col1id == "region" || col1id == "ind_sec")
    {

        console.log(col1id);
//        gen_progress_count();
    }
    if (col1id == "schema_group" || col1id == "ord_cur" || col1id == "incoterms" || col1id == "term_pay")
    {
        console.log(col1id);
        purchase_progress_count();
    }

//    if (col1id == "country") {
//        $('.region_dd').show();
//    }


    if (col1id == "sk") {
        mdm_progress_count();
        //return true;
    }
    if (col1id == "withholdingtaxtype" || col1id == "withholdingtaxpay")
    {
        wth_tax_progress_count();
        // return true;
    }
    if (col1id == "wtt" || col1id == "wtc" || col1id == "sc" || col1id == "cr")//sc
    {
        wth_tan_progress_count();
        //return true;
    }
    if (col1id == "rec_ac" || col1id == "cmg")
    {
        cadata_progress_count();
        // return true;
    }
    if (col1id == "bankregion" || col1id == "bankcountry")
    {
        pt_progress_count();
        //return true;
    }
    if (col1id == "exrsid")
    {
        wth_tan_progress_count();
        //return true;
    }
    if (col1id == "pms")
    {
        pc_progress_count();
    }

    //$("#dddw").dialog({title: resultJSON.J_HEADER, height: 450, width: 400, modal: true});

}
;

function clickVisionDDDWR(jrowid, col1id, col2id) {
    var divid = "dddw";
    var country
    var region
    if (jrowid == 2) {//general data region
        country = $("#country").val();
    }
    if (jrowid == 20) {//Payment Tranasaction data region
        country = $("#bankcountry").val();
    }

    if (jrowid == 24) {//general data city
        region = $("#region").val();
    }
    if (jrowid == 25) {//Payment Tranasaction data city
        // region = $("#bankregion").val();
        region = $("#bankregioncode").val();
    }
    var witht = "";
    if (col1id.lastIndexOf("withholdingtaxpay") > -1 || col1id.lastIndexOf("wtt") > -1) {//wtt

        witht = "P";

    }
    if (col1id.lastIndexOf("withholdingtaxtype") > -1)
    {

        witht = "I";

    }
    var witht_tax;
    if (col1id.lastIndexOf("withholdingtaxcode") > -1)
    {
        console.log("===" + $("#withholdingtaxpay").val());
        var tax_pay = $("#withholdingtaxpay").val();
        if (tax_pay != '') {
            witht_tax = $("#withholdingtaxpay").val();//withholdingtaxtype
        } else
        {
            witht_tax = $("#withholdingtaxtype").val();//withholdingtaxtype

        }


    }
    if (col1id.lastIndexOf("wtc") > -1)
    {
        console.log("===" + $("#wtt").val());
        var tax_pay = $("#wtt").val();
        if (tax_pay != '') {
            witht_tax = $("#wtt").val();//withholdingtaxtype
        }


    }
    console.log("clickDDDWR:::col1id" + col1id);
    console.log("clickDDDWR:::witht" + witht);
//    var url = "dddwServlet";
    var url = "MainVendorServlet";
    var data = {};
    data.reqType = 'drop_down';
    data.jrowid = jrowid;
    data.col1id = col1id;
    data.col2id = col2id;
    data.country = country;

    //data.title = title;
    data.col1 = $("#dddw_ag1").val();
    data.col2 = $("#dddw_ag2").val();
    var col1 = $("#dddw_ag1").val();
    var col2 = $("#dddw_ag2").val();
    console.log("clickDDDWR:::col1--" + col1 + "---col2" + col2);
    var async = true;
    var success = function (result) {

        var resultJSON = JSON.parse(result);
        var gridData = resultJSON.data;


         $("#" + divid).empty();
         $("#" + divid).append("<div id='ddGrid'></div>");

        var source =
                {
                    localdata: gridData,
                    datafields:
                            [
                                {name: 'col1', type: 'string'},
                                {name: 'col2', type: 'string'}

                            ],
                    datatype: "JSON"
                };
        var adapter = new $.jqx.dataAdapter(source);

        $("#ddGrid").jqxGrid(
                {
                    width: '100%',
                    theme: 'energyblue', height: 380,
                    source: adapter,
                    enabletooltips: true,
//                                           autoheight: true,
                    //                                        autorowheight: true,
                    columnsresize: true,
                    sortable: true,
                    columns: [
                        {text: resultJSON.J_COLHEADER1, align: 'center', datafield: 'col1', width: 200, cellsalign: 'left', cellsrenderer: descriptorrenderer},
                        {text: resultJSON.J_COLHEADER2, align: 'center', datafield: 'col2', width: 545, cellsalign: 'left'}

                    ]
                });








//        $("#" + divid + " #tbody").empty();
//        var resultJSON = JSON.parse(result);
//        var data = resultJSON.data;
//        var htmlbody = "";
//        for (var i = 0; i < data.length; i++) {
//            var ndata = data[i];
//            if (col1id == "usr_orgid") {
//                htmlbody = htmlbody + "<tr style='border-style:solid;border-width:1px' onclick=" + "\"popVisionDDDW2textboxs(this,'" + col1id + "','" + col2id + "','" + ndata.cde + "')" + "\">"
//                        + "<td  style='text-align:left;width:30%;border-style:solid;border-width:1px'>" + ndata.col1 + "</td>"
//                        + "</tr>";
//            } else {
//                htmlbody = htmlbody + "<tr  onclick=" + "\"popVisionDDDW2textboxs(this,'" + col1id + "','" + col2id + "','" + ndata.cde + "')" + "\">"
//                        + "<td  style='border-width:1px;border-style:solid;text-align:left;width:25%'>" + ndata.col1 + "</td>"
//                        + "<td  style='border-width:1px;border-style:solid;text-align:left;'>" + ndata.col2 + "</td></tr>";
//            }
//        }
//        $("#" + divid + " #tbody").html(htmlbody);








        //$("#dddw").dialog({title: resultJSON.J_HEADER});
    };
    var req = {};
    req.url = url;
    req.data = data;
    req.type = "post";
    req.async = async;
    req.success = success;
    $.ajax(req);
}


 