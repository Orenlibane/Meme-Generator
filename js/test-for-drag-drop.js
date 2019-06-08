// "use strict"

// var canvasOffset=$canvas.offset();
//     var offsetX=canvasOffset.left;
//     var offsetY=canvasOffset.top;
//     var scrollX=$canvas.scrollLeft();
//     var scrollY=$canvas.scrollTop();

//        // variables to save last mouse position
//     // used to see how far the user dragged the mouse
//     // and then move the text by that distance
//     var startX;
//     var startY;

//     // an array to hold text objects
//     var texts=[];

//     // this var will hold the index of the hit-selected text
//     var selectedText=-1;

//    // handle mousemove events
//     // calc how far the mouse has been dragged since
//     // the last mousemove event and move the selected text
//     // by that distance
//     function handleMouseMove(e){
//         if(selectedText<0){return;}
//         e.preventDefault();
//         mouseX=parseInt(e.clientX-offsetX);
//         mouseY=parseInt(e.clientY-offsetY);

//         // Put your mousemove stuff here
//         var dx=mouseX-startX;
//         var dy=mouseY-startY;
//         startX=mouseX;
//         startY=mouseY;

//         var text=texts[selectedText];
//         text.x+=dx;
//         text.y+=dy;
//         draw();
//       }

//       // handle mousedown events
// // iterate through texts[] and see if the user
// // mousedown'ed on one of them
// // If yes, set the selectedText to the index of that text
// function handleMouseDown(e){
//     e.preventDefault();
//     startX=parseInt(e.clientX-offsetX);
//     startY=parseInt(e.clientY-offsetY);
//     // Put your mousedown stuff here
//     for(var i=0;i<texts.length;i++){
//         if(textHittest(startX,startY,i)){
//             selectedText=i;
//         }
//     }
//   }

//   // test if x,y is inside the bounding box of texts[textIndex]
//   function textHittest(x,y,textIndex){
//       var text=texts[textIndex];
//       return(x>=text.x &&
//           x<=text.x+text.width &&
//           y>=text.y-text.height &&
//           y<=text.y);
//   }

//      // handle mousemove events
//     // calc how far the mouse has been dragged since
//     // the last mousemove event and move the selected text
//     // by that distance
//     function handleMouseMove(e){
//         if(selectedText<0){return;}
//         e.preventDefault();
//         mouseX=parseInt(e.clientX-offsetX);
//         mouseY=parseInt(e.clientY-offsetY);

//         // Put your mousemove stuff here
//         var dx=mouseX-startX;
//         var dy=mouseY-startY;
//         startX=mouseX;
//         startY=mouseY;

//         var text=texts[selectedText];
//         text.x+=dx;
//         text.y+=dy;
//         draw();
//       }

//       // done dragging
// function handleMouseUp(e){
//     e.preventDefault();
//     selectedText=-1;
//   }

//   document.querySelector('#canvas').mousedown(function(e){handleMouseDown(e);});
//   document.querySelector('#canvas').mousemove(function(e){handleMouseMove(e);});
//   document.querySelector('#canvas').mouseup(function(e){handleMouseUp(e);});
//   document.querySelector('#canvas').mouseout(function(e){handleMouseOut(e);});

//   $("#submit").click(function(){

//       // calc the y coordinate for this text on the canvas
//       var y=texts.length*20+20;

//       // get the text from the input element
//       var text={text:$("#theText").val(),x:20,y:y};

//       // calc the size of this text for hit-testing purposes
//       ctx.font="16px verdana";
//       text.width=ctx.measureText(text.text).width;
//       text.height=16;

//       // put this new text in the texts array
//       texts.push(text);

//       // redraw everything
//       draw();

//   var texts=[];

// // some test texts
// texts.push({text:"Hello",x:20,y:20});
// texts.push({text:"World",x:20,y:70});
