package com.yp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

/**
 * Created by 杨鹏 on 2018/2/11.
 */
@RestController
public class FileUploadController {

    @RequestMapping("/fileUpload")
    public void fileUpload(@RequestParam("files") MultipartFile fileUpload) {
        File file = new File("F:\\develop\\uploadImage\\" + fileUpload.getOriginalFilename());
        try {
            fileUpload.transferTo(file);
            System.out.println(file);
            System.out.println("----------------------------");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
