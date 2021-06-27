var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    width=screen.width;
    newwidth=screen.width-70;
    newheight=screen.height-300;
    if (width<992)
    {
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
    }
    
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchsart(e)
    {
       console.log=("my_touchstart")
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        last_position_of_y=e.touches[0].clientY-canvas.offsettop;
        last_position_of_x=e.touches[0].clientX-canvas.offsetleft;
        }

    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    
    {
         console.log("my_touchmove")
         current_position_of_y=e.touches[0].clientY-canvas.offsettop;
        current_position_of_x=e.touches[0].clientX-canvas.offsetleft;
         
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }

