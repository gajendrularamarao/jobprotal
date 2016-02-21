package com.portal.job.pojo;
// Generated Feb 23, 2016 11:56:10 AM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * BTechnologies generated by hbm2java
 */
@Entity
@Table(name="b_technologies"
    ,catalog="portal"
)
public class BTechnologies  implements java.io.Serializable {


     private Integer id;
     private String techName;

    public BTechnologies() {
    }

    public BTechnologies(String techName) {
       this.techName = techName;
    }
   
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID", unique=true, nullable=false)
    public Integer getId() {
        return this.id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }

    
    @Column(name="TECH_NAME", nullable=false, length=45)
    public String getTechName() {
        return this.techName;
    }
    
    public void setTechName(String techName) {
        this.techName = techName;
    }




}


