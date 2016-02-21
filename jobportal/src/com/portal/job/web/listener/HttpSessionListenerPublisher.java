/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.web.listener;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionEvent;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.stereotype.Service;

/**
 *
 * @author pilog
 */
@Service
public class HttpSessionListenerPublisher extends HttpSessionEventPublisher{
    
  
  
    
       private static int count = 0;
  HttpSession session;
  public static Map<String, HttpSession> sessions = new HashMap();
  
  public  int getSessionCount()
  {
     // //logger.info("MetaProperties::getSessionCount::::");
    return count;
  }
  
    @Override
   public void sessionCreated(HttpSessionEvent event) {
      super.sessionCreated(event);
      
//     String username = (String)this.session.getAttribute("ssUsername");
     
//        if (username !=null && !username.equalsIgnoreCase("")) {
            
             sessions.put(event.getSession().getId(), event.getSession());
             this. session=event.getSession();
            count += 1;
//        }
   
   
//        System.out.println("sessions:::"+sessions);
   
   }

   @Override
   public void sessionDestroyed(HttpSessionEvent event) {
      //do something
       
//       updateLogoutFlag(event);
       
        count -= 1;
   
    
     sessions.remove(event.getSession().getId());
    this.session = event.getSession();
    String username = (String)this.session.getAttribute("ssUsername");
       
      super.sessionDestroyed(event);
      
      
   }
    
   public HttpSession getExpriredSession()
   {
       
       return this.session;
   
   }
  
}
