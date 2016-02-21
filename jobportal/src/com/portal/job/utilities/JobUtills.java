/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.utilities;


import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.net.InetAddress;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Naidu
 */
public class JobUtills {
    
    
    
    
     private static final Logger logger = LoggerFactory.getLogger(JobUtills.class);
    public String getDeviceDetails(HttpServletRequest request)
    {
        String ipAddress="";
        JSONObject devicedetails=new JSONObject();
        try {
            
            String hostname = request.getRemoteHost(); // hostname
//    System.out.println("hostname"+hostname);
   //logger.info("hostname"+hostname);

    String computerName = null;
    String browserName="";
    String remoteAddress = request.getRemoteAddr();
    
     ipAddress = request.getHeader("X-FORWARDED-FOR");  
   if (ipAddress == null) {  
	   ipAddress = request.getRemoteAddr();  
   }
    String remoteAddr = request.getRemoteAddr();

// computerName = request.getRemoteHost();
//    System.out.println("remoteAddress: " + remoteAddress);
      InetAddress inetAddress = InetAddress.getByName(remoteAddress);
      computerName=inetAddress.getCanonicalHostName();
   //logger.info("remoteAddress:   " + remoteAddr);
   //logger.info("computerName: " + computerName);
   
       //logger.info("inetAddress: " + inetAddress.getHostAddress());
       //logger.info("inetAddress: " + inetAddress.getHostName());
       //logger.info("inetAddress: " + inetAddress.getAddress());
       //logger.info("inetAddress: " + inetAddress.getCanonicalHostName());
       
//        computerName = inetAddress.getHostName();

    


//        if (computerName.equalsIgnoreCase("localhost")) {
//            computerName = java.net.InetAddress.getLocalHost().getCanonicalHostName();
//        }
           // computerName = java.net.InetAddress.getLocalHost().getCanonicalHostName();
//        //logger.info("computerName: " + computerName);
        browserName= getClientBrowser(request);
          devicedetails.put("computerName", computerName);
          devicedetails.put("IPAddress", ipAddress);
          devicedetails.put("browserName",browserName);
            
      //logger.info("Device details::::"+devicedetails);
 
//          lobrowser
          
        } catch (Exception e) {
            logger.error("Exception In getIpAddress::"+e.getLocalizedMessage());
        }
    
    return devicedetails.toJSONString();
    }
    
    public String getClientBrowser(HttpServletRequest request)
    {
    
          String  browserDetails  =   request.getHeader("User-Agent");
        String  userAgent       =   browserDetails;
        String  user            =   userAgent.toLowerCase();

        String os = "";
        String browser = "";
    
        try {
            
           

      // //logger.info("User Agent for the request is===>"+browserDetails);
        //=================OS=======================
         if (userAgent.toLowerCase().indexOf("windows") >= 0 )
         {
             os = "Windows";
         } else if(userAgent.toLowerCase().indexOf("mac") >= 0)
         {
             os = "Mac";
         } else if(userAgent.toLowerCase().indexOf("x11") >= 0)
         {
             os = "Unix";
         } else if(userAgent.toLowerCase().indexOf("android") >= 0)
         {
             os = "Android";
         } else if(userAgent.toLowerCase().indexOf("iphone") >= 0)
         {
             os = "IPhone";
         }else{
             os = "UnKnown, More-Info: "+userAgent;
         }
         //===============Browser===========================
        if (user.contains("msie"))
        {
            String substring=userAgent.substring(userAgent.indexOf("MSIE")).split(";")[0];
            browser=substring.split(" ")[0].replace("MSIE", "IE")+"-"+substring.split(" ")[1];
        } else if (user.contains("safari") && user.contains("version"))
        {
            browser=(userAgent.substring(userAgent.indexOf("Safari")).split(" ")[0]).split("/")[0]+"-"+(userAgent.substring(userAgent.indexOf("Version")).split(" ")[0]).split("/")[1];
        } else if ( user.contains("opr") || user.contains("opera"))
        {
            if(user.contains("opera"))
                browser=(userAgent.substring(userAgent.indexOf("Opera")).split(" ")[0]).split("/")[0]+"-"+(userAgent.substring(userAgent.indexOf("Version")).split(" ")[0]).split("/")[1];
            else if(user.contains("opr"))
                browser=((userAgent.substring(userAgent.indexOf("OPR")).split(" ")[0]).replace("/", "-")).replace("OPR", "Opera");
        } else if (user.contains("chrome"))
        {
            browser=(userAgent.substring(userAgent.indexOf("Chrome")).split(" ")[0]).replace("/", "-");
        } else if ((user.indexOf("mozilla/7.0") > -1) || (user.indexOf("netscape6") != -1)  || (user.indexOf("mozilla/4.7") != -1) || (user.indexOf("mozilla/4.78") != -1) || (user.indexOf("mozilla/4.08") != -1) || (user.indexOf("mozilla/3") != -1) )
        {
            //browser=(userAgent.substring(userAgent.indexOf("MSIE")).split(" ")[0]).replace("/", "-");
            browser = "Netscape-?";

        } else if (user.contains("firefox"))
        {
            browser=(userAgent.substring(userAgent.indexOf("Firefox")).split(" ")[0]).replace("/", "-");
        } else if(user.contains("rv"))
        {
            browser="IE";
        } else
        {
            browser = "UnKnown, More-Info: "+userAgent;
        }
      // //logger.info("Operating System======>"+os);
       //logger.info("Browser Name==========>"+browser);
            
            
        } catch (Exception e) {
            logger.error("Exception In getClientBrowser:"+e.getLocalizedMessage());
        }
        return browser;
    }
    
     public byte[] loadFileAsBytesArray(File file) throws Exception {

        // File file = new File(fileName);
        int length = (int) file.length();
        BufferedInputStream reader = new BufferedInputStream(new FileInputStream(file));
        byte[] bytes = new byte[length];
        reader.read(bytes, 0, length);
        reader.close();
        return bytes;

    }
     
     public  String appendDescription(String descr, String currentReason,String user)
    throws Exception
  {
//    String descr = (String)dataMap.get("comment");
//    
//    String currentReason = (String)dataMap.get("txtRejectionReason");
      
    if ((currentReason != null) && (!currentReason.trim().equals(""))) {
      descr = currentReason + "; " + user+ ": " + descr;
    } else {
      descr = user + ": " + descr;
    }
    return descr;
  }
  
     
}
