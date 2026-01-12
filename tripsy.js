/**
 * 脚本名称: Unlock App Premium
 * 作用: 修改响应体，解锁会员状态
 */

var body = $response.body;
var obj = JSON.parse(body);

// 修改字段为“已订阅”状态
obj.is_premium = true;
obj.is_trial = false; // 通常正式订阅后 trial 为 false，也可以设为 true 看 app 逻辑
obj.is_introductory_offer = false;
obj.is_renew_active = true;

// 设置一个很久以后的过期时间
// 注意：有些 App 需要时间戳 (1700000000)，有些需要 ISO 字符串 ("2099-01-01T...")
// 根据原字段名 expiration_date 猜测通常是字符串，如果是 expiration_ts 则是数字
obj.expiration_date = "2099-09-09T09:09:09Z"; 

// 随意填入一个订阅 ID，防止 App 校验空值
obj.subscription = "com.test.premium.yearly"; 

// 并没有在计费重试期
obj.is_in_billing_retry_period = false;

// 重新打包并结束
$done({body: JSON.stringify(obj)});
