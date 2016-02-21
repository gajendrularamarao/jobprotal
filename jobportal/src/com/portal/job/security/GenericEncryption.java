/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.security;

/**
 *
 * @author Naidu
 */
public abstract interface GenericEncryption {
   
    public abstract String encrypt(String paramString1, String paramString2);
  
  public abstract String decrypt(String paramString1, String paramString2);
  
  public abstract String encryptOneWay(String paramString1, String paramString2);
  
  public abstract String encryptOneWay(String paramString);
}
