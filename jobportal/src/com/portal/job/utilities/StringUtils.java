/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.utilities;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author pilog
 */
public class StringUtils {
    public static List<String> findcombinations(String[] splitArray) {
        String currentElement = "";
        List<String> listArray = new ArrayList<String>();
        String newelement = "";
        for (int j = 0; j < splitArray.length; j++) {
            listArray.add(splitArray[j]);
            currentElement = splitArray[j];
           for (int i = 0; i < splitArray.length; i++) {
                if (!splitArray[i].equals(currentElement)) {
                    newelement = currentElement + "%" + splitArray[i];
                    listArray.add(newelement);
                }
            }

        }

        return listArray;
    }
    public static List<String> findcombinationsOnly(String[] splitArray) {
        String currentElement = "";
        List<String> listArray = new ArrayList<String>();
        String newelement = "";
        for (int j = 0; j < splitArray.length; j++) {
            //listArray.add(splitArray[j]);
            currentElement = splitArray[j];

            for (int i = 0; i < splitArray.length; i++) {
                if (!splitArray[i].equals(currentElement)) {
                    newelement = currentElement + "%" + splitArray[i];
                    listArray.add(newelement);
                }
            }

        }

        return listArray;
    }
    public static List<String> findcombinationsExp(String[] splitArray) {
        String currentElement = "";
        List<String> listArray = new ArrayList<String>();
        String newelement = "";
        for (int j = 0; j < splitArray.length; j++) {
            listArray.add(splitArray[j]);
            currentElement = splitArray[j];

            for (int i = 0; i < splitArray.length; i++) {
                if (!splitArray[i].equals(currentElement)) {
                    newelement = "'"+currentElement + "%" + splitArray[i]+"'";
                    listArray.add(newelement);
                }
            }

        }

        return listArray;
    }
    
       // /(six)\s?(([a-zA-z?'":,;-\d]?){0,}\s?)*(swans)/g
    public static List<String> findcombinationsPatterns(String[] splitArray) {
        String currentElement = "";
        List<String> listArray = new ArrayList<String>();
        String newelement = "";
        for (int j = 0; j < splitArray.length; j++) {
            listArray.add(splitArray[j]);
            currentElement = splitArray[j];

            for (int i = 0; i < splitArray.length; i++) {
                if (!splitArray[i].equals(currentElement)) {
                    newelement = "("+currentElement + ")\\s?(([\\w?'\":,;-]?){0,}\\s?)*(" + splitArray[i]+")";
                    listArray.add(newelement);
                }
            }

        }

        return listArray;
    }
    
}
