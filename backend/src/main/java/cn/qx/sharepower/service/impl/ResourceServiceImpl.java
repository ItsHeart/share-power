package cn.qx.sharepower.service.impl;

import cn.qx.sharepower.dto.ResourceDto;
import cn.qx.sharepower.model.JsonResult;
import cn.qx.sharepower.model.Resource;
import cn.qx.sharepower.model.param.ResourceParam;
import cn.qx.sharepower.service.ResourceService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: 丁晓诚
 * @Date: 2021/3/14 14:54
 */
@Service
public class ResourceServiceImpl implements ResourceService {

    private ResourceDto resourceDto;

    public ResourceServiceImpl(ResourceDto resourceDto) {
        this.resourceDto = resourceDto;
    }


    @Override
    public JsonResult getList(ResourceParam resourcesParam) {
        List<Resource> resourceList = resourceDto.getList(resourcesParam);
        JsonResult jsonResult = JsonResult.ok();
        jsonResult.put("data",resourceList);
        return jsonResult;
    }
}
