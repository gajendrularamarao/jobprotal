/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.security;

import java.security.MessageDigest;

/**
 *
 * @author pilog
 */
public class JavaEncryption implements GenericEncryption{

       private static JavaEncryption instance;

    public synchronized String encrypt(String toBeEncrypted, String userName) {
        String encryptedString = "";
        return encryptedString;
    }

    public synchronized String decrypt(String toBeDecrypted, String userName) {
        String decryptedString = "";
        return decryptedString;
    }

    public synchronized String encryptOneWay(String toBeEncrypted, String userName) {
        try {
            String comb = toBeEncrypted + userName;
            MessageDigest md = MessageDigest.getInstance("SHA");
            byte[] bytes = md.digest(comb.getBytes());
            return getString(bytes);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public synchronized String encryptOneWay(String toBeEncrypted) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA");
            byte[] bytes = md.digest(toBeEncrypted.getBytes());
            return getString(bytes);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private static String getString(byte[] bytes) {
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < bytes.length; i++) {
            byte b = bytes[i];
            sb.append(0xFF & b);
            if (i + 1 < bytes.length) {
                sb.append("-");
            }
        }
        return sb.toString();
    }

    public static synchronized JavaEncryption getInstance() {
        if (instance == null) {
            return new JavaEncryption();
        }
        return instance;
    }
    
}
