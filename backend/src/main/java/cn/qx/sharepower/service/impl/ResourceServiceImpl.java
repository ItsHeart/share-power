package cn.qx.sharepower.service.impl;

import cn.qx.sharepower.dao.ResourceDao;
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

    private ResourceDao resourceDao;

    public ResourceServiceImpl(ResourceDao resourceDao) {
        this.resourceDao = resourceDao;
    }


    @Override
    public JsonResult getList(ResourceParam resourcesParam) {
        List<Resource> resourceList = resourceDao.getList(resourcesParam);
        JsonResult jsonResult = JsonResult.ok();
        jsonResult.put("data",resourceList);
        jsonResult.put("total",resourceDao.getTotalCount());
        return jsonResult;
    }

    @Override
    public JsonResult get(int id) {
        Resource resource = resourceDao.getById(id);
        JsonResult jsonResult = JsonResult.ok();
        jsonResult.put("data",resource);
        return jsonResult;
    }

    @Override
    public JsonResult add(Resource resource) {
        resourceDao.insert(resource);
        JsonResult jsonResult = JsonResult.ok();
        jsonResult.put("data",resource.getId());
        return jsonResult;
    }
}
