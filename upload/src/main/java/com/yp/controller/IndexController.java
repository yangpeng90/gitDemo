package com.yp.controller;

/**
 * Created by 杨鹏 on 2018/2/10.
 */

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController {

    @RequestMapping("/")
    public String goToIndex() {
        return "index";
    }

}
