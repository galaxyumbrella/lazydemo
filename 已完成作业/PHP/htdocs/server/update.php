<?php
    header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    
    if($link){
    	//修改新闻
    	$newstitle=$_POST['newstitle'];
    	$newstype=$_POST['newstype'];
    	$newsimg=$_POST['newsimg'];
    	$newstime=$_POST['newstime'];
    	$newssrc=$_POST['newssrc'];
        $newsid=$_POST['id'];
        // 反单引号，单引号
    	$sql="UPDATE `news` SET `newstitle` = '{$newstitle}',`newstype`='{$newstype}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`='{$newssrc}' WHERE `id`='{$newsid}'";

    	mysqli_query($link,"set names utf8");
	    $result =mysqli_query($link,$sql);
	    echo json_encode(array('success'=>$sql));
    }

   mysqli_close($link);


?>