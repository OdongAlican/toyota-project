function validation (e){

var customerId= document.getElementById('customer_id_input').value;


const cus = /[A-Z]{3}$/

if (cus.test(customerId)){
    document.getElementById('customer_id_input').value;
}

else{
    return false;
}


e.preventDefault()
}