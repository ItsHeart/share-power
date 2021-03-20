package cn.qx.sharepower.controller;


import cn.qx.sharepower.model.JsonResult;
import cn.qx.sharepower.model.param.ResourceParam;
import cn.qx.sharepower.service.ResourceService;
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
public class ResourceController {

    private ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @ResponseBody
    @PostMapping("/getList")
    public JsonResult add(@RequestBody ResourceParam resourcesParam){
        return resourceService.getList(resourcesParam);
    }
}
