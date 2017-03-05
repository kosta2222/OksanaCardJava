<!DOCTYPE>
<html>
<head>

    <meta charset="UTF-8">
    <title>Создай свою открытку</title>
<link rel=stylesheet href='public/css/index.css' type="text/css" /></head>
<body>
<div id=ob>
<div id=wraper>
<div id=header style='background-color:#00ff00;'>
<img src='public/image/soln.png' alt='солнышко' align='left'/>
<p class=zag style="padding-top:20pt">Поздравьте  открыткой счастья!</p>
</div>
 


<table style="text-align: left; width: 100%;" border="0" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
	<div style="margin:25px">Что дает регистрация</div>
      <td style="vertical-align: top;"><span style="text-decoration: underline;" class=mk-1>Войти</span><br>
      </td>
      <td style="vertical-align: top;"><a href="#" class="dot" onclick="otkr()">зарегистрироваться</a><span clss="mk-1">.</span><br><br><br>
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top;">
      <form id="forma1"  method="post" action='javascript:void(null)' onsubmit="call('#forma1','voiti')" ><input type=text id='name_a' name="name_a" placeholder="Имя"><br><br>
        <input type=text id='name_b'  name="name_b" placeholder="Пароль"><br><br>
	<input type="submit" class="btn btn-primary btn-large" value='Войти'>
        </form>
      <br>
      </td>
      <td style="vertical-align: top;">
      <div id="f1" style="display: none;">
      <form id=forma2   action='javascript:void(null)' onsubmit="call('#forma2','zareg')" >
	<input type="text" id="name_c" name="name_c" placeholder="Имя"><br><br>
        <input type="text" id="name_d" name="name_d" placeholder="Пароль"><br><br>
        <input type="submit" class="btn btn-primary btn-large btn-succes" value='Зарегистрироватся'></form>
      </div>
      <br>
      </td>
    </tr>
  </tbody>
</table>
<span style="margin:25px" id='results'>____</span>
<?php echo HTML::script('public/js/show.js') ;?>
<hr>
<script type="text/javascript" src="js/sizeSlider.js"></script>
<script src=public/js/jquery-1.11.2.min.js></script>
<script src=       public/js/jquery-ui.min.js></script>
<script src=      public/js/sizeSlider.js></script>
<script src=    public/js/jquery.obSlider.js></script>
<script src=        public/js/jquery.colorPicker.js></script>
<script src=    public/js/myQuery.js></script>
<script src=        public/js/toolMenu.js></script>
<script src=    public/js/svgSchema.js></script>

<script src=public/css/styles.css></script>
<script src= public/css/jquery-ui.css></script>
<script src=       public/css/reset.css></script>
<script src=public/css/colorPicker.css></script>
<script src=public/start/jquery-ui.css></script>

	<script>
	function call(obj,act) {
      var msg = $(obj).serialize();
        $.ajax({
          type: 'POST',
          url: act,
          data: msg,
          success: function(data) {
            $('#results').html(data);
          },
          error:  function(xhr, str){
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
          }
	</script>
</head>
<body>
<div class="content">
  <div class="sizeDesign">
	<h2>Установите размер и форму открытки</h2>
		<div id="pageSizeSet">
		  <!--/ Здесь устанавливаем высоту, ширину и скругление углов -->
			<table class="sizeSet">
		      <tr>
		        <td><h4>Высота</h4></td>
		        <td width="400px"><div id="slider1"></div></td>
		        <td><input type="text" id="heightV" class="valueField"  /></td>
		      </tr>
			  <tr>
			    <td><h4>Ширина</h4></td>
			    <td width="400px"><div id="slider2"></div></td>
			    <td><input type="text" id="widthV" class="valueField"  /></td>
			  </tr>
			  <tr>
			    <td width="200px"><h4>Радиус углов рамки</h4></td>
			    <td width="400px"><div id="slider3"></div></td>
			    <td><input type="text" id="radiusV" class="valueField" /></td>
			  </tr>
			</table>
		</div>
  </div>
	<div class="cardDesign">
	  <div class="cardBlock">
	    <div id="canvas" class="clearfix" >
	    <object data="<?php echo URL::base();?>public/postcard.svg" type="image/svg+xml" id="page1" width="480" height="240"></object>
	    
	    </div>
	  </div>
	</div>
</div>
<div class="toolBlock" id="floatMenu">
  <div id="tabs">
    <ul class="tabsUL">
      <li><a href="#tabs-1">Фон открытки</a></li>
	  <li><a href="#tabs-2">Добавить текст</a></li>
	  <li><a href="#tabs-3">Добавить изображение</a></li>
	</ul>
    <div id="tabs-1"> 
	  <div id="accordion">
	  <!--/ Аккордион установить цвет фона/градиент -->
	    <h3>Установить цвет фона</h3>
		<div id="colorSet">
          <form name="colorType">
		    <input type="radio" name="fillType" id="sc"/>Залить фон одним цветом<br>
			<div class="subChoice">
		      <p class="toolTip">Кликните, чтобы изменить цвет</p>
		      <div id="singleColor"></div>
			</div>
			<input type="radio" name="fillType" id="gc" />Создать градиент<br>
	      </form>
		    <div id="gradientColor">
		      <div class="subChoice">
			    <p class="toolTip">Установите цвет №1:</p>
				<form name="gradientDir">
				  <select class="colors" id="color1" onchange="this.style.backgroundColor=this.value" >
                  <script type="text/javascript">writeColorOptions ()</script>
                  </select>
                <p class="toolTip">Установите цвет №2:</p>
				<select class="colors" id="color2" onchange="this.style.backgroundColor=this.value" >
                 <script type="text/javascript">writeColorOptions ()</script>
                </select>
				<p class="toolTip">Укажите направление градиента:</p>
				<input type="radio" name="direction" value="vertic" checked/>Вертикально
				<input type="radio" name="direction" value="horiz" />Горизонтально
				<input type="radio" name="direction" value="diagon" />По диагонали
				<input type="button" id="gradButton" value="Залить градиентом" />
		      </form> 
			</div>
		  </div>
	    </div>
		<!--/ Аккордион нарисовать фигуру (шейп) -->
        <h3>Нарисовать фигуру</h3>
		<div id="svgPath">
		  <div class="subChoice">
		    <svg id="figure" width="200" height="100">
		     <g id="shapes">
		      <path id="path" d="M 15,25 C 25,5 35,22 40,25 l 5,-10" style="stroke-width:3;stroke:grey;" fill="none" title="перо"/>"
		      
		      <line id="line" x1="70" y1="25" x2="110" y2="15" style="stroke: grey;stroke-width:3;" title="линия"/>
		      
		      <circle id="circle" cx="140" cy="20" r="13" style="stroke:grey;stroke-width:3;fill:white;" title="круг" />
		      
		      <rect id="rect" x="17" y="40" width="20" height="22" style="stroke-width:3;stroke: grey; fill: white;" title="прямоугольник"/>
		      
		      
		      <path id="heart" d="M90,63 C60,35 90,35 90,45 C 91,35 121,35 90,63 Z" style="stroke-width:3;fill:white; stroke:grey;" title="сердце"/>
		        
		      </g>
		    </svg>		   
		  </div>
			  
		  <table class="lineProp">
		    <tr>
		      <td><p class="toolTip">Цвет контура:</p></td>
			  <td>
			    <form>
				  <select id="strokeColor" onchange="this.style.backgroundColor=this.value" >
				  <script type="text/javascript">writeColorOptions ();</script>  
                  </select>
                </form>
               </td>
               <td><p class="toolTip">Цвет заливки:</p></td>
               <td>
			    <form>
				  <select id="fillColor" onchange="this.style.backgroundColor=this.value" >
				   <script type="text/javascript">writeColorOptions ()</script>
                  </select>
                </form>
               </td>
             </tr>
            
             <tr>
               <td><p class="toolTip"><label for="spinner">Ширина контура:</label></p></td>
               <td><input id="spinner" value=1 name="value" /></td>
               <td><input type="button" id="deleteEl" value="Стереть"/></td>
               
             </tr>  
		   </table>
		 </div>
		 <!--/ Аккордион добавить изображение в фон -->
         <h3>Фоновое изображение</h3>
 <div>
		    <div class="carousel">
               <ul class="carousel_ul">
                  
                 <li><?php echo HTML::image('public/image/thumb_1.jpg',array('alt'=>'1')) ;?> </li>
                 <li><?php echo HTML::image('public/image/thumb_2.jpg',array('alt'=>'2')) ;?></li>
                 <li><?php echo HTML::image('public/image/thumb_3.jpg',array('alt'=>'3')) ;?></li>
                 <li><?php echo HTML::image('public/image/thumb_4.jpg',array('alt'=>'4')) ;?></li>
                 <li><?php echo HTML::image('public/image/thumb_5.jpg',array('alt'=>'5')) ;?></li>
                 <li><?php echo HTML::image('public/image/thumb_6.jpg',array('alt'=>'6')) ;?></li>
                 <li><?php echo HTML::image('public/image/thumb_7.jpg',array('alt'=>'7')) ;?></li>
                 <li><?php echo HTML::image('public/image/thumb_8.jpg',array('alt'=>'8')) ;?></li>
                 <li><?php echo HTML::image('public/image/thumb_9.jpg',array('alt'=>'9')) ;?></li>
                
               </ul>
         
              <button class="prev">&lt;&lt;</button>
              <button class="next">&gt;&gt;</button>
			  
              <div class="temp_img"><img id="temp_img" src="<?echo URL::base();?>/public/image/thumb_1.jpg" />
			  <pre><input type="submit" id="fillPic" value="В фон"/><button id="cancelPic">Отменить</button></pre>
			  </div>
			  <script type="text/javascript"> $(".carousel").obSlider(); </script>
             </div>
		</div>	 
		 </div>
	   </div>
	 <!--/ Таб для добавления текста -->
	 <div id="tabs-2">
		 <div>
          <span class="toolTip">
	   <p>Напишите текст</p>
	     <form name="textAddForm">
			 <input type="text" size="60" maxlength="50"  id="textToAdd"/><br>
			 <span class="textTools">
			 	Шрифт:
			 	<select id="fontFamily" onchange="this.style.fontFamily=this.value" >
			 	  <script type="text/javascript">writeFontFamily ()</script>
			 	</select> 
			 	Цвет: 
			 	<select id="textColor" onchange="this.style.backgroundColor=this.value" >
			      <script type="text/javascript">writeColorOptions ()</script>
                </select>
             Размер:
             <select id="fontSize" size="1">
             	<script type="text/javascript">writeFontSize ()</script>
             </select> <br>
            
			 <input type="button" id="addTextButton" value="Добавить в открытку" />
			 <input type="button" id="deleteLast" value="Удалить последнюю строку" />
			 <input type="button" id="deleteText" value="Удалить весь текст" />
			 
</span>

          </form>
</span>
	     </div>
	  </div>
	  <!--/ Таб для добавления пользовательского изображения -->
	 <div id="tabs-3">
	 <form action="post">
		<input type="file" value="choose" />
	</form>
	</div>
	 </div>
  </div>
<script type="text/javascript" src="js/sizeSlider.js"></script>
 </div>
</div>
</body>
</html>
