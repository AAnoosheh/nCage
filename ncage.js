(function() {
	var main = function($) { 
		
		var self = $.nCage = new function(){};
		
		$.extend(self, {
			nCageImgs : [
			'http://www.profightdb.com/img/wrestlers/thumbs-600/4d54a6c767johncena.jpg',
			'http://www.wwe.com/f/styles/wwe_large/public/all/2016/07/John_Cena_bio--b51ea9d0b6f475af953923ac7791391b.jpg',
			'http://www.wwe.com/f/styles/gallery_img_s/public/all/2017/01/John_Cena_stat--53eefb07344f336ed7edf78a0474c6b6.png',
			'http://www.dayherald.com/wp-content/uploads/2016/12/John-Cena.jpg',
			'https://www.thefamouspeople.com/profiles/images/john-cena-2.jpg',
			'https://cdn.thinglink.me/api/image/757291439620096000/1240/10/scaletowidth',
			'https://s3.amazonaws.com/images.charitybuzz.com/images/183228/original.png?1438018411',
			'https://www.thesun.co.uk/wp-content/uploads/2017/11/nintchdbpict0002708130681.jpg?strip=all&w=716',
			'http://cdn.newsapi.com.au/image/v1/1fb640ea92178f7038d60868f7ae9c52',
			'http://blacksportsonline.com/home/wp-content/uploads/2017/10/John-Cena.jpg',
			'http://kb4images.com/images/pics-of-john-cena/37021120-pics-of-john-cena.jpg',
			'http://givemesport.azureedge.net/images/17/12/28/431ed2919ec8021f56f9e61c7a920a32/960.jpg',
			'https://vignette.wikia.nocookie.net/millenia-hyper-fighting/images/5/59/John_Cena.jpg/revision/latest?cb=20131102115942',
			'https://i.pinimg.com/originals/21/ee/c0/21eec07d377dafc6eeef624eb9f490c7.jpg'
			],
			handleImages : function (lstImgs, time)
			{
				$.each($('img'), function(i,item) {
					
					//Only replace ~1% of images for stealthiness
					if(Math.random() > 0.01)
						return true;
					
					//Skip if image is already replaced
					if($.inArray($(item).attr('src'), lstImgs) == -1)
					{
						var h = $(item).height();
						var w = $(item).width();
						
						//If image loaded
						if(h > 0 && w > 0)
						{
							//Replace
							$(item).css('width', w + 'px').css('height', h + 'px');
							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
						}
						else
						{
							//Replace when loaded
							$(item).load(function(){
								//Prevent 'infinite' loop
									if($.inArray($(item).attr('src'), lstImgs) == -1)
									{
										var h = $(item).height();
										var w = $(item).width();
										$(item).css('width', w + 'px').css('height', h + 'px');
										$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
									}
								});
							}
						}
					});
					
					//Keep replacing
					if(time > 0)
						setTimeout(function(){self.handleImages(lstImgs, time);},time);
				}
			});

		//Run on jQuery ready
		$(function(){
			self.handleImages(self.nCageImgs, 3000);
		});
	};
	
	//Run main if JQuery present
	if(typeof jQuery != 'undefined')
		main(jQuery);
 })();

 
