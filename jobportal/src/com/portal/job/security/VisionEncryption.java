/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.security;

import com.portal.job.DTO.RegistrationDTO;
import java.math.BigInteger;
import java.security.MessageDigest;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Naidu
 */
public class VisionEncryption {
    
      private static final Logger logger = LoggerFactory.getLogger(VisionEncryption.class);
   
    public synchronized  String encrypt(RegistrationDTO registrationDTO)
    {
    
     String toBeEncrypt="";
     String encryptedString="";
        try {
            
           toBeEncrypt=registrationDTO.getPassword()+registrationDTO.getUser_name().toUpperCase()+registrationDTO.getDate_of_birth()+"Vision2016"+"-ShellFish";
                      
//           //logger.info("toBeEncrypt::"+toBeEncrypt);
            byte[] bytesEncoded = Base64.encodeBase64(toBeEncrypt.getBytes());
            encryptedString=new String(bytesEncoded);
            
//           //logger.info("DecryptedString::"+decrypt(encryptedString));
        } catch (Exception e) {
            
            logger.error("Exception in encrypt:"+e.getLocalizedMessage());
        }
    
        return encryptedString;
    }
    
    public synchronized  String decrypt(String encryptedString)
    {
    String decryptedString="";
        try {
           
            
            byte[] valueDecoded = Base64.decodeBase64(encryptedString);
            decryptedString= new String(valueDecoded);
           // System.out.println("Decoded value is " + new String(valueDecoded));

        } catch (Exception e) {
            logger.error("Exception In decrypt:"+e.getLocalizedMessage());
        }
        return decryptedString;
    }
    
}
