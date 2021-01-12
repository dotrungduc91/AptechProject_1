	
	var Orded_List = [];
	$(function() {


	})

function muangay1(){
	var order_information = {
			"product_name": "0360119299ON 314",
			"product_quantity": 1,
			"product_price": 299000,
		}

	Orded_List.push(order_information)	
	localStorage.setItem('Order_db',JSON.stringify(Orded_List))

	}

	function muangay2(){
	var order_information = {
			"product_name": "0360119299ON 314",
			"product_quantity": 1,
			"product_price": 399000,
		}

	Orded_List.push(order_information)	
	localStorage.setItem('Order_db',JSON.stringify(Orded_List))

	}









// CAROSEL SALE OFF PRODUCT
total = document.getElementsByClassName('product_sale_off').length -5;
size = document.getElementById('product_sale_off').clientWidth;
sizemax = size*total;
 marginLeft = 0;

  //  $(window).resize(function(){
  //   size = document.getElementById('product_sale_off').clientWidth;
  // });

function moveup_saleoff(){
	// console.log(total);
	marginLeft = marginLeft + size;
	if (marginLeft>sizemax) {
		marginLeft = 0;
	}
	$('#total_product_sale_off').css("marginLeft",'-' + marginLeft  + 'px') 
}

function movedown_saleoff(){
	marginLeft = marginLeft - size;
	if (marginLeft<0) {
		marginLeft = sizemax;
	}
	document.getElementById('total_product_sale_off').style.marginLeft = '-' + marginLeft  + 'px';
	
}

setInterval(moveup_saleoff, 2000);


// CAROSEL SALE GOOD PRODUCT
total_salegood = document.getElementsByClassName('product_sale_good').length -5;
size_salegood = document.getElementById('product_sale_good').clientWidth;
sizemax_salegood = size_salegood*total_salegood;
 marginLeft_salegood = 0;

function moveup_salegood(){
	// console.log(total_salegood)
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


// TEXT CHANGE
var a = $('.text_change_content');
index = 0;
function text_change(){
	// console.log(a);
	for (i=0;i<a.length;i++){
		
		$(a[i]).hide()
	}
		
		$(a[index]).show()
		
		a[index].style.animation = "move_text 1s";
		a[index].animate({})
		index = index + 1;
		if (index>a.length-1) {
			index  = 0;
		}
	}
	setInterval(text_change,2000)
	






