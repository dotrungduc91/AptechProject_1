// CAROSEL SALE OFF PRODUCT
total = document.getElementsByClassName('product_sale_off').length -5;
size = document.getElementById('product_sale_off').clientWidth;
sizemax = size*total;
 marginLeft = 0;

function moveup_saleoff(){
	console.log(total);
	marginLeft = marginLeft + size;
	if (marginLeft>sizemax) {
		marginLeft = 0;
	}
	document.getElementById('total_product_sale_off').style.marginLeft = '-' + marginLeft  + 'px';
	
}

function movedown_saleoff(){
	marginLeft = marginLeft - size;
	if (marginLeft<0) {
		marginLeft = sizemax;
	}
	document.getElementById('total_product_sale_off').style.marginLeft = '-' + marginLeft  + 'px';
	
}

// setInterval(moveup_saleoff, 2000);


// CAROSEL SALE GOOD PRODUCT
total_salegood = document.getElementsByClassName('product_sale_good').length -5;
size_salegood = document.getElementById('product_sale_good').clientWidth;
sizemax_salegood = size_salegood*total_salegood;
 marginLeft_salegood = 0;

function moveup_salegood(){
	console.log(total_salegood)
	marginLeft_salegood = marginLeft_salegood + size_salegood;
	if (marginLeft_salegood>sizemax_salegood) {
		marginLeft_salegood = 0;
	}
	document.getElementById('total_product_sale_good').style.marginLeft = '-' + marginLeft_salegood  + 'px';
	
}

function movedown_salegood(){
	marginLeft_salegood= marginLeft_salegood - size_salegood;
	if (marginLeft_salegood<0) {
		marginLeft_salegood = sizemax_salegood;
	}
	document.getElementById('total_product_sale_good').style.marginLeft = '-' + marginLeft_salegood  + 'px';
	
}


// CAROSEL BRANCH PRODUCT
total_branch = document.getElementsByClassName('product_branch').length -5;
size_branch = document.getElementById('product_branch').clientWidth;
sizemax_branch = size_branch*total_branch;
 marginLeft_branch = 0;

function moveup_branch (){
	marginLeft_branch  = marginLeft_branch  + 1 ;
	if (marginLeft_branch >sizemax_branch ) {
		marginLeft_branch  = 0;
	}
	document.getElementById('total_product_branch').style.marginLeft = '-' + marginLeft_branch + 'px';
	
}
setInterval(moveup_branch , 10);


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


// CLOSE MODAL




