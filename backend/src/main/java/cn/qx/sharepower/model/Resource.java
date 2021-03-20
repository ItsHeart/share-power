package cn.qx.sharepower.model;

import lombok.Data;

/**
 * @Author: 丁晓诚
 * @Date: 2021/3/14 16:00
 */
@Data
public class Resources {
    private int id;
    private String type;
    /**
     * 资源地址
     */
    private String url;
    /**
     * 封面地址
     */
    private String cover;
    private String describe;
    /**
     * 点赞
     */
    private int up;
    /**
     * 踩
     */
    private int down;
    private String status;
}
