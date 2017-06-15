<?php
	header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    if($link){
    	$newsid = $_POST['newsid'];
        mysqli_query($link,"SET NAMES utf8");

    	$sql= "DELETE FROM `news` WHERE `news`.`id`={$newsid}";
        // $sql="UPDATE `news` SET `status`='0' WHERE `id`='{$newsid}'";
        
    	mysqli_query($link,$sql);

    	echo json_encode(array('删除成功' =>'成功'));
    }
    mysqli_close($link);







?>