let canvas = document.getElementById('my-canvas');
canvas.width = document.getElementById("div1").offsetWidth;
canvas.height = document.getElementById("div1").offsetHeight;

let context = canvas.getContext("2d");
context.filter = '';

let fileinput = document.getElementById('input');
let img = new Image();

function upload() {
    fileinput.onchange = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (file.type.match('image.*')) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (evt) {
                if (evt.target.readyState == FileReader.DONE) {
                    img.src = evt.target.result;
                    img.onload = () => context.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
            }
        } else {
            alert("not an image");
        }
    }
}

var invert = document.getElementById('invert');
invert.onclick = function () {
    context.filter = 'invert(1)';
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
};

var grey = document.getElementById('grey');
grey.onclick = function () {
    context.filter = 'grayscale(1)';
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
};

var blur = document.getElementById('blur');
blur.onclick = function () {
    context.filter = 'blur(10px) ';
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
};

var download = document.getElementById('download');
download.onclick = function () {
    var link = document.createElement('a');
    link.download = 'image.png';
    link.href = document.getElementById('my-canvas').toDataURL();
    link.click();
};

document.getElementById('btnInput').onclick = function() {
    document.getElementById('input').click();
}
