(function(){
  var finePointer=window.matchMedia("(hover: hover) and (pointer: fine)");
  var reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(!finePointer.matches||reducedMotion.matches)return;

  var lastX=0;
  var lastY=0;
  var hasPosition=false;
  var lastSpawn=0;

  function createStar(x,y){
    var star=document.createElement("span");
    var size=8+Math.random()*12;
    var driftX=(Math.random()-.5)*24;
    var driftY=-10-Math.random()*20;

    star.className="cursor-star";
    star.style.left=x+"px";
    star.style.top=y+"px";
    star.style.width=size+"px";
    star.style.height=size+"px";
    star.style.background="#ffffff";
    star.style.setProperty("--star-drift-x",driftX+"px");
    star.style.setProperty("--star-drift-y",driftY+"px");
    document.body.appendChild(star);
    star.addEventListener("animationend",function(){star.remove();},{once:true});
    window.setTimeout(function(){star.remove();},900);
  }

  document.addEventListener("pointermove",function(event){
    var now=performance.now();
    var distance=hasPosition?Math.hypot(event.clientX-lastX,event.clientY-lastY):20;
    if(now-lastSpawn<38||distance<6)return;

    hasPosition=true;
    lastX=event.clientX;
    lastY=event.clientY;
    lastSpawn=now;
    createStar(event.clientX+(Math.random()-.5)*8,event.clientY+(Math.random()-.5)*8);
  },{passive:true});
}());
