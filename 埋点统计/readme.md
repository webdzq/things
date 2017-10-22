# 统计说明

<pre>
bref：平台地址：https://web.umeng.com/main.php?c=site&a=show
1、账号和密码： IT@credit-pomelo.com / Admin1234
2、统计植入（siteid是站点唯一身份）
第一步：head里添加：
参考URL：https://web.umeng.com/main.php?c=site&a=getcode&siteid=1263692566
代码：
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1263692566'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1263692566' type='text/javascript'%3E%3C/script%3E"));</script>

第二步：head里添加：
参考URL：http://open.cnzz.com/a/new/define/
代码：
//声明_czc对象:
<script>
var _czc = _czc || [];
//绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
_czc.push(["_setAccount", "1263692566"]);
</script>
第三步：制作相应的事件跟踪：

参考URL：http://open.cnzz.com/a/tool/
代码：
_czc.push(["_trackEvent", "h5", "click", "registerUser", 1, "h5_click_registerUser"]);
示例：
<a id="download" onclick="_czc.push(["_trackEvent", "h5", "click", "registerUser", 1, "h5_click_registerUser"]);" 
href="http://www.example.com/download/ttpsetup.exe" target="_blank">测试下载</a>

第四步：查看效果--事件分析
地址：https://web.umeng.com/main.php?c=eanalysis&a=frame&siteid=1263692566#!/1503461423914/eanalysis/category/1/1263692566/2017-08-23/2017-08-23

</pre>

## header添加代码

```js
<script type="text/javascript">
    var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cspan style='display:none' id='cnzz_stat_icon_1263692566'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1263692566' type='text/javascript'%3E%3C/script%3E"));
</script>

<script type="text/javascript">
      var _czc = _czc || [];
      _czc.push(["_setAccount", "1263692566"]);
</script>
```