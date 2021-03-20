package cn.qx.sharepower.controller;


import cn.qx.sharepower.model.JsonResult;
import cn.qx.sharepower.model.param.ResourcesParam;
import cn.qx.sharepower.service.ResourcesService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @Author: 丁晓诚
 * @Date: 2021/2/7 15:17
 */
@Controller
@RequestMapping("resources")
public class ResourcesController {

    private ResourcesService 

    @ResponseBody
    @PostMapping("/getList")
    public JsonResult add(@RequestBody ResourcesParam resourcesParam){
        return null;
    }
}
