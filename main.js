var canvas=document.getElementById("canvas1");
var ctx=canvas.getContext("2d");
var color="black";
var line_width=1;
var last_x_pos;
var last_y_pos;
var cur_x_pos;
var cur_y_pos;
//var mouseevent="empty";
var width=screen.width;
var new_width=width-70;
var height=screen.height;
var new_height=height-300;
if(width<992)
{
 document.getElementById("canvas1").width=new_width;
 document.getElementById("canvas1").height=new_height;
 document.body.style.overflow="hidden";
}

   canvas.addEventListener("touchstart",touchstart)
   function touchstart(e){
       console.log("touchstart");
       color=document.getElementById("clr").value;
       line_width=document.getElementById("lw").value;
       last_x_pos=e.touches[0].clientX-canvas.offsetLeft;
        last_y_pos=e.touches[0].clientY-canvas.offsetTop;
   }
   canvas.addEventListener("touchmove",touchmove)
   function touchmove(e)
   {
       console.log("touchmove");
       cur_x_pos=e.touches[0].clientX-canvas.offsetLeft;
       cur_y_pos=e.touches[0].clientY-canvas.offsetTop;
       
      
           ctx.beginPath();
           ctx.strokeStyle=color;
           ctx.lineWidth=line_width;
           console.log("last position of x and last position of y");
           console.log("x="+last_x_pos+"y="+last_y_pos);
           ctx.moveTo(last_x_pos,last_y_pos);
           console.log("current position of x and current position of y");
           console.log("x="+cur_x_pos+"y="+cur_y_pos);
           ctx.lineTo(cur_x_pos,cur_y_pos);
          ctx.stroke();
          last_x_pos=cur_x_pos;
    last_y_pos=cur_y_pos;
   }


   canvas.addEventListener("mousedown",moudwn);
function moudwn(e)
{
    color=document.getElementById("clr").value;
    line_width=document.getElementById("lw").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",momove);
function momove(e){
 cur_x_pos=e.clientX-canvas.offsetLeft;
 cur_y_pos=e.clientY-canvas.offsetTop;
 if(mouseevent=="mousedown")
 {
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=line_width;
     console.log("last position of x and last position of y");
     console.log("x="+last_x_pos+"y="+last_y_pos);
     ctx.moveTo(last_x_pos,last_y_pos);
     console.log("current position of x and current position of y");
     console.log("x="+cur_x_pos+"y="+cur_y_pos);
     ctx.lineTo(cur_x_pos,cur_y_pos);
    ctx.stroke();
    

 }
 last_x_pos=cur_x_pos;
    last_y_pos=cur_y_pos;

}
canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseevent = "mouseup";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseevent = "mouseleave";
    }
 