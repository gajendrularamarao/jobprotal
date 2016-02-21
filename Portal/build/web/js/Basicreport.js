/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



            $(function () {
         
 setNavigation();

                $("#side_menu").click(function () {
                    $("#v-nav ul").toggle();
                });
                 $(".kpi_img").click(function () {
                    $(".onlod-page").hide();
//                    Item_Processed_By_Day();
//                    alert($(this).attr("data1"));
//                    alert($(this).attr("data2"));
var kpi_litab = $(this).attr("data1");
if(kpi_litab == "tab1"){testing1();}
var kpi_contenttab = $(this).attr("data2");
if(kpi_litab == "tab2"){testing2();}
if(kpi_litab == "tab3"){testing3();}
if(kpi_litab == "tab4"){testing4();}
if(kpi_litab == "tab5"){testing5();}
if(kpi_litab == "tab6"){testing6();}
if(kpi_litab == "tab7"){testing7();}
if(kpi_litab == "tab8"){testing8();}
//$(this).attr("data3");
//                    var items = $('#v-nav>ul>li').each(function () {
//                        items.removeClass('current');
//                    });
//                         $("#dialog").dialog({
//                    autoOpen: false,
//                    height: '500',
//                    width: '500',
//                    title: "Message",
//                    textAlign: 'center',
//                    buttons: {
//                        Ok: function () {
//                            $(this).dialog("close");
//                        }
//                    }
//                });
                    $("#v-nav>ul>li[tab="+kpi_litab+"]").addClass('current');
                    $("#"+kpi_contenttab).show();
                    
//                    $("#v-nav>ul>li[tab=tab2]").addClass('current');
//                    $("#Material_Change_Time").css("display", "block");
//                    testing21();

//        $('#v-nav>div.tab-content').hide();

                        window.location.hash = kpi_litab;
                });
            });

            function setNavigation() {
                var path = window.location.pathname;
                path = path.match(/[^\/]+$/)[0];

                $(".nav a").each(function () {
                    var href = $(this).attr('href');
                    if (path === href) {
                        $(this).closest('li').addClass('current');
                    }
                    else
                    {
                        $(this).closest('li').addClass('non-current');
                    }
                });
            }

            $(function () {
//                Item_Processed_By_Day();


                var items = $('#v-nav>ul>li').each(function () {

//                    $("#kpi_images").css("display", "block");


                    $(this).click(function () {
                        $(".onlod-page").css("display", "none");
                        //alert(location.hash);
                        var tt = $(this).text().split(' ').join('_');
                        // alert(tt);   
                        $("#" + tt).css("display", "block");
//                        remove previous class and add it to clicked tab
                        items.removeClass('current');
                        $(this).addClass('current');
//                        $("#v-nav>ul>li[tab=tab2]").addClass('current');

                        $('#v-nav>div.tab-content').hide().eq(items.index($(this))).show('fast');
//                        $("#kpi_images").css("display", "block");
                        window.location.hash = $(this).attr('tab');
                    });
                });


            });

    