const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
//console.log(obj)

let vip = {
    "vip_state": 2,
    "vip_valid_till_date": "2099\u5e7406\u670809\u65e5",
    
}

obj = Object.assign(obj,vip)
$done({ body: JSON.stringify(obj)});
