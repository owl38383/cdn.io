const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
//console.log(obj)

let vip = {
    "userId": "1745779308382343168",
    "planId": "invitationGift",
    "displayName": "高级会员 ",
    "priority": 2,
    "privilege": [
        {
            "privilegeId": "export",
            "privilegeName": "export",
            "typeAndTimesMap": {
                "1": 99999
            },
            "usedTimes": 0,
            "description": "下载导出Excel",
            "status": 1
        },
        {
            "privilegeId": "bsr_1000",
            "privilegeName": "bsr_1000",
            "typeAndTimesMap": {
                "1": 99999
            },
            "usedTimes": 0,
            "description": "BSR1000+",
            "status": 1
        },
        {
            "privilegeId": "ds_compare",
            "privilegeName": "ds_compare",
            "typeAndTimesMap": {
                "1": 99999
            },
            "usedTimes": 0,
            "description": "商品对比",
            "status": 1
        },
        {
            "privilegeId": "product_revenue",
            "privilegeName": "product_revenue",
            "typeAndTimesMap": {
                "1": 99999
            },
            "usedTimes": 0,
            "description": "商品销量、销售额",
            "status": 1
        },
        {
            "privilegeId": "search_by_img",
            "privilegeName": "search_by_img",
            "typeAndTimesMap": {
                "1": 99999
            },
            "usedTimes": 0,
            "description": "以图搜物",
            "status": 1
        },
        {
            "privilegeId": "sif",
            "privilegeName": "sif",
            "typeAndTimesMap": {
                "1": 3
            },
            "usedTimes": 99999,
            "description": "流量查询",
            "status": 1
        }
    ],
    "limitSettings": {
        "ds_compare": {
            "unit": "day",
            "times": 99999
        },
        "sif": {
            "unit": "day",
            "times": 99999
        },
        "search_by_img": {
            "unit": "day",
            "times": 99999
        },
        "bsr_1000": {
            "unit": "day",
            "times": 99999
        },
        "export": {
            "unit": "month",
            "times": 99999
        },
        "product_revenue": {
            "unit": "day",
            "times": 99999
        }
    },
    "startTime": 1705062342816,
    "expirationTime": 4071903957000,
    "lastVIPPriority": [
        {
            "privilegeId": "export",
            "privilegeName": "export",
            "typeAndTimesMap": {
                "2": 9999
            },
            "usedTimes": 0,
            "description": "下载导出Excel",
            "status": 1
        },
        {
            "privilegeId": "bsr_1000",
            "privilegeName": "bsr_1000",
            "typeAndTimesMap": {
                "2": 9999
            },
            "usedTimes": 0,
            "description": "BSR1000+",
            "status": 1
        },
        {
            "privilegeId": "ds_compare",
            "privilegeName": "ds_compare",
            "typeAndTimesMap": {
                "2": 9999
            },
            "usedTimes": 0,
            "description": "商品对比",
            "status": 1
        },
        {
            "privilegeId": "product_revenue",
            "privilegeName": "product_revenue",
            "typeAndTimesMap": {
                "2": 9999
            },
            "usedTimes": 0,
            "description": "商品销量、销售额",
            "status": 1
        },
        {
            "privilegeId": "search_by_img",
            "privilegeName": "search_by_img",
            "typeAndTimesMap": {
                "2": 9999
            },
            "usedTimes": 0,
            "description": "以图搜物",
            "status": 1
        },
        {
            "privilegeId": "sif",
            "privilegeName": "sif",
            "typeAndTimesMap": {
                "2": 9999
            },
            "usedTimes": 0,
            "description": "流量查询",
            "status": 1
        }
    ],
    "lastVIPExpirationTime": 4071903957000
}

obj = Object.assign(obj,vip)
$done({ body: JSON.stringify(obj)});
