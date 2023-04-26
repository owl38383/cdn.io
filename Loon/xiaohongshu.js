/*
引用地址https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/xiaohongshu.js
*/
// 2023-04-26 20:10
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
// 图集
// if (obj[0].note_list){
// 	obj[0].note_list[0].images_list.forEach((i)=>{
// 		i.original
// 	})
// }
let mediaUrl = ''
// 视频
if (data[0].video_info_v2){
	mediaUrl = data[0].video_info_v2.media.stream.h264[0].master_url
}

var attach = {
    "openUrl":"loon://switch",
    "mediaUrl":mediaUrl
}
$notification.post("title","subtitle","content",attach)

$done({ body: JSON.stringify(obj) });