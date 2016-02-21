

        
function Status_Summary1() {
    var requestdata = $("#sampletxt").val();
    $.ajax({
        type: "get",
        url: 'MainMdrmServlet',
        data: {
            reqtype: 'Status_Summary',
            reqdata: requestdata
        },
        contentType: 'text/html',
        cache: false,
        success: function (response) {
            alert("Response:" + response);
            populateStatus_SummarypieChart(JSON.parse(response));

        },
        error: function (e) {
            alert('Error: ' + e);
        }

    });
}
function populateStatus_SummarypieChart(requestdata) {
//        , loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); }    
    var dataAdapter = new $.jqx.dataAdapter(requestdata, {async: false, autoBind: true, loadError: function (xhr, status, error) {
            alert('Error loading "' + requestdata.url + '" : ' + error);
        }});
    // prepare jqxChart settings
    var settings = {
        title: "Status Summery",
        description: "",
        enableAnimations: true,
        showLegend: true,
        showBorderLine: true,
        legendLayout: {left: 50, top: 50, width: 300, height: 200, flow: 'horizontal'},
        padding: {left: 50, top: 5, right: 5, bottom: 5},
        titlePadding: {left: 10, top: 10, right: 100, bottom: 10},
        source: dataAdapter,
        colorScheme: 'scheme01',
        seriesGroups:
                [
                    {
                        type: 'pie',
                        showLabels: true,
                        series:
                                [
                                    {
                                        dataField: 'VALUE',
                                        displayText: 'O_STATUS',
                                        labelRadius: 150,
                                        initialAngle: 50,
                                        radius: 99,
                                        centerOffset: -10,
                                        formatFunction: function (value) {
//                                            if (isNaN(value))
                                            return value;
                                            return parseFloat(value) + '';
                                        }
                                    }
                                ]
                    }
                ]
    };
    // setup the chart
    $('#chartContainer').jqxChart(settings);

}
function populateItem_quality_summarypieChart(requestdata){
//        , loadError: function (xhr, status, error) { alert('Error loading "' + source.url + '" : ' + error); }    
                 var dataAdapter = new $.jqx.dataAdapter(requestdata, { async: false, autoBind: true, loadError: function (xhr, status, error) { alert('Error loading "' + requestdata.url + '" : ' + error); } });
                // prepare jqxChart settings
                var settings = {
                    title: "Item Quantity Summary",
                    description: "",
                    enableAnimations: true,
                    showLegend: true,
                    showBorderLine: true,
                    legendLayout: {left: 50, top: 50, width: 300, height: 200, flow: 'horizontal'},
                    padding: {left: 50, top: 5, right: 5, bottom: 5},
                    titlePadding: {left: 10, top: 10, right: 100, bottom: 10},
                    source: dataAdapter,
                    colorScheme: 'scheme01',
                    seriesGroups:
                            [
                                {
                                    type: 'pie',
                                    showLabels: true,
                                    series:
                                            [
                                                {
                                                    dataField: 'COUNT',
                                                    displayText: 'LABEL',
                                                    labelRadius: 150,
                                                    initialAngle: 50,
                                                    radius: 99,
                                                    centerOffset: -10,
                                                    formatFunction: function (value) {
//                                            if (isNaN(value))
                                                        return value;
                                                        return parseFloat(value) + '';
                                                    }
                                                }
                                            ]
                                }
                            ]
                };
                // setup the chart
                $('#chartContainer1').jqxChart(settings);
                
                }

        