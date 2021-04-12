package cn.qx.sharepower.controller;


import cn.qx.sharepower.model.JsonResult;
import cn.qx.sharepower.model.Resource;
import cn.qx.sharepower.model.param.ResourceParam;
import cn.qx.sharepower.service.ResourceService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    public JsonResult getList(@RequestBody ResourceParam resourcesParam) throws InterruptedException {
        Thread.sleep(3000);
        return resourceService.getList(resourcesParam);
    }

    @ResponseBody
    @GetMapping("/get")
    public JsonResult get(int id){
        return resourceService.get(id);
    }

    @ResponseBody
    @PostMapping("/add")
    public JsonResult add(@RequestBody Resource resources) {
        return resourceService.add(resources);
    }
}
