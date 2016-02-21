/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.security;

/**
 *
 * @author pilog
 */
public class SqlServerEncryption implements GenericEncryption{
    
    private static JavaEncryption instance;
  
  public String encrypt(String toBeEncrypted, String userName)
  {
    throw new UnsupportedOperationException("Not supported yet.");
  }
  
  public String decrypt(String toBeDecrypted, String userName)
  {
    throw new UnsupportedOperationException("Not supported yet.");
  }
  
  public String encryptOneWay(String toBeEncrypted, String userName)
  {
    throw new UnsupportedOperationException("Not supported yet.");
  }
  
  public String encryptOneWay(String toBeEncrypted)
  {
    throw new UnsupportedOperationException("Not supported yet.");
  }
}
