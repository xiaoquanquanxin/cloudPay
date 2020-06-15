####2、公众号内网页
#####1）网页授权获取用户基本信息：
通过该接口，可以获取用户的基本信息（获取用户的OpenID是无需用户同意的，获取用户的基本信息则需用户同意）
#####2）微信JS-SDK：
是开发者在网页上通过JavaScript代码使用微信原生功能的工具包，
开发者可以使用它在网页上录制和播放微信语音、监听微信分享、上传手机本地图片、拍照等许多能力。

微信支付接口--需申请
填写服务器配置
https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Access_Overview.html


关于网页授权回调域名的说明
1、在微信公众号请求用户网页授权之前，
开发者需要先到公众平台官网中的“开发 - 接口权限 - 网页服务 - 网页帐号 - 网页授权获取用户基本信息”的配置选项中，
修改授权回调域名
https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html

2
支付授权目录是：你的支付界面访问路径
http://qq784602719.imwork.net/school/rechargeHome  去掉最后一个斜杠后面的字符串
支付授权目录 http://qq784602719.imwork.net/school/ 

