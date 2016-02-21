/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.chckValues=new  Array();
function propertyHierarchy(rowid) {

    console.log('rowid:' + rowid);
    var children = $('#propertiesgrid').jqxGrid('getcellvalue', rowid, "children");
    var property = $('#propertiesgrid').jqxGrid('getcellvalue', rowid, "property");
    var uom = $('#propertiesgrid').jqxGrid('getcellvalue', rowid, "uom");
    var value = $('#propertiesgrid').jqxGrid('getcellvalue', rowid, "value");
    var jsChildArray = JSON.parse(children);
    //{"value":"na","property":"HEIGHT","type":"string"}


    $("#span" + rowid).removeClass('ui-icon-plus').addClass('ui-icon-minus');



    var html_hier = "";
    var splivalue = value.split('x');
    html_hier = "<thead class='propertyhead'>"
            + "<th class='headings-property propertyCol'> Property</th>"
            + "<th class='headings-property valueCol'> Value </th>"
            + "<th class='headings-property uomCol'>UoM</th>"
            + "<th class='headings-property datatypeCol'>Data Type</th>"
            + "</thead><tbody>";

    var uomvalsplit;

    var mandatoryclass = 'no-mandatory';
    var baskettype = $("#baskettypehid1").val();
    for (var i = 0; i < jsChildArray.length; i++)
    {


        jsChildArray[i].datatype = jsChildArray[i].datatype.toString().replace('_NUMBER', '');
        jsChildArray[i].datatype = jsChildArray[i].datatype.toString().replace(/[_]/, ' ')
        //alert('jsChildArray[i].mandatory:::'+jsChildArray[i].mandatory);
        if (jsChildArray[i].mandatory == 'Y') {
            mandatoryclass = 'mandatory';
        }




        try {

            if (splivalue[i] != undefined)
            {

                splivalue[i] = splivalue[i].trim();
                uomvalsplit = splivalue[i].split(' ');

                if (uomvalsplit[0] == undefined)
                {

                    if (baskettype = 'Search View') {

                        html_hier = html_hier + "<tr>"
                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
                                + " disabled='disabled' type='text' value=''/></td>"
                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
                                + " disabled='disabled' type='text' value=''/></td>"
                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                                + " </tr>";


                    }
                    else {

                        html_hier = html_hier + "<tr>"
                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
                                + " type='text' value=''/></td>"
                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
                                + " type='text' value=''/></td>"
                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                                + " </tr>";
                    }



                }

                else if (uomvalsplit[1] == undefined)
                {


                    if (baskettype = 'Search View') {
                        html_hier = html_hier + "<tr>"
                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
                                + " disabled='disabled' type='text' value='" + uomvalsplit[0] + "'/></td>"
                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
                                + " disabled='disabled' type='text' value='N/A'/></td>"
                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                                + " </tr>";



                    } else {
                        html_hier = html_hier + "<tr>"
                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
                                + " type='text' value='" + uomvalsplit[0] + "'/></td>"
                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
                                + " type='text' value='N/A'/></td>"
                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                                + " </tr>";

                    }
                }
                else {
                    if (baskettype = 'Search View') {
                        html_hier = html_hier + "<tr>"
                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
                                + " disabled='disabled' type='text' value='" + uomvalsplit[0] + "'/></td>"
                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
                                + " disabled='disabled' type='text' value='" + uomvalsplit[1] + "'/></td>"
                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                                + " </tr>";


                    } else {
                        html_hier = html_hier + "<tr>"
                                + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                                + "</td><td class='valueCol'><input class='valueCol-input jqx-input' "
                                + " type='text' value='" + uomvalsplit[0] + "'/></td>"
                                + " <td class='uomCol'><input  class='uomClass jqx-input' "
                                + " type='text' value='" + uomvalsplit[1] + "'/></td>"
                                + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                                + " </tr>";
                    }
                }



            }

            else {

                if (baskettype = 'Search View') {

                    html_hier = html_hier + "<tr>"
                            + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                            + " <td class='valueCol'><input disabled='disabled' class='valueCol-input jqx-input'  type='text' value='" + 0 + "'/></td>"
                            + " <td class='uomCol'>  <input disabled='disabled' class='uomClass jqx-input'  "
                            + " disabled='disabled' type='text'/></td>"
                            + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                            + "</tr>";

                } else {


                    html_hier = html_hier + "<tr>"
                            + "<td class='" + mandatoryclass + " propertyCol'>" + jsChildArray[i].property
                            + " <td class='valueCol'><input  class='valueCol-input jqx-input'  type='text' value='" + 0 + "'/></td>"
                            + " <td class='uomCol'>  <input  class='uomClass jqx-input'  "
                            + " type='text'/></td>"
                            + "<td class='datatypeCol'><div class='datatype_div'>" + jsChildArray[i].datatype + "</div></td>"
                            + "</tr>";
                }
            }


        }


        catch (err) {

        }




    }
    html_hier.replace(undefined, 0);

    html_hier = "<table class='properties_tree' style='width:100%'>" + html_hier + "</tbody></table>";
    //alert(html_hier);
    $("#dialog").html(html_hier);
    uomAutoComplete();
    $("#dialog").dialog({
        modal: true,
        height: 225,
        title: property,
        width: 600,
        textAlign: 'center',
        close: function(event, ui) {
            $("#span" + rowid).removeClass('ui-icon-minus').addClass('ui-icon-plus');

        },
        buttons: {
            Ok: function() {
                $(this).dialog("close");
                var propertyval = "NA";
                $('table.properties_tree tbody tr').each(function() {
                    if (propertyval == "NA") {

                        propertyval = $(this).children('td').eq(1).find("input").val() + " " + $(this).children('td').eq(2).find("input").val();
                    }
                    else {
                        propertyval = propertyval + " x " + $(this).children('td').eq(1).find("input").val() + " " + $(this).children('td').eq(2).find("input").val();
                    }
                    console.log('propertyval:' + propertyval);
                });
                // propertyval = propertyval.repl
                if (baskettype != 'Search View') {
                    $("#value" + rowid).val(propertyval);
                    $('#propertiesgrid').jqxGrid('setcellvalue', rowid, "value", propertyval);
                }

            }
        }
    });
}
var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();
function propValKeyUp(tbid, rowid, type) {

//  $('#propertiesgrid').jqxGrid('getcellvalue', rowid, 'value');

    var datatype = $("#propertiesgrid").jqxGrid('getcellvalue', rowid, 'datatype');

    console.log('setting value::' + $("#" + tbid).val() + " fr row id" + rowid + " type:" + type);
    delay(function() {

        if (type == 'min')
        {
            $("#propertiesgrid").jqxGrid('setcellvalue', rowid, 'value', $("#" + tbid).val() + "~" + $("#valuemax" + rowid).val());
        }
        else if (type == 'max')
        {
            $("#propertiesgrid").jqxGrid('setcellvalue', rowid, 'value', $("#valuemin" + rowid).val() + "~" + $("#" + tbid).val());
        }



        else {


            var val = $("#" + tbid).val();
            var message = "";
            var regex;
            regex = /[a-zA-Z]/;
            if (datatype == 'STRING_TYPE')
            {
                regex = /[a-zA-Z]/;
                message = "Only Alphabets are allowed";
            }
            else if (datatype == 'MEASURE_NUMBER_TYPE')
            {
                regex = /^[0-9]*$/;
                message = "Only Numeric Values are allowed";
            }
            else if (datatype == 'INTEGER_TYPE')
            {
                regex = /^[-|+]{0,1}[0-9]+$/;
                message = "Only Integer values are allowed";
            }
            else if (datatype == 'MEASURE_RANGE_TYPE') {
                regex = /^[-|+]{0,1}[0-9]+[.]{0,1}[0-9]{1,3}$/;
                message = "Only Integer values corrected to utmost two decimal points are allowed";
            }
            if (!val.match(regex))
            {
                $("#propertiesgrid").jqxGrid('setcellvalue', rowid, 'value', "");
                $("#" + tbid).val("");
                //$("#dialog").html(message);
                $("#dialog").html("<br/><center>" + message + "</center><br/>");
                $("#dialog").dialog({
                    modal: true,
                    height: 150,
                    title: "Message",
                    minWidth: 300,
                    maxWidth: 'auto',
                    textAlign: 'center',
                    buttons: {
                        Ok: function() {
                            $(this).dialog("close");
                            $("#" + tbid).val('');
                            $("#" + tbid).focus();

                        }
                    }
                });
                //$("#propertiesupdate").hide();
            }
            else {

//
//                if (type == 'min')
//                {
//                    $("#propertiesgrid").jqxGrid('setcellvalue', rowid, 'value', $("#" + tbid).val() + "~" + $("#valuemax" + rowid).val());
//                }
//                else if (type == 'max')
//                {
//                    $("#propertiesgrid").jqxGrid('setcellvalue', rowid, 'value', $("#valuemin" + rowid).val() + "~" + $("#" + tbid).val());
//                }
//                else {
                $("#propertiesgrid").jqxGrid('setcellvalue', rowid, 'value', $("#" + tbid).val());
                // }
                var focus_val = $("#" + tbid).val();
                $("#" + tbid).val('');
                $("#" + tbid).focus();
                $("#" + tbid).val(focus_val);
                // $("#propertiesupdate").show();
            }
        }
        // $("#" + tbid).focus();
    }, 500);
}
function fetchPropertiesTabData() {
//var conceptId = 

var baskettype = $("#baskettypehid1").val();

if(baskettype=='Search View')
{
    $("#propertiesupdate").hide();
    
}


    var re = new RegExp('#', 'g');
    var conceptId = $("#conceptId").val();
    conceptId = conceptId.replace(re, '_');
    $.ajax({
        type: "POST",
        url: 'propertiestab',
        data: {
            conceptid: conceptId,
            recordNo: $("#recordNo_Text").val()
        },
        traditional: true,
        cache: false,
        success: function(response) {
            //  alert("Properties::" + JSON.stringify(response.properties));
            //   alert(JSON.stringify("Property Values::" + response.propertyvalues));
//                        alert(JSON.stringify("Uoms:::" + response.uoms));

            var labelobj = response.labelobj;

            var labelString = JSON.stringify(labelobj);
            if (labelString.indexOf("\"Mandatory Ind\"") > -1) {

                labelString = labelString.replace("\"Mandatory Ind\"", "\"Mandatory_Ind\"");
            }
            labelobj = JSON.parse(labelString);
            var propValue = "";
            var uomsource = {
                localdata: response.uoms,
                datafields:
                        [
                            {name: 'uom', type: 'string'},
                            {name: 'uomid', type: 'string'}
                        ],
                datatype: "JSON"

            };
            var uomdapter = new $.jqx.dataAdapter(uomsource);
            var source =
                    {
                        localdata: response.properties,
                        datafields:
                                [
                                    {name: 'shortseq', type: 'string'},
                                    {name: 'longseq', type: 'number'},
                                    {name: 'reqflag', type: 'string'},
                                    {name: 'pdrflag', type: 'string'},
                                    {name: 'stxtflag', type: 'string'},
                                    {name: 'ltxtflag', type: 'string'},
                                    {name: 'highlevelid', type: 'string'},
                                    {name: 'datatype', type: 'string'},
                                    {name: 'uom', type: 'string'},
                                    {name: 'uomid', type: 'string'},
                                    {name: 'value', type: 'string'},
                                    {name: 'propertyconceptid', type: 'string'},
                                    {name: 'valueconceptid', type: 'string'},
                                    {name: 'property', type: 'string'},
                                    {name: 'uomid', type: 'string'},
                                    {name: 'children', type: 'string'}

                                ],
                        datatype: "JSON"
                    };
            var adapter = new $.jqx.dataAdapter(source);
            var datatyperenderer = function(row, columnfield, value, defaulthtml, columnproperties) {
                value = value.replace('_TYPE', '');
                value = value.replace(/[_]/, " ");

                return "<div style='padding-left:3px'>" + value + "</div>";
            };
            var propertyrenderer = function(row, columnfield, value, defaulthtml, columnproperties) {
                var property = $('#propertiesgrid').jqxGrid('getcellvalue', row, "property");
                var mand_ind = $('#propertiesgrid').jqxGrid('getcellvalue', row, "reqflag");
                var highlevelid = $('#propertiesgrid').jqxGrid('getcellvalue', row, "highlevelid");
                console.log("highlevelid:::" + highlevelid);
                if (highlevelid != null)
                {
//                    highlevelid = "<img onclick=propertyHierarchy(" + row + ")"
//                            + " src='images/search_icon_color_2.png' class='prop_imgClass'>";
                    highlevelid = "<span id='span" + row + "' class='ui-icon ui-icon-plus' style='cursor:pointer;margin-left:13%;margin-top: -16px;' onclick=propertyHierarchy(" + row + ")></span>";
                }
                else
                    highlevelid = "";
                if (mand_ind == 'Y') {


                    return  "<div title='' style='display:inline-block;color:red;padding-left:3px'> " + property + "</div>" + highlevelid;
                } else {
                    return highlevelid + "<div title='' style='padding-left:3px'> " + property + "</div>" + highlevelid;
                }

            };
            var uomrenderer = function(row, columnfield, value, defaulthtml, columnproperties) {

                var propertyid = $('#propertiesgrid').jqxGrid('getcellvalue', row, "propertyconceptid");
                //rowid,gridrowid,gridname,datafield,value
                var re = new RegExp('#', 'g');
                propertyid = propertyid.replace(re, '_');
                var uom = $('#propertiesgrid').jqxGrid('getcellvalue', row, "uom");
                re = new RegExp(' ', 'g');
                var uom_value = uom.replace(re, "_");

                var basketType = $('#baskettypehid1').val();
                if (basketType == 'Search View') {
                    return "<div class='propertypopupdddw' data-recid='" + row + "' data-prop='" + propertyid + "'>" + uom + "</div>";
                }
                else {
                    return "<div class='propertypopupdddw' data-recid='" + row + "' data-prop='" + propertyid + "'>" + uom + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('92','row:" + row + "','propertiesgrid','uom,uomid','" + uom_value + "')>";
                }

            };
            var valuerenderer = function(row, columnfield, value, defaulthtml, columnproperties) {

                var value = $('#propertiesgrid').jqxGrid('getcellvalue', row, 'value');
                var property = $('#propertiesgrid').jqxGrid('getcellvalue', row, 'property');
                var valuetype = $('#propertiesgrid').jqxGrid('getcellvalue', row, 'datatype');
                var highlevelid = $('#propertiesgrid').jqxGrid('getcellvalue', row, 'highlevelid');
                console.log('renderer value::' + value + ", property:::" + property);
                var basketType = $('#baskettypehid1').val();



                if (highlevelid == null)
                {

                    if (value == undefined || value == 'undefined~undefined') {

                        if (valuetype == 'MEASURE_RANGE_TYPE') {

                            //   return "<div  class='propertypopup' data-recid='' data-prop=''><div  id='valuemin" + row + "' placeholder=''  type='text' class='dddwGridTbMx'>"+value.split("~")[0]+"</div To <div id='valuemax" + row + "' text='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'>"+value.split("~")[1]+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                            tbmin = "valuemin" + row;
                            tbmax = "valuemax" + row;
                            if (basketType == 'Search View') {
                                return "<div  class='propertypopup' data-recid='' data-prop=''><input disabled='disabled'  id='valuemin" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/></div>";

                            }
                            else {

                                return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min') id='valuemin" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='' type='text' class='dddwGridTbMx'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' />";
                            }

                        }
                        else {
                            //  return "<div  class='propertypopup' data-recid='' data-prop=''><div id='value" + row + "' placeholder=''  type='text' class='dddwGridTb'>"+value+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                            tbid = "value" + row;
                            return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='value" + row + "' placeholder='' value='' type='text' class='dddwGridTb'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                        }



                    }
                    else {



//                var valueid = $('#propertiesgrid').jqxGrid('getcellvalue', row, "valueconceptid");
//                //rowid,gridrowid,gridname,datafield,value
//                var re = new RegExp('#', 'g');
//
//                valueid = valueid.replace(re, '_');
                        var value = $('#propertiesgrid').jqxGrid('getcellvalue', row, "value");
//
//                re = new RegExp(' ', 'g');
//                var tb_value = valueid.replace(re, "_");

                        //     return "<div  class='propertypopup' data-recid='" + row + "' data-prop='" + valueid + "'>100<input placeholder='" + value + "' type='text' class='dddwGridTb'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                        var tbid = "";
                        var tbmin = "";
                        var tbmax = "";
                        if (valuetype == 'MEASURE_RANGE_TYPE') {
                            if (value.split("~").length > 1)
                            {
                                //   return "<div  class='propertypopup' data-recid='' data-prop=''><div  id='valuemin" + row + "' placeholder=''  type='text' class='dddwGridTbMx'>"+value.split("~")[0]+"</div To <div id='valuemax" + row + "' text='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'>"+value.split("~")[1]+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";

                                var message = "NA";
                                if (value.split("~")[0].toString().match(/^[a-zA-Z]$/))
                                {
                                    message = "Alphabets are not allowed";


                                }
                                else if (value.split("~")[1].toString().match(/^[a-zA-Z]$/))
                                {
                                    message = "Alphabets are not allowed";
                                }


                                else if (value.split("~")[0] > value.split("~")[1])
                                {
                                    // alert('min value should be less than max value'); 
                                    message = "Min Value should be less than Max Value";
                                }
                                if (message != 'NA') {
                                    $("#dialog").html(message);
                                    $("#dialog").dialog({
                                        modal: true,
                                        height: 120,
                                        title: "Message",
                                        width: 260,
                                        textAlign: 'center',
                                        buttons: {
                                            Ok: function() {
                                                $(this).dialog("close");
                                                var valm = $("#valuemin" + row).val();
                                                $("#valuemin" + row).val('');
                                                $("#valuemin" + row).focus();
                                                $("#valuemin" + row).val(valm);
                                            }
                                        }
                                    });
                                    $("#propertiesupdate").hide();
                                }
                                else {
                                    $("#propertiesupdate").show();
                                }

                                tbmin = "valuemin" + row;
                                tbmax = "valuemax" + row;


                                if (basketType == 'Search View') {
                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input  disabled='disabled' onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min') id='valuemin" + row + "' placeholder='' value='" + value.split("~")[0] + "' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'/></div>";
                                } else {
                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbmin + "'," + row + ",'min') id='valuemin" + row + "' placeholder='' value='" + value.split("~")[0] + "' type='text' class='dddwGridTbMx'/> To <input  onkeyup=propValKeyUp('" + tbmax + "'," + row + ",'max') id='valuemax" + row + "' placeholder='' value='" + value.split("~")[1] + "' type='text' class='dddwGridTbMx'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png'/> ";
                                }


                            } else {
                                //      return "<div  class='propertypopup' data-recid='' data-prop=''><div id='valuemin" + row + "' placeholder='' value='" + value + "'  class='dddwGridTbMx'/> To <div id='valuemax" + row + "' placeholder='' value='" + value + "'  class='dddwGridTbMx'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                                if (basketType == 'Search View') {
                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input disabled='disabled' onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='valuemin" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/> To <input disabled='disabled' id='valuemax" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/></div> ";

                                } else {

                                    return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='valuemin" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/> To <input id='valuemax" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTbMx'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                                }

                            }
                        }
                        else {
                            //  return "<div  class='propertypopup' data-recid='' data-prop=''><div id='value" + row + "' placeholder=''  type='text' class='dddwGridTb'>"+value+"</div></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                            tbid = "value" + row;


                            if (basketType == 'Search View') {
                                return "<div  class='propertypopup' data-recid='' data-prop=''><input disabled='disabled' onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none')  id='value" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTb'/></div>";


                            } else {

                                return "<div  class='propertypopup' data-recid='' data-prop=''><input onkeyup=propValKeyUp('" + tbid + "'," + row + ",'none') id='value" + row + "' placeholder='' value='" + value + "' type='text' class='dddwGridTb'/></div><img class='prop_imgClass' src='images/search_icon_color_2.png' ";
                            }
                        }


                        // +"onclick=fetchgridddwInfo('92','row:" + row + "','propertiesgrid','value,valueid','" + tb_value + "')>";
                    }

                }
                else {

                    if (basketType == 'Search View') {

                        return "<div disabled='disabled' onclick=propertyHierarchy(" + row + ")  style='cursor:pointer;margin-left:5px;margin-top:3px'>" + value + "</div>";
                    } else {




                        return "<div onclick=propertyHierarchy(" + row + ")  style='cursor:pointer;margin-left:5px;margin-top:3px'>" + value + "</div>";
                    }
                }



            };





            $("#propertiesgrid").jqxGrid(
                    {
                        width: '100%',
                        //selectionmode: 'singlecell',
                        // editable: true,
                        theme: 'energyblue',
                        source: adapter,
                        filterable: true,
                        enabletooltips: true,
                        showfilterrow: true,
                        height: '380',
                        columnsresize: true,
                        columnsreorder: true,
                        sortable: true,
                        ready: function() {
                            $("#propertiesgrid").jqxGrid('sortby', 'longseq', 'asc');
                        },
                        columns: [
                            {text: 'shortseq', hidden: true, editable: false, align: 'center', datafield: 'shortseq', width: "6%", cellsalign: 'left'},
                            {text: 'pdrflag', hidden: true, editable: false, align: 'center', datafield: 'pdrflag', width: "40%", cellsalign: 'left'},
                            {text: 'stxtflag', hidden: true, editable: false, align: 'center', datafield: 'stxtflag', width: "40%", cellsalign: 'left'},
                            {text: 'ltxtflag', hidden: true, editable: false, align: 'center', datafield: 'ltxtflag', width: "40%", cellsalign: 'left'},
                            {text: 'highlevelid', hidden: true, editable: false, align: 'center', datafield: 'highlevelid', width: "40%", cellsalign: 'left'},
                            {text: labelobj.Characteristic != null ? labelobj.Characteristic : 'Characteristic', enabletooltips: true, cellsrenderer: propertyrenderer, editable: false, align: 'center', datafield: 'property', width: "25%", cellsalign: 'left'},
                            {text: labelobj.Value != null ? labelobj.Value : 'Value', enabletooltips: false, cellsrenderer: valuerenderer, align: 'center', datafield: 'value', width: "15%", cellsalign: 'left'},
                            {text: labelobj.UoM != null ? labelobj.UoM : 'UoM', editable: false, align: 'center', datafield: 'uom', width: '20%', columntype: 'text', cellsrenderer: uomrenderer},
                            {text: labelobj.propertyid != null ? labelobj.propertyid : 'propertyid', hidden: true, align: 'center', datafield: 'propertyconceptid', width: "30%", cellsalign: 'left'},
                            {text: labelobj.valueid != null ? labelobj.valueid : 'valueid', hidden: true, align: 'center', datafield: 'valueconceptid', width: "30%", cellsalign: 'left'},
                            {text: labelobj.uomid != null ? labelobj.uomid : 'uomid', hidden: true, align: 'center', datafield: 'uomid', width: "30%", cellsalign: 'left'},
                            {text: labelobj.DataType != null ? labelobj.DataType : 'DataType', cellsrenderer: datatyperenderer, hidden: false, editable: false, align: 'center', datafield: 'datatype', width: "22%", cellsalign: 'left', enabletooltips: false},
                            {text: labelobj.Mandatory != null ? labelobj.Mandatory : 'Mandatory', hidden: false, editable: false, align: 'center', datafield: 'reqflag', width: "10%", cellsalign: 'left'},
                            {text: labelobj.Sequence != null ? labelobj.Sequence : 'Sequence', hidden: false, editable: false, align: 'center', datafield: 'longseq', width: "8%", cellsalign: 'left'}

                        ]
                    });
        },
        error: function(response) {
        }
    });
}


//function deleteAttach()
//{
//    
//    //alert(rowid);
//   
//    
//    $("#dialog").html("Are you sure want to Delete ?");
//    $("#dialog").dialog({
//        modal: true,
//        height: 150,
//        title: "Message",
//        minWidth: 300,
//        maxWidth: 'auto',
//        textAlign: 'center',
//        buttons: {
//            Yes: function () {
//                $(this).dialog("close");
//                $(this).dialog("");
//                $(this).dialog("destroy");
//
//                var record_No = $('#recordNo_Text').val();
//                $.ajax({
//                    type: "get",
//                    traditional: true,
//                    url: "DeleteAttachFile?recordNo=" + record_No,
//                    cache: false,
//                    dataType: 'html',
//                    success: function (response) {
//
//
//                        $('#d2').remove();
//
////                       alert("");
//                        $("#dialog").html("Deleted successfully");
//                        $("#dialog").dialog({
//                            modal: true,
//                            height: 150,
//                            title: "Message",
//                            minWidth: 300,
//                            maxWidth: 'auto',
//                            textAlign: 'center',
//                            buttons: {
//                                Ok: function () {
//                                    $(this).dialog("close");
//                                }
//                            }
//                        });
//
//                    },
//                    error: function (e) {
//
//                        alert("Unable to delete");
//                    }
//
//                });
//            },
//            No: function () {
//                $(this).dialog("close");
//                $(this).dialog("");
//                $(this).dialog("destroy");
//            },
//        }
//    });
//}






$(document).ready(function() {

//    fetchPropertiesTabData();

    var basketType = $('#baskettypehid1').val();



    if (basketType != 'New Registrations')
    {
        fetchPropertiesTabData();
//        console.log('fetching properties for pending registration....');
    }
//    if(basketType=='Search View')
//    {
//       // alert('Entered SearchView');
//    $(".prop_imgClass").css('display','none');
//        
//    }


    $(document).ajaxStart(function() {
        $("body").css({"pointer-events": "none"});
        $("#wait").show();
    });
    $(document).ajaxComplete(function() {
        $("#wait").hide();
        $("body").css({"pointer-events": "auto"});
    });


    $("#propertiesupdate").click(function() {
//--developed by azmat
        var rows = $('#propertiesgrid').jqxGrid('getboundrows');
        console.log(JSON.stringify(rows[1].uid));
        for (var i = 0; i < rows.length; i++)
        {
            if (rows[i].datatype == 'MEASURE_RANGE_TYPE') {
                rows[i].value = $("#valuemin" + rows[i].uid).val() + "~" + $("#valuemax" + rows[i].uid).val();
                console.log("If: value:::" + rows[i].value);
            }
            else if (rows[i].highlevelid != null)
            {
                // rows[i].value= $('#propertiesgrid').jqxGrid('getcellvalue', rowid, "value");

            }
            else {

                rows[i].value = $("#value" + rows[i].uid).val();
                console.log("else: value:::" + rows[i].value);
            }
        }
        //alert(JSON.stringify(rows));
        var conceptid = $("#conceptId").val();
        var re = new RegExp('#', 'g');
        conceptid = conceptid.replace(re, '_');
        $.ajax({
            type: "POST",
            url: 'updatePropertiesTab',
            data: {
                'propertiesdata': JSON.stringify(rows),
                'conceptid': conceptid,
                'recordNo': $("#recordNo_Text").val()
            },
            traditional: true, cache: false,
            success: function(response) {


                var propTabUpdate = JSON.parse(response);
                console.log('Response::' + response);
                if (propTabUpdate.MESSAGE == 'success') {
                    $("#dialog").html("<br/><center>Updated Successfully</center>");

                    stepActions(2);
                    $("#Generate_Description").prop("disabled", false);
                }
                else {
                    $("#dialog").html("<br/><center>Failed to Update</center>");

                }
                $("#dialog").dialog({
                    title: 'Message',
                    modal: true,
                    height: 150,
                    width: 220,
                    buttons: {
                        Ok: function() {
                            $(this).html("");
                            $(this).dialog("close");
                            $(this).dialog("destroy");
                        }
                    }
                });
            },
            error: function(e) {
                //  alert('Error: ' + JSON.stringify(e));
            }
        });
    });



    $("#MM_ATTACHMENTS_GRID").addClass("hideTable");
    $("#MM_PROPERTIES_GRID").addClass("hideTable");

// GRID JS
//refTabViewType

    $('#MM_DOCUMENTS_GRID').on('rowclick', function(event) {


        $('#MM_DOCUMENTS_Update').css("display", "block");
        $('#MM_DOCUMENTS_Delete').css("display", "block");
        documentTabViewType = "GRID_VIEW";


    });

    $('#MM_REFERENCE_GRID').on('rowclick', function(event) {


        $('#MM_REFERENCE_Update').css("display", "block");
        $('#MM_REFERENCE_Delete').css("display", "block");
        refTabViewType = "GRID_VIEW";


    });


// select or unselect rows when the checkbox is clicked.
    $("#MM_DOCUMENTS_GRID").bind('cellendedit', function(event) {
        if (event.args.value) {
            $("#MM_DOCUMENTS_GRID").jqxGrid('selectrow', event.args.rowindex);
        }
        else {
            $("#MM_DOCUMENTS_GRID").jqxGrid('selectrow', event.args.rowindex);
        }
        $('#MM_DOCUMENTS_Update').css("display", "block");
        $('#MM_DOCUMENTS_Delete').css("display", "block");
    });

    $("#MM_REFERENCE_GRID").bind('cellendedit', function(event) {
        if (event.args.value) {

            $("#MM_REFERENCE_GRID").jqxGrid('selectrow', event.args.rowindex);

        }
        else {

            $("#MM_REFERENCE_GRID").jqxGrid('selectrow', event.args.rowindex);
        }
        $('#MM_REFERENCE_Update').css("display", "block");
        $('#MM_REFERENCE_Delete').css("display", "block");
    });

    //$("#MM_REFERENCE_GRID").jqxGrid('selectionmode', 'multiplerows');




});





//

function fetchgridddwInfo(dddwid, gridrowid, gridname, datafieldname, value) {
    console.log("value :: " + value);

    clickVisionDDDW(dddwid, gridrowid, gridname, datafieldname, value);
}


//GENERIC GRID VIEW FUNCTIONS

function genericGridView(tabId) {
    //  '#'+tabId+'

    $('#' + tabId + '_GRID').jqxGrid('clearselection');

    var datainformations = $('#' + tabId + '_GRID').jqxGrid('getdatainformation');
    var rowscounts = datainformations.rowscount;

    if (tabId == "MM_DOCUMENTS")
    {
        docTabCheck = true;
        fetchDocumentTabData()

    } else if (tabId == "MM_REFERENCE") {
        refTabCheck = true;
        fetchReferenceTabData()()

    }



}

function genericFormView(tabId) {

    if (tabId == "MM_DOCUMENTS")
    {
        docTabCheck = true;
        fetchDocumentTabData();

    } else if (tabId == "MM_REFERENCE")
    {
        refTabCheck = true;
        fetchReferenceTabData();
    }


}


function genericAdd(tabId) {



    $('#' + tabId + '_TABLE').addClass("displayTable").removeClass("hideTable");
    $('#' + tabId + '_GRID').hide();

    $('#' + tabId + '_TABLE tr').find('input:text').val('');
    $('#' + tabId + '_TABLE tr').find('input:checkbox').prop("checked", false);

    var rows = $("#" + tabId + "_GRID").jqxGrid('getrows');
    var rowsCount = 0;

    if (typeof rows != 'undefined') {

        rowsCount = rows.length;
    }


    //alert(rowsCount);

    if (tabId == "MM_DOCUMENTS")

    {


        if (documentTabViewType == "FORM_VIEW")

        {
            genericFormViewIconsDisplay(tabId, rowsCount);
            documentTabViewType = "FORM_VIEW";
            $('#documentOperation').val("SAVE");

        }
        else if (documentTabViewType == "GRID_VIEW") {
            genericGridViewIconsDisplay(tabId);
            documentTabViewType = "FORM_VIEW";
        }




    }
    else if (tabId == "MM_REFERENCE") {


        if (refTabViewType == "FORM_VIEW")
        {
            genericFormViewIconsDisplay(tabId, rowsCount);
            refTabViewType = "FORM_VIEW";
            $('#referenceOperation').val("SAVE");

        }
        else if (refTabViewType == "GRID_VIEW") {

            genericGridViewIconsDisplay(tabId);

            refTabViewType = "FORM_VIEW";
        }



    }




}


function genericGridViewIconsDisplay(tabId) {

    $('#' + tabId + '_Add').css("display", "block");
    $('#' + tabId + '_Grid_View').css("display", "block");
    $('#' + tabId + '_Form_View').css("display", "none");
    $('#' + tabId + '_Update').css("display", "block");
    $('#' + tabId + '_Delete').css("display", "none");


}

function genericFormViewIconsDisplay(tabId, rowsCount) {


    if (rowsCount == 0 || rowsCount == 1)
    {
        //("row coundt isssss :: "+rowsCount);
        $('#' + tabId + '_Form_View').css("display", "block");
        $('#' + tabId + '_Grid_View').css("display", "none");

    }
    else if (rowsCount > 1) {
        // alert("row coundt isssss :: "+rowsCount);

        $('#' + tabId + '_Form_View').css("display", "none");
        $('#' + tabId + '_Grid_View').css("display", "block");
    } else {
        //alert("row coundt isssss :: "+rowsCount);

    }

    $('#' + tabId + '_Add').css("display", "block");
    $('#' + tabId + '_Update').css("display", "block");
    $('#' + tabId + '_Delete').css("display", "none");




}

function removeAllGridRows(tabId) {


    $("#" + tabId + "_GRID").jqxGrid('clear');
}

function genericUpdate(tabId, DATA) {


    if (tabId == "MM_REFERENCE") {

        mmReferenceTabUpdateAjaxCall(DATA);

    }
    else if (tabId == "MM_DOCUMENTS") {

        mmDocumentTabUpdateAjaxCall(DATA);

    }


}

function genericDelete(tabId, DATA) {


    
    
    
    $("#dialog").html("Are You sure want to Delete?");

    // Define the Dialog and its properties.
    $("#dialog").dialog({
        resizable: false,
        modal: true,
        title: "Confirmation",
        height: 150,
        width: 300,
        buttons: {
            "Yes": function() {
                $(this).html("");
                $(this).dialog("close");
               
    if (tabId == "MM_REFERENCE") {

        mmReferenceTabDeleteAjaxCall(DATA);

    }
    else if (tabId == "MM_DOCUMENTS") {

        mmDocumentTabDeleteAjaxCall(DATA);

    }
                $(this).dialog("destroy");
              
               
            },
            "No": function() {
                $(this).html("");
                $(this).dialog("close");
                $(this).dialog("destroy");
            }
        }
    });


}






// REFERECNCE TAB RELATED MOTHODS
var refTabViewType = "FORM_VIEW";
var refTabCheck = true;
function fetchReferenceTabData() {

    if (refTabCheck) {

        console.log("fetchReferenceTabData ::: START");
        var recordNo = $('#recordNo_Text').val();
        var url = "getReferenceData";
        var data = {};
        data.recordNo = recordNo;
        var async = false;
        var cache = false;
        var success = function(result) {

            if (result.indexOf("Failed to Fetch Record!") > -1)
            {
                removeAllGridRows("MM_REFERENCE");
                $('#MM_REFERENCE_TABLE tr').find('input:text').val('');
                $('#MM_REFERENCE_TABLE tr').find('input:checked').prop("checked", false);
                gridViewIconsDisplay('MM_REFERENCE', 0);
                $('#MM_REFERENCE_TABLE').addClass("displayTable").removeClass("hideTable");
                $('#MM_REFERENCE_GRID').addClass("hideTable").removeClass("displayTable");
                refTabViewType = "FORM_VIEW";
                $('#referenceOperation').val("SAVE");

            }
            else

            {
                var jsnobj = JSON.parse(result);
                var refData = jsnobj.jsnArray;
                var labelobj = jsnobj.labelobj;

                var labelobjString = JSON.stringify(labelobj);

//                console.log("labelobjString::"+labelobjString);
                if (labelobjString.indexOf("\"Reference No\"")) {

                    labelobjString = labelobjString.replace("\"Reference No\"", "\"Reference_No\"");

                }
                if (labelobjString.indexOf("\"Reference Type\"")) {

                    labelobjString = labelobjString.replace("\"Reference Type\"", "\"Reference_Type\"");
                }
                if (labelobjString.indexOf("\"Vendor Name\"")) {

                    labelobjString = labelobjString.replace("\"Vendor Name\"", "\"Vendor_Name\"");
                }
                if (labelobjString.indexOf("\"Vendor Id\"")) {

                    labelobjString = labelobjString.replace("\"Vendor Id\"", "\"Vendor_Id\"");
                }

                if (labelobjString.indexOf("\"Short Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Short Text Indicator\"", "\"Short_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Long Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Long Text Indicator\"", "\"Long_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Record No\"")) {

                    labelobjString = labelobjString.replace("\"Record No\"", "\"Record_No\"");
                }

                console.log("labelobjString:after:::::::" + labelobjString);
                labelobj = JSON.parse(labelobjString);

                if (refData.length == 1)
                {
                    removeAllGridRows("MM_REFERENCE");
                    gridViewIconsDisplay('MM_REFERENCE', 1);
                    $('#MM_REFERENCE_TABLE').addClass("displayTable").removeClass("hideTable");
                    $('#MM_REFERENCE_GRID').hide();

                    refTabViewType = "FORM_VIEW";
                    //alert("refTabViewType  :::: "+refTabViewType);
                    obj = refData[0];

                    $('#referenceNo_Text').val(obj.REFERENCE_NO);
                    //  alert(obj.REFERENCE_NO);
                    $('#referenceType_Text').val(obj.REFERENCE_TYPE);
                    $('#vendorId_Text').val(obj.VENDOR_ID);
                    $('#vendorName_Text').val(obj.VENDOR_NAME);
                    $('#referenceOperation').val("UPDATE");


                    //  alert("came here"+obj.OPERATION);



                    if (obj.STXT_FLAG == true) {


                        $('#stxtFlag_Check').prop("checked", true);
                    }
                    else {
                        $('#stxtFlag_Check').prop("checked", false);
                    }

                    if (obj.LTXT_FLAG == true)

                    {
                        $('#ltxtFlag_Check').prop("checked", true);

                    } else
                    {

                        $('#ltxtFlag_Check').prop("checked", false);
                    }


                }
                else if (refData.length > 1)

                {

                    gridViewIconsDisplay('MM_REFERENCE', refData.length);
                    $('#MM_REFERENCE_GRID').show();
                    $('#MM_REFERENCE_TABLE').addClass("hideTable").removeClass("displayTable");
                    refTabViewType = "GRID_VIEW";

                    var vendorIdRenderor = function(row, columnfield, value, defaulthtml, columnproperties) {
                        var vendorId = $('#MM_REFERENCE_GRID').jqxGrid('getcellvalue', row, "VENDOR_ID");
                        re = new RegExp(' ', 'g');
                        var vendorId_value = vendorId.replace(re, "_");

                        return "<div class='propertypopup' data-recid='" + row + "' data-prop='" + vendorId + "'>" + vendorId + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('88','row:" + row + "','MM_REFERENCE_GRID','VENDOR_ID','" + vendorId_value + "')>";
                    };

                    var referenceTypeRenderor = function(row, columnfield, value, defaulthtml, columnproperties) {
                        var referenceType = $('#MM_REFERENCE_GRID').jqxGrid('getcellvalue', row, "REFERENCE_TYPE");
                        re = new RegExp(' ', 'g');
                        var referenceType_value = referenceType.replace(re, "_");

                        return "<div class='propertypopup' data-recid='" + row + "' data-prop='" + referenceType + "'>" + referenceType + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('103','row:" + row + "','MM_REFERENCE_GRID','REFERENCE_TYPE','" + referenceType_value + "')>";
                    };

                    // prepare the data
                    var data = JSON.parse(result);

                    // alert(JSON.stringify(result));
                    var source =
                            {
                                datatype: "json",
                                localdata: data,
                                datafields:
                                        [
                                            {name: 'REFERENCE_NO', type: 'string'},
                                            {name: 'REFERENCE_TYPE', type: 'string'},
                                            {name: 'VENDOR_ID', type: 'string'},
                                            {name: 'VENDOR_NAME', type: 'string'},
                                            {name: 'STXT_FLAG', type: 'bool'},
                                            {name: 'LTXT_FLAG', type: 'bool'},
                                            {name: 'RECORD_NO', type: 'string'},
                                            {name: 'OLD_REFERENCE_NO', type: 'string'},
                                            {name: 'OLD_REFERENCE_TYPE', type: 'string'},
                                            {name: 'OLD_VENDOR_ID', type: 'string'},
                                            {name: 'OLD_VENDOR_NAME', type: 'string'},
                                            {name: 'OPERATION', type: 'string'},
                                        ]

                            };
                    var dataAdapter = new $.jqx.dataAdapter(source);
                    // initialize jqxGrid
                    $("#MM_REFERENCE_GRID").jqxGrid(
                            {
                                width: "100%",
                                height: "200",
                                source: dataAdapter,
                                editable: true,
                                editmode: 'selectedrow',
                                columnsresize: true,
                                columnsreorder: true,
                                sortable: true,
                                filterable: true,
                                showfilterrow: true,
                                theme: 'energyblue',
                                showtoolbar: false,
                                pageable: false,
                                columns: [
                                    {text: labelobj.Reference_No != null ? labelobj.Reference_No : 'Reference No', editable: true, datafield: 'REFERENCE_NO', width: "20%"},
                                    {text: labelobj.Reference_Type != null ? labelobj.Reference_Type : 'Reference Type', editable: false, datafield: 'REFERENCE_TYPE', cellsrenderer: referenceTypeRenderor, width: "20%"},
                                    {text: labelobj.Vendor_Id != null ? labelobj.Vendor_Id : 'Vendor Id', editable: false, datafield: 'VENDOR_ID', cellsrenderer: vendorIdRenderor, width: "20%"},
                                    {text: labelobj.Vendor_Name != null ? labelobj.Vendor_Name : 'Vendor Name', editable: false, datafield: 'VENDOR_NAME', width: "20%"},
                                    {text: labelobj.Short_Text_Indicator != null ? labelobj.Short_Text_Indicator : 'Ind in SFD', editable: true, datafield: 'STXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "10%"},
                                    {text: labelobj.Long_Text_Indicator != null ? labelobj.Long_Text_Indicator : 'Ind in POD', editable: true, datafield: 'LTXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "10%"},
                                    {text: labelobj.Record_No != null ? labelobj.Record_No : 'Record No', hidden: true, datafield: 'RECORD_NO', width: "10%"},
                                    {text: 'Old Reference No', hidden: true, datafield: 'OLD_REFERENCE_NO', width: "10%"},
                                    {text: 'Old Reference Type', hidden: true, datafield: 'OLD_REFERENCE_TYPE', width: "10%"},
                                    {text: 'Old Vendor Id', hidden: true, datafield: 'OLD_VENDOR_ID', width: "10%"},
                                    {text: 'Old Vendor Name', hidden: true, datafield: 'OLD_VENDOR_NAME', width: "10%"},
                                    {text: 'OPERATION', hidden: true, datafield: 'OPERATION', width: "10%"},
                                ]
                            });






                }//
            }

        }
        var req = {};
        req.url = url;
        req.data = data;
        req.async = async;
        req.type = "post";
        req.success = success;
        $.ajax(req);
    }
    console.log("fetchReferenceTabData ::: END");
    refTabCheck = false;
}















function mmReferenceFormView() {

    genericFormView("MM_REFERENCE");
}

function mmReferenceGridView() {

    genericGridView("MM_REFERENCE");


}

function mmReferenceDelete() {


    //genericDelete("MM_REFERENCE");

    console.log("mmReferenceDelete DELETE ::: START");
    var DATA = [];

    if (refTabViewType == "GRID_VIEW")

    {

        var rowsSelected = getSelectedRowsData("MM_REFERENCE_GRID");
        DATA = rowsSelected;



    }
    else if (refTabViewType == "FORM_VIEW") {

        var object = {};
        var referenceNo = $('#referenceNo_Text').val();
        object.REFERENCE_NO = referenceNo;

        var referenceType = $('#referenceType_Text').val();
        object.REFERENCE_TYPE = referenceType;



        var vendorId = $('#vendorId_Text').val();
        object.VENDOR_ID = vendorId;

        var vendorName = $('#vendorName_Text').val();
        object.VENDOR_NAME = vendorName;


        var recordNo = $('#recordNo_Text').val();
        object.RECORD_NO = recordNo;

        var ltxtFlag = false;
        if ($("#ltxtFlag_Check").is(":checked"))
        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;
        if ($("#stxtFlag_Check").is(":checked")) {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        }
        else {
            object.STXT_FLAG = stxtFlag;
        }


        DATA = [];
        DATA.push(object);



    }

//var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    genericDelete("MM_REFERENCE", DATA);

    console.log("mmReference DELETE ::: END");





}

function mmDocumentsDelete() {
    console.log("mmDocuments DELETE ::: START");
    var DATA = [];


    if (documentTabViewType == "GRID_VIEW")

    {

        var rowsSelected = getSelectedRowsData("MM_DOCUMENTS_GRID");
        DATA = rowsSelected;


    }
    else if (documentTabViewType == "FORM_VIEW") {


        var object = {};
        var documentNo = $('#docNo_Text').val();
        object.DOCUMENT_NO = documentNo;

        var documentType = $('#docType_Text').val();
        object.DOCUMENT_TYPE = documentType;

        var documentItem = $('#docItem_Text').val();
        object.DOCUMENT_ITEM = documentItem;

        var position = $('#position_Text').val();
        object.POSITION = position;

        var revision = $('#revision_Text').val();
        object.REVISION = revision;

        var supplierId = $('#supplId_Text').val();
        object.VENDOR_ID = supplierId;

        var supplierName = $('#supplName_Text').val();
        object.VENDOR_NAME = supplierName;

        var recordNo = $('#recordNo_Text').val();
        object.RECORD_NO = recordNo;

        var ltxtFlag = false;
        if ($("#docltxtFlag_Check").is(":checked"))
        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;
        if ($("#docstxtFlag_Check").is(":checked")) {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        }
        else {
            object.STXT_FLAG = stxtFlag;
        }

        DATA = [];
        DATA.push(object);



    }

//var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');
    genericDelete("MM_DOCUMENTS", DATA);


    console.log("mmDocuments DELETE ::: END");
}

function mmReferenceAdd( ) {

    genericAdd("MM_REFERENCE");

}





function mmReferenceUpdate() {

    ///mmReferenceTabUpdateAjaxCall();


    var DATA = [];
    if (refTabViewType == "GRID_VIEW") {
        var rowsSelected = getSelectedRowsData("MM_REFERENCE_GRID");
        DATA = rowsSelected;
    }
    else if (refTabViewType == "FORM_VIEW") {

        var object = {};

        var referenceNo = $('#referenceNo_Text').val();
        if (referenceNo == "" || referenceNo == null) {
            errorMsg("Please Enter Reference No !");
            return false;
            $("#referenceNo_Text").focus();
        } else {
            object.REFERENCE_NO = referenceNo;
        }


        var referenceType = $('#referenceType_Text').val();
        if (referenceType == "" || referenceType == null)
        {
            errorMsg("Please Enter Reference Type !");
            return false;
            $("#referenceType_Text").focus();
        } else {
            object.REFERENCE_TYPE = referenceType;
        }


        var refVendorId = $('#vendorId_Text').val();
        if (refVendorId == "" || refVendorId == null) {
            errorMsg("Please Select Vendor Id ! ");
            return false;

        } else
        {
            if (validateData("BVendors", "id.vendorId", refVendorId)) {
                object.VENDOR_ID = refVendorId;

            } else {
                validatorDilogue("Please Select Valid Vendor Id", "vendorId_Text");
                return false;

            }

        }

        var refVendorName = $('#vendorName_Text').val();

        if (refVendorName == "" || refVendorName == null)
        {
            errorMsg("Please Select Vendor Name ! ");
            return false;
            $("#vendorName_Text").focus();
        } else {
            object.VENDOR_NAME = refVendorName;
        }

        var recordNo = $('#recordNo_Text').val();
        object.RECORD_NO = recordNo;
        var ltxtFlag = false;

        if ($("#ltxtFlag_Check").is(":checked"))

        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;

        if ($("#stxtFlag_Check").is(":checked"))


        {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        } else {
            object.STXT_FLAG = stxtFlag;
        }

        object.OPERATION = $("#referenceOperation").val();
        //  alert("OPERATION ::: "+object.OPERATION);

        DATA = [];
        DATA.push(object)

    }




    console.log("BEFORE GENERIC UPDATE CALL :::: " + JSON.stringify(DATA));
    genericUpdate("MM_REFERENCE", DATA);



}


function mmDocumentsUpdate() {


    console.log("mmDocumentsUpdate ::: START");
    //   genericUpdate("MM_DOCUMENTS");
    console.log("mmd doc update :::: " + documentTabViewType);

    var DATA = [];

    if (documentTabViewType == "GRID_VIEW") {
        var rowsSelected = getSelectedRowsData("MM_DOCUMENTS_GRID");
        DATA = rowsSelected;
    }
    else if (documentTabViewType == "FORM_VIEW") {

        var object = {};
        var documentNo = $('#docNo_Text').val();

        if (documentNo == "" || documentNo == null) {
            errorMsg("Please Enter Document No !");
            return false;
            $("#docNo_Text").focus();
        } else {
            object.DOCUMENT_NO = documentNo;
        }


        var documentType = $('#docType_Text').val();
        if (documentType == "" || documentType == null) {
            errorMsg("Please Select Document Type !");
            return false;

        } else
        {


            if (validateData("ORecordDocument", "id.documentType", documentType)) {

                object.DOCUMENT_TYPE = documentType;
            } else {

                validatorDilogue("Please Select Valid Document Type", "docType_Text");
                return false;

            }

        }


        var documentItem = $('#docItem_Text').val();

        if (documentItem == "" || documentItem == null) {
            errorMsg("Please Select Document Item !");
            return false;

        }
        object.DOCUMENT_ITEM = documentItem;

        //(documentItem);




        var position = $('#position_Text').val();
        if (position == "" || position == null) {
            errorMsg("Please Enter Position !");
            return false;

        } else {
            object.POSITION = position;
        }



        var revision = $('#revision_Text').val();

        if (revision == "" || revision == null) {
            errorMsg("Please Enter Revision !");
            return false;

        } else {
            object.REVISION = revision;
        }


        var supplierId = $('#supplId_Text').val();
        if (supplierId == "" || supplierId == null) {
            errorMsg("Please Select Supplier Id!");
            return false;

        } else
        {
            if (validateData("BVendors", "id.vendorId", supplierId)) {
                object.VENDOR_ID = supplierId;

            } else {
                validatorDilogue("Please Select Valid Supplier Id", "supplId_Text");
                return false;

            }

        }






        var supplierName = $('#supplName_Text').val();
        if (supplierName == "" || supplierName == null) {
            errorMsg("Please Enter Supplier Name!");
            return false;
            $("#supplName_Text").focus();
        } else {
            object.VENDOR_NAME = supplierName;
        }

        var recordNo = $('#recordNo_Text').val();

        object.RECORD_NO = recordNo;


        var ltxtFlag = false;

        if ($("#docltxtFlag_Check").is(":checked"))

        {
            ltxtFlag = true;
            object.LTXT_FLAG = ltxtFlag;
        } else {
            object.LTXT_FLAG = ltxtFlag;
        }

        var stxtFlag = false;

        if ($("#docstxtFlag_Check").is(":checked")) {
            stxtFlag = true;
            object.STXT_FLAG = stxtFlag;
        }

        else {
            object.STXT_FLAG = stxtFlag;
        }

        object.OPERATION = $('#documentOperation').val();

        // alert($('#documentOperation').val());

        DATA = [];
        DATA.push(object);
    }


    console.log("BEFORE GENERIC UPDATE CALL :::: " + JSON.stringify(DATA));
    genericUpdate("MM_DOCUMENTS", DATA);


    console.log("mmDocumentsUpdate ::: END");
}








function mmReferenceTabUpdateAjaxCall(SELECTED_DATA) {

    console.log("mmReferenceUpdate ::: START");



    var DATA = [];

    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;

        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "updateMMRefTab";
        var async = false;
        var cache = false;
        var success = function(result) {

            var respMessage = JSON.parse(result);
            if (respMessage.STEPS <= 2) {

                stepActions(2);
                $("#Generate_Description").prop("disabled", false);
            }

            errorMsg(respMessage.MESSAGE);

            refTabCheck = true;

            fetchReferenceTabData();

        }


        var req = {};
        req.url = url;
        req.data = selectedData;
        req.type = "POST";
        req.async = async;
        req.success = success;
        $.ajax(req);

    }




}
function mmReferenceTabDeleteAjaxCall(SELECTED_DATA) {

    var DATA = [];
    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;
        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "deleteMMRefTab";
        var async = false;
        var cache = false;
        var success = function(result) {
            errorMsg(result);
            refTabCheck = true;
            fetchReferenceTabData();

        }
        var req = {};
        req.url = url;
        req.type = "POST";
        req.data = selectedData;
        req.async = async;
        req.success = success;
        $.ajax(req);

    }


}








//DOCUMENTS TAB METHODS 

var documentTabViewType = "FORM_VIEW";
var docTabCheck = true;
function fetchDocumentTabData() {

    console.log("fetchDocumentTabData ::: START");

    if (docTabCheck) {

        var recordNo = $('#recordNo_Text').val();
        var url = "getDocumentData";
        var data = {};
        data.recordNo = recordNo;
        var async = false;
        var cache = false;
        var success = function(result) {
            console.log(result);




            if (result.indexOf("Failed to Fetch Record!") > -1) {


                removeAllGridRows("MM_DOCUMENTS");
                gridViewIconsDisplay('MM_DOCUMENTS', 0);
                $('#MM_DOCUMENTS_TABLE tr').find('input:text').val('');
                $('#MM_DOCUMENTS_TABLE tr').find('input:checked').prop("checked", false);
                $('#MM_DOCUMENTS_TABLE').addClass("displayTable").removeClass("hideTable");
                $('#MM_DOCUMENTS_GRID').addClass("hideTable").removeClass("displayTable");
                documentTabViewType = "FORM_VIEW";
                $('#documentOperation').val("SAVE");




            }
            else
            {


//                var refData = JSON.parse(result);

                var jsnobj = JSON.parse(result);
                var refData = jsnobj.jsnArray;
                var labelobj = jsnobj.labelobj;

                var labelobjString = JSON.stringify(labelobj);

//                console.log("labelobjString::"+labelobjString);
                if (labelobjString.indexOf("\"Document Type\"")) {

                    labelobjString = labelobjString.replace("\"Document Type\"", "\"Document_Type\"");

                }
                if (labelobjString.indexOf("\"Document Item\"")) {

                    labelobjString = labelobjString.replace("\"Document Item\"", "\"Document_Item\"");
                }
                if (labelobjString.indexOf("\"Supplier Name\"")) {

                    labelobjString = labelobjString.replace("\"Supplier Name\"", "\"Supplier_Name\"");
                }
                if (labelobjString.indexOf("\"Supplier Id\"")) {

                    labelobjString = labelobjString.replace("\"Supplier Id\"", "\"Supplier_Id\"");
                }

                if (labelobjString.indexOf("\"Short Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Short Text Indicator\"", "\"Short_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Long Text Indicator\"")) {

                    labelobjString = labelobjString.replace("\"Long Text Indicator\"", "\"Long_Text_Indicator\"");
                }
                if (labelobjString.indexOf("\"Record No\"")) {

                    labelobjString = labelobjString.replace("\"Record No\"", "\"Record_No\"");
                }

                console.log("labelobjString:after:::::::" + labelobjString);
                labelobj = JSON.parse(labelobjString);

                if (refData.length == 1)
                {
                    removeAllGridRows("MM_DOCUMENTS");
                    gridViewIconsDisplay('MM_DOCUMENTS', 1);
                    $('#MM_DOCUMENTS_TABLE').addClass("displayTable").removeClass("hideTable");
                    $('#MM_DOCUMENTS_GRID').hide();

                    documentTabViewType = "FORM_VIEW";

                    obj = refData[0];
                    $('#docNo_Text').val(obj.DOCUMENT_NO);
                    $('#docType_Text').val(obj.DOCUMENT_TYPE);
                    $('#docItem_Text').val(obj.DOCUMENT_ITEM);
                    $('#revision_Text').val(obj.REVISION);
                    $('#position_Text').val(obj.ITEM_POSITION);
                    $('#supplId_Text').val(obj.VENDOR_ID);
                    $('#supplName_Text').val(obj.VENDOR_NAME);
                  

                    if (obj.STXT_FLAG==true)
                    {
                        //$('#docstxtFlag_Check').val(obj.STXT_FLAG);
                        $('#docstxtFlag_Check').prop("checked", true);
                    } else {
                        $('#docstxtFlag_Check').prop("checked", false);
                    }

                    if (obj.LTXT_FLAG == true)
                    {
                       // $('#docltxtFlag_Check').val(obj.LTXT_FLAG);
                        $('#docltxtFlag_Check').prop("checked", true);
                    } else {
                        $('#docltxtFlag_Check').prop("checked", false);
                    }

                    $('#documentOperation').val(obj.OPERATION);

                }
                else if (refData.length > 1)
                {

                    $('#MM_DOCUMENTS_GRID').show();
                    $('#MM_DOCUMENTS_TABLE').addClass("hideTable").removeClass("displayTable");
                    gridViewIconsDisplay('MM_DOCUMENTS', refData.length);
                    documentTabViewType = "GRID_VIEW";

                    var supplierIdRenderor = function(row, columnfield, value, defaulthtml, columnproperties) {
                        var vendorId = $('#MM_DOCUMENTS_GRID').jqxGrid('getcellvalue', row, "VENDOR_ID");
                        re = new RegExp(' ', 'g');
                        var vendorId_value = vendorId.replace(re, "_");

                        return "<div class='propertypopup' data-recid='" + row + "' data-prop='" + vendorId + "'>" + vendorId + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('88','row:" + row + "','MM_DOCUMENTS_GRID','VENDOR_ID','" + vendorId_value + "')>";
                    };
                    var documetTypeRenderor = function(row, columnfield, value, defaulthtml, columnproperties) {
                        var doucmentType = $('#MM_DOCUMENTS_GRID').jqxGrid('getcellvalue', row, "DOCUMENT_TYPE");
                        re = new RegExp(' ', 'g');
                        var doucmentType_value = doucmentType.replace(re, "_");

                        return "<div class='propertypopup' data-recid='" + row + "' data-prop='" + doucmentType + "'>" + doucmentType + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('87','row:" + row + "','MM_DOCUMENTS_GRID','DOCUMENT_TYPE','" + doucmentType_value + "')>";
                    };
                    var documentItemRenderor = function(row, columnfield, value, defaulthtml, columnproperties) {
                        var documentItem = $('#MM_DOCUMENTS_GRID').jqxGrid('getcellvalue', row, "DOCUMENT_ITEM");
                        re = new RegExp(' ', 'g');
                        var documentItem_value = documentItem.replace(re, "_");

                        return "<div class='propertypopup' data-recid='" + row + "' data-prop='" + documentItem + "'>" + documentItem + "</div><img class='prop_imgClass' src='images/search_icon_color_2.png' onclick=fetchgridddwInfo('86','row:" + row + "','MM_DOCUMENTS_GRID','DOCUMENT_ITEM','" + documentItem_value + "')>";
                    };



                    // prepare the data
                    var data = JSON.parse(result);
                    // alert(JSON.stringify(result));
                    var source =
                            {
                                datatype: "json",
                                localdata: data,
                                datafields:
                                        [
                                            {name: 'DOCUMENT_NO', type: 'string'},
                                            {name: 'DOCUMENT_TYPE', type: 'string'},
                                            {name: 'DOCUMENT_ITEM', type: 'string'},
                                            {name: 'REVISION', type: 'string'},
                                            {name: 'POSITION', type: 'string'},
                                            {name: 'VENDOR_ID', type: 'string'},
                                            {name: 'VENDOR_NAME', type: 'string'},
                                            {name: 'STXT_FLAG', type: 'bool'},
                                            {name: 'LTXT_FLAG', type: 'bool'},
                                            {name: 'RECORD_NO', type: 'string'},
                                            {name: 'OLD_DOCUMENT_NO', type: 'string'},
                                            {name: 'OLD_DOCUMENT_TYPE', type: 'string'},
                                            {name: 'OPERATION', type: 'string'}

                                        ]

                            };




                    var dataAdapter = new $.jqx.dataAdapter(source);
                    // initialize jqxGrid
                    $("#MM_DOCUMENTS_GRID").jqxGrid(
                            {
                                width: "100%",
                                height: "200",
                                source: dataAdapter,
                                editable: true,
                                editmode: 'selectedrow',
                                columnsresize: true,
                                columnsreorder: true,
                                sortable: true,
                                filterable: true,
                                showfilterrow: true,
                                theme: 'energyblue',
                                showtoolbar: false,
                                pageable: false,
                                columns: [
                                    {text: labelobj.Document_No != null ? labelobj.Document_No : 'Document No', editable: true, datafield: 'DOCUMENT_NO', width: "17%"},
                                    {text: labelobj.Document_Type != null ? labelobj.Document_Type : 'Document Type', editable: false, datafield: 'DOCUMENT_TYPE', cellsrenderer: documetTypeRenderor, width: "17%"},
                                    {text: labelobj.Document_Item != null ? labelobj.Document_Item : 'Document Item', editable: true, datafield: 'DOCUMENT_ITEM', width: "13%"},
                                    {text: labelobj.Position != null ? labelobj.Position : 'Position', editable: true, datafield: 'POSITION', width: "8%"},
                                    {text: labelobj.Revision != null ? labelobj.Revision : 'Revision', editable: true, datafield: 'REVISION', width: "8%"},
                                    {text: labelobj.Supplier_Id != null ? labelobj.Supplier_Id : 'Supplier Id', editable: false, datafield: 'VENDOR_ID', cellsrenderer: supplierIdRenderor, width: "15%"},
                                    {text: labelobj.Supplier_Name != null ? labelobj.Supplier_Name : 'Supplier Name', editable: false, datafield: 'VENDOR_NAME', width: "12%"},
                                    {text: labelobj.Short_Text_Indicator != null ? labelobj.Short_Text_Indicator : 'Ind in SFD', editable: true, datafield: 'STXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "5%"},
                                    {text: labelobj.Long_Text_Indicator != null ? labelobj.Long_Text_Indicator : 'Ind in POD', editable: true, datafield: 'LTXT_FLAG', threestatecheckbox: false, filtertype: 'none', sortable: false, columntype: 'checkbox', width: "5%"},
                                    {text: labelobj.Record_No != null ? labelobj.Record_No : 'Record No', hidden: true, datafield: 'RECORD_NO', width: "10%"},
                                    {text: 'Document No', hidden: true, datafield: 'OLD_DOCUMENT_NO', width: "10%"},
                                    {text: 'Document Type', hidden: true, datafield: 'OLD_DOCUMENT_TYPE', width: "10%"},
                                    {text: 'OPERATION', hidden: true, datafield: 'OPERATION', width: "10%"}
                                ]
                            });

                }

            }
            docTabCheck = false;

        }
        var req = {};
        req.url = url;
        req.data = data;
        req.async = async;
        req.type = "POST";
        req.success = success;
        $.ajax(req);
    }

    console.log("fetchDocumentTabData ::: END");
}








function mmDocumentGridView() {
    genericGridView("MM_DOCUMENTS");

}

function mmDocumentsAdd() {

    genericAdd("MM_DOCUMENTS");

}

function mmDocumentFormView() {

    genericFormView("MM_DOCUMENTS");
}

function mmDocumentTabDeleteAjaxCall(SELECTED_DATA) {



    console.log("mmReferenceDelete ::: START");
    var DATA = [];
    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;
        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "deleteMMDocTab";
        var async = false;
        var cache = false;
        var success = function(result) {
            errorMsg(result);
            docTabCheck = true;
            fetchDocumentTabData();
        }
        var req = {};
        req.url = url;
        req.type = "POST";
        req.data = selectedData;
        req.async = async;
        req.success = success;
        $.ajax(req);

    }
    console.log("mmReferenceDelete ::: START");


}

function mmDocumentTabUpdateAjaxCall(SELECTED_DATA) {

    console.log("mmReferenceUpdate ::: START");
    var DATA = [];

    if (typeof SELECTED_DATA != 'undefined') {
        DATA = SELECTED_DATA;

        var selectedData = {};
        selectedData.DATA = JSON.stringify(DATA);
        var url = "updateMMDocTab";
        var async = false;
        var cache = false;
        var success = function(result) {

            var respMessage = JSON.parse(result);
            if (respMessage.STEPS <= 2) {

                stepActions(2);
                $("#Generate_Description").prop("disabled", false);
            }

            errorMsg(respMessage.MESSAGE);
            // stepActions(getStepsFinished());
            docTabCheck = true;
            fetchDocumentTabData();

        }

        var req = {};
        req.url = url;
        req.data = selectedData;
        req.type = "POST";
        req.async = async;
        req.success = success;
        $.ajax(req);

    }

}




////////--------------------- UTILITY FUNCTIONS---------------------------/////////////////////


function getStepsFinished(recordNo) {

    var steps = -1;
    $.ajax({
        url: 'getMatRegStepsFinished',
        type: "post",
        async: false,
        dataType: 'html',
        cache: false,
        data: {
            recordNo: recordNo

        },
        success: function(responseText) {


            var resultSteps = JSON.parse(responseText);
            //jsnJSONObject.put("STEPS", -1);

            steps = resultSteps.STEPS;
        }
    });


}
function getSelectedRowsData(gridId) {

    var indexes = $("#" + gridId).jqxGrid('selectedrowindexes');

    if (indexes.length > 0) {
        var selectedRowsData = [];
        for (var i = 0; i < indexes.length; i++) {
            var data = $("#" + gridId).jqxGrid('getrowdata', indexes[i]);
            selectedRowsData.push(data);
        }
    }

    return selectedRowsData;

}


function errorMsg(response) {


    $("#dialog").html(response);
    $("#dialog").dialog({
        modal: true,
        height: 150,
        title: "Message",
        minWidth: 300,
        maxWidth: 'auto',
        textAlign: 'center',
        buttons: {
            Ok: function() {
                $(this).dialog("close");
            }
        }
    });
}


function gridViewIconsDisplay(icnCmnId, noOfRecords) {

    if (noOfRecords == 0) {

        $('#' + icnCmnId + '_Add').css("display", "none");
        $('#' + icnCmnId + '_Update').css("display", "block");
        $('#' + icnCmnId + '_Delete').css("display", "none");
        $('#' + icnCmnId + '_Grid_View').css("display", "none");
        $('#' + icnCmnId + '_Form_View').css("display", "none");

    }
    else if (noOfRecords == 1) {
        $('#' + icnCmnId + '_Add').css("display", "block");
        $('#' + icnCmnId + '_Update').css("display", "block");
        $('#' + icnCmnId + '_Delete').css("display", "block");
        $('#' + icnCmnId + '_Grid_View').css("display", "none");
        $('#' + icnCmnId + '_Form_View').css("display", "none");

    }
    else if (noOfRecords > 1) {


        $('#' + icnCmnId + '_Add').css("display", "block");
        $('#' + icnCmnId + '_Update').css("display", "none");
        $('#' + icnCmnId + '_Delete').css("display", "none");
        $('#' + icnCmnId + '_Grid_View').css("display", "none");
        $('#' + icnCmnId + '_Form_View').css("display", "none");

    }

}
var fetchERPDataFlag = false;
function fetchErpTabData()
{



//class='txterpclass'
//class='chberpclass'
//class='taerpclass'
//class='selecterpclass'

//DATE
//ddwerpclass
//if(getStepsFinished()>-1 && getStepsFinished()>=3)
    if (true)
    {
        $("#MM_ERPDATA_Update").show();
        if (!fetchERPDataFlag)
        {

            fetchERPDataFlag = true;
            var jsondata = {};
            var businessUnit = $("#plant_Text").val();
            var materialType_Text = $("#materialType_Text").val();
            var baskettype = $('#baskettypehid').val();
            var recordNo_Text = $("#recordNo_Text").val();
            jsondata.recordNo = recordNo_Text;
            jsondata.matlType = materialType_Text;

            jsondata.baskettype = baskettype;
            jsondata.businessUnit = businessUnit;
            var jsonDataString = JSON.stringify(jsondata);
            $.ajax({
                url: 'getErpData',
                type: "post",
                traditional: true,
                dataType: 'html',
                cache: false,
                data: {
                    jsonData: jsonDataString

                },
                success: function(responseText) {
//                 $("#erpData").remove();
//               alert(responseText);

                    $("#erpData").append(responseText);
                    $('#erpData').jqxTabs({position: 'top', width: '100%', reorder: true, theme: 'energyblue'});

                    //data-vaue     
                    var date_value = $(this).attr('data-vaue');
                    $('.DATE').each(function() {
                        console.log('.DATE:data-vaue:::' + $(this).attr('data-vaue'));

                        if (date_value != null && date_value != '') {

                            $(this).jqxDateTimeInput({width: 150, height: 22, value: $(this).attr('data-vaue')});
                        } else
                        {

                            $(this).jqxDateTimeInput({width: 150, height: 22, value: new Date()});
                        }



                    });

                    // $('.DATE').jqxDateTimeInput({ width: 150, height: 22, value: new Date() });

                }, error: function(resT) {
                    alert("Error:" + resT);
                }

            });

        }
    } else {
        $("#MM_ERPDATA_Update").hide();
    }


}
function mmErpDataUpdate() {


    var ch = [];
    $("#erpData div:nth-child(2)>div").each(function() {
        ch.push($(this).attr("id"));
    });

//alert(ch);
    var jsonOBJ = {};
    jsonOBJ.ids = [];
    jsonOBJ.values = [];
    var th = [];
    for (var i = 0; i < ch.length; i++) {
        // alert(ch[i]);
        $("#erpData div:nth-child(2) #" + ch[i]).children().each(function() {
            $(this).find("input").each(function() {

                var textId = $(this).attr("id");
                th.push(textId);
                var textval = $("#" + textId).val();
                var textid = textId.replace("input", "");

                jsonOBJ.ids.push(textid.toLowerCase());
                jsonOBJ.values.push(textval);
            });
        });
//alert(th);
    }

//        alert(JSON.stringify(jsonOBJ));

    console.log(JSON.stringify(jsonOBJ));

    var jsondata = {};
    var businessUnit = $("#plant_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var baskettype = $('#baskettypehid').val();
    var recordNo_Text = $("#recordNo_Text").val();
    jsondata.recordNo = recordNo_Text;
    jsondata.matlType = materialType_Text;

    jsondata.baskettype = baskettype;
    jsondata.businessUnit = businessUnit;

    jsonOBJ.basic = jsondata;
    $.ajax({
        url: 'updateErpData',
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            jsonData: JSON.stringify(jsonOBJ)

        },
        success: function(responseText)
 {


//alert(responseText);
            var respMessage = JSON.parse(responseText);
            if (respMessage.STEPS == 4) {

                stepActions(4);

            }

            //errorMsg(respMessage.MESSAGE);
            $("#dialog").html(respMessage.MESSAGE);
            $("#dialog").dialog({
                modal: true,
                height: 150,
                title: "Message",
                minWidth: 300,
                maxWidth: 'auto',
                textAlign: 'center',
                buttons: {
                    Ok: function() {
                        $(this).dialog("close");
                    }
                }
            });


        }


//        {
//
//            $("#dialog").html(responseText);
//            $("#dialog").dialog({
//                modal: true,
//                height: 150,
//                title: "Message",
//                minWidth: 300,
//                maxWidth: 'auto',
//                textAlign: 'center',
//                buttons: {
//                    Ok: function() {
//                        $(this).dialog("close");
//                    }
//                }
//            });
//
//
//        }




        , error: function(resT) {
            alert("Error:" + resT);
        }

    });


}

function fetchDescriptionsTabData() {
    var jsondata = {};
    var businessUnit = $("#plant_Text").val();
    var materialType_Text = $("#materialType_Text").val();
    var baskettype = $('#baskettypehid').val();
    var recordNo_Text = $("#recordNo_Text").val();
    jsondata.recordNo = recordNo_Text;
    jsondata.matlType = materialType_Text;

    jsondata.baskettype = baskettype;
    jsondata.businessUnit = businessUnit;
    var jsonDataString = JSON.stringify(jsondata);
    $.ajax({
        url: 'getTextData',
        type: "post",
        traditional: true,
        dataType: 'html',
        cache: false,
        data: {
            jsonData: jsonDataString

        },
        success: function(responseText) {
            // prepare the data
            var data = JSON.parse(responseText);
            // alert(JSON.stringify(result));
            var source =
                    {
                        datatype: "json",
                        localdata: data,
                        datafields:
                                [
                                    {name: 'TYPE', type: 'string'},
                                    {name: 'TEXT', type: 'string'},
                                    {name: 'LOCALE', type: 'string'}

                                ]

                    };




            var dataAdapter = new $.jqx.dataAdapter(source);
            // initialize jqxGrid
            $("#MM_DESCRIPTIONS_GRID").jqxGrid(
                    {
                        width: "100%",
                        height: "160",
                        rowsheight: 50,
                        source: dataAdapter,
                        editable: false,
                        editmode: 'selectedrow',
                        columnsresize: true,
                        columnsreorder: true,
                        sortable: true,
                        filterable: true,
                        showfilterrow: true,
                        theme: 'energyblue',
                        showtoolbar: false,
                        pageable: false,
                        columns: [
                            {text: 'Type', editable: true, datafield: 'TYPE', width: "15%"},
                            {text: 'Text', editable: false, datafield: 'TEXT', width: "80%",
                                cellsrenderer: function(row, columnfield, value, defaulthtml, columnproperties) {//overflow-y:scroll;height:100%;
                                    //return "";

                                    return "<textarea readonly style='background-color:inherit;border:none;width:100%;height:100%; font:11px Arial;line-height:17px;'>" + value + "</textarea>";
                                }
                            },
                            {text: 'Locale', editable: true, datafield: 'LOCALE', width: "5%"}

                        ]
                    });
        }
    });
}



//// FILE ATTACHMENT START 
function showimage() {

    $('#profilepic1').ajaxfileupload({
        'action': 'UploadAttachFiles?recordNo=' + $("#recordNo_Text").val(),
        'onComplete': function(response) {

            $('#upload').hide();
            //  $('#message').show();

            console.log("in upload");
            var statusVal = JSON.stringify(response.message);
            var obj = JSON.parse(statusVal);

            var filename = obj.filename;

            var filestring = obj.fileString;

            $("#profilepichidden").val(filename);

            console.log("image" + filename);

            fetchAttachmentsTabData();


        }


    });

}


function showPreview(rowid)
{

    $('#image_' + rowid).click(function() {
        var img = $(this).attr('src');
        //alert(img);
        $('#d2').empty();
        if (img == "images/no-image.jpg")
        {
            // alert("unable to delete");
            $('#d2').remove();
        }
        else
        {
            $('#d2').append("<img src='" + img + "' style='width:150px;height:150px;align:right'/><img src='./images/delete.png' id='img1' style='width:15px;height:15px;margin-bottom:135px' onclick='deleteAttach()'>");
        }
    });

}


//// FILE ATTACHMENT START 
var fetchattach = false;

function fetchAttachmentsTabData() {

    console.log("fetchAttachmentsTabData ::: START");


    var record_No = $('#recordNo_Text').val();
    //alert(record_No);
  var baskettype = $("#baskettypehid1").val();
//  alert(baskettype);
    if (!fetchattach)
    {

        $.ajax({
            type: "post",
            traditional: true,
            url: "SelectFiles",
            data:{recordNo:record_No,
            baskettype:baskettype
        },
            cache: false,
            async: false,
            dataType: 'html',
            success: function(result) {

//alert(result);
                $("#encloseTable").html(result);
//                var list = JSON.parse(result);
//                // alert(list);
//                for (var i = 0; i < list.length; i++) {
//                    obj = list[i];
//                    //alert(obj.file1);
//                    $("#d1").empty();
//                    $("#d1").append(obj.blobString);
//
//
//                }
                fetchattach = false;

            },
            error: function(e) {

                // return "materialRegistration";


            }

        });
    }



    console.log("fetchAttachmentsTabData ::: END ");
}

function showBrowseButton(param)
{
    $(".addIcon_" + param).hide();
    var listval1 = $('#list_' + param).val();
    var encvalue = listval1;
    var suppl_code = $('#vendorCode').val();

//    if (listval1.search("&") != -1)
//    {
//        listval1 = listval1.replace("&", "and");
//    }



    var baskettype1 = $("#baskettypehid").val();
    var baskettype = baskettype1.replace(/\s/gi, "_");
    var request_number = $("#request_number").val();
    console.log("baskettype::" + baskettype);
//    var listval = encodeURIComponent(listval1);
    console.log("listval:::" + listval1);
    var locate_code = $("#locatcode").val();
    var url = 'UploadAttachFiles?recordNo=' + $("#recordNo_Text").val() + '&attachType=' + listval1;

    console.log("url::" + url);


    window.chckValues.push(param);

    var attach_val = $("#attchInd_" + param).val();
    console.log("attach_val::" + attach_val);
    $("#browseTdId_" + param).css("width", "55px");

    if (attach_val.trim() == 'Y')
    {
        //  alert(attach_val);
        var id = "#browseTdId_" + param;
        var browseId = "#browseId_" + param;
//        $(id).jqxFileUpload({
//            multipleFilesUpload: false,
//            width: 0,
//            autoUpload: true,
//            uploadUrl: url,
//            fileInputName: 'fileToUpload',
//            accept: 'image/*,application/pdf'});
        $(id).show();
        $(browseId).ajaxfileupload({
            'action': url,
            'onComplete': function(response) {

                // $('#upload').hide();

                $("#wait").css("display", "none");
                // $("body").css({"pointer-events": "auto"});
                // $('#message').show();

                var serverResponce = JSON.stringify(response.message);
                //  alert(serverResponce);
//
//                if (statusVal == "false")
//                {
//                    $("#message").html("<font color='red'>" + JSON.stringify(response.message) + " </font>");
//                }
//                if (statusVal == "true")
//                {
//                    $("#message").html("<font color='green'>" + JSON.stringify(response.message) + " </font>");
//                }


                $(id).hide();

                if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                    var baskettype = $("#baskettypehid").val();

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({
                        modal: true,
                        buttons: {
                            Ok: function() {
                                $(this).dialog("close");

                                $("#browseTdId_" + param).show();

                            }
                        }
                    });


                } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({
                        modal: true,
                        buttons: {
                            Ok: function() {
                                $(this).dialog("close");
                                $("#browseTdId_" + param).show();
                            }
                        }
                    });



                } else if (serverResponce.lastIndexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

                    $("#dialog").html(serverResponce);
                    $("#dialog").dialog({
                        modal: true,
                        buttons: {
                            Ok: function() {
                                $(this).dialog("close");
                                $("#browseTdId_" + param).show();
                            }
                        }
                    });



                } else
                {


                    fetchAttachmentsTabData();
                }
                $("body").css({"pointer-events": "auto"});
            },
            'onStart': function() {
                $('#wait').show();
                $("body").css({"pointer-events": "none"});
                $("#wait").css("display", "block");
                // $('#message').hide();
            }
        });
        $("#browseTdId_" + param).show();
        $(id).on('uploadEnd', function(event) {
            var args = event.args;
            var fileName = args.file;
            var serverResponce = args.response;

            $(id).hide();

            if (serverResponce.lastIndexOf("File is Empty,Can't be Uploaded.") > -1) {//File is Empty,Cann't be Uploaded.

                var baskettype = $("#baskettypehid").val();

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({
                    modal: true,
                    buttons: {
                        Ok: function() {
                            $(this).dialog("close");

                            $("#browseTdId_" + param).show();

                        }
                    }
                });


            } else if (serverResponce.lastIndexOf("Size of each file should not exceed 5000KB.") > -1) {//Size of each file should not exceed 5000KB.

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({
                    modal: true,
                    buttons: {
                        Ok: function() {
                            $(this).dialog("close");
                            $("#browseTdId_" + param).show();
                        }
                    }
                });



            } else if (serverResponce.lastIndexOf("Please Uplaod Image or PDF File Only.") > -1) {//Size of each file should not exceed 5000KB.

                $("#dialog").html(serverResponce);
                $("#dialog").dialog({
                    modal: true,
                    buttons: {
                        Ok: function() {
                            $(this).dialog("close");
                            $("#browseTdId_" + param).show();
                        }
                    }
                });



            } else
            {


                fetchAttachmentsTabData();
            }

        });

    } else
    {
        $("#browseTdId_" + param).hide();

    }

    //browse_
}

// display the lightbox
function showImage(row_id) {
    $('#deleteAttachmentId').hide();
    $('#addAttachmentId').hide();

    var baskettype = $("#baskettypehid").val();
    var insertContent = $('#image_' + row_id).attr("src");
    var maincontent = "";
    console.log("baskettype::" + baskettype);
    var role = $('#rolehid').val();
    console.log("enc list:show Image::" + role);
    if (baskettype.lastIndexOf("Search View") > -1 || (baskettype.lastIndexOf("Extension") > -1)
//    if (baskettype == null || (baskettype.lastIndexOf("Extension") > -1 && EXT_PLANT_IND == 0)
            || baskettype.lastIndexOf("Change Requests Creation") > -1
            || baskettype.lastIndexOf("Block Request") > -1
            || baskettype.lastIndexOf("Unblock Request") > -1
            || role.lastIndexOf("FVM_ROL_APPROVER") > -1
            || role.lastIndexOf("FVM_ROL_GL_USER") > -1
            || role.lastIndexOf("FVM_ROL_TAX_USER") > -1)

    {
        console.log("IF SHOW IMAGE:::");
        maincontent = "<img src='" + insertContent + "' height='150' width='150' style='border:solid 1px #000;' />";
        $("#deleteAttachmentId").hide();
    } else
    {
        maincontent = "<img src='" + insertContent + "' height='150' width='150' style='border:solid 1px #000;' onload='showDeleteButton()'/>";
        console.log("ELSE SHOW IMAGE:::");
    }
    $('#closeAttachmentId').show();
    $('#hiddenRowId').val(row_id);
    $("#imagedispid").html(maincontent);
}

function showPdf(id)
{
    var baskettype = $("#baskettypehid").val();
    console.log("baskettype::" + baskettype);
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6





    $('#deleteAttachmentId').show();
    $('#addAttachmentId').hide();
    var content = $('#pdfHiddenId_' + id).val();
    $('#hiddenRowId').val(id);
    var frameContent = "";
    var browserType = "";
    var role = $('#rolehid').val();
    console.log("enc list:show pdf::" + role);
    if (baskettype.lastIndexOf("Search View") > -1 || (baskettype.lastIndexOf("Extension") > -1)
//    if (baskettype == null || (baskettype.lastIndexOf("Extension") > -1 && EXT_PLANT_IND == 0)
            || baskettype.lastIndexOf("Change Requests Creation") > -1
            || baskettype.lastIndexOf("Block Request") > -1
            || baskettype.lastIndexOf("Accept") > -1
            || baskettype.lastIndexOf("Unblock Request") > -1
            || role.lastIndexOf("FVM_ROL_GL_USER") > -1
            || role.lastIndexOf("FVM_ROL_APPROVER") > -1
            || role.lastIndexOf("FVM_ROL_TAX_USER") > -1)

    {
        console.log("baskettype null if::");
        frameContent = "<iframe frameborder='0' height='150' width='150' src='tempFiles/" + content + "' style='border:solid 1px #000;' id='iframeid' />";
        $("#deleteAttachmentId").hide();
    } else
    {

        frameContent = "<iframe frameborder='0' height='100' width='100' src='tempFiles/" + content + "' style='border:solid 1px #000;' id='iframeid' onload='showDeleteButton()'/>";
    }
    $('#closeAttachmentId').show();

    $("#imagedispid").html(frameContent);
    ;
}
// showing delete button
function showDeleteButton()
{

    $('#deleteAttachmentId').show();
    $('#closeAttachmentId').show();

}


function updateAttachments(reqtype)
{

    var row_id = $('#hiddenRowId').val();
    var encval = $(".openImage_" + row_id).val();
    var locat_cde = $("#locatcode").val();
    if (reqtype == 'delete') {
        $("#dialog").html("Are you sure want to Delete ?");

        // Define the Dialog and its properties.
        $("#dialog").dialog({
            resizable: false,
            modal: true,
            title: "Confirmation",
            height: 150,
            width: 300,
            buttons: {
                "Yes": function() {
                    $(this).dialog('close');

                    //=====

                    $.ajax({
                        type: "get",
                        url: "DeleteAttachFile",
                        cache: false,
                        data: {'sequenceno': row_id,
                            'enc_val': encval,
                            recordNo: $("#recordNo_Text").val(),
                        },
                        traditional: true,
                        dataType: 'html',
                        cache: false,
                                success: function(response) {
//                                    alert(response);
                                    if (response != 0)
                                    {
                                        $('#deleteAttachmentId').hide();
                                        $('#closeAttachmentId').hide();
                                    }
                                    $("#imagedispid").html("");
                                    $('#image_' + row_id).replaceWith("");

                                    var tabl_row_id = $('#openImage_' + row_id).closest('tr').attr('id');

                                    tabl_row_id = tabl_row_id.split("enclrtr_");
                                    var td_id = tabl_row_id[1];


                                    if (!(encval.lastIndexOf("Bank Detail Form signed") > -1
                                            || encval.lastIndexOf("Lower TDS Certificate") > -1
                                            || encval.lastIndexOf("Withholding Tax Exemption Certificate") > -1)) {

                                        $('#attchInd_' + td_id).removeAttr("disabled");
                                        $("#attchInd_" + td_id + " [value='N']").attr("selected", "selected");
                                    }
                                    $('#attchInd_' + td_id).closest('td').attr('id', 'updateAttch' + td_id);
                                    $("#openImage_" + row_id).remove();

                                    var nexttdid = $('#updateAttch' + td_id).next('td').attr('id');
                                    if (nexttdid.lastIndexOf("tdaddIcon_") > -1) {

                                        $('#attchInd_' + td_id).removeAttr("disabled");
                                        $("#attchInd_" + td_id + " [value='N']").attr("selected", "selected");
                                        $(".addIcon_" + td_id).hide();
                                    }

                                },
                        error: function(e) {
                            alert('Error: ' + e.message());
                        }

                    });

                },
                "No": function() {
                    $(this).dialog('close');

                }
            }
        });
    } else if (reqtype == 'close') {

        $("#imagedispid").html("");
        $('#deleteAttachmentId').hide();
        $('#closeAttachmentId').hide();

    } else {
        $('#updateBrowse').val('');
        $('#updateBrowse').show();
        $('#addAttachmentId').hide();
    }


}



///FILE ATTACHMENT END
