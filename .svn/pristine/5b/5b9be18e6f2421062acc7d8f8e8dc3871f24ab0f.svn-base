

;(function ($) {
  $.fn.fixHeight = function (options) {
    var opt = $.extend({
        'w': '1',
        'h': '1'
    }, options);
    return this.each(function () {
       	var $this = $(this);
       	// console.log($this.get(0).tagName+'/'+$this.attr('class') );
       	var ratio = opt.h/opt.w;
       	var w = $this.width();
       	$this.height(parseInt(w*ratio));
       	$this.css('position','relative');
       	// console.log('fixHeight():'+w+'/'+parseInt(w*ratio));

       	$(window).resize(function(){
       		w = $this.width();
	       	$this.height(parseInt(w*ratio));
	       	// console.log(w+'/'+parseInt(w*ratio));
       	})
    });
  }
})(jQuery)



//设置图片相对于某元素垂直居中定位。
;(function($){
	$.fn.setImg = function(options){
		//@ref :  相对定位元素，如果为0，则相对父元素定位，否则相对于给定元素定位。
		var opt = $.extend({
			'ref':'0'
		},options);

		return this.each(function(){
				var $this = $(this);
				// console.log('setImg.parent:'+opt.ref);
				// console.log('setImg opt.ref.length:'+opt.ref.length);
				if(opt.ref=='0'){
					var $pt = $this.parent();
				}else if( opt.ref.length>0 ){
					var $pt = opt.ref;
				}else{
					//非法参数据处理(查找不到相对定位元素)
					// console.log('setImg here return');
					return false;
				}

				var ratiot=$this.height()/$this.width();
				var ratiop=$pt.height()/$pt.width();

       	// console.log($this.get(0).tagName+'/'+$this.attr('class') );

				// console.log('setImg() parent.w/h:'+$pt.width()+'/'+$pt.height());
				// console.log('setImg() $this.w/h:'+$this.width()+'/'+$this.height());

				$pt.css({'position':'relative'});
				$this.css({
						'position':'absolute',
						'overflow': 'auto',
 						'margin': 'auto',
					  'top': '0', 'left': '0', 'bottom': '0', 'right': '0'
					})

				if(ratiop>ratiot){
					$this.css({'width':'100%','height':'auto'});
				}else{
					$this.css({'height':'100%','width':'auto'});
				}
		});
	}
})(jQuery)




;(function ($) {
  $.fn.imglazyload = function (options) {
    var opt = $.extend({
    	pos:'$(this)'
    }, options);
    return this.each(function () {
       	var $this = $(this);
       	var imgUrl = $this.attr('data-src');
       	// console.log('imglazyload imgUrl:'+imgUrl)
       	var img = new Image();
				img.src = imgUrl;
		    if(img.complete) {
		        // console.log(img.width, img.height);
		        $this.get(0).appendChild(img);
		        $this.find('img').setImg({ref:$this});
		    }else {
	        img.onload = function () {
	          // console.log(img.width, img.height);
		        $this.get(0).appendChild(img);
		        $this.find('img').setImg({ref:$this});
	          img.onload = null;
	        }
		    }
    });
  }
})(jQuery)









