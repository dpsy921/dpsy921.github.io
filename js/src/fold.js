// build time:Fri Nov 08 2019 14:48:46 GMT+0800 (GMT+08:00)
function fold(d,e){var i=d[0];return i||(i="点击显/隐"),'<div><div class="fold_hider"><div class="close hider_title">'+i+'</div></div><div class="fold">\n'+hexo.render.renderSync({text:e,engine:"markdown"})+"\n</div></div>"}hexo.extend.tag.register("fold",fold,{ends:!0});
//rebuild by neat 