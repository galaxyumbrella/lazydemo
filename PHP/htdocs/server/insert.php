<?php
    header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    
    if($link){
    	//插入新闻
    	$newstitle=$_POST['newstitle'];
    	$newstype=$_POST['newstype'];
    	$newsimg=$_POST['newsimg'];
    	$newstime=$_POST['newstime'];
    	$newssrc=$_POST['newssrc'];
    	$sql="INSERT INTO `news` (`newstitle`,`newstype`,`newsimg`,`newstime`,`newssrc`,`status`) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}','1')";
    	mysqli_query($link,"set names utf8");
	    $result =mysqli_query($link,$sql);
	    echo json_encode(array('success'=>'ok'));
    }

   mysqli_close($link);


?>