<?php
if (!session_id()) {
    session_start();
}
const BR = '<br>';
require '../app/init.php';


$obj = new App();
