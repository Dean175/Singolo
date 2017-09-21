<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>

	<?php
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			# collect data from the message form

			$name = $_REQUEST['name'];
			$email = $_REQUEST['email'];
			$subject = $_REQUEST['subject'];
			$msg = $_REQUEST['msg'];
			
			if (empty($name)) {
				echo "Name is empty.";
			}
			else {
				echo "Name: " . "$name" . "<br>";
			}
		}


	?>

</body>
</html>
