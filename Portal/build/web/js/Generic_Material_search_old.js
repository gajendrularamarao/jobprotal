function setSessionAtribute(s_attr, s_val, type)
{

    // alert('Sending::ss'+s_attr+type+":"+s_val);
    $.ajax({
        type: "POST",
        url: 'personalizesession',
        data: {
            'sessionattribute': s_attr,
            'sessionvalue': s_val,
            'sessiontype': type

        },
        traditional: true, cache: false,
        success: function (response) {
            //  alert('Success: ' + response);
            console.log('Response::' + JSON.stringify(response));
        },
        error: function (e) {
            //  alert('Error: ' + JSON.stringify(e));
        }

    });
}
function toggleDisplay(id, cssrowid, cnam) {
    //search criteria

    ///  alert('Enteerd toggle display!!')
    //$("#" + cssrowid).toggle();

//    alert(cnam.toString().toUpperCase().indexOf("DATE"));
    var jsObject = new Object();
    jsObject.type = ''

    if ($('#' + cssrowid).attr("data-type") == 'date') {
        // alert($("#" + cssrowid).find('input[type=text]').attr('id'));
        var id = $("#" + cssrowid).find('input[type=text]').attr('id')
        attachCalendar(id);
    }
//alert("$('#' + id).prop('checked')::"+id+":::"+$('#' + id).prop('checked'));
    if ($('#' + id).prop('checked'))
    {
        setSessionAtribute(cnam, 'yes', 'search');
    }
    else {
        setSessionAtribute(cnam, 'no', 'search');
    }
    $('#' + cssrowid).toggle();

}
function toggleDisplayCols(id, cssrowid, cnam) {
    //display criteria
    // $("#" + cssrowid).toggle();
    var jsobject = new Object();
    jsobject.type = 'display';
    jsobject.datafield = cnam;



    if ($('#' + id).prop('checked'))
    {
        setSessionAtribute(cnam, 'yes', 'display');
        //personlizeArray.push(jsobject);
    }
    else {
        setSessionAtribute(cnam, 'no', 'display');

    }
}
function toggleFreezeCols(id, cssrowid, cnam) {
    //freeze criteria
//    $("#" + cssrowid).toggle();
    if ($('#' + id).prop('checked'))
    {
        setSessionAtribute(cnam, 'yes', 'freeze');
    }
    else {
        setSessionAtribute(cnam, 'no', 'freeze');
    }

}


function clearParamSearch() {

    $("input[type=text]").val('');
    $("input[type=text]").removeAttr('disabled');
    $('select').each(function () {
        $(this).prop('selectedIndex', 0);
    });
    $('#search_content_detail tr').each(function () {
        if ($(this).children('td').eq(2).find("select").val() != undefined)
        {

            $(this).find("input").hide();
            $(this).find("img").hide();
            $(this).children('td').eq(2).find("select").val('No');
            console.log("Id:" + $(this).attr('id'));
            console.log("poperty:" + $(this).find('select').val());
            //  console.log("Button val:"+$(this).find("input[type='button']").attr("id"));
        }

        else {
            console.log("Button Id:" + $(this).find("input[type='button']").attr("id"));
            console.log("Button val:" + $(this).find("input[type='button']").val());
            if ($(this).find("input[type='button']").val() == 'Normal')
            {
                $(this).find("input[type='button']").click();
            }
        }

        $("#attach_ddw").prop('selectedIndex', 0);
    });


}
function onOpertorChange(searchtype) {
    console.log('searchtype:' + searchtype + ". value:" + $("#" + searchtype + " :selected").text().toUpperCase());
    var id = $("#" + searchtype).parent().parent().attr("id");
    if ($("#" + searchtype + " :selected").text().toUpperCase() == 'BETWEEN')
    {
        $('#' + id).children('td').eq(2).find("input:text").removeAttr('disabled');
        $('#' + id).children('td').eq(2).find("input:button").click();
    }

    else if ($("#" + searchtype + " :selected").text().toUpperCase() == 'IS' || $("#" + searchtype + " :selected").text().toUpperCase() == 'IS NOT')
    {
        $('#' + id).children('td').eq(2).find("input:text").attr('disabled', 'disabled');
        $('#' + id).children('td').eq(2).find("input:text").val('NULL');
    }

    else {


        $('#' + id).children('td').eq(2).find("input:text").removeAttr('disabled');
    }



}
function populateDropDown(dddwid, label, cssid)
{
    $.ajax({
        type: "POST",
        url: 'searchddw',
        data: {
            dddwid: dddwid,
            cssid: cssid
        },
        traditional: true,
        cache: false,
        success: function (response) {
            $("#paramDropdwn").remove();
            $("#norecordsDialog").empty();
            $("#norecordsDialog").append("<div id='paramDropdwn'></div><center><input class='button_Submit' type='button' value='Submit' id='submit_grid'><input class='button_Reset' type='button' value='Reset' id='reset_grid'></center>");
//alert(JSON.stringify(response.localdata));
            var source = "";
            var columnsArray = "";


            if (response.col2 == "" || response.col2 == null) {
                source =
                        {
                            localdata: response.localdata,
                            datafields:
                                    [
                                        {name: response.col1, type: 'string'}


                                    ],
                            datatype: "JSON"
                        };
                columnsArray = [{text: response.col1, align: 'center', datafield: response.col1, width: '98%', cellsalign: 'left'}];
            }
            else if (response.col1 == "" || response.col1 == null) {
                source =
                        {
                            localdata: response.localdata,
                            datafields:
                                    [
                                        {name: response.col2, type: 'string'}


                                    ],
                            datatype: "JSON"
                        };
                columnsArray = [{text: response.col2, align: 'center', datafield: response.col2, width: '98%', cellsalign: 'left'}];

            }

            else {
                source =
                        {
                            localdata: response.localdata,
                            datafields:
                                    [
                                        {name: response.col1, type: 'string'},
                                        {name: response.col2, type: 'string'}


                                    ],
                            datatype: "JSON"
                        };
                columnsArray = [{text: response.col1, align: 'center', datafield: response.col1, width: '50%', cellsalign: 'left'}, {text: response.col2, align: 'center', datafield: response.col2, width: '50%', cellsalign: 'left'}];


            }








            var adapter = new $.jqx.dataAdapter(source);
            $("#paramDropdwn").jqxGrid(
                    {
                        width: '100%',
                        theme: 'energyblue',
                        source: adapter,
                        filterable: true,
                        enabletooltips: true,
                        showfilterrow: true,
                        selectionmode: 'checkbox',
                        height: '360',
                        //    showtoolbar:true,
                        //   autoheight: true,
                        //                                        autorowheight: true,
                        columnsresize: true,
                        sortable: true,
                        columns: columnsArray
                    });
            $("#norecordsDialog").dialog("open");

            $("#reset_grid").click(function () {
                $("#paramDropdwn").jqxGrid('clearfilters');
                $("#paramDropdwn").jqxGrid('clearselection');


            });
            $("#submit_grid").click(function () {
                //1.read selected rows and 
                //2.write to css id
                //3.close popup
                var selectedrowindexes = $('#paramDropdwn').jqxGrid('selectedrowindexes');
                var selectstring = "";
                for (var i = 0; i < selectedrowindexes.length; i++)
                {
                    if (i == 0) {
                        selectstring = $('#paramDropdwn').jqxGrid('getcellvalue', selectedrowindexes[i], response.col1);

                    }
                    else {
                        selectstring = selectstring + "," + $('#paramDropdwn').jqxGrid('getcellvalue', selectedrowindexes[i], response.col1);
                    }

                }
                $("#" + cssid).val(selectstring);
                console.log("parentid::" + $("#" + cssid).parent().parent().attr('id'));
                var parentid = $("#" + cssid).parent().parent().attr('id');

                $("#" + parentid).find('select').val('IN');



                $("#norecordsDialog").dialog("close");



            });

        },
        error: function (response) {
        }
    });





}

function parametricSearch() {
    var js_searchObj = "";
    var js_searchArray = [];
//slideMaterialSettings();
//alert('$("#settings_panel").css("display")""'+$("#settings_panel").css('display'));


    if ($("#settings_panel").css('display') == 'block')
    {
        slideMaterialSettings();
    }

    $('#search_content_detail tr').each(function () {
        if ($(this).children('td').eq(2).find("select").val() != undefined) {
            console.log("$(this).children('td').eq(2).find('select').val():" + $(this).children('td').eq(2).find("select").val());
            console.log("tb val1:" + $(this).children('td').eq(2).find("input").val());
            if ($(this).children('td').eq(2).find("select").val() == 'No') {
                js_searchObj = new Object();
                js_searchObj.CNAME = $(this).attr('data-name');
                js_searchObj.SEARCH_TYPE = 'LIKE';
                js_searchObj.VALUE = 'N';
                js_searchObj.DATA_TYPE = $(this).attr("data-type");

                js_searchArray.push(js_searchObj);
            }
            else if ($(this).children('td').eq(2).find("select").val() == 'Yes' && $(this).children('td').eq(2).find("input").val() == "") {
                console.log("tb val2:" + $(this).children('td').eq(2).find("input").val());
                js_searchObj = new Object();
                js_searchObj.CNAME = $(this).attr('data-name');
                js_searchObj.SEARCH_TYPE = 'LIKE';
                js_searchObj.VALUE = 'Y';
                js_searchObj.DATA_TYPE = $(this).attr("data-type");
                js_searchArray.push(js_searchObj);
            }
            else if ($(this).children('td').eq(2).find("select").val() == 'Yes' && $(this).children('td').eq(2).find("input").val() != "") {
                console.log("tb val3:" + $(this).children('td').eq(2).find("input").val());
                js_searchObj = new Object();
                js_searchObj.CNAME = $(this).attr('data-name');
                js_searchObj.SEARCH_TYPE = 'ENCLOSURE';
                js_searchObj.VALUE = $(this).children('td').eq(2).find("input").val();
                js_searchObj.DATA_TYPE = $(this).attr("data-type");
                js_searchArray.push(js_searchObj);
            }



        }
        else if ($(this).find("input[type = text]").val() != "") {
            js_searchObj = new Object();
            js_searchObj.CNAME = $(this).attr('data-name');
            js_searchObj.SEARCH_TYPE = $(this).find("select").val();
            js_searchObj.VALUE = $(this).find("input[type = text]").val();
            js_searchObj.DATA_TYPE = $(this).attr("data-type");
            //   js_searchObj.SEARCH_TYPE_new = $(this).find("select").find("option[value='" + $(this).find("select").val() + "']").text();
            js_searchArray.push(js_searchObj);
        }

        else if ($(this).find("input[type='button']").val() == 'Normal')
        {
            console.log($(this).children('td').eq(2).find("input:first").val());
            console.log($(this).children('td').eq(2).find("input:last").val());
            js_searchObj = new Object();
            js_searchObj.CNAME = $(this).attr('data-name');
            js_searchObj.SEARCH_TYPE = $(this).find("select").val();
            js_searchObj.VALUE = $(this).find("input[type = text]").val();
//$("#content input:text, #content textarea").eq(0).focus()

            js_searchObj.DATA_TYPE = $(this).attr("data-type");
            js_searchObj.MIN_VALUE = $(this).children('td').eq(2).find("input:text").eq(1).val();
            js_searchObj.MAX_VALUE = $(this).children('td').eq(2).find("input[type = text]:last").val();
            //   js_searchObj.SEARCH_TYPE_new = $(this).find("select").find("option[value='" + $(this).find("select").val() + "']").text();
            js_searchArray.push(js_searchObj);
        }

    });


    $.ajax({
        type: "POST",
        url: 'gridcount',
        data: {
            searchtext: 'textdata',
            searchtype: "paramsearch",
            paramdata: JSON.stringify(js_searchArray)
        },
        //                                    contentType: 'text/html',
        traditional: true,
        cache: false,
        //async: false,
        success: function (response) {
            //   console.log('response:' + response);
            var search_count = response[0];
            console.log("param search search_count:" + search_count);
            var template_count = response[1];
            console.log(JSON.stringify(response));
            fn_searchResults(search_count, template_count, 'paramsearch', 'textdata', js_searchArray);
            $("#text_count").removeClass('text_count').addClass('text_count_change');
            $("#result_count").removeClass('text_count_change').addClass('text_count');
            $("#textsearchpanel").attr('src', '/VisionDev/images/text_search_icon.png');

        },
        error: function (response) {
        }
    });







    // alert(JSON.stringify(js_searchArray));

}


function slideMaterialSettings() {
//  $("#settings_panel").toggle(100)
//alert('clicked slide settings');
    $('#settings_panel').toggle('slide', {direction: 'right'}, 200, function () {
        console.log('$("#accordion").css("width)::' + $("#accordion").css('width'));
        var toggleWidth = (100 * parseFloat($('#accordion').css('width')) / parseFloat($('#accordion').parent().css('width'))) + '%';
        console.log('toggleWidth::' + toggleWidth);
        //toggleWidth=toggleWidth=='100%' ? "75%" : "100%";

        //  var toggleWidth = $("#accordion").css('width') == '100%' ? "75%" : "100%";
        $('#accordion').css('width', toggleWidth == '100%' ? "74%" : "100%");
    });
    // $("#accordion").css('width', '75%');


}
function attachCalendar(rowid) {
//    console.log("Entered attach with:" + rowid);
//    console.log("row textbox id:" + $("#" + rowid).find("input").attr("id"));
//    var dateid = $("#" + rowid).find("input").attr("id");
    $("#" + rowid).datepicker({dateFormat: 'dd-mm-yy', changeMonth: true, changeYear: true});
}
function  changeToggle(val1, val2, val3, val4, val5, searchtype) {

//val1: range button id
//val2: textbox id
//val3: min textbox id
//val4: and div id
//val5: max textbox id
//searchtype ddw id: dropdownid


//val1 is clicked element id
//val2 is table row id
    console.log('searchtype:::' + searchtype)

    if ($("#" + val1).val() === "Range") {
        $("#" + val1).val("Normal");
        $("#" + val2).css("display", "none");
        $("#" + val2).val("");
        $("#" + val3).css("display", "inline");
        $("#" + val4).css("display", "inline");
        $("#" + val5).css("display", "inline");
        //$('#' + searchtype).find('select').prop('selectedIndex', 11);
        $('#' + searchtype).find('select').val('BETWEEN');


        if ($('#' + searchtype).attr("data-type") == 'date') {
            attachCalendar(val3);
            attachCalendar(val5);
            $("#" + val3).focus();
        }



//index in maintained in j_operators table in DB
//        $('#' + searchtype ).text('BETWEEN');
    }
    else {
        $("#" + val1).val("Range");
        $("#" + val2).css("display", "inline");
        $("#" + val3).css("display", "none");
        $("#" + val4).css("display", "none");
        $("#" + val5).css("display", "none");
        $("#" + val3).val("");
        $("#" + val4).val("");
        $("#" + val5).val("");
//        $('#' + searchtype + ' :selected').text('=');
        $('#' + searchtype).find('select').val('EQUALS');
        if ($('#' + searchtype).attr("data-type") == 'date') {

            dettachCalendar(val3);
            dettachCalendar(val5);
//            detachCalendar(searchtype);
//            detachCalendar(searchtype);


        }
//      $('#' + searchtype).val('Equals');
    }

}
function populateParamSearchItems(searchdetail, searchops) {

    // alert('check');
    var table_data = "<table id='search_content_detail' style='width:100%'>";
    var op_ddw = "";
    for (var i = 0; i < searchdetail.length; i++)
    {

        console.log(JSON.stringify(searchdetail[i]));
        op_ddw = "<select id='select" + i + "' class='searchClass' onchange=onOpertorChange(id)>";
        console.log("ddw:" + searchdetail[i].J_DDW_ID);
        for (var j = 0; j < searchops.length; j++) {
            if (searchops[j].J_CSS_REF_ROW_ID == searchdetail[i].J_CSS_ROW_ID)
            {
                op_ddw = op_ddw + "<option value='" + searchops[j].J_OP_TEXT + "'>" + searchops[j].J_OP_SYMBOL + "</option>";
            }

        }

        op_ddw = op_ddw + "</select>";
        if (searchdetail[i].J_DEFAULT_IND == 'Y')
        {

            if (searchdetail[i].J_DDW_ID != null)
            {
                var label_ddw = searchdetail[i].J_LABEL;
                label_ddw = label_ddw.toString().replace(" ", "_");
                if (searchdetail[i].J_INPUT_TYPE == 'DATE')
                {
                    table_data = table_data
                            + "<tr data-type='date' data-name='" + searchdetail[i].J_CNAM + "'  data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                }
                else {


                    table_data = table_data
                            + "<tr data-type='text' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                }

                if (searchdetail[i].J_INPUT_TYPE == 'DDW_Y_N') {

                    console.log('Yes No Chkbx');
                    table_data = table_data
                            + "<td>" + searchdetail[i].J_LABEL + "</td>"
                            + "<td>" + op_ddw + "</td>"
                            + "<td style='width:66%'>"
                            + "<select id='attach_ddw'><option values='NA'>  </option> <option values='N'>No</option><option values='Y'>Yes</option></select>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' disabled class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='margin-left:8px;height:20px;width:68%;display:none' type='text' id='" + searchdetail[i].J_CSS_ID + "'>"
                            + "<img  src='images/search_icon_color_2.png' "
                            + "onclick=populateDropDown('" + searchdetail[i].J_DDW_ID + "','" + label_ddw + "','"
                            + searchdetail[i].J_CSS_ID + "') style='display:none' class='dropdwn_style'></td>"
                            + "<td></td>"
                            + "</tr>";
                    $("#" + searchdetail[i].J_CSS_ROW_ID).find("img").prop('onclick', false);
                }
                else {


                    table_data = table_data
                            + "<td>" + searchdetail[i].J_LABEL + "</td>"
                            + "<td>" + op_ddw + "</td>"
                            + "<td style='width:66%'>"
                            + "<input class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' placeholder='" + searchdetail[i].J_PLACE_HOLDER + "'  style='height:20px;width:75%' type='text' id='" + searchdetail[i].J_CSS_ID + "'>"
                            + "<img src='images/search_icon_color_2.png' onclick=populateDropDown('" + searchdetail[i].J_DDW_ID + "','" + label_ddw + "','" + searchdetail[i].J_CSS_ID + "') class='dropdwn_style'></td>"
                            + "<td></td>"
                            + "</tr>";
                }

            }
            else {

                if (searchdetail[i].J_RANGE_FLAG == 'Y')
                {
                    //val1: range button id
                    //val2: textbox id
                    //val3: min textbox id
                    //val4: and div id
                    //val5: max textbox id
                    //searchtype ddw id: dropdownid

                    if (searchdetail[i].J_INPUT_TYPE == 'DATE')
                    {
                        table_data = table_data
                                + "<tr data-type='date' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }
                    else {
                        table_data = table_data
                                + "<tr data-type='text' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }


                    table_data = table_data
                            + "<td>" + searchdetail[i].J_LABEL + "</td>"
                            + "<td>" + op_ddw + "</td>"
                            + "<td style='width:66%'>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:75%' type='text' id='" + searchdetail[i].J_CSS_ID + "'>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:35%;display:none' type='text' id='min" + searchdetail[i].J_CSS_ID + "'>"
                            + "<div id='and" + searchdetail[i].J_CSS_ID + "' style='display:none'> AND </div>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:35%;display:none' type='text' id='max" + searchdetail[i].J_CSS_ID + "'>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='toggle_btn' type='button' id='range" + searchdetail[i].J_CSS_ID + "' value=Range "
                            + "onclick=changeToggle('range" + searchdetail[i].J_CSS_ID + "','" + searchdetail[i].J_CSS_ID + "','min" + searchdetail[i].J_CSS_ID + "','and" + searchdetail[i].J_CSS_ID + "','max" + searchdetail[i].J_CSS_ID + "','" + searchdetail[i].J_CSS_ROW_ID + "')></td>"
                            + "<td></td>"
                            + "</tr>";
                }
                else {
                    if (searchdetail[i].J_INPUT_TYPE == 'DATE')
                    {
                        table_data = table_data
                                + "<tr data-type='date' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }
                    else {
                        table_data = table_data
                                + "<tr data-type='text' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }
                    table_data = table_data
                            + " <td>" + searchdetail[i].J_LABEL + "</td>"
                            + " <td>" + op_ddw + "</td>"
                            + " <td style='width:66%'>"
                            + " <input  class='jqx-widget-content jqx-input jqx-widget jqx-rc-all'"
                            + " placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' style='height:20px;width:75%'"
                            + " type='text' id='" + searchdetail[i].J_CSS_ID + "'>"
                            + " </td>"
                            + " <td></td>"
                            + " </tr>";
                }





            }


        }
//        else {
//            table_data = table_data
//                    + "<tr data-display='false' id='" + searchdetail[i].J_CSS_ROW_ID + "' style='display:none'>"
//                    + "<td>" + searchdetail[i].J_LABEL + "</td>"
//                    + "<td>" + op_ddw + "</td>"
//                    + "<td><input class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:75%' type='text' id='" + searchdetail[i].J_CSS_ID + "'></td>"
//                    + "<td></td>"
//                    + "</tr>";
//        }

        else {
            if (searchdetail[i].J_DDW_ID != null)
            {
                var label_ddw = searchdetail[i].J_LABEL;
                label_ddw = label_ddw.toString().replace(" ", "_");
                if (searchdetail[i].J_INPUT_TYPE == 'DATE')
                {
                    table_data = table_data
                            + "<tr data-type='date' style='display:none' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                }
                else {
                    table_data = table_data
                            + "<tr data-type='text' style='display:none' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                }

                table_data = table_data
                        + "<td>" + searchdetail[i].J_LABEL + "</td>"
                        + "<td>" + op_ddw + "</td>"
                        + "<td style='width:66%'>"
                        + "<input class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' style='height:20px;width:75%' type='text' id='" + searchdetail[i].J_CSS_ID + "'>"
                        + "<img src='pagepics/images/icon.PNG' onclick=populateDropDown('" + searchdetail[i].J_DDW_ID + "','" + label_ddw + "','" + searchdetail[i].J_CSS_ID + "') class='dropdwn_stye'></td>"
                        + "<td></td>"
                        + "</tr>";
            }
            else {

                if (searchdetail[i].J_RANGE_FLAG == 'Y')
                {
                    //val1: range button id
                    //val2: textbox id
                    //val3: min textbox id
                    //val4: and div id
                    //val5: max textbox id
                    //searchtype ddw id: dropdownid

                    if (searchdetail[i].J_INPUT_TYPE == 'DATE')
                    {
                        table_data = table_data
                                + "<tr data-type='date' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' style='display:none' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }
                    else {
                        table_data = table_data
                                + "<tr data-type='text' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' style='display:none' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }

                    table_data = table_data

                            + "<td>" + searchdetail[i].J_LABEL + "</td>"
                            + "<td>" + op_ddw + "</td>"
                            + "<td style='width:66%'>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:75%' type='text' id='" + searchdetail[i].J_CSS_ID + "'>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:35%;display:none' type='text' id='min" + searchdetail[i].J_CSS_ID + "'>"
                            + "<div id='and" + searchdetail[i].J_CSS_ID + "' style='display:none'> AND </div>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:35%;display:none' type='text' id='max" + searchdetail[i].J_CSS_ID + "'>"
                            + "<input placeholder='" + searchdetail[i].J_PLACE_HOLDER + "' class='toggle_btn' type='button' id='range" + searchdetail[i].J_CSS_ID + "' value=Range "
                            + "onclick=changeToggle('range" + searchdetail[i].J_CSS_ID + "','" + searchdetail[i].J_CSS_ID + "','min" + searchdetail[i].J_CSS_ID + "','and" + searchdetail[i].J_CSS_ID + "','max" + searchdetail[i].J_CSS_ID + "','" + searchdetail[i].J_CSS_ROW_ID + "')></td>"
                            + "<td></td>"
                            + "</tr>";
                }
                else {

                    if (searchdetail[i].J_INPUT_TYPE == 'DATE')
                    {
                        table_data = table_data
                                + "<tr data-type='date' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' style='display:none' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }
                    else {
                        table_data = table_data
                                + "<tr data-type='text' data-name='" + searchdetail[i].J_CNAM + "' data-display='true' style='display:none' id='" + searchdetail[i].J_CSS_ROW_ID + "'>";
                    }


                    table_data = table_data
                            + "<td>" + searchdetail[i].J_LABEL + "</td>"
                            + "<td>" + op_ddw + "</td>"
                            + "<td style='width:66%'>"
                            + "<input  placeholder='" + searchdetail[i].J_PLACE_HOLDER + "'   class='jqx-widget-content jqx-input jqx-widget jqx-rc-all' style='height:20px;width:75%' type='text' id='" + searchdetail[i].J_CSS_ID + "'>"
                            + "</td>"
                            + "<td></td>"
                            + "</tr>";
                }





            }




        }



    }
    //  alert(table_data);
    table_data = table_data + "</table>";
    var paramSearch_Content = " <center>"
            + '<input type="button" id="search_data" value="Search"'
            + ' class="btn_style"'
            + ' onclick="parametricSearch();">'
            + ' <input type="button" type="reset" id="reset_data"'
            + ' class="btn_style1"'
            + ' onclick="clearParamSearch();"'
            + ' value="Reset"/>'
            + '</center>';
    $("#search_content").after(paramSearch_Content);
    table_data = '<div style="display: block;font-size: 12px;width: 80px;">'
            + ' <input checked type="radio" value="AND" name="searchtype" /><b>All</b>'
            + ' <input type="radio" value="OR" name="searchtype"/><b>Any</b>'
            + '</div>' + table_data;
    $('#search_content').append(table_data);
    $('#search_content').css('opacity', '0.9');
}

function populatePersonalization(jsSearchArray, jsDisplayArray, jsFreezeArray) {
//      jsObject.put("J_CNAM", resultSet.getString("J_CNAM"));
//                jsObject.put("J_LABEL", resultSet.getString("J_LABEL"));
//                jsObject.put("J_DISPLAY_IND", resultSet.getString("J_SEQ"));
//                jsObject.put("J_SEARCH_IND", resultSet.getString("J_DISPLAY_IND"));
//                jsObject.put("J_FREEZE_IND", resultSet.getString("J_FREEZE_IND"));
//                jsObject.put("J_CSS_ID", resultSet.getString("J_CSS_ID"));
//                jsObject.put("J_CSS_ROW_ID", resultSet.getString("J_CSS_ROW_ID"));


//}
    var j_searchcriteria_clicked = [];
    var j_freezecriteria_clicked = [];
    var j_displaycriteria_clicked = [];
    var table_personalize = '   <table id="personalize_tbl" style="width:100%">'
            + '<tbody>';
    var tb_search_criteria = "<tr><td class='criteria_headers' colspan=4>Search Criteria</td></tr><tr>";
    var tb_display_criteria = "<tr><td class='criteria_headers' colspan=4>Display Criteria</td></tr><tr>";
    var tb_freeze_criteria = "<tr style='display:none' id='confirm_display'><td colspan=4 style='text-align:center'><input type='button' class='applyChanges' value='Apply Changes' onclick='applyDisplayNFreezeCriteria();'></td></tr><tr>"
            + "<tr><tr><td class='criteria_headers' colspan=4>Freeze Criteria</td></tr>";
    var jsearch_len = jsSearchArray.length;
    // alert("Length:" + jsearch_len)

// tb_search_criteria = tb_search_criteria
//                    + "<td ><input type='checkbox' "
//                    //  +"id='status_search'"
//                    + " onclick=toggleDisplay('status_tr')"
//                    + " style=display: block;"
//                    + " width: 16px;'"
//                    + " height: 16px></td>"+"<td>" + jsSearchArray[0].J_LABEL + "</td>";


    jsSearchArray[jsearch_len] = jsSearchArray[0];
    jsearch_len = jsSearchArray.length;
    // alert("Length:" + jsearch_len)
    var slide = false;
    for (var i = 1; i < jsearch_len; i++)
    {


        if (i % 2 == 0)
        {
            if (jsSearchArray[i].J_SEARCH_SESS_ID == 'Y') {
                j_searchcriteria_clicked.push("search" + i + jsSearchArray[i].J_CSS_ROW_ID);
                slide = true;
            }

            tb_search_criteria = tb_search_criteria
                    + "<td ><input type='checkbox' id='search" + i + jsSearchArray[i].J_CSS_ROW_ID + "'"
                    //  +"id='status_search'"
                    + " onclick=toggleDisplay('search" + i + jsSearchArray[i].J_CSS_ROW_ID + "','" + jsSearchArray[i].J_CSS_ROW_ID.toString().trim() + "','" + jsSearchArray[i].J_CNAM.toString().trim() + "')"
                    + " class='personalize_checkbox'></td>"
                    + " <td class='labeltd'>" + jsSearchArray[i].J_LABEL.toString().trim() + "</td></tr>";
        }

        else {
            if (jsSearchArray[i].J_SEARCH_SESS_ID == 'Y') {
                slide = true;
                j_searchcriteria_clicked.push("search" + i + jsSearchArray[i].J_CSS_ROW_ID);
            }
            tb_search_criteria = tb_search_criteria
                    + "<td ><input type='checkbox' id='search" + i + jsSearchArray[i].J_CSS_ROW_ID + "'"
                    //  +"id='status_search'"
                    + " onclick=toggleDisplay('search" + i + jsSearchArray[i].J_CSS_ROW_ID + "','" + jsSearchArray[i].J_CSS_ROW_ID.toString().trim() + "','" + jsSearchArray[i].J_CNAM.toString().trim() + "')"
                    + " class='personalize_checkbox'></td>"
                    + "<td class='labeltd'>" + jsSearchArray[i].J_LABEL.toString().trim() + "</td>";
        }

//alert(tb_search_criteria);

    }


    if (tb_search_criteria.substr(tb_search_criteria.length - 5) == '</tr>') {
        table_personalize = table_personalize + tb_search_criteria;
    }
    else {
        table_personalize = table_personalize + tb_search_criteria + "</tr>";
    }

//
//
//    table_personalize = table_personalize + tb_search_criteria;
//

    var jsDisplay_len = jsDisplayArray.length;

    //  alert(JSON.stringify(jsDisplayArray));

    jsDisplayArray[jsDisplay_len] = jsDisplayArray[0];
    jsDisplay_len = jsDisplayArray.length;
    for (var i = 1; i < jsDisplay_len; i++)
    {
        if (i % 2 == 0)
        {
            if (jsDisplayArray[i].J_DISPLAY_SESS_ID == 'Y') {
                slide = true;
                j_displaycriteria_clicked.push("display" + i + jsDisplayArray[i].J_CNAM.toString().trim());
            }

            tb_display_criteria = tb_display_criteria
                    + "<td ><input type='checkbox' id='display" + i + jsDisplayArray[i].J_CNAM.toString().trim() + "'"
                    + "data-col-name='" + jsDisplayArray[i].J_CNAM.toString().trim() + "'"
                    // +"id='status_search'"
                    + " onclick=toggleDisplayCols('display" + i + jsSearchArray[i].J_CSS_ROW_ID + "','" + jsDisplayArray[i].J_CNAM.toString().trim() + "')"
                    + " class='personalize_checkbox'></td>"
                    + "<td class='labeltd'>" + jsDisplayArray[i].J_LABEL.toString().trim() + "</td></tr>";
            console.log("label:" + jsDisplayArray[i].J_LABEL + ", colname:" + jsDisplayArray[i].J_CNAM.toString().trim());
        }

        else {


            if (jsDisplayArray[i].J_DISPLAY_SESS_ID == 'Y') {
                slide = true;
                j_displaycriteria_clicked.push("display" + i + jsDisplayArray[i].J_CNAM.toString().trim());
            }
            tb_display_criteria = tb_display_criteria
                    + "<td ><input type='checkbox' id='display" + i + jsDisplayArray[i].J_CNAM.toString().trim() + "'"
                    + "data-col-name='" + jsDisplayArray[i].J_CNAM.toString().trim() + "'"
                    //    +"id='status_search'"
                    //  + " onclick=toggleDisplay('" + jsSearchArray[i].J_CSS_ROW_ID + "')"
                    + " onclick=toggleDisplayCols('display" + i + jsSearchArray[i].J_CSS_ROW_ID + "','" + jsDisplayArray[i].J_CNAM.toString().trim() + "')"
                    + " class='personalize_checkbox'></td>"
                    + " <td class='labeltd'>" + jsDisplayArray[i].J_LABEL.toString().trim() + "</td>";
            console.log("label:" + jsDisplayArray[i].J_LABEL + ", colname:" + jsDisplayArray[i].J_CNAM.toString().trim());

        }
    }

    if (tb_display_criteria.substr(tb_display_criteria.length - 5) == '</tr>') {
        table_personalize = table_personalize + tb_display_criteria;
    }
    else {
        table_personalize = table_personalize + tb_display_criteria + "</tr>";
    }
//
//
//    table_personalize = table_personalize +"<tr><td cospan=2 style=text-align:center>Display Criteria</td></tr>" +tb_display_criteria;
//
    var jsFreezelen = jsFreezeArray.length;
    jsFreezeArray[jsFreezelen] = jsFreezeArray[0];
    jsFreezelen = jsFreezeArray.length;
    for (var i = 1; i < jsFreezelen; i++)
    {

        if (i % 2 == 0)
        {
            if (jsFreezeArray[i].J_FREEZE_SESS_ID == 'Y') {
                slide = true;

                j_freezecriteria_clicked.push("freeze" + i + jsFreezeArray[i].J_CNAM);
            }

            tb_freeze_criteria = tb_freeze_criteria
                    + "<td ><input type='checkbox' id='freeze" + i + jsFreezeArray[i].J_CNAM + "'"
                    // +"id='status_search'"
                    + " onclick=toggleFreezeCols('freeze" + i + jsSearchArray[i].J_CSS_ROW_ID + "','" + jsFreezeArray[i].J_CNAM.toString().trim() + "')"
                    + " class='personalize_checkbox'> </td>"
                    + "<td class='labeltd'>" + jsFreezeArray[i].J_LABEL.toString().trim() + "</td></tr>";
        }

        else {
            if (jsFreezeArray[i].J_FREEZE_SESS_ID == 'Y') {
                slide = true;
                j_freezecriteria_clicked.push("freeze" + i + jsFreezeArray[i].J_CNAM);
            }
            tb_freeze_criteria = tb_freeze_criteria
                    + "<td ><input type='checkbox' id='freeze" + i + jsFreezeArray[i].J_CNAM + "'"
                    //    +"id='status_search'"
                    + " onclick=toggleFreezeCols('freeze" + i + jsFreezeArray[i].J_CNAM + "','" + jsFreezeArray[i].J_CNAM.toString().trim() + "')"
                    + " class='personalize_checkbox'></td>"
                    + "<td class='labeltd'>" + jsFreezeArray[i].J_LABEL.toString().trim() + "</td>";
        }




    }
    if (tb_freeze_criteria.substr(tb_freeze_criteria.length - 5) == '</tr>') {
        table_personalize = table_personalize + tb_freeze_criteria;
    }
    else {
        table_personalize = table_personalize + tb_freeze_criteria + "</tr>";
    }
    table_personalize = table_personalize
            + "<tr id='confirm_freeze' style='display:none'><td colspan=4 style='text-align:center'><input type='button' class='applyChanges' value='Apply Changes' onclick='applyDisplayNFreezeCriteria();'></td></tr><tr>"
            + "</tbody</table>";
    //  alert(table_personalize);
    $("#settings_panel").append(table_personalize);

    console.log('j_displaycriteria_clicked.length:' + j_displaycriteria_clicked.length);
    console.log('j_searchcriteria_clicked.length:' + j_searchcriteria_clicked.length);
    console.log('j_freezecriteria_clicked.length:' + j_freezecriteria_clicked.length);
    for (var i = 0; i < j_displaycriteria_clicked.length; i++)
    {
        console.log('j_displaycriteria_clicked[i]:' + j_displaycriteria_clicked[i]);

        $("#" + j_displaycriteria_clicked[i]).click();
    }
    for (var i = 0; i < j_searchcriteria_clicked.length; i++)
    {
        console.log('j_searchcriteria_clicked[i]:' + j_searchcriteria_clicked[i]);

        $("#" + j_searchcriteria_clicked[i]).click();

    }
    for (var i = 0; i < j_freezecriteria_clicked.length; i++)
    {
        console.log('j_freezecriteria_clicked:' + j_freezecriteria_clicked[i]);
        $("#" + j_freezecriteria_clicked[i]).click();

        /// $("#" + j_freezecriteria_clicked[i]).click();

    }

    if (slide)
    {
        slideMaterialSettings();

    }

}


function populateParametricSearch() {
    //1.Fetch pramlist view from server
    $.ajax({
        type: "POST",
        url: 'paramsearchinfo',
        data: {
            searchcode: 'MM_PARAM_SEARCH'

        },
        contentType: 'text/html',
        cache: false,
        success: function (response) {
            var jsResponse = response;
            //    console.log(JSON.stringify(jsResponse.searchdetail));
            // alert(JSON.stringify(jsResponse.operators_list));
            populateParamSearchItems(jsResponse.searchdetail, jsResponse.operators_list);

            populatePersonalization(
                    jsResponse.personalize_search,
                    jsResponse.personalize_display,
                    jsResponse.personalize_freeze);
            //alert(JSON.stringify(response));







        },
        error: function (e) {

        }

    });


}
