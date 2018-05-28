function configWxshare(title, desc, link, imgUrl) {
  if (!wx) return;

  wx.onMenuShareTimeline({
    title: desc, // 分享标题
    link: link, // 分享链接
    imgUrl: imgUrl, // 分享图标
    success: function() {
      // 用户确认分享后执行的回调函数

    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });

  wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: link, // 分享链接
    imgUrl: imgUrl, // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function() {
      // 用户确认分享后执行的回调函数
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  });
}

$(document).ready(function() {
  $.ajax({
    url: 'wxshare/api/',
    data: {
      url: window.location.href
    },
    dataType: "json"
  }).success(function(data) {

    // console.log(data);
    wx.config({
      // debug: true,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'onMenuShareTimeline', 'onMenuShareAppMessage'
      ]
    });
    wx.ready(function() {
      // -------------配置-------------
      var ROOT_URL = 'http://huodong.baidu.com/nuomi37/';
      var title = '选个猛男宠自己，就是任性!';
      var desc = '3月7日全国多地影院有猛男出没。姐妹们，围观趁早！下手要快！你懂的...';
      var link = ROOT_URL;
      var imgUrl = ROOT_URL + 'img/weixin.jpg';
      configWxshare(title, desc, link, imgUrl);
    });

  });
});
