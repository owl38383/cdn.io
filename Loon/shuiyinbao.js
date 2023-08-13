const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
//console.log(obj)

let vipInfo = {
   {
        "beginTime": "2023-08-13 21:25:24",
        "createTime": "2023-08-13 21:25:23",
        "expireTime": "2099-08-21 21:25:24",
        "firstOpenTime": "2023-08-13 21:25:24",
        "remainDays": 9999999999,
        "sign": "4Qf3rB45uGo",
        "typeName": "永久会员",
        "userSign": "406_LkgLLsg"
    }
};
obj.content.waterVipInfo = vipInfo;
obj.content.qrCarVipInfo = vipInfo;
obj.content.qimingVipInfo = vipInfo;
obj.content.virtualVipInfo = vipInfo;
obj.content.docConvertorVipInfo = vipInfo;

$done({ body: JSON.stringify(obj)});
