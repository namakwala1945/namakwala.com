<?php 
if (isset($_REQUEST['email']))  { 
    $admin_email = "info@namakwala.com";
	$subject = "Enquiry";
	$name = $_REQUEST['name'];
	$company = $_REQUEST['company'];
	$country = $_REQUEST['country'];
    $email = $_REQUEST['email'];
	$mobile = $_REQUEST['mobile'];
	$product = $_REQUEST['product'];
	$pro_list = $_REQUEST['pro_list'];
	$comment = $_REQUEST['comment'];
	
	//print_r($_POST);die("fff");
	$email_message .= "Name: ".$name."\n";
	$email_message .= "company: ".$company."\n";
	$email_message .= "Email: ".$email."\n";
	$email_message .= "Mobile No.: ".$mobile."\n";
	$email_message .= "country: ".$country."\n";
	$email_message .= "Product: ".$product."\n";
	$email_message .= "Product List: ".$pro_list."\n";
	$email_message .= "Message: ".$comment."\n";
	mail($admin_email, "$subject", $email_message, "From:" . $email);
	
	echo("<script>location.href = '../index.html';</script>");
}else{
	   
}
?>