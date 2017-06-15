<?php
	header("content-type:application/json;charset=utf-8");
    require_once('db.php');
    // 修改新闻
    if($link){
    	$newsid = $_GET['newsid'];
        mysqli_query($link,"SET NAMES utf8");

    	$sql= "SELECT * FROM `news` WHERE `id`={$newsid}";

    	$result=mysqli_query($link,$sql);
        $senddata=array();
        while ($row=mysqli_fetch_assoc($result)) {
            array_push($senddata,$arrayName = array(
                                                     "id" =>$row["id"] , 
                                                     "newstype"=>$row["newstype"],
                                                     "newstitle"=>$row["newstitle"],
                                                     "newsimg"=>$row["newsimg"],
                                                     "newstime"=>$row["newstime"],
                                                     "newssrc"=>$row["newssrc"]
                       ));
        }
        echo json_encode($senddata);
    }
    mysqli_close($link);


?>