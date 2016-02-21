/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 function populatepieItem_Processed_By_DayChart(requestdata) {
//            alert("method called"+requestdata);
            var dataAdapter = new $.jqx.dataAdapter(requestdata);
            var settings = {
                title: "Item Processed By Day",
//                        description: "Time spent in vigorous exercise",
                  
                enableAnimations: true,
                showLegend: true,
                showBorderLine: true,
              
               legendLayout: {left: 50, top: 50, width: 300, height: 200, flow: 'horizontal'},
                titlePadding: {left: 90, top: 0, right: 0, bottom: 10},
                seriesGroups:
                        [
                            {
                                type: 'pie',
                                showLabels: true,
                                series:
                                        [
                                            {
                                                dataField: 'TOTAL_ITEMS',
                                                displayText: 'O_USER',
                                                labelRadius: 150,
                                                initialAngle: 50,
                                                radius: 99,
                                                centerOffset: -10
//                                                formatFunction: function (value) {
////                                            if (isNaN(value))
//
//                                                    return parseFloat(value) + '';
//                                                }
                                            }
                                        ]
                            }
                        ]
            };
            // setup the chart
            $('#jqxChart20').jqxChart(settings);
            var dataAdapter = new $.jqx.dataAdapter(requestdata);
            var requestdata = new $.jqx.dataAdapter({
                datafields: [
                   {name: 'O_USER', type: 'string'},
                                        {name: 'J_ROLE_CDE', type: 'string'},
                                        {name: 'LOCAT_LOC_CDE', filtertype: 'checkedlist',type: 'string'},
                                        {name: 'PROCESS_DATE', type: 'Date'},
                                        {name: 'TOTAL_ITEMS', type: 'string'}
                ],
                localdata: requestdata,
                datatype: 'array'
            });
            $("#jqxGrid20").jqxGrid({
                 width: 848,
                height: 232,               
            theme: 'energyblue',
//width: screen.width - 300,
//height:screen.height-410,
                filterable: true,
                pagesize: 10,
                 pagesizeoptions: ['10','25', '50', '100', '200'],
                pageable: true,
                showfilterrow: true,
                source: requestdata,
                columns:
                        [
                             {text: '<%=User_Name%>', columntype: 'textbox', filtertype: 'textbox', datafield: 'O_USER', width: 'auto'},
                                {text: '<%=User_Role%>', columntype: 'textbox', filtertype: 'textbox', datafield: 'J_ROLE_CDE', width: 'auto'},
                                {text: '<%=BU_Plant%>', columntype: 'textbox', filtertype: 'textbox', datafield: 'LOCAT_LOC_CDE', width: 'auto'},
//                                {text: '<%=Processed_Date%>', columntype: 'date', filtertype: 'date', datafield: 'PROCESS_DATE', width: 'auto'},
                                {text: '<%=Total_Items%>', columntype: 'textbox', filtertype: 'textbox', datafield: 'TOTAL_ITEMS', width: 'auto'}

                        ]
            });
            $("#jqxGrid20").on('filter', function () {
                var rows = $("#jqxGrid20").jqxGrid('getrows');

                var datainformations = $('#jqxGrid20').jqxGrid('getdatainformation');
                var rowscounts = datainformations.rowscount;
//                        alert(rowscounts);
                var USERaRRAY = [];
                for (var i = 0; i < rowscounts; i++)
                {
//                            var data = $('#jqxGrid').jqxGrid('getrowdata', 0);
//                            console.log(data.text);
                    var value = $('#jqxGrid20').jqxGrid('getcellvalue', i, "O_USER");
                    console.log(value);
                    USERaRRAY.push(value);

                }

                console.log(USERaRRAY);

                var distinct = []
                for (var i = 0; i < USERaRRAY.length; i++) {
                    console.log('a:');
                    var a = distinct.indexOf(USERaRRAY[i]);
                    console.log('a:' + a);
                    if (a == -1)
                    {
                        console.log('entered');
                        distinct.push(USERaRRAY[i]);
                    }

                } 


                console.log(distinct);

//                alert(rows);
                var rowindexes = $('#jqxGrid20').jqxGrid('getselectedrowindexes');
                for (var i in rowindexes) {
                    var data = $('#jqxGrid20').jqxGrid('getrenderedrowdata', rowindexes[i]);
//                    alert(data);
                }

                var data = $('#jqxGrid20').jqxGrid('getrowdata', 0);
//                alert(data.o_user);
                var chart = $('#jqxChart20').jqxChart('getInstance');
                chart.source = rows;
                chart.update();
            });
        }