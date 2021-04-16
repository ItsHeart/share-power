package cn.qx.sharepower.model.param;

import lombok.Data;

/**
 * @Author: 丁晓诚
 * @Date: 2021/3/14 16:07
 */
@Data
public class ResourceParam {
    private int page;
    private int size;
    private String type;
    private String sort;
    private String order;
    /**
     * 搜索关键词
     **/
    private String text;
}
