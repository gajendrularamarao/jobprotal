/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.DAO;

import com.portal.job.DTO.LoginDTO;
import com.portal.job.DTO.RegistrationDTO;
import com.portal.job.access.DataAccess;
import com.portal.job.pojo.BRole;
import com.portal.job.pojo.Userdetails;
import com.portal.job.pojo.UserdetailsId;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Naidu
 */
@Repository
public class HomeDAO {
   
    @Autowired
   private DataAccess access; 

    @Transactional
    public String registerUser(HttpServletRequest request, RegistrationDTO registerDTO) {
        String result="";
        try {
            
            Userdetails userdetails=new Userdetails();
            UserdetailsId id=new UserdetailsId();
            id.setUserName(registerDTO.getUser_name().toUpperCase());
            
            userdetails.setId(id);
            userdetails.setDateOfBirth(registerDTO.getDate()+"/"+registerDTO.getMonth()+"/"+registerDTO.getYear());
            userdetails.setEmail(registerDTO.getEmail_id());
            userdetails.setFirstName(registerDTO.getFirst_name());
            userdetails.setLastName(registerDTO.getLast_name());
            userdetails.setMobileNo(registerDTO.getMobile_number());
            userdetails.setPassword(registerDTO.getPassword());
            userdetails.setRoleId(Integer.parseInt(registerDTO.getRole()));
            userdetails.setTestStatus("N");
            access.save(userdetails);
//            userdetails.set
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Transactional
    public String loginHandler(HttpServletRequest request, LoginDTO loginDTO) {
       String result="";
        try {
           
         Userdetails userdetails=getUserDetailsByName(loginDTO.getRsUsername().toUpperCase(),loginDTO.getRsPassword());
            
            if (userdetails ==null) {
                
                result="PASSWORDINVALID";
                
            }else
            {
            
                setSessions(request,userdetails);
                
                if (userdetails.getTestStatus() !=null && userdetails.getTestStatus().equalsIgnoreCase("Y")) {
                    
                   
                     result="SUCCESS";
                }else
                {
                
                 result="TESTNOTATTEND";
                }
            
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
    
    @Transactional
    public Userdetails getUserDetailsByName(String username,String password)
    {
    Userdetails userdetails=null;
        try {
            
            System.out.println(password+"::username:::"+username);
            String query="from Userdetails where id.userName=:userName and password=:password";
            Map<String,Object> map=new HashMap<>();
            map.put("userName", username);
            map.put("password", password);
            List list=access.queryWithParams(query, map);
            if (list !=null && !list.isEmpty()) {
                userdetails=(Userdetails)list.get(0);
                
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    return userdetails;
    }

    public  void setSessions(HttpServletRequest request, Userdetails userdetails) {
       
        try {
            BRole bRole=getRoleById(userdetails.getRoleId());
            HttpSession session=request.getSession();
            session.setAttribute("user", userdetails);
            session.setAttribute("ssUsername", userdetails.getId().getUserName());
            session.setAttribute("ssRole", bRole.getId().getRoleId());
            
            session.setAttribute("ssRolename", bRole.getRoleName());
        } catch (Exception e) {
            e.printStackTrace();
        }
        
    }
    
    @Transactional
    public BRole getRoleById(int roleId)
    {
    BRole bRole=null;
        try {
            
            String query="from BRole where id.id=:roleId";
            
            Map<String,Object> map=new HashMap<>();
            map.put("roleId", roleId);
            List list=access.queryWithParams(query, map);
            if (list !=null && !list.isEmpty()) {
                
            bRole=(BRole)list.get(0);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    
    return bRole;
    }

    @Transactional
    public List getQuesList() {
       
        List list=null;
        try {
            int noofdques=4;
//            String quesIds=getRandomIds(noofdques,5);
            
//            String query="from BTestQues where id IN ("+quesIds+")";
            String query="from BTestQues ";
            Map<String,Object> map=new HashMap<>();
//            map.put("ids", quesIds);
            list=access.queryWithParams(query, map);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return list;
    }

    public  String getRandomIds(int noofdques,int maxnofques) {
       
        String result="";
        try {
            Random rand = new Random();
            
            for (int i = 0; i < noofdques; i++) {
                int value = rand.nextInt(maxnofques) + 1;
                result+=value;
                if (i != noofdques-1) {
                   result+="," ;
                }
                
            }
            System.out.println("result:::" + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Transactional
    public String testSubmit(HttpServletRequest request, List answersList,int totalQues) {
        String result="";
        try {
            List successList=new ArrayList();
            List failsList=new ArrayList();
            for (int i = 0; i < answersList.size(); i++) {
                
                String ansValues =(String) answersList.get(i);
                String[] values=ansValues.split("_");
                
                boolean checkAns=checkAnswers(values);
                if (checkAns) {
                    successList.add(values[1]);
                }else
                {
                failsList.add(values[1]);
                }
            }
            
            updateTestStatusByUser(request);
           result +=" <table border=\"1\" style=\"width:100%\"><tr><th>Correct Answers</th><th> Failurs</th><th>Not Answered Questions</th><th>Total Questions</th>";
            result+="<tr><td>"+successList.size()+"</th><td>"+failsList.size()+"</td><td>"+(totalQues-(successList.size()+failsList.size()))+"</td><td>"+totalQues+"</td></tr></table>";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    @Transactional
    public  boolean checkAnswers(String[] values) {
        boolean ans=false;
        try {
           
            String query="from BTestQues where id=:id and answer=:answer";
            Map<String,Object> map=new HashMap<>();
            
            map.put("id", Integer.parseInt(values[1]));
            map.put("answer", values[0]);
            List list=access.queryWithParams(query, map);
            ans=list.isEmpty()? false:true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ans;
    }

    public  void updateTestStatusByUser(HttpServletRequest request) {
        try {
            
            String query="update Userdetails set testStatus='Y' where id.userName=:userName";
            Map<String,Object> map=new HashMap<>();
            map.put("userName", request.getSession(false).getAttribute("ssUsername"));
            access.updateQuery(query, map);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
