package cn.qx.sharesutil.model;

import java.util.HashMap;

/**
 * 返回结果对象
 */
public class JsonResult extends HashMap<String, Object> {
    private static final long serialVersionUID = 1L;

    public JsonResult() {
    }

    /**
     * 返回成功
     */
    public static JsonResult ok() {
        return ok("操作成功");
    }

    /**
     * 返回成功
     */
    public static JsonResult ok(String message) {
        return ok(200, message);
    }

    /**
     * 返回成功
     */
    public static JsonResult ok(int code, String message) {
        JsonResult jsonResult = new JsonResult();
        jsonResult.put("code", code);
        jsonResult.put("msg", message);
        return jsonResult;
    }

    /**
     * 返回失败
     */
    public static JsonResult error() {
        return error("操作失败");
    }

    /**
     * 返回失败
     */
    public static JsonResult error(String messag) {
        return error(500, messag);
    }

    /**
     * 返回失败
     */
    public static JsonResult error(int code, String message) {
        return ok(code, message);
    }

    /**
     * 设置code
     */
    public JsonResult setCode(int code) {
        super.put("code", code);
        return this;
    }

    /**
     * 设置message
     */
    public JsonResult setMessage(String message) {
        super.put("msg", message);
        return this;
    }

    /**
     * 放入object
     */
    @Override
    public JsonResult put(String key, Object object) {
        super.put(key, object);
        return this;
    }

    /**
     * 返回成功
     */
    public JsonResult success(String key, Object object) {
        super.put(key, object);
        super.put("msg", "返回成功");
        super.put("code", 200);
        return this;
    }
    /**
     * 返回成功
     */
    public JsonResult success(String message) {
        super.put("msg", message );
        super.put("code", 200);
        return this;
    }
    /**
     * 返回成功
     */
    public JsonResult success(Object object) {
        super.put("info", object);
        super.put("msg", "返回成功");
        super.put("code", 200);
        return this;
    }
    /**
     * 返回失败
     */
    public JsonResult fail(String message) {
        super.put("msg", message);
        super.put("code", 204);
        return this;
    }
}