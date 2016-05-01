$(function(){
	var $closeBtn=$(".closebtn");
	var $topads=$(".top-ads");
	$closeBtn.on("click",function(){
		$topads.css({"display":"none"});
	})
	var $first=$(".first");
	var num=$(".first>a");
	var fH=$first.height()/num.length;
	var i=0;
	setInterval(function(){
		i++;
		if(i>=num.length){
			i=0;
		}
		$first.animate({"top":-i*fH},500);
	},2000)

	var $starttime=$(".starttime i:last-child");
	var time=59;
	setInterval(function(){
		time--;
		if(time<0){
			time=59;
		}
		$starttime.html(time);
	},1000)
})