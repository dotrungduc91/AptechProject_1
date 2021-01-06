// CAROSEL BANNNER IMG
total = document.getElementsByClassName('banner').length -1;
size = document.getElementById('banner').clientWidth;
sizemax = size*total;
 marginLeft = 0;

function moveup_banner(){
	marginLeft = marginLeft + size;
	if (marginLeft>sizemax) {
		marginLeft = 0;
	}
	document.getElementById('total_banner').style.marginLeft = '-' + marginLeft  + 'px';
	
}

function movedown_banner(){
	marginLeft = marginLeft - size;
	if (marginLeft<0) {
		marginLeft = sizemax;
	}
	document.getElementById('total_banner').style.marginLeft = '-' + marginLeft  + 'px';
	
}

setInterval(moveup_banner, 2000);


// CAROSEL SAN PHAM NOI BAT
total_noibat = document.getElementsByClassName('product_noibat').length -5;
size_noibat = document.getElementById('product_noibat').clientWidth;
sizemax_noibat = size_noibat*total_noibat;
 marginLeft_noibat = 0;

function moveup_noibat(){
	marginLeft_noibat = marginLeft_noibat + size_noibat;
	if (marginLeft_noibat>sizemax_noibat) {
		marginLeft_noibat = 0;
	}
	document.getElementById('total_product_noibat').style.marginLeft = '-' + marginLeft_noibat  + 'px';
	
}

function movedown_noibat(){
	marginLeft_noibat= marginLeft_noibat - size_noibat;
	if (marginLeft_noibat<0) {
		marginLeft_noibat = sizemax_noibat;
	}
	document.getElementById('total_product_noibat').style.marginLeft = '-' + marginLeft_noibat  + 'px';
	
}
setInterval(moveup_noibat, 2000);

// CAROSEL SAN PHAM BAN CHAY
total_sale_good = document.getElementsByClassName('product_sale_good').length -5;
size_sale_good = document.getElementById('product_sale_good').clientWidth;
sizemax_sale_good = size_sale_good*total_sale_good;
 marginLeft_sale_good = 0;

function moveup_salegood(){
	marginLeft_sale_good = marginLeft_sale_good + size_sale_good;
	if (marginLeft_sale_good>sizemax_sale_good) {
		marginLeft_sale_good = 0;
	}
	document.getElementById('total_product_sale_good').style.marginLeft = '-' + marginLeft_sale_good  + 'px';
	
}

function movedown_salegood(){
	marginLeft_sale_good= marginLeft_sale_good - size_sale_good;
	if (marginLeft_sale_good<0) {
		marginLeft_sale_good = sizemax_sale_good;
	}
	document.getElementById('total_product_sale_good').style.marginLeft = '-' + marginLeft_sale_good  + 'px';
	
}
setInterval(moveup_salegood, 2000);

// MOBILE NAV BAR

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// TOOGLE MENU MOBLE
		$(document).ready(function(){
		  	$(".toggle_menu_mobile").click(function(){
		    	$(this).parent().find('.toggle_submenu_mobile').slideToggle();
		  	});
		});


		$(document).ready(function(){
		  	$(".toggle_menu_mobile_last").click(function(){
		    	$(this).parent().find('.toggle_submenu_mobile_last').slideToggle();
		  	});
		});


// TEXT CHANGE
var a = $('.text_change_content');
index = 0;
function text_change(){
	console.log(a);
	for (i=0;i<a.length;i++){
		a[i].style.display = "none";
		// a[i].hide(1000)
	}
		// a[index].slideUp("slow");
		// a[index].show("slow")
		a[index].style.display = "block";
		a[index].style.animation = "move_text 1s";
		index = index + 1;
		if (index>a.length-1) {
			index  = 0;
		}
	}
	setInterval(text_change,2000)
	






