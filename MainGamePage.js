

window.onload = function()
{
    var canvas = document.getElementById("myCanvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        handle = {
            x: width / 2, 
            y: height / 2,
            radius: 20
        };

    draw();

    function draw()
    {
        context.clearRect(0,0, width, height);
        context.fillStyle = "gray";
        context.beginPath();
        context.arc(handle.x, handle.y , handle.radius, 0 , Math.PI * 2 , false);
        context.fill();
    }

    



};
