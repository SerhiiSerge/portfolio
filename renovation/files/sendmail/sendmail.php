<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('en', 'phpmailer/language/');
	$mail->IsHTML(true);

	
	$mail->isSMTP();                                            //Send using SMTP
	$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
	$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
	$mail->Username   = 'example@gmail.com';                     //SMTP username
	$mail->Password   = 'pass';                               //SMTP password
	$mail->SMTPSecure = 'TLS';            //Enable implicit TLS encryption
	$mail->Port       = 587;                 
	

	//Від кого лист
	$mail->setFrom('example@gmail.com', 'Letter from'); // Вказати потрібний E-mail
	//Кому відправити
	$mail->addAddress('example@gmail.com'); // Вказати потрібний E-mail
	//Тема листа
	$mail->Subject = 'Greetings!';

	//Тіло листа
	$body = '<h1>This is the letter!</h1>';

	if(trim(!empty($_POST['name']))){
		$body .= '<p>Name: <strong>'.$_POST['name'].'</strong></p>';
	}	
	if(trim(!empty($_POST['email']))){
		$body .= '<p>Email: <strong>'.$_POST['email'].'</strong></p>';
	}	
	if(trim(!empty($_POST['phone']))){
		$body .= '<p>Phone number: <strong>'.$_POST['phone'].'</strong></p>';
	}	
	
	/*
	//Прикріпити файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//шлях завантаження файлу
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузимо файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>The photo is attached to the letter</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/

	$mail->Body = $body;

	//Відправляємо
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Email sent!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>