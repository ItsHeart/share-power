package cn.qx.sharepower.dto;

import cn.qx.sharesutil.model.Record;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Author: 丁晓诚
 * @Date: 2021/2/7 13:06
 */
@Repository
public interface RecordDto {
    int insertBatch(List<Record> records);
}
