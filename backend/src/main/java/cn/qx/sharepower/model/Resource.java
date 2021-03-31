package cn.qx.sharepower.model;

import lombok.Data;

import java.util.Date;

/**
 * @Author: 丁晓诚
 * @Date: 2021/3/14 16:00
 */
@Data
public class Resource {
    private int id;
    private String publisher;
    private Date publishTime;
    private String type;
    private String title;
    /**
     * 资源地址
     */
    private String url;
    /**
     * 封面地址
     */
    private String cover;
    private String tags;
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
