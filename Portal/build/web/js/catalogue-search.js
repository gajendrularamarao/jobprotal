/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//  function onKeyup(columnid,columnno) {
//                //  alert('keyup count:'+$('#bootstrap-table tbody tr').length);
//                if ($("#"+columnid).val() != "") {
//                    var $rowsNo = $('#bootstrap-table tbody tr').filter(function() {
//                        return $.trim($(this).find('td').eq(columnno).text()) != $("#"+columnid).val();
//                    }).hide();
//                }
//                else {
//                    var $rowsNo = $('#bootstrap-table tbody tr').filter(function() {
//                        return $.trim($(this).find('td').eq(0).text()) != $("#vendorhead").val();
//                    }).show();
//
//                }
//
//
//            }


// function onKeyup(columnid, columnno) {
//                //  alert('keyup count:'+$('#bootstrap-table tbody tr').length);
//                if ($("#" + columnid).val() != "") {
//                    var $rowsNo = $('#bootstrap-table tbody tr').filter(function() {
//                        var cval = $.trim($(this).find('td').eq(columnno).text());
//                        return  cval.indexOf($("#" + columnid).val()) == -1;
//
//
//                    }).hide();
//                    
//                      $rowsNo = $('#bootstrap-table tbody tr').filter(function() {
//                       var cval = $.trim($(this).find('td').eq(columnno).text());
//                        return  cval.indexOf($("#" + columnid).val()) != -1;
//                    }).show();
//                }
//                else {
//                    var $rowsNo = $('#bootstrap-table tbody tr').filter(function() {
//                       var cval = $.trim($(this).find('td').eq(columnno).text());
//                        return  cval.indexOf($("#" + columnid).val()) != -1;
//                    }).show();
//
//                }
//              
//            }


function onKeyup1() {
    //  alert('11');


    //  vendorhead 

    var $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('0').text());
        //cval=cval.toUpperCase;
        var cval1 = $.trim($(this).find('td').eq('3').text());
        // cval1 = cval1.toUpperCase();

        return  cval.indexOf(cval1) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('1').text());
        //var cval1 = $.trim($(this).find('td').eq('3').text());
        return  cval.indexOf($("#vnamehead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('2').text());
        return  cval.indexOf($("#suppliernohead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('3').text());
        return  cval.indexOf($("#instancehead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('4').text());
        return  cval.indexOf($("#acghead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('5').text());
        return  cval.indexOf($("#pohead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('6').text());
        return  cval.indexOf($("#cchead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('7').text());
        return  cval.indexOf($("#erphead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('8').text());
        return  cval.indexOf($("#createdbyhead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('9').text());
        return  cval.indexOf($("#cdatehead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('10').text());
        return  cval.indexOf($("#editedbyhead").val()) != -1;
    }).show();
    $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
        var cval = $.trim($(this).find('td').eq('11').text());
        return  cval.indexOf($("#edatehead").val()) != -1;
    }).show();

    if ($("#vendorhead").val() != "") {
        // alert('entered vname head');
        var $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('0').text());
            return  cval.indexOf($("#vendorhead").val()) == -1;
        }).hide();
    }
    if ($("#vnamehead").val() != "") {
        // alert('entered vname head');
        var $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('1').text());
            return  cval.indexOf($("#vnamehead").val()) == -1;
        }).hide();



    }
    if ($("#suppliernohead").val() != "") {
        // alert('entered vname head');
        var $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('2').text());
            return  cval.indexOf($("#suppliernohead").val()) == -1;
        }).hide();
    }
    if ($("#instancehead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('3').text());
            return  cval.indexOf($("#instancehead").val()) == -1;
        }).hide();
    }
    if ($("#acghead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('4').text());
            return  cval.indexOf($("#acghead").val()) == -1;
        }).hide();
    }
    if ($("#pohead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('5').text());
            return  cval.indexOf($("#pohead").val()) == -1;
        }).hide();
    }
    if ($("#cchead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('6').text());
            return  cval.indexOf($("#cchead").val()) == -1;
        }).hide();
    }
    if ($("#erphead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('7').text());
            return  cval.indexOf($("#erphead").val()) == -1;
        }).hide();
    }
    if ($("#createdbyhead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('8').text());
            return  cval.indexOf($("#createdbyhead").val()) == -1;
        }).hide();
    }
    if ($("#cdatehead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('9').text());
            return  cval.indexOf($("#cdatehead").val()) == -1;
        }).hide();
    }
    if ($("#editedbyhead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('10').text());
            return  cval.indexOf($("#editedbyhead").val()) == -1;
        }).hide();
    }
    if ($("#editedbyhead").val() != "") {
        //    alert('entered instance head');
        $rowsNo = $('#bootstrap-table tbody tr').filter(function () {
            var cval = $.trim($(this).find('td').eq('11').text());
            return  cval.indexOf($("#edatehead").val()) == -1;
        }).hide();
    }
    alert('keyup count:' + $('#bootstrap-table tbody tr:visible').length);
}
function clearSearch() {

    $("#searchResults").empty();
    $("#vendorsearchtype").val("Equals");
    $("#uomsearchtype").val("Equals");
    $("#ccsearchtype").val("Equals");
    $("#posearchtype").val("Equals");
    $("#acgsearchtype").val("Equals");

    // $("#vnamesearchtype").val("Equals");
    // $("#statussearchtype").val("Equals");
    $("#cdatesearchtype").val("Equals");
    $("#createdbysearchtype").val("Equals");
    $("#editeddatesearchtype").val("Equals");
    $("#editedbysearchtype").val("Equals");
    $('#erpnosearchtype').val('Equals');
    $('#sdsearchtype').val('Equals');
    $('#ldescsearchtype').val('Equals');
    $('#mtsearchtype').val('Equals');
    $('#matgroupsearchtype').val('Equals');
    $('#mattypesearchtype').val('Equals');
    $('#alternativenosearchtype').val('Equals');
    $('#pansearchtype').val('Equals');
    $('#partnosearchtype').val('Equals');


    //  changeToggle('edatebutton', 'edate', 'fromedate', 'andedate', 'toedate', 'editeddatesearchtype');
    //  changeToggle('corpbutton', 'vendorno', 'fromvendorno', 'andvendorno', 'tovendorno', 'vendorsearchtype');





    if ($("#corpbutton").val() == 'Normal')
    {
        console.log('==============Entered--------------------');

        $("#corpbutton").val("Range");
        $("#vendorno").css("display", "inline");
        $("#fromvendorno").css("display", "none");
        $("#andvendorno").css("display", "none");
        $("#tovendorno").css("display", "none");
        $('#vendorsearchtype :selected').text('=');
        $('#vendorsearchtype :selected').val('Equals');
    }

    if ($("#edatebutton").val() == 'Normal')
    {
        $("#edatebutton").val("Range");
        $("#edate").css("display", "inline");
        $("#fromedate").css("display", "none");
        $("#andedate").css("display", "none");
        $("#toedate").css("display", "none");
        $('#editeddatesearchtype :selected').text('=');
        $('#editeddatesearchtype :selected').val('Equals');
    }
    if ($("#cdatebutton").val() == 'Normal')
    {
        $("#cdatebutton").val("Range");
        $("#cdate").css("display", "inline");
        $("#fromcdate").css("display", "none");
        $("#andcdate").css("display", "none");
        $("#tocdate").css("display", "none");
        $('#cdatesearchtype :selected').text('=');
        $('#cdatesearchtype :selected').val('Equals');
    }

    // $("#attachmentsearchtype").val("Equals");
    // $("#vendortypesearchtype").val("Equals");
    $("#centralsalestaxsearchtype").val("Equals");



    //$("#pansearchtype").val("Equals");
    // $("#servicetaxsearchtype").val("Equals");
    // $("#eccsearchtype").val("Equals");
    // $("#excisenosearchtype").val("Equals");
    //  $("#exciserangesearchtype").val("Equals");
    // $("#ssistatussearchtype").val("Equals");
    // $("#vatnosearchtype").val("Equals");
    //$("#importexportsearchtype").val("Equals");
    // $("#msmesearchtype").val("Equals");

    $("#alternativeno").val("");
    $("#matgroup").val("");
    $("#mattype").val("");
    $("#uom").val("");
    $("#vendorno").val("");
    $("#cc").val("");
    $("#po").val("");
    $("#acg").val("");
    $("#vname").val("");
    $("#status").val("");
    $("#cdate").val("");
    $("#fromcdate").val("");
    $("#tocdate").val("");
//    changeToggle('cdatebutton', 'cdate', 'fromcdate', 'andcdate', 'tocdate', 'cdatesearchtype');
//    changeToggle('edatebutton', 'cdate', 'fromcdate', 'andcdate', 'tocdate', 'cdatesearchtype');
    $("#createdby").val("");
    $("#edate").val("");
    $("#fromedate").val("");
    $("#toedate").val("");
    $("#editedby").val("");
    //$("#attachmentstatus").jqxDropDownList('uncheckAll'); 
    $("#erpno").val("");
    $("#status").val("");
    $("#cdate").val("");
    $("#createdby").val("");
    $("#edate").val("");
    $("#edate").val("");
    $("#editedby").val("");
    $("#vendortype").val("");
    $("#descriptor").val("");
    $("#shortdesc").val("");
    $("#longdesc").val("");
    $("#materialtype").val("");
    $("#materialgroup").val("");
    $('#attachment').jqxCheckBox({checked: false});
    $("#centralsalestax").val("");
    $("#panno").val("");
//    $("#panno").val("");
//    $("#servicetax").val("");
//    $("#eccno").val("");
//    $("#exciseno").val("");
//    $("#exciserange").val("");
//    $("#ssistatus").val("");
//    $("#vatno").val("");
//    $("#importexportno").val("");
//    $("#msmestatus").val("");
}



$(function () {
//    "Name": "Otto Clay",
//            "Age": 61,
//            "Country": 6,
//            "Address": "Ap #897-1459 Quam Avenue",
//            "Married": false
//    $("#searchResultsTable").jsGrid({
//                height: "70%",
//                width: "100%",
//                sorting: true,
//                paging: true,
//                fields: [
//                    { name: "Name", type: "text", width: 150 },
//                    { name: "Age", type: "number", width: 50 },
//                    { name: "Address", type: "text", width: 200 },
//                    { name: "Married", type: "checkbox", title: "Is Married" }
//                ],
//                data: db.clients
//            });
//    



    $('#search_body').keypress(function (e) {

        var curTab = $('#accordion h3.ui-state-active');
        var active_tab = curTab.index('h3');
        console.log('active_tab:' + active_tab);


        var key = e.which;
        if (key == 13 && active_tab=='0')  // the enter key code
        {
            onSearch();
            $("#accordion").accordion({
                active: 4
            });
            $("#searchpaneltems").css("width", "100%");
            changepanelImage("textsearchpanel", "resultpanel");
        }





    });

    $("#cdate").datepicker({dateFormat: 'dd-mm-yy', changeMonth: true, changeYear: true});
    //$('#datepicker').datepicker({ dateFormat: 'dd-mm-yy' }).val();
    $("#fromcdate").datepicker({dateFormat: 'dd-mm-yy'});
    $("#tocdate").datepicker({dateFormat: 'dd-mm-yy'});
    $("#edate").datepicker({dateFormat: 'dd-mm-yy'});
    $("#fromedate").datepicker({dateFormat: 'dd-mm-yy'});
    $("#toedate").datepicker({dateFormat: 'dd-mm-yy'});
});

function checkAll(bx) {
    var cbs = document.getElementsByTagName('input');
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].type == 'checkbox') {
            cbs[i].checked = bx.checked;
        }
    }
}
function openPopUp(dialogid) {
    // alert(dialogid);
    // alert('called open popup:' + dialogid);



    if (dialogid == 'materialgroupdialog')
    {

        console.log('Entered material group');

        $("#matgroupsearchtype").val("IN");
        clickmaterialgroup();
    }
    if (dialogid == 'materialtypedialog')
    {

        console.log('Entered material type');
        clickmaterialtype();
        $("#mattypesearchtype").val("IN");
    }
    if (dialogid == 'acgdialog')
    {
        clickacg();
        $("#acgsearchtype").val("IN");
    }

    if (dialogid == 'plantdialog')
    {
        clickplant();
//        clickcom();
        $("#ccsearchtype").val("IN");
    }
    if (dialogid == 'budialog')
    {
        clickbu();
//        clickcom();
        $("#ccsearchtype").val("IN");
    }
    if (dialogid == 'desc_dialog')
    {
        clickdesc();
        $("#posearchtype").val("IN");
    }
    if (dialogid == 'uom_dialog')
    {
        clickuom();
        $("#acgsearchtype").val("IN");
    }
    if (dialogid == 'status_dialog')
    {
        clickstatus();
        $("#acgsearchtype").val("IN");
    }
    if (dialogid == 'cuserdialog')
    {
        clickcreatedby();
        $("#createdbysearchtype").val("IN");
    }
    if (dialogid == 'euserdialog')
    {
        clickeditedby();
        $("#editedbysearchtype").val("IN");
    }
    if (dialogid == 'layoutdialog')
    {
        clickLayoutSettings();
    }



}

function clickmaterialtype() {

    console.log('Entered click material type');

    $.ajax({
        url: 'materialtype.jsp',
        method: "get",
        contentType: 'text/html',
        data: {
            bunit: $('#locatcode').val(),
            ag1: null,
            ag2: null

        },
        success: function (responseText) {
            //  alert(responseText);
            $('#materialtypedialog').html(responseText);
        }
    });
    $("#materialtypedialog").dialog("open");

}


function clickmaterialgroup() {

    console.log('Entered click material type');

    $.ajax({
        url: 'materialgroup.jsp',
        method: "get",
        contentType: 'text/html',
        data: {
            bunit: $('#locatcode').val(),
            ag1: null,
            ag2: null

        },
        success: function (responseText) {
            //alert(responseText);
            $('#materialgroupdialog').html(responseText);
        }
    });
    $("#materialgroupdialog").dialog("open");

}

function clickacg() {
    // alert("jjjj");
    //console.log($('#locatcode').val());
    $.ajax({
        url: 'wac_group_search.jsp',
        method: "get",
        contentType: 'text/html',
        data: {
            bunit: $('#locatcode').val(),
            ag1: null,
            ag2: null

        },
        success: function (responseText) {
            //   alert(responseText);
            $('#acgdialog').html(responseText);
        }
    });
    $("#acgdialog").dialog("open");
}
function onSelectedLabelChanged(val1) {
    console.log("val:" + val1);
    if (val1.length > 0) {

        //  console.log("selected val:" + val1);
        //    console.log("selected val:" + $(val1).val());
        //document.getElementById($(val1).val()).style.display="inline-grid";
        //$("#"+"status_tr").css("display", "inline-grid");
        $("#status_tr").toggle();
        // $("#selectedLabel").val("");
    }
}

function clickLayoutSettings() {
    // alert("jjjj");
    //console.log($('#locatcode').val());

    var listSource = [
        {label: 'Created By', value: 'created_by', checked: false},
        {label: 'Created Date', value: 'created_date', checked: false},
        {label: 'Edited By', value: 'edited_by', checked: false},
        {label: 'Edited Date', value: 'edited_date', checked: false}
    ];
    $("#jqxlistbox").jqxDropDownList({autoOpen: true, theme: 'energyblue', source: listSource, width: 200, checkboxes: true});
    $("#jqxlistbox").on('checkChange', function (event) {
        $("#searchResults").jqxGrid('beginupdate');
        if (event.args.checked) {
            $("#searchResults").jqxGrid('showcolumn', event.args.value);
        }
        else {
            $("#searchResults").jqxGrid('hidecolumn', event.args.value);
        }
        $("#searchResults").jqxGrid('endupdate');
    });
    var listSource1 = [
        {label: 'Vendor Name', value: 'vendor_tr', checked: false},
        {label: 'Status', value: 'status_tr', checked: false},
        {label: 'Created Date', value: 'cdate_tr', checked: false},
        {label: 'Created By', value: 'created_by_tr', checked: false},
        {label: 'Edited By', value: 'editedby_tr', checked: false},
        {label: 'Edited Date', value: 'edited_date_tr', checked: false}
    ];
    $("#jqxlistbox2").jqxDropDownList({autoOpen: true, theme: 'energyblue', source: listSource1, width: 200, checkboxes: true});
    $("#jqxlistbox2").on('checkChange', function (event) {
        // $("#searchResults").jqxGrid('beginupdate');
        if (event.args.checked) {
            onSelectedLabelChanged("#" + event.args.value);
            // $("#searchResults").jqxGrid('showcolumn', event.args.value);
        }
        else {
            onSelectedLabelChanged("#" + event.args.value);
        }
//                    $("#searchResults").jqxGrid('endupdate');
    });



    $("#layoutdialog").dialog("open");
}
function clickp() {
    // alert("jjjj");
    // console.log($('#locatcode').val());
    $.ajax({
        url: 'wpur_org_search.jsp',
        method: "get",
        contentType: 'text/html',
        data: {
            bunit: $('#locatcode').val(),
            ag1: null,
            ag2: null

        },
        success: function (responseText) {
            //   alert(responseText);
            $('#podialog').html(responseText);
        }
    });
    $("#podialog").dialog("open");
}
function clickdesc() {
    // alert("jjjj");
    // console.log($('#locatcode').val());
    $.ajax({
        url: 'desc_dropdown.jsp',
        method: "get",
        contentType: 'text/html',
        data: {
            bunit: $('#locatcode').val(),
            descriptor: null,
            desc: null

        },
        success: function (responseText) {
            //   alert(responseText);
            $('#descriptor_dialog').html(responseText);
        }
    });
    $("#descriptor_dialog").dialog("open");
}
function clickplant() {
    // alert("jjjj");
    // console.log($('#locatcode').val());
    $.ajax({
        url: 'wcom_code_search.jsp',
        method: "post",
        contentType: 'text/html',
        data: {
            plant: null,
            desc: null

        },
        success: function (responseText) {
            //   alert(responseText);
            $('#plant_dialog').html(responseText);
        }
    });
    $("#plant_dialog").dialog("open");
}
function clickbu() {
    // alert("jjjj");
    // console.log($('#locatcode').val());
    $.ajax({
        url: 'wcom_code_search.jsp',
        method: "post",
        contentType: 'text/html',
        data: {
            plant: null,
            desc: null

        },
        success: function (responseText) {
            //   alert(responseText);
            $('#plant_dialog').html(responseText);
        }
    });
    $("#plant_dialog").dialog("open");
}
function clickuom() {

    $.ajax({
        url: 'uom_chk_dd.jsp',
        method: "get",
        contentType: 'text/html',
        data: {
            uom: null,
            desc: null

        },
        success: function (responseText) {
            //   alert(responseText);
            $('#uom_dialog').html(responseText);
        }
    });
    $("#uom_dialog").dialog("open");

}

function clickstatus() {
    // alert("jjjj");
    // console.log($('#locatcode').val());
    $.ajax({
        url: 'mat_status.jsp',
        method: "get",
        contentType: 'text/html',
        data: {
            status: null,
            status_desc: null

        },
        success: function (responseText) {
            //   alert(responseText);
            $('#statusdialog').html(responseText);
        }
    });
    $("#statusdialog").dialog("open");
}
function clickcreatedby() {
    // alert("jjjj");
    // console.log($('#locatcode').val());
    $.ajax({
        url: 'jusers.jsp',
        method: "get",
        contentType: 'text/html',
        success: function (responseText) {
            //   alert(responseText);
            $('#cuserdialog').html(responseText);
        }
    });
    $("#cuserdialog").dialog("open");
}
function clickeditedby() {
    // alert("jjjj");
    // console.log($('#locatcode').val());
    $.ajax({
        url: 'jeusers.jsp',
        method: "get",
        contentType: 'text/html',
        success: function (responseText) {
            //   alert(responseText);
            $('#euserdialog').html(responseText);
        },
        error: function (eresponse, xhr) {
            //    alert(xhr);
            //   alert(eresponse);

        }

    });
    $("#euserdialog").dialog("open");
}





$(function () {



    $("#dialog").dialog({
        autoOpen: false,
        width: 500,
        title: "asas"
    });
    $("#ccdialog").dialog({
        autoOpen: false,
        width: 500,
        title: "Company Code"
    });
    $("#podialog").dialog({
        autoOpen: false,
        width: 500,
        title: "Purchase Order"
    });
    $("#acgdialog").dialog({
        autoOpen: false,
        width: 500,
        title: "Account Group"
    });
    $("#layoutdialog").dialog({
        autoOpen: false,
        width: 500,
        title: "Layout Settings"
    });
    $("#statusdialog").dialog({
        autoOpen: false,
        width: 500,
        title: "Status"
    });
    $("#uom_dialog").dialog({
        autoOpen: false,
        width: 500,
        title: "UoM"
    });
    $("#cuserdialog").dialog({
        autoOpen: false,
        width: 500,
        title: "Created By"
    });
    $("#euserdialog").dialog({
        autoOpen: false,
        width: 500,
        title: "Last Edited By"
    });

    $("#budlg").click(function () {
        $("#dialog").dialog("open");
    });




//    $("#acgdialogid").click(function() {
//        $("#acgdialog").dialog("open");
//    }); 
//    
//     $("#podialogid").click(function() {
//        $("#podialog").dialog("open");
//    });
//    
//    $("#ccdialogid").click(function() {
//        $("#ccdialog").dialog("open");
//    });


    var x = parseInt(screen.height) - 200;
    $("#adsearch").css("max-height", x + "px");

    // alert("screen height:"+screen.height);
    //alert("adsearch height:"+x);


});



//function  changeToggle('corpbutton', 'corpnormal', 'fromcorp', 'andcorp', 'tocorp'){
function  changeToggle(val1, val2, val3, val4, val5, searchtype) {

    // alert($("#" + val1).val());

    // $("#corpbutton").attr("name");
    var normal = $("#normalHidden").val();
    var range = $("#rangeHidden").val();
    if ($("#" + val1).attr("name") === "Range") {
        $("#" + val1).val(normal);
        $("#" + val1).attr("name", "Normal")
        $("#" + val2).css("display", "none");
        $("#" + val3).css("display", "inline");
        $("#" + val4).css("display", "inline");
        $("#" + val5).css("display", "inline");
        $('#' + searchtype).val('BETWEEN');
//        $('#' + searchtype ).text('BETWEEN');
    }
    else {
        $("#" + val1).val(range);
        $("#" + val1).attr("name", "Range")
        $("#" + val2).css("display", "inline");
        $("#" + val3).css("display", "none");
        $("#" + val4).css("display", "none");
        $("#" + val5).css("display", "none");
//        $('#' + searchtype + ' :selected').text('=');
        $('#' + searchtype).val('Equals');
    }



}
function vendorSearch() {
    //alert("enetered pt data ACC NO:" + $('#bankaccno').val());
    // alert("Enter vendor search");
    $.ajax({
        url: 'SearchVmServlet',
        method: "get",
        contentType: 'text/html',
        data: {
            searchvalue: $("#vendorno").val(),
            vendornoselect: $("#vendorsearchtype").val()

        },
        success: function (responseText) {
            //    alert("success");
            //  alert(responseText);
            document.getElementById("searchResults").innerHTML = responseText;

            //    $("#searchResults").innerHtml(responseText);


            // alert("Success:" + responseText);


        }, error: function (resT) {
            //alert("Error in pt:" + resT);

        }
    });




}


function adSearch(tbl) {
    //status-table
    //$('#'+tbl+' tr').each()


    $('#' + tbl + ' tr').each(function ( ) {

        //  console.log(index + ": " + $(this).text());

    });


}
function selectall(tdclass) {
    //   alert(tableid);
    $('.' + tdclass).each(function () { //loop through each checkbox
        this.checked = true;  //select all checkboxes with class "checkbox1"               
    });
}
function deselectall(tdclass) {
    $('.' + tdclass).each(function () { //loop through each checkbox
        this.checked = false;  //select all checkboxes with class "checkbox1"               
    });
}
function fetchselected(tableid, tdid, checkboxid, txtid, dialogid) {
    //alert('finished');
    //alert('tableid:' + tableid);
    // alert('tdid' + tdid);
    //alert('checkboxid' + checkboxid);
    // alert('txtid' + txtid);
    //alert('dialgid' + dialogid);
    var rowCount = parseInt($('#' + tableid).length);
    // alert(rowCount);
    var statusval = '';
    // alert(rowCount);
    for (i = 0; i < rowCount; i++)
    {
        $(this).find('td').eq(1).text()
        if ($("#" + checkboxid + i).prop('checked'))
        {
            statusval = statusval + "'" + ($("#" + tdid + i).text()).trim() + "'" + ',';
            statusval.trim();
        }



        //  $('#checkMeOut').prop('checked'); 
    }
    statusval = statusval.substring(0, statusval.length - 1);
    //console.log(statusval);
    $("#" + txtid).val(statusval.trim());
    // console.log("statusval:" + "#" + txtid);

    $("#" + dialogid).dialog("close");
}
function vendornoselectchange() {
    if ($('#vendorsearchtype :selected').text() == 'IS' || $('#vendorsearchtype :selected').text() == 'IS NOT') {
        $("#vendorno").val('NULL');

    }
    else {

//        $("#vendorno").val('');
//        $("#fromvendorno").val('');
//        $("#tovendorno").val('');

        if ($('#vendorsearchtype :selected').text() == 'BETWEEN') {

            $("#corpbutton").val("Normal");
            $("#vendorno").css("display", "none");
            $("#fromvendorno").css("display", "inline");
            $("#andvendorno").css("display", "inline");
            $("#tovendorno").css("display", "inline");
        }
        else {
            $("#corpbutton").val("Range");
            $("#vendorno").css("display", "inline");
            $("#fromvendorno").css("display", "none");
            $("#andvendorno").css("display", "none");
            $("#tovendorno").css("display", "none");
        }
    }
}
function cdselectChange() {
    if ($('#cdatesearchtype :selected').text() == 'IS' || $('#cdatesearchtype :selected').text() == 'IS NOT') {
        $("#cdate").val('NULL');
        $("#cdatebutton").val("Range");
        $("#cdate").css("display", "inline");
        $("#fromcdate").css("display", "none");
        $("#andcdate").css("display", "none");
        $("#tocdate").css("display", "none");

    }

    else {
        if ($("#cdate").val() == 'NULL') {
            $("#cdate").val('');
        }
        if ($('#cdatesearchtype :selected').text() == 'BETWEEN') {

            $("#cdatebutton").val("Normal");
            $("#cdate").css("display", "none");
            $("#fromcdate").css("display", "inline");
            $("#andcdate").css("display", "inline");
            $("#tocdate").css("display", "inline");




        }
        else {
            $("#cdatebutton").val("Range");
            $("#cdate").css("display", "inline");
            $("#fromcdate").css("display", "none");
            $("#andcdate").css("display", "none");
            $("#tocdate").css("display", "none");


        }
    }
}
function edselectChange() {
    //alert('');

    if ($('#editeddatesearchtype :selected').text() == 'IS' || $('#editeddatesearchtype :selected').text() == 'IS NOT')
    {
        $("#edate").val('NULL');
        $("#edatebutton").val("Normal");
        $("#edate").css("display", "inline");
        $("#fromedate").css("display", "none");
        $("#andedate").css("display", "none");
        $("#toedate").css("display", "none");

    }
    else {

        // $("#edate").val('');


        if ($('#editeddatesearchtype :selected').text() == 'BETWEEN') {

            $("#edatebutton").val("Normal");
            $("#edate").css("display", "none");
            $("#fromedate").css("display", "inline");
            $("#andedate").css("display", "inline");
            $("#toedate").css("display", "inline");




        }
        else {

            $("#edatebutton").val("Normal");
            $("#edate").css("display", "inline");
            $("#fromedate").css("display", "none");
            $("#andedate").css("display", "none");
            $("#toedate").css("display", "none");




        }
    }
}
function ccChange() {
    if ($("#ccsearchtype :selected").text() == 'IS' || $("#ccsearchtype :selected").text() == 'IS NOT')
    {
        // alert('');
        $("#cc").val('NULL');

    }

//    else{
    //  $("#cc").val('');
//        
//    }


}
function ldChange() {
    if ($("#editedbysearchtype :selected").text() == 'IS' || $("#editedbysearchtype :selected").text() == 'IS NOT')
    {

        $("#editedby").val('NULL');

    }

    else {

        //   $("#editedby").val('');
    }
}






function vnameChange() {
    if ($("#vnamesearchtype :selected").text() == 'IS' || $("#vnamesearchtype :selected").text() == 'IS NOT')
    {
        $("#vname").val('NULL');

    }

    else {

//        $("#vname").val('');
    }

}
function statusChange() {
    if ($("#statussearchtype :selected").text() == 'IS' || $("#statussearchtype :selected").text() == 'IS NOT')
    {
        $("#status").val('NULL');

    }

    else {

        // $("#status").val('');
    }

}
function poChange() {

    if ($("#posearchtype :selected").text() == 'IS' || $("#posearchtype :selected").text() == 'IS NOT')
    {
        $("#po").val('NULL');

    }
}
function acgChange() {

    if ($("#acgsearchtype :selected").text() == 'IS' || $("#acgsearchtype :selected").text() == 'IS NOT')
    {
        $("#acg").val('NULL');

    }
}


//function vendornoselectchange() {
//    if ($('#vendorsearchtype :selected').text() == 'IS' || $('#vendorsearchtype :selected').text() == 'IS NOT') {
//        // $("#vendorno").val('NULL');
//
//    }
//    else {
//
////        $("#vendorno").val('');
////        $("#fromvendorno").val('');
////        $("#tovendorno").val('');
//
//        if ($('#vendorsearchtype :selected').text() == 'BETWEEN') {
//
//            $("#corpbutton").val("Normal");
//            $("#vendorno").css("display", "none");
//            $("#fromvendorno").css("display", "inline");
//            $("#andvendorno").css("display", "inline");
//            $("#tovendorno").css("display", "inline");
//        }
//        else {
//            $("#corpbutton").val("Range");
//            $("#vendorno").css("display", "inline");
//            $("#fromvendorno").css("display", "none");
//            $("#andvendorno").css("display", "none");
//            $("#tovendorno").css("display", "none");
//        }
//    }
//}
//function cdselectChange() {
//    if ($('#cdatesearchtype :selected').text() == 'IS' || $('#cdatesearchtype :selected').text() == 'IS NOT') {
//        //   $("#cdate").val('NULL');
//
//    }
//
//    else {
//        $("#cdate").val('');
//        if ($('#cdatesearchtype :selected').text() == 'BETWEEN') {
//
//            $("#cdatebutton").val("Normal");
//            $("#cdate").css("display", "none");
//            $("#fromcdate").css("display", "inline");
//            $("#andcdate").css("display", "inline");
//            $("#tocdate").css("display", "inline");
//
//
//
//
//        }
//        else {
//            $("#cdatebutton").val("Range");
//            $("#cdate").css("display", "inline");
//            $("#fromcdate").css("display", "none");
//            $("#andcdate").css("display", "none");
//            $("#tocdate").css("display", "none");
//
//
//        }
//    }
//}
//function edselectChange() {
//    //alert('');
//
//    if ($('#editeddatesearchtype :selected').text() == 'IS' || $('#editeddatesearchtype :selected').text() == 'IS NOT')
//    {
//        $("#edate").val('NULL');
//        $("#edatebutton").val("Normal");
//        $("#edate").css("display", "inline");
//        $("#fromedate").css("display", "none");
//        $("#andedate").css("display", "none");
//        $("#toedate").css("display", "none");
//
//    }
//    else {
//
//        $("#edate").val('');
//
//
//        if ($('#editeddatesearchtype :selected').text() == 'BETWEEN') {
//
//            $("#edatebutton").val("Normal");
//            $("#edate").css("display", "none");
//            $("#fromedate").css("display", "inline");
//            $("#andedate").css("display", "inline");
//            $("#toedate").css("display", "inline");
//
//
//
//
//        }
//        else {
//
//            $("#edatebutton").val("Normal");
//            $("#edate").css("display", "inline");
//            $("#fromedate").css("display", "none");
//            $("#andedate").css("display", "none");
//            $("#toedate").css("display", "none");
//
//
//
//
//        }
//    }
//}
//
//function ccChange() {
//    if ($("#ccsearchtype :selected").text() == 'IS' || $("#ccsearchtype :selected").text() == 'IS NOT')
//    {
//        // alert('');
//        //  $("#cc").val('NULL');
//
//    }
//
////    else{
////        $("#cc").val('');
////        
////    }
//
//
//}
//
//function ldChange() {
//    if ($("#editedbysearchtype :selected").text() == 'IS' || $("#editedbysearchtype :selected").text() == 'IS NOT')
//    {
//
//        //    $("#editedby").val('NULL');
//
//    }
//
//    else {
//
//        $("#editedby").val('');
//    }
//}
//function vnameChange() {
//    if ($("#vnamesearchtype :selected").text() == 'IS' || $("#vnamesearchtype :selected").text() == 'IS NOT')
//    {
//        //     $("#vname").val('NULL');
//
//    }
//
//    else {
//
//        $("#vname").val('');
//    }
//
//}
//function statusChange() {
//    if ($("#statussearchtype :selected").text() == 'IS' || $("#statussearchtype :selected").text() == 'IS NOT')
//    {
//        //    $("#status").val('NULL');
//
//    }
//
//    else {
//
//        $("#status").val('');
//    }
//
//}


function loadPagination() {
    //  alert('pagination loaded');


    $("#searchtable").tablesorter({sortList: [[0, 0], [1, 0]]});
}

function exportToExcel() {
    $('#bootstrap-table').tableExport({type: 'pdf', escape: 'false'});

//    window.open('data:application/vnd.ms-excel,' + $('#searchResults').html());
//    e.preventDefault();
// var htmltable = document.getElementById('searchtable');
//        var html = htmltable.outerHTML;
//        window.open('data:application/vnd.ms-excel,' + encodeURIComponent(html));
//        event.preventDefault();

}




