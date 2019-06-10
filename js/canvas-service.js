'use strict';

function updateImgCanvas() {
  var image = new Image();

  if (gUploadFile) {
    image.src = gUploadFile;
  } else image.src = `graphic/img/${gMeme.id}.jpg`;
  // ---------------------------------------------------------------------------
  var hRatio = gScreenSize / image.width;
  var vRatio = gScreenSize / image.height;

  var ratio = Math.min(hRatio, vRatio);

  var centerShift_x = 0;
  var centerShift_y = 0;

  gCanvas.width = image.width * ratio;
  gCanvas.height = image.height * ratio;

  ctx.drawImage(
    image,
    0,
    0,
    image.width,
    image.height,
    centerShift_x,
    centerShift_y,
    image.width * ratio,
    image.height * ratio
  );

  gCanvasHeight = image.height * ratio;
  gCanvasWidth = image.width * ratio;
}

function changeColor(pickedColor) {
  gMeme.text[gMeme.position].color = pickedColor;
  drawText();
}

function changePos(direction) {
  if (direction) {
    if (gMeme.position > 0) gMeme.position--;
  } else {
    if (gMeme.position < 2) gMeme.position++;
  }
  document.querySelector('.editor input').value =
    gMeme.text[gMeme.position].content;
}

function changeSize(sizeVariation) {
  gMeme.text[gMeme.position].size += sizeVariation;
  drawText();
}

function changeAlign(dir) {
  gMeme.text[gMeme.position].align = dir;
  drawText();
}

function showFonts() {
  document.querySelector('.fonts').classList.toggle('show');
}

//TODO: need to update so we build array of fonts and then putting the idx into gmeme font
function changeFont(fontNumber) {
  if (!fontNumber) {
    gMeme.text[gMeme.position].font = 'VT';
  } else if (fontNumber === 1) {
    gMeme.text[gMeme.position].font = 'DancingScript';
  } else if (fontNumber === 2) {
    gMeme.text[gMeme.position].font = 'Impact';
  } else if (fontNumber === 3) {
    gMeme.text[gMeme.position].font = 'Indie';
  }

  drawText();
}

function clearMeme() {
  updateImgCanvas();
  for (var i = 0; i < gMeme.text.length; i++) {
    gMeme.text[i].content = '';
  }
  gMeme.text[gMeme.position].content = '';
}

function handleImageFromInput(ev, onImageReady) {
  var reader = new FileReader();
  reader.onload = function(event) {
    var img = new Image();
    img.onload = onImageReady.bind(null, img);
    img.src = event.target.result;
    gUploadFile = img.src;
  };
  reader.readAsDataURL(ev.target.files[0]);
}

function alignText(textAlign, x) {
  if (document.body.classList.contains('rtl')) {
    if (textAlign === 'center') {
      x = gCanvasWidth / 2;
    } else if (textAlign === 'start') {
      x = gCanvasWidth / 1.1;
    } else if (textAlign === 'end') {
      x = gCanvasWidth / 6;
    }
  } else {
    if (textAlign === 'center') {
      x = gCanvasWidth / 2;
    } else if (textAlign === 'start') {
      x = gCanvasWidth / 6;
    } else if (textAlign === 'end') {
      x = gCanvasWidth / 1.1;
    }
  }
  return x;
}

function drawRect(x, y, ch, color) {
  ctx.strokeStyle = color;
  ctx.strokeRect(x, y, canvas.width - 5, ch);
}

// prettier-ignore
function drawText() {
    updateImgCanvas();
  
  
    for (var i=0; i<gMeme.text.length;i++){
      var color = gMeme.text[i].color
      var txt = gMeme.text[i].content 
      var fontSize = gMeme.text[i].size +"rem"
      var font = gMeme.text[i].font
      var textAlign = gMeme.text[i].align
      
  
  //TODO: make this a function for aligning text - returning a object with x and y
      var x;
      var y;
          if (i===0){
          y= gCanvasHeight / 6
          }else if(i===1){
          y= gCanvasHeight / 2
          }
          else if(i===2){
          y= gCanvasHeight -10
          }
  
          x = alignText(textAlign,x)
        
      ctx.strokeStyle = 'black';
      ctx.textAlign = textAlign;
      ctx.font = fontSize + ' ' + font;
      ctx.fillStyle = color;
      ctx.fillText(txt, x, y);
      ctx.strokeText(txt, x, y);
  
      // add square around text current position.
  if(gDownload) continue
  else {
      if (gMeme.position===0) drawRect(4,canvas.height/18, canvas.height/6, "blue")
      else if (gMeme.position===1) drawRect(4,canvas.height/2.7, canvas.height/6, "blue")
      else if (gMeme.position===2) drawRect(4,canvas.height/1.2, canvas.height/6, "blue") 
    }
    }
       
  }

function addIconsToText(icon) {
  gMeme.text[gMeme.position].content += icon;
  document.querySelector('.editor input').value =
    gMeme.text[gMeme.position].content;
  drawText();
}
