/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.controller;

import com.portal.job.DTO.LoginDTO;
import com.portal.job.DTO.RegistrationDTO;
import com.portal.job.service.HomeService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

/**
 *
 * @author Naidu
 */


@Controller
public class HomeController {
    
    @Autowired
    private HomeService homeService;
    
    
    @RequestMapping("/")
    public String home(HttpServletRequest request)
    {
    
        return "login";
    
    }
    @RequestMapping(value = "/registerForm",method = RequestMethod.GET)
    public String registerForm(HttpServletRequest request,ModelMap model)
    { 
        
    
        return "Register";
    
    }
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public String register(HttpServletRequest request,ModelMap map,@ModelAttribute RegistrationDTO registerDTO)
    {
    
        try {
            
            String result=homeService.registerUser(request,registerDTO);
            map.addAttribute("errorMesg", "Registeration Successfully Completed.");
            map.addAttribute("returnCde", "REGISTER");
        } catch (Exception e) {
            e.printStackTrace();
        }
    
        return "errorPage";
    
    }
    
    @RequestMapping(value = "/loginhandler",method = RequestMethod.POST)
    public String loginhandler(HttpServletRequest request,ModelMap map,@ModelAttribute LoginDTO loginDTO)
    {
        String redirectPage="";
        String message="";
        try {
            
            String result=homeService.loginHandler(request,loginDTO);
            System.out.println("result:::::;"+result);
            if (result !=null && !result.equalsIgnoreCase("") && result.equalsIgnoreCase("SUCCESS")) {
                
                redirectPage="redirect:/homepage";
                
            }else if (result !=null && !result.equalsIgnoreCase("") && result.equalsIgnoreCase("PASSWORDINVALID")) 
            {
                //PASSWORDINVALID
                
                message="oops! Your Username or Password invalid.";
            redirectPage="errorPage";
            
            }else if(result !=null && !result.equalsIgnoreCase("") && result.equalsIgnoreCase("TESTNOTATTEND")){
                
                
            //TESTNOTATTEND
                redirectPage="errorPage";
                message="oops! Your test was not attempted..";
            }
                
            map.addAttribute("returnCde", result);
            map.addAttribute("errorMesg", message);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return redirectPage;
    
    
    }
    
    @RequestMapping(value = "/test",method = RequestMethod.GET)
    public String test(HttpServletRequest request,ModelMap map)
    {
    
        try {
            
            List list=homeService.getQuesList();
            map.addAttribute("quesList", list);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return "loginTest";
    
    
    }
    
    @RequestMapping(value = "/homepage",method = RequestMethod.GET)
    public String loginHome(HttpServletRequest request,ModelMap map)
    {
    
        try {
            
            
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    return "modulechooser";
    }
    
    @RequestMapping(value = "/timeout",method = RequestMethod.GET)
   public String timeout(HttpServletRequest request,ModelMap map) {
    
       map.addAttribute("errorMsg", "Your Session was expired.");
       return "login";
    
    }
   
   @RequestMapping(value = "/logout",method = RequestMethod.GET)
  public String logout(HttpServletRequest request,ModelMap map) {
       try {
           
           HttpSession session=request.getSession(false);
           
           if (session !=null) {
               
               session.invalidate();
//                 map.addAttribute("errorMsg", "Logout successfully completed.");
           }
       } catch (Exception e) {
           e.printStackTrace();
       }
   return "login";
   }
  
  @RequestMapping(value = "/testSubmit",method = RequestMethod.POST)
  public String testSubmit(HttpServletRequest request,@RequestParam("answerQues") List answersList,@RequestParam("totalQues") int totalQues,ModelMap map,RedirectAttributes attributes)
  {
  
      try {
          
          String result=homeService.testSubmit(request,answersList,totalQues);
          
          attributes.addFlashAttribute("result", result);
          
      } catch (Exception e) {
          e.printStackTrace();
      }
      return "redirect:/homepage";
  
  }
}
