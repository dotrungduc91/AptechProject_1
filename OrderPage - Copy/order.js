	// var Orded_List = [];
	var index = ""

	$(function() {
			//string json => localStorage
		var json = localStorage.getItem('Order_db')
		//JSON.parse => chuyen string => mang object
		Orded_List = JSON.parse(json)
		//Mang object
		if(Orded_List == null) {
			Orded_List = []
		}

		display_Orded_List()
	})





	function display_Orded_List(){
		$("#order_result").html('')
		for (i=0;i<Orded_List.length;i++) {
			$("#order_result").append(
				`<tr>
				<th>${Orded_List[i].product_name}</th>
				<th><input onkeyup="change_total_money(${i})" id ="product_quantity_${i}" style="color:white; border:none" type="number" min = '1' name="" class = "bg-dark"></th>

				<th>${Orded_List[i].product_price}</th>
			<th ><input id="total_money_${i}" style="color:white; border:none"  class = "bg-dark"  value="${Orded_List[i].product_quantity*Orded_List[i].product_price}"></th>
				<th><button onclick="edit_order(${i})">Sửa</button></th>
				<th><button onclick="delete_order(${i})">Xóa</button></th>
				</tr>`
				)
			$("#product_quantity_"+i).val(Orded_List[i].product_quantity)
		}
	}

		
	function change_total_money(index){
		product_quantity = $("#product_quantity_"+index).val() 
		total_money = product_quantity  *  Orded_List[index].product_price
		$("#total_money_"+index).val(total_money)
	}
		 


			


	

	function delete_order(index){
		console.log(index);
		Orded_List.splice(index,1)
		localStorage.setItem('Orded_db',JSON.stringify(Orded_List))
		json = localStorage.getItem('Orded_db')
		Orded_List = JSON.parse(json)
				if(Orded_List == null) {
			Orded_List = []
			}
		display_Orded_List()
	}

	// function edit_order(i){
	// 	index = i
	// 	var order_information = Orded_List[index]
	// 	document.getElementById('check_index').value = index;
	// 	// $("#check_index").val(index);
	// 	// index_fix = $("#check_index").val()
	// 		$("#name").val(Orded_List[index].name);
	// 	 $("#phonenumber").val(Orded_List[index].phonenumber);
	// 	 $("#address").val(Orded_List[index].address);
	// 	 $("#product_rollno").val(Orded_List[index].product_rollno);
	// 	$("#product_quantity").val(Orded_List[index].product_quantity);
	// }

