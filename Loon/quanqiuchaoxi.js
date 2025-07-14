const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
//console.log(obj)

let vip = {
    "isVip":1,
    "vipExpireTime": "4908130950",
}

obj = Object.assign(obj,vip)
$done({ body: JSON.stringify(obj)});
