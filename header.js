header =
  '\
<style>\
#icon{width:200px;margin-top:-30px}\
@media (max-width: 768px){\
  #icon{width:80px;margin-top:-20px}\
}\
.head-section .nav li a,\
.head-section .nav li.active ul.dropdown-menu li a .dropdown-menu {\
  font-size: 12pt;\
  color: #717071;\
  background: none;\
}\
</style>\
<!--header start-->\
  <header class="head-section">\
    <div class="navbar navbar-default navbar-static-top container">\
      <div class="navbar-header">\
        <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
          <span class="icon-bar"></span>\
        </button>\
        <a class="navbar-brand" href="index.html" id="logo" >\
          <img src="img/logoV2.png" id="icon" alt="" srcset="">\
        </a>\
      </div>\
      <div class="navbar-collapse collapse">\
        <ul class="nav navbar-nav">\
          <li class="dropdown">\
            <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover="dropdown"\
              data-toggle="dropdown" href="index.html"><span class="english">Chrissy’s TBI</span>旅程 <i class="fa fa-angle-down"></i>\
            </a>\
            <ul class="dropdown-menu">\
              <li>\
                <a href="index.html"><span class="english">Restart with Chrissy</span></a>\
              </li>\
              <li id="tbilink" style="display:none" onclick =" $(\'body,html\').animate({scrollTop:$(\'#journey\').offset().top},600) ">\
                <a ><span class="english">Chrissy’s TBI</span>旅程</a>\
              </li>\
            </ul>\
          </li>\
          <li class="dropdown">\
            <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover="dropdown"\
              data-toggle="dropdown" href="#">什麼是腦創傷<span class="english">TBI?</span> <i class="fa fa-angle-down"></i>\
            </a>\
            <ul class="dropdown-menu">\
              <li>\
                <a href="definition.html"><span class="english">TBI</span>定義</a>\
              </li>\
              <li>\
                <a href="data.html"><span class="english">TBI</span>數據</a>\
              </li>\
              <li>\
                <a href="effect.html">腦傷影響</a>\
              </li>\
            </ul>\
          </li>\
          <li class="dropdown">\
            <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover="dropdown"\
              data-toggle="dropdown" href="#">愛護我的大腦 <i class="fa fa-angle-down"></i>\
            </a>\
            <ul class="dropdown-menu">\
              <li>\
                <a href="cheskList.html">自我健康檢查</a>\
              </li>\
              <li>\
                <a href="diary.html">我的健康筆記</a>\
              </li>\
              <li>\
                <a href="together.html">與腦創傷共存</a>\
              </li>\
            </ul>\
          </li>\
          <li class="dropdown">\
            <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover="dropdown"\
              data-toggle="dropdown" href="#"><span class="english">TBI</span>自我照顧 <i class="fa fa-angle-down"></i>\
            </a>\
            <ul class="dropdown-menu">\
              <li>\
                <a href="sleep.html">睡眠的重要性</a>\
              </li>\
              <li>\
                <a href="diet.html">腦創傷後飲食</a>\
              </li>\
              <li>\
                <a href="run.html">跟著詩婷跑吧</a>\
              </li>\
              <li>\
                <a href="nature.html">自然療法分享</a>\
              </li>\
            </ul>\
          </li>\
          <li class="dropdown">\
            <a class="dropdown-toggle" data-close-others="false" data-delay="0" data-hover="dropdown"\
              data-toggle="dropdown" href="#"><span class="english">TBI</span>資源分享 <i class="fa fa-angle-down"></i>\
            </a>\
            <ul class="dropdown-menu">\
              <li>\
                <a href="story.html"><span class="english">Chrissy </span>媒體報導</a>\
              </li>\
              <li>\
                <a href="resource.html"><span class="english">TBI</span>相關資訊</a>\
              </li>\
              <li>\
                <a href="resourcemap.html"><span class="english"></span>台灣腦傷專家資源地圖</a>\
              </li>\
            </ul>\
          </li>\
        </ul>\
      </div>\
    </div>\
  </header>\
'
document.write(header);