	var Orded_List = [];
	// var index 

	$(function() {
			//string json => localStorage
		var json = localStorage.getItem('Orded_List_db')
		//JSON.parse => chuyen string => mang object
		Orded_List = JSON.parse(json)
		//Mang object
		if(Orded_List == null) {
			Orded_List = []
		}

		display_Orded_List()
	})

	function add_order_information(){
		console.log("1")
		name = $("#name").val();
		phonenumber = $("#phonenumber").val();
		address = $("#address").val();
		product_rollno = $("#product_rollno").val();
		product_quantity = $("#product_quantity").val();
		index = $("#check_index").val();


		var order_information = {
			"name": name,
			"phonenumber": phonenumber,
			"address": address,
			"product_rollno": product_rollno,
			"product_quantity": product_quantity,
		}


		if (index != "") {
			Orded_List[index] = order_information;
			display_Orded_List();
			index = ""
			return;
		}

		Orded_List.push(order_information)

		display_Orded_List()


			localStorage.setItem ('Orded_List_db', JSON.stringify(Orded_List))
	}


// localStorage.setItem(order_db, JSON.stringify(Orded_List))
// var json=localStorage.getItem(order_db)
// var Orded_List = JSON.parse(json)

	function display_Orded_List(){
		$("#order_result").html('')
		for (i=0;i<Orded_List.length;i++) {
			$("#order_result").append(
				`<tr>
				<th>${Orded_List[i].name}</th>
				<th>${Orded_List[i].phonenumber}</th>
				<th>${Orded_List[i].address}</th>
				<th>${Orded_List[i].product_rollno}</th>
				<th>${Orded_List[i].product_quantity}</th>
				<th><button onclick="edit_order(${i})">Sửa</button></th>
				<th><button onclick="delete_order(${i})">Xóa</button></th>
				</tr>`
				)
		}
	}

	function delete_order(index){
		console.log(index);
		Orded_List.splice(index,1)
		display_Orded_List()
	}

	function edit_order(index){
		// index = i
		var order_information = Orded_List[index]
		document.getElementById('check_index').value = index;
		// $("#check_index").val(index);
		// index_fix = $("#check_index").val()
			$("#name").val(Orded_List[index].name);
		 $("#phonenumber").val(Orded_List[index].phonenumber);
		 $("#address").val(Orded_List[index].address);
		 $("#product_rollno").val(Orded_List[index].product_rollno);
		$("#product_quantity").val(Orded_List[index].product_quantity);
	}

