/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.portal.job.utilities;


import java.io.IOException;
import java.io.StringWriter;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Naidu
 */
public class Converter {

    private static final Logger logger = LoggerFactory.getLogger(Converter.class);

    public String pojo2Json(Object obj) throws JAXBException,
            JsonParseException, JsonMappingException, IOException {

//        ORecordSap oRecordSap = (ORecordSap) obj;
//        //logger.info("oRecordSap::::" + oRecordSap.getId().getRecordNo());
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonString = objectMapper.writeValueAsString(obj);

//        //logger.info("jsonString:::" + jsonString);
        return jsonString;
    }

   
//    private Object json2Pojo(String jsonString) throws JAXBException,
//            JsonParseException, JsonMappingException, IOException {
//        ObjectMapper objectMapper = new ObjectMapper();
//        Employees empBeanList = objectMapper.readValue(jsonString,
//                Employees.class);
//        Object object = (Object) empBeanList;
//        return object;
//    }

    public String pojo2Xml(Object object, JAXBContext context)
            throws JAXBException {
        Marshaller marshaller = context.createMarshaller();
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        StringWriter writer = new StringWriter();
        marshaller.marshal(object, writer);
        String xmlStringData = writer.toString();
        return xmlStringData;
    }

//    private Employees xml2Pojo(String xmlStringData, JAXBContext context)
//            throws JAXBException {
//        StringReader reader = new StringReader(xmlStringData);
//        Unmarshaller unmarshaller = context.createUnmarshaller();
//        Employees employee = (Employees) unmarshaller.unmarshal(reader);
//        return employee;
//    }
    
}
