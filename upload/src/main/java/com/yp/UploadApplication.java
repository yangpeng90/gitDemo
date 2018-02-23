package com.yp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;

/**
 * Created by 杨鹏 on 2018/2/10.
 */
@SpringBootApplication
public class UploadApplication extends SpringBootServletInitializer{
    public static void main(String[] args) {
        SpringApplication.run(UploadApplication.class,args);
    }
}
