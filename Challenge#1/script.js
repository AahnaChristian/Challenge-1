let cnv = document.getElementById('canv');
let ctx = cnv.getContext('2d');
let imgEl = document.getElementById('cloud');

cnv.width = 400;
cnv.height = 400;

// Blue sky
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, cnv.height, cnv.width);

// Red sun
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(200, 250, 40, 0, 2*Math.PI);
ctx.fill();

// Green field
ctx.fillStyle = 'green';
ctx.fillRect(0, 250, cnv.height, cnv.width);

// clouds image
ctx.drawImage(imgEl, 100, 20);
ctx.drawImage(imgEl, 150, 50);