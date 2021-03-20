package cn.qx.sharepower.dto;

import cn.qx.sharepower.model.Resource;
import cn.qx.sharepower.model.param.ResourceParam;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Author: 丁晓诚
 * @Date: 2021/3/14 13:06
 */
@Repository
public interface ResourceDto {
    List<Resource> getList(ResourceParam resourceParam);
    void deleteByPrimaryKey(int id);
    void insert(Resource resource);
    void update(Resource resource);
}
