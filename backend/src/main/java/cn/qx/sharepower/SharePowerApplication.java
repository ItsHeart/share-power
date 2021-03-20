package cn.qx.sharepower;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@MapperScan("cn.qx.sharepower.dto")
@EnableScheduling
@EnableAsync
public class SharePowerApplication {

    public static void main(String[] args) {
        SpringApplication.run(SharePowerApplication.class, args);
    }

}
