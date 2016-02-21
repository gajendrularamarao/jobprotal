/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 *
 * @author Naidu
 */
public class SessionInterceptor extends HandlerInterceptorAdapter {
    
    
    @Override  
    public boolean preHandle(HttpServletRequest request,HttpServletResponse response, Object handler) throws Exception {   
     try  
        {
                            String op = request.getServletContext().getInitParameter("OPENPAGES");
            
            //System.out.println("Inside Interceptor");   
            HttpSession session = request.getSession();   
            String authToken = (String) session.getAttribute("ssUsername");   
              // System.out.println("Interceptor invoked For Auth token:::"+authToken); 
             
                 String file = getServlet(request);
            if (checkFile(file)) {

                if ((authToken == null || authToken.equals(""))&& !file.equalsIgnoreCase("") && !op.contains(file)) {
                    
                    System.out.println("Auth Token time Out");

                    
                    
                    response.sendRedirect(request.getServletContext().getContextPath() + "/timeout");
                    return false;
                } else {
                    return true;
                }
            } else {

                return true;
            }
//                String op = request.getServletContext().getInitParameter("OPENPAGES");
//                
                
                 
       }catch(Exception ex)   
           {   
           ex.getMessage();   
          response.sendRedirect(request.getServletContext().getContextPath()+"/timeout");   
              return false;   
           }   
        } 
    
    
    private String getServlet(HttpServletRequest request)
  {
    String file = request.getServletPath();
    int index = file.lastIndexOf('/');
    return file.substring(index + 1);
  }
    private boolean checkFile(String file)
    {
    
       // System.out.println("file:::" + file);
        if (!file.equalsIgnoreCase("")) {
            int index = file.lastIndexOf(".");

            if (index != -1) {//having (.)

                return false;
            } else {
                return true;

            }
        } else {
            return true;
        }

        
    
    }
}
