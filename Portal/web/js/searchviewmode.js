/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function showformViewTaxationData(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13, param14) {

    // console.log(param1);
    $("#viewtaxdata").css("display", "inline");
    $("#taxDataGrid").css("display", "none");

    $("#v_type").val(param1);
    $("#taxpan").val(param2);
    //ECC no
    var str = param3;
    var n = str.search("XM");
    var m = str.search("XD");
    if (n != -1)
    {
       // alert("===if");
        var res = str.split("XM");
        $("#eccno1").val(res[0]);
        $("#eccno2").val("XM" + res[1]);
//alert(res[0]);
//alert("XM"+res[1]);

    } else if (m != -1)
    {
       // alert("===else");
        var res = str.split("XD");
        $("#eccno1").val(res[0]);
        $("#eccno2").val("XD" + res[1]);
//alert(res[0]);
//alert("XD"+res[1]);
    }
///ecc end

    $("#exno").val(param4);
    $("#exrange").val(param5);
    $("#exdiv").val(param6);
    $("#excom").val(param7);
    $("#cstno").val(param8);
    $("#vat").val(param9);
    var str1 = param10;
    var p = str1.search("SD");
    var q = str1.search("ST");
    if (p != -1)
    {
       // alert("===if");
        var res1 = str1.split("SD");
        $("#stax1").val(res1[0]);
        $("#stax2").val("SD" + res1[1]);
//alert(res[0]);
//alert("XM"+res[1]);

    } else if (q != -1)
    {
        //alert("===else");
        var res1 = str1.split("ST");
        $("#stax1").val(res1[0]);
        $("#stax2").val("ST" + res1[1]);
//alert(res[0]);
//alert("XD"+res[1]);
    }
    $("#eximpexp").val(param11);
    $("#ssi_status").val(param12);
    $("#msme_status").val(param13);
    $("#sez_appl").val(param14);
     $("#tax_grid").css("display", "inline");
      //$("#tax_grid").css("display", "none");
}
function taxgridview1(){
  //alert('tabview');
    $("#viewtaxdata").css("display", "none");
    $("#taxDataGrid").css("display", "inline");
    $("#tax_grid").css("display", "none");
}




///Withholding Tax Accounting Data
function showformViewWithTaxData(param1, param2, param3, param4, param5, param6, param7, param8, param9){
  //alert(param1); 
  $("#recipientType").val(param1);
    $("#withholdingtaxtype").val(param2);
    $("#withholdingtaxpay").val(param3);
    $("#withholdingtaxcode").val(param4);
    $("#exemptioncertificatenumber").val(param5);
    $("#exemptionrate").val(param6);
    $("#reasonforexemption").val(param7);
    $("#dateonwhichxemptionbegins").val(param8);
    $("#dateonwhichexemptionends").val(param9);
   $("#withtax_grid").css("display", "inline");  
   
    $("#wthhldform").css("display", "inline");
    $("#wthhldDataGrid").css("display", "none");
}
function WithTaxgridview(){
  //alert('tabview');
    $("#wthhldform").css("display", "none");
    $("#wthhldDataGrid").css("display", "inline");
    $("#withtax_grid").css("display", "none");
}
///Withholding Tax Accounting Data(TAN)
//sc, wtt,wtc,whtanecc,whtaner,exrsid,datepickerwtanb,datepickerwtane,cr
function showformViewWithTanData(param1, param2, param3, param4, param5, param6, param7, param8, param9,param10){
  //alert(param2); 
  $("#sc").val(param1);
    $("#wtt").val(param2);
    $("#wtc").val(param3);
    $("#whtanecc").val(param4);
    $("#whtaner").val(param5);
    $("#exrsid").val(param6);
    $("#datepickerwtanb").val(param7);
    $("#datepickerwtane").val(param8);
    $("#exthid").val(param9);
    $("#cr").val(param10);
  
    $("#withtan_grid").css("display", "inline");  
    $("#wthhldtanform").css("display", "inline");
    $("#wthhldtanDataGrid").css("display", "none");
}
function WithTangridview(){
  //alert('tabview');
    $("#wthhldtanform").css("display", "none");
    $("#wthhldtanDataGrid").css("display", "inline");
    $("#withtan_grid").css("display", "none");
}
//Payment Trsection Data
function showformViewPaymentTData(param1, param2, param3, param4, param5, param6, param7, param8, param9,param10,param11){
 
     
    
    $("#ifsccode").val(param1);
    $("#bankaccno").val(param2);
    $("#bankname").val(param3);
    $("#bankaddress").val(param4);
    $("#bankcity").val(param5);
    $("#bankregion").val(param6);
    $("#bankcountry").val(param7);
    $("#bankregioncode").val(param8);
    $("#swiftcode").val(param9);
    $("#partnerbanktype").val(param10);
  $("#ibancode").val(param11);
    $("#paymentt_grid").css("display", "inline");  
    $("#paymentDataform").css("display", "inline");
    $("#paymentDatagrid").css("display", "none");
}
function Paymentgridview(){

    $("#paymentDataform").css("display", "none");
    $("#paymentDatagrid").css("display", "inline");
    $("#paymentt_grid").css("display", "none");
}