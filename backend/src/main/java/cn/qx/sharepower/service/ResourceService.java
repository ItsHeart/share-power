package cn.qx.sharepower.service;


import cn.qx.sharepower.model.JsonResult;
import cn.qx.sharepower.model.Resource;
import cn.qx.sharepower.model.param.ResourceParam;

/**
 * @Author: 丁晓诚
 * @Date: 2021/3/14 14:54
 */
public interface ResourceService {
    JsonResult getList(ResourceParam resourcesParam);
    JsonResult get(int id);
    JsonResult add(Resource resource);
}
