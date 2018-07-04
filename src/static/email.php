<?php

require 'libs/email.php';
require 'libs/config.php';
$email = new Email($config);
$email->send($_POST);
