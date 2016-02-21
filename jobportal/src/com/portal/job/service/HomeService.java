/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.service;

import com.portal.job.DAO.HomeDAO;
import com.portal.job.DTO.LoginDTO;
import com.portal.job.DTO.RegistrationDTO;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Naidu
 */
@Service
public class HomeService {
    
    @Autowired
    private HomeDAO homeDAO;

    public String registerUser(HttpServletRequest request, RegistrationDTO registerDTO) {
        
        String result="";
        try {
            
            result=homeDAO.registerUser(request,registerDTO);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    public String loginHandler(HttpServletRequest request, LoginDTO loginDTO) {
       
        String result="";
        try {
            
            result=homeDAO.loginHandler(request,loginDTO);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return result;
    }

    public List getQuesList() {
        
        return homeDAO.getQuesList();
    }

    public String testSubmit(HttpServletRequest request, List answersList,int totalQues) {
      return homeDAO.testSubmit(request,answersList,totalQues);
    }
    
}
