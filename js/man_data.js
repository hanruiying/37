
var manData = (function() {

function man(name, img, intro) {
  this.name = name;
  this.img = img;
  this.intro = intro;
}

// man.prototype.f = function() {

// }

var man1 = new man(
  '艾齐',  'img/11.jpg', '傲慢男'
);
var man2 = new man(
'胡佳斌','img/12.jpg','成熟男'
);
var man3 = new man(
'赵宝林','img/13.jpg','张扬男'
);
var man4 = new man(
  '邢济舟','img/14.jpg','成熟男'
);
var man5 = new man(
  '王智威','img/15.jpg','成熟男'
);
var man6 = new man(
  '胡锦阳','img/16.jpg','成熟男'
);
var man7 = new man(
  '王浩','img/17.jpg','傲慢男'
);
var man8 = new man(
  '吴一凡','img/21.jpg','冷酷男'
);
var man9 = new man(
  '王浩','img/22.jpg','冷酷男'
);
var man10 = new man(
  '孙超','img/23.jpg','个性男'
);
var man11 = new man(
  '胡锦阳','img/24.jpg','霸道男'
);
var man12 = new man(
  '韩道敬','img/25.jpg','冷酷男'
);
var man13 = new man(
  '丁宝鹏','img/26.jpg','霸道男'
);
var man14 = new man(
  '郭霈宇','img/27.jpg','冷酷男'
);
var man15 = new man(
  '朱鹏飞','img/31.jpg','型男'
);
var man16 = new man(
  '尹川','img/32.jpg','小鲜肉'
);
var man17 = new man(
  '李佩洋','img/33.jpg','小鲜肉'
);
var man18 = new man(
  '王斌','img/34.jpg','型男'
);
var man19 = new man(
  '王凯','img/35.jpg','型男'
);
var man20 = new man(
  '吴一凡','img/36.jpg','型男'
);
var man21 = new man(
  '徐梦涵','img/37.jpg','型男'
);
var man22 = new man(
  '徐梦涵','img/41.jpg','怪大叔'
);
var man23 = new man(
  '王凯','img/42.jpg','肌肉男'
);
var man24 = new man(
  '王军','img/43.jpg','怪大叔'
);
var man25 = new man(
  '王炳棋','img/44.jpg','型男'
);
var man26 = new man(
  '丁宝鹏','img/45.jpg','型男'
);
var man27 = new man(
  '王炳棋','img/46.jpg','肌肉男'
);
var man28 = new man(
  '王智威','img/47.jpg','型男'
);
var man29 = new man(
  '王斌','img/51.jpg','小鲜肉'
);
var man30 = new man(
  '郭霈宇','img/52.jpg','忧郁男'
);
var man31 = new man(
  '赵宝林','img/53.jpg','忧郁男'
);
var man32 = new man(
  '王军','img/54.jpg','忧郁男'
);
var man33 = new man(
  '尹川','img/55.jpg','小鲜肉'
);
var man34 = new man(
  '李佩洋','img/56.jpg','小鲜肉'
);
var man35 = new man(
  '王浩','img/57.jpg','小鲜肉'
);

var mans = [
  man1,man2,man3,man4,man5,man6,man7,man8,man9,man10,
  man11,man12,man13,man14,man15,man16,man17,man18,man19,man20,
  man21,man22,man23,man24,man25,man26,man27,man28,man29,man30,
  man31,man32,man33,man34,man35

];

return {
  mans: mans
}

})()