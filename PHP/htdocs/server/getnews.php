

<?php 
	header("content-type:application/json;charset=utf-8");
	require_once('db.php');
	if($link){
		if(is_array($_GET)&&($_GET)>0){//先判断是否通过get传值了
			if(isset($_GET['newstype'])){//存在newstype的参数时
					$newstype=$_GET['newstype'];
					$sql="SELECT * FROM `news` WHERE `newstype` = '{$newstype}' and `status`='1'";
					mysqli_query($link,"SET NAMES utf8");
					$result =mysqli_query($link,$sql);
					$senddata=array();
					while ($row=mysqli_fetch_assoc($result)){
						array_push($senddata,array(
						                    "id" =>$row["id"] , 
						                    "newstype"=>$row["newstype"],
						                    "newstitle"=>$row["newstitle"],
						                    "newsimg"=>$row["newsimg"],
						                    "newstime"=>$row["newstime"],
						                    "newssrc"=>$row["newssrc"],
						                    "status"=>$row["status"]
			            		));
					    }
				echo json_encode($senddata);
			}else{
					// $sql="SELECT * FROM news";//正常排序
					$sql="SELECT * FROM `news` WHERE `status`='1' order by id desc";//倒序
				    mysqli_query($link,"SET NAMES utf8");
					$result =mysqli_query($link,$sql);
					$senddata=array();
					while ($row=mysqli_fetch_assoc($result)) {
						array_push($senddata, array(
						                  "id" =>$row["id"] , 
						                  "newstype"=>$row["newstype"],
						                  "newstitle"=>$row["newstitle"],
						                  "newsimg"=>$row["newsimg"],
						                  "newstime"=>$row["newstime"],
						                  "newssrc"=>$row["newssrc"],
						                  "status"=>$row["status"]
		               ));
				}
				echo json_encode($senddata);
			}
	   }
	}else{
		echo json_encode(array("success"=>"none"));
	}
	/* Close the connection 关闭连接*/  
	mysqli_close($link);



	    // if(!$link){
	    // 	die('Cound not connect:'.mysql_error());
	    // }else{
	    // 	echo"mysql connect ok";
	    // }
	    // mysql_close($link);
	// $arr= array(
	// 	          "newstype"=>"百家",
	// 	          "newsimg"=>"img/2.jpg",
	// 	          "newstime"=>"2017-04-28",
	// 	          "newssrc"=>"极客学院",
	// 	          "newstitle"=>"测试动态获取的新闻标题",
	//			  "status"=>'1'	
	//            );
	//    echo json_encode($arr);

 ?>
