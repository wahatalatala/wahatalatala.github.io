//normal variables
const PI = Math.PI;
let radius = 25;
let e;

// html node variables
const html_inner_canvas = document.querySelector("#inner-canvas");
const inner_canvas = html_inner_canvas.getContext("2d");

const container = document.querySelector("#temporary-canvas-container");
container.innerHTML = '<canvas id = "temporary-canvas">container</canvas>';
const html_temporary_canvas = document.querySelector("#temporary-canvas");
const temporary_canvas = html_temporary_canvas.getContext("2d");
html_temporary_canvas.style.position = "fixed";
html_temporary_canvas.style.top = "0";
html_temporary_canvas.style.left = "0";
html_temporary_canvas.style.margin = "5px 0 0 5px";

const html_outer_canvas = document.querySelector("#outer-canvas");
html_outer_canvas.style.position = "fixed";
html_outer_canvas.style.top = "0";
html_outer_canvas.style.left = "0";

const html_stroke_color = document.querySelector("#stroke-color");

let stroke_color = "#000";

html_stroke_color.addEventListener("change", (event) => {
 console.log(html_stroke_color.value);
 stroke_color = inner_canvas.strokeStyle = html_stroke_color.value;
 temporary_canvas.strokeStyle = stroke_color;
});

const html_style_color = document.querySelector("#fill-color");

let style_color = "#000";

html_style_color.addEventListener("change", (event) => {
 console.log(html_style_color.value);
 style_color = inner_canvas.fillStyle = html_style_color.value;
 temporary_canvas.fillStyle = style_color;
});

const html_line_width = document.querySelector("#line-width");

const html_alpha = document.querySelector("#alpha");

const html_alpha_text = document.querySelector("#alpha-text");

let alpha = 1.0;

html_alpha.addEventListener("change",(event)=>{
 alpha = html_alpha.value;
 html_alpha_text.innerText = alpha;
 temporary_canvas.globalAlpha = alpha;
 inner_canvas.globalAlpha = alpha;
});

const html_scale_factor = document.querySelector("#scale-factor");

const html_scale_factor_text = document.querySelector("#scale-factor-text");

let scale_factor = 1.0;

html_scale_factor.addEventListener("change",(event)=>{
 scale_factor = html_scale_factor.value/10;
 html_scale_factor_text.innerText = scale_factor;
})

const shapes = document.querySelector("#shapes");

const shapes_array = [draw_none,draw_arc,draw_polygon,draw_line,draw_triangle,draw_rectangle,draw_ellipse,draw_quadratic_curve,draw_bezier_curve,draw_curved_polygon,draw_text,draw_pipe,draw_diamond];

let index = 0;

const plus_button = document.getElementById("plus-button");

const minus_button = document.getElementById("minus-button");

let line_width = 1;

/*   arc   */

//close shape

const html_first_angle = document.querySelector("#first-angle");

const html_first_angle_text = document.querySelector("#first-angle-text");

let first_angle = 0;

html_first_angle.addEventListener("change",()=>{
 first_angle = html_first_angle.value;
 html_first_angle_text.innerText = first_angle;
 // * pi / 180
});

const html_second_angle = document.querySelector("#second-angle");

const html_second_angle_text = document.querySelector("#second-angle-text");

let second_angle = 360;

html_second_angle.addEventListener("change", () => {
 second_angle = html_second_angle.value;
 html_second_angle_text.innerText = second_angle;
});
 // * pi / 180
 
 const html_arc_radius = document.querySelector("#arc-radius");

const html_arc_radius_text = document.querySelector("#arc-radius-text");

let arc_radius = 20;

html_arc_radius.addEventListener("change", () => {
   arc_radius = html_arc_radius.value;
   html_arc_radius_text.innerText = arc_radius;
});

const html_fill_arc_with_color = document.querySelector("#fill-arc-with-color");

let fill_arc_with_color = false;

html_fill_arc_with_color.addEventListener("change", (event) => {
 fill_arc_with_color = html_fill_arc_with_color.checked;
 console.log(fill_arc_with_color);
});

const html_auto_complete_arc = document.querySelector("#auto-complete-arc");

let auto_complete_arc = false;

html_auto_complete_arc.addEventListener("change", (event) => {
 auto_complete_arc = html_auto_complete_arc.checked;
 console.log(auto_complete_arc);
});

/*   polygon   */

const html_polygon_lines = document.querySelector("#polygon-lines");

const html_polygon_lines_text = document.querySelector("#polygon-lines-text");

let total_lines = 5;

let current_lines = 0;

html_polygon_lines.addEventListener("change",()=>{
 total_lines = html_polygon_lines.value;
 html_polygon_lines_text.innerText = total_lines;
});

const html_fill_polygon_with_color = document.querySelector("#fill-polygon-with-color");

let fill_polygon_with_color = false;

html_fill_polygon_with_color.addEventListener("change", (event) => {
 fill_polygon_with_color = html_fill_polygon_with_color.checked;
 console.log(fill_polygon_with_color);
});

/*   line   */

const html_line_length = document.querySelector("#line-length");

const html_line_length_text = document.querySelector("#line-length-text");

let line_length = 50;

html_line_length.addEventListener("change",()=>{
 line_length = html_line_length.value;
 html_line_length_text.innerText = line_length;
})

/*   triangle   */

const html_triangle_width = document.querySelector("#triangle-width");

const html_triangle_width_text = document.querySelector("#triangle-width-text");

let triangle_width = 50;

html_triangle_width.addEventListener("change",()=>{
 triangle_width = html_triangle_width.value;
 html_triangle_width_text.innerText = triangle_width;
});

const html_fill_triangle_with_color = document.querySelector("#fill-triangle-with-color");

let fill_triangle_with_color = false;

html_fill_triangle_with_color.addEventListener("change", (event) => {
 fill_triangle_with_color = html_fill_triangle_with_color.checked;
 console.log(fill_triangle_with_color);
});

/*   rectangle   */

const html_rectangle_width = document.querySelector("#rectangle-width");

const rectangle_width_text = document.querySelector("#rectangle-width-text");

let rectangle_width = 50;

html_rectangle_width.addEventListener("change",()=>{
 rectangle_width = html_rectangle_width.value;
 rectangle_width_text.innerText = rectangle_width;
});

const html_rectangle_height = document.querySelector("#rectangle-height");

const rectangle_height_text = document.querySelector("#rectangle-height-text");

let rectangle_height = 30;

html_rectangle_height.addEventListener("change", () => {
 rectangle_height = html_rectangle_height.value;
 rectangle_height_text.innerText = rectangle_height;
});

const html_fill_rectangle_with_color = document.querySelector("#fill-rectangle-with-color");

let fill_rectangle_with_color = false;

html_fill_rectangle_with_color.addEventListener("change", (event) => {
 fill_rectangle_with_color = html_fill_rectangle_with_color.checked;
 console.log(fill_rectangle_with_color);
});

/*   ellipse   */

const html_ellipse_first_angle = document.querySelector("#ellipse-first-angle");

const html_ellipse_first_angle_text = document.querySelector("#ellipse-first-angle-text");

let ellipse_first_angle = 0;

html_ellipse_first_angle.addEventListener("change", () => {
 ellipse_first_angle = html_ellipse_first_angle.value;
 html_ellipse_first_angle_text.innerText = ellipse_first_angle;
 // * pi / 180
});

const html_ellipse_second_angle = document.querySelector("#ellipse-second-angle");

const html_ellipse_second_angle_text = document.querySelector("#ellipse-second-angle-text");

let ellipse_second_angle = 360;

html_ellipse_second_angle.addEventListener("change", () => {
 ellipse_second_angle =
 html_ellipse_second_angle.value;
 html_ellipse_second_angle_text.innerText = ellipse_second_angle;
});


const html_ellipse_xradius = document.querySelector("#ellipse-xradius");

const html_ellipse_xradius_text = document.querySelector("#ellipse-xradius-text");

let xradius = 25;

html_ellipse_xradius.addEventListener("change",()=>{
 xradius = html_ellipse_xradius.value;
 html_ellipse_xradius_text.innerText = xradius;
})

const html_ellipse_yradius = document.querySelector("#ellipse-yradius");

const html_ellipse_yradius_text = document.querySelector("#ellipse-yradius-text");

let yradius = 15;

html_ellipse_yradius.addEventListener("change", () => {
 yradius = html_ellipse_yradius.value;
 html_ellipse_yradius_text.innerText = yradius;
});

const html_ellipse_rotation_degree = document.querySelector("#ellipse-rotation-degree");

const html_ellipse_rotation_degree_text = document.querySelector("#ellipse-rotation-degree-text");

let ellipse_rotation_degree = 0;

html_ellipse_rotation_degree.addEventListener("change", () => {
 ellipse_rotation_degree =
  html_ellipse_rotation_degree.value;
 html_ellipse_rotation_degree_text.innerText = ellipse_rotation_degree;
});

const html_fill_ellipse_with_color = document.querySelector("#fill-ellipse-with-color");

let fill_ellipse_with_color = false;

html_fill_ellipse_with_color.addEventListener("change", () => {
 fill_ellipse_with_color = html_fill_ellipse_with_color.checked;
 console.log(fill_ellipse_with_color);
});

/*   quadratic curve   */

const html_fill_quad_with_color = document.querySelector("#fill-quad-with-color");

let fill_quad_with_color = false;

html_fill_quad_with_color.addEventListener("change",(event)=>{
 fill_quad_with_color = html_fill_quad_with_color.checked;
 console.log (fill_quad_with_color);
});

/* bezier curve   */

const html_fill_bezier_with_color = document.querySelector("#fill-bezier-with-color");

let fill_bezier_with_color = false;

html_fill_bezier_with_color.addEventListener("change", () => {
 fill_bezier_with_color = html_fill_bezier_with_color.checked;
 console.log(fill_bezier_with_color);
});

/*   curved polygon   */

const html_fill_curved_with_color = document.querySelector("#fill-curved-with-color");

let fill_curved_with_color = false;

html_fill_curved_with_color.addEventListener("change", (event) => {
 fill_curved_with_color = html_fill_curved_with_color.checked;
 console.log(fill_curved_with_color);
});

/*   text   */

const html_font_size = document.querySelector("#font-size");

const html_font_size_text = document.querySelector("#font-size-text");

let font_size;

html_font_size.addEventListener("change",()=>{
 font_size = html_font_size.value;
 html_font_size_text.innerText = font_size;
});

/*   pipe   */

const html_pipe_height = document.querySelector("#pipe-height");

const html_pipe_height_text = document.querySelector("#pipe-height-text");

let pipe_height = 25;

html_pipe_height.addEventListener("change", () => {
 pipe_height = html_pipe_height.value;
 html_pipe_height_text.innerText = pipe_height;
})

const html_pipe_xradius1 = document.querySelector("#pipe-xradius1");

const html_pipe_xradius1_text = document.querySelector("#pipe-xradius1-text");

let pipe_xradius1 = 25;

html_pipe_xradius1.addEventListener("change", () => {
 pipe_xradius1 = html_pipe_xradius1.value;
 html_pipe_xradius1_text.innerText = pipe_xradius1;
})

const html_pipe_yradius1 = document.querySelector("#pipe-yradius1");

const html_pipe_yradius1_text = document.querySelector("#pipe-yradius1-text");

let pipe_yradius1 = 15;

html_pipe_yradius1.addEventListener("change", () => {
 pipe_yradius1 = html_pipe_yradius1.value;
 html_pipe_yradius1_text.innerText = pipe_yradius1;
});

const html_pipe_xradius2 = document.querySelector("#pipe-xradius2");

const html_pipe_xradius2_text = document.querySelector("#pipe-xradius2-text");

let pipe_xradius2 = 25;

html_pipe_xradius2.addEventListener("change", () => {
 pipe_xradius2 = html_pipe_xradius2.value;
 html_pipe_xradius2_text.innerText = pipe_xradius2;
})

const html_pipe_yradius2 = document.querySelector("#pipe-yradius2");

const html_pipe_yradius2_text = document.querySelector("#pipe-yradius2-text");

let pipe_yradius2 = 15;

html_pipe_yradius2.addEventListener("change", () => {
 pipe_yradius2 = html_pipe_yradius2.value;
 html_pipe_yradius2_text.innerText = pipe_yradius2;
});

const html_pipe_first_angle1 = document.querySelector("#pipe-first-angle1");

const html_pipe_first_angle1_text = document.querySelector("#pipe-first-angle1-text");

let pipe_first_angle1 = 0;

html_pipe_first_angle1.addEventListener("change", () => {
 pipe_first_angle1 = html_pipe_first_angle1.value;
 html_pipe_first_angle1_text.innerText = pipe_first_angle1;
 // * pi / 180
});

const html_pipe_second_angle1 = document.querySelector("#pipe-second-angle1");

const html_pipe_second_angle1_text = document.querySelector("#pipe-second-angle1-text");

let pipe_second_angle1 = 360;

html_pipe_second_angle1.addEventListener("change", () => {
 pipe_second_angle1 =
  html_pipe_second_angle1.value;
 html_pipe_second_angle1_text.innerText = pipe_second_angle1;
});

const html_pipe_first_angle2 = document.querySelector("#pipe-first-angle2");

const html_pipe_first_angle2_text = document.querySelector("#pipe-first-angle2-text");

let pipe_first_angle2 = 0;

html_pipe_first_angle2.addEventListener("change", () => {
 pipe_first_angle2 = html_pipe_first_angle2.value;
  html_pipe_first_angle2_text.innerText = pipe_first_angle2;
 // * pi / 180
});

const html_pipe_second_angle2 = document.querySelector("#pipe-second-angle2");

const html_pipe_second_angle2_text = document.querySelector("#pipe-second-angle2-text");

let pipe_second_angle2 = 360;

html_pipe_second_angle2.addEventListener("change", () => {
 pipe_second_angle2 =
  html_pipe_second_angle2.value;
 html_pipe_second_angle2_text.innerText = pipe_second_angle2;
});

const html_fill_pipe_with_color = document.querySelector("#fill-pipe-with-color");

let fill_pipe_with_color = false;

html_fill_pipe_with_color.addEventListener("change", (event) => {
 fill_pipe_with_color = html_fill_pipe_with_color.checked;
 console.log(fill_pipe_with_color);
});

/*   diamond   */
const html_diamond_width = document.querySelector("#diamond-width");

const html_diamond_width_text = document.querySelector("#diamond-width-text");

let diamond_width = 25;

html_diamond_width.addEventListener("change",()=>{
 diamond_width = html_diamond_width.value;
 html_diamond_width_text.innerText = diamond_width;
});

const html_diamond_height = document.querySelector("#diamond-height");

const html_diamond_height_text = document.querySelector("#diamond-height-text");

let diamond_height = 45;

html_diamond_height.addEventListener("change", () => {
 diamond_height = html_diamond_height.value;
 html_diamond_height_text.innerText = diamond_height;
});

const html_fill_diamond_with_color = document.querySelector("#fill-diamond-with-color");

let fill_diamond_with_color = false;

html_fill_diamond_with_color.addEventListener("change", (event) => {
 fill_diamond_with_color = html_fill_curved_with_color.checked;
 console.log(fill_curved_with_color);
});

// preparation
minus_button.setAttribute("disabled",true);

//events listenners

shapes.addEventListener("change",(e)=>{
 index = shapes.value;
});

document.addEventListener("scroll",(e)=>{
 temporary_canvas.clearRect(0,0,300,150);
});

html_outer_canvas.addEventListener("touchstart",(event)=>{
 if(window.pageYOffset){
  console.log ("scroll");
  return;}
 e = event.touches[0];
 shapes_array[index](event);
});

html_outer_canvas.addEventListener("touchmove",(event)=>{
 if(window.pageYOffset){
  console.log ("scroll");
  return;}
 e = event.touches[0];
 shapes_array[index](event);
});
 
 html_outer_canvas.addEventListener("touchend",(event)=>{
   if(window.pageYOffset){
  console.log ("scroll");
  return;}
   shapes_array[index](event);
 });
 
 plus_button.addEventListener("click", () => {
  if (line_width === 1) {
   minus_button.removeAttribute("disabled");
  }
 console.log(++line_width);
 temporary_canvas.lineWidth = line_width;
 inner_canvas.lineWidth = line_width;
 html_line_width.innerText = line_width;
});

minus_button.addEventListener("click", () => {console.log ("w:"+temporary_canvas.lineWidth);
 if (line_width < 3) {
  line_width = 1;
  temporary_canvas.lineWidth = 1;
  inner_canvas.lineWidth = 1;
  minus_button.setAttribute("disabled","true");
  html_line_width.innerText = line_width;
  return;
 }
 console.log(--line_width);
 temporary_canvas.lineWidth = line_width;
 inner_canvas.lineWidth = line_width;
 html_line_width.innerText = line_width;
})

 //drawing functions
 function draw_none (event) {
  if (event.type === "touchstart"){
   inner_canvas.beginPath();
   inner_canvas.moveTo(e.clientX,e.clientY);
  }
  else if (event.type === "touchmove"){
   inner_canvas.lineTo(e.clientX,e.clientY);
   inner_canvas.stroke();
  }
  else if (event.type === "touchend") {
   inner_canvas.stroke();
  }
  else {
  console.error("unexpected error");
   alert("error");}
 }
 
function draw_arc(event) {
 if (event.type === "touchstart"){
 temporary_canvas.beginPath();
 console.log (second_angle);
 temporary_canvas.arc(e.clientX, e.clientY, arc_radius*scale_factor, first_angle/180*PI, second_angle/180*PI);
 temporary_canvas.stroke();
 if (fill_arc_with_color)temporary_canvas.fill ();
 temporary_canvas.closePath();
 if (auto_complete_arc)temporary_canvas.stroke();
 }
 else if (event.type === "touchmove"){
  temporary_canvas.clearRect(0,0,300,150);
   temporary_canvas.beginPath();
 temporary_canvas.arc(e.clientX, e.clientY, arc_radius*scale_factor, first_angle/180*PI, second_angle/180*PI);
 temporary_canvas.stroke();
 if (fill_arc_with_color)temporary_canvas.fill ();
 temporary_canvas.closePath();
 if (auto_complete_arc)temporary_canvas.stroke();
 }
 else if (event.type === "touchend"){
  inner_canvas.beginPath();
  inner_canvas.arc(e.clientX, e.clientY, arc_radius*scale_factor, first_angle/180*PI, second_angle/180*PI);
  inner_canvas.stroke();
  if (fill_arc_with_color)inner_canvas.fill ();
  inner_canvas.closePath();
  if (auto_complete_arc)inner_canvas.stroke();
 }
}

//i really don't understand it
//it just work so i let it a lone
function draw_polygon (event){
 if (total_lines < 1) return;
 if (total_lines < current_lines) return;
 if (event.type === "touchstart"){
 if (current_lines === 0){
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX,e.clientY);
 temporary_canvas.strokeText(".",e.clientX,e.clientY);
// legs++;
 return;
 }
 temporary_canvas.lineTo(e.clientX,e.clientY);
 temporary_canvas.stroke();
// legs++;
 if (current_lines === total_lines){
  temporary_canvas.closePath(); 
  temporary_canvas.stroke();
  temporary_canvas.fill();
//  legs = 0;
 }
 }
 else if (event.type === "touchmove") {
  temporary_canvas.clearRect(0,0,300,150);
 if (current_lines === 0) {
  temporary_canvas.beginPath();
  temporary_canvas.moveTo(e.clientX, e.clientY);
  temporary_canvas.strokeText(".", e.clientX, e.clientY);
//  legs++;
  return;
 }
 temporary_canvas.lineTo(e.clientX, e.clientY);
 temporary_canvas.stroke();
// legs++;
 if (current_lines === total_lines) {
  temporary_canvas.closePath();
  temporary_canvas.stroke();
  temporary_canvas.fill();
//  legs = 0;
 }
}
else if (event.type === "touchend") {
 if (current_lines === 0) {
  inner_canvas.beginPath();
  inner_canvas.moveTo(e.clientX, e.clientY);
  inner_canvas.strokeText(".", e.clientX, e.clientY);
  current_lines++;
  return;
 }
 temporary_canvas.lineTo(e.clientX, e.clientY);
 temporary_canvas.stroke();
 current_lines++;
 if (current_lines === total_lines) {
  temporary_canvas.closePath();
  temporary_canvas.stroke();
  temporary_canvas.fill();
  current_lines = 0;
 }
}
}

function draw_triangle (event)
{
 triangle_width *= scale_factor;
 if (event.type === "touchstart"){
 let z = triangle_width/2 - (triangle_width-(triangle_width ** 2 - (triangle_width/2) ** 2 )**0.5)/2;
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX-triangle_width/2,e.clientY-z);
 temporary_canvas.lineTo(e.clientX+triangle_width/2,e.clientY-z);
 temporary_canvas.lineTo(e.clientX,e.clientY+z);
 temporary_canvas.closePath();
 if (fill_triangle_with_color)temporary_canvas.fill ();
 temporary_canvas.stroke();}
 else if (event.type === "touchmove"){
 temporary_canvas.clearRect(0,0,300,150);
 let z = triangle_width/2 - (triangle_width-(triangle_width*triangle_width-triangle_width/2*triangle_width/2)**0.5)/2;
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX-triangle_width,e.clientY-z);
 temporary_canvas.lineTo(e.clientX+triangle_width/2,e.clientY-z);
 temporary_canvas.lineTo(e.clientX,e.clientY+z);
 temporary_canvas.closePath();
 if (fill_triangle_with_color)temporary_canvas.fill ();
 temporary_canvas.stroke();}
 else if (event.type === "touchend"){
 let z = triangle_width/2 - (triangle_width-(triangle_width*triangle_width-triangle_width/2*triangle_width/2)**0.5)/2;
 inner_canvas.beginPath();
 inner_canvas.moveTo(e.clientX-triangle_width/2,e.clientY-z);
 inner_canvas.lineTo(e.clientX+triangle_width/2,e.clientY-z);
 inner_canvas.lineTo(e.clientX,e.clientY+z);
 inner_canvas.closePath();
 if (fill_triangle_with_color)inner_canvas.fill ();
 inner_canvas.stroke();}
 triangle_width /= scale_factor;
}
//(50-(50*50-25*25)**0.5)/2

function draw_line (event) {
 if (event.type === "touchstart"){
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX-line_length*scale_factor,e.clientY);
 temporary_canvas.lineTo(e.clientX+line_length*scale_factor,e.clientY);
 temporary_canvas.stroke();}
  if (event.type === "touchmove"){
  temporary_canvas.clearRect(0,0,300,150);
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX - line_length*scale_factor, e.clientY);
 temporary_canvas.lineTo(e.clientX + line_length*scale_factor, e.clientY);
 temporary_canvas.stroke();}
  if (event.type === "touchend") {
 inner_canvas.beginPath();
 inner_canvas.moveTo(e.clientX - 
 line_length*scale_factor, e.clientY);
 inner_canvas.lineTo(e.clientX + line_length*scale_factor, e.clientY);
 inner_canvas.stroke();}
}

function draw_rectangle (event) {
 rectangle_width *= scale_factor;
 rectangle_height *= scale_factor;
 if (event.type === "touchstart"){
 temporary_canvas.beginPath();
 if (fill_rectangle_with_color)temporary_canvas.fillRect (e.clientX-rectangle_width/2,e.clientY-rectangle_height/2,rectangle_width,rectangle_height);
 temporary_canvas.strokeRect (e.clientX-rectangle_width/2,e.clientY-rectangle_height/2,rectangle_width,rectangle_height);}
 else if (event.type === "touchmove"){
 temporary_canvas.clearRect(0,0,300,150);
 temporary_canvas.beginPath();
 if (fill_rectangle_with_color)
 temporary_canvas.fillRect(e.clientX-rectangle_width/2,e.clientY-rectangle_height/2,rectangle_width,rectangle_height);
 temporary_canvas.strokeRect (e.clientX-rectangle_width/2,e.clientY-rectangle_height/2,rectangle_width,rectangle_height);}
 else if (event.type === "touchend"){
 inner_canvas.beginPath();
 if (fill_rectangle_with_color)inner_canvas.fillRect(e.clientX-rectangle_width/2,e.clientY-rectangle_height/2,rectangle_width,rectangle_height);
 inner_canvas.strokeRect (e.clientX-rectangle_width/2,e.clientY-rectangle_height/2,rectangle_width,rectangle_height);}
 rectangle_width /= scale_factor;
 rectangle_height /= scale_factor;
}

function draw_ellipse (event) {
 xradius *= scale_factor;
 yradius *= scale_factor;
 if (event.type === "touchstart"){
 temporary_canvas.beginPath();
 temporary_canvas.ellipse (e.clientX,e.clientY,xradius,yradius,ellipse_rotation_degree/180*PI,ellipse_first_angle/180*PI,ellipse_second_angle/180*PI);
 if (fill_ellipse_with_color)temporary_canvas.fill ();
 temporary_canvas.stroke ();}
 else if (event.type === "touchmove"){
 temporary_canvas.clearRect(0,0,300,150);
 temporary_canvas.beginPath();
 temporary_canvas.ellipse (e.clientX,e.clientY,xradius,yradius,ellipse_rotation_degree/180*PI,ellipse_first_angle/180*PI,ellipse_second_angle/180*PI);
 if (fill_ellipse_with_color)temporary_canvas.fill ();
 temporary_canvas.stroke ();}
 else if (event.type === "touchend"){
 inner_canvas.beginPath();
 inner_canvas.ellipse (e.clientX,e.clientY,xradius,yradius,ellipse_rotation_degree/180*PI,ellipse_first_angle/180*PI,ellipse_second_angle/180*PI);
 if (fill_ellipse_with_color)inner_canvas.fill ();
 inner_canvas.stroke ();}
 xradius /= scale_factor;
 yradius /= scale_factor;
}

function draw_quadratic_curve(event) {
 if (event.type === "touchstart"){
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX,e.clientY);
 temporary_canvas.quadraticCurveTo (50,5,200,120);
 temporary_canvas.stroke();}
 else if (event.type === "touchmove"){
 temporary_canvas.clearRect(0,0,300,150);
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX,e.clientY);
 temporary_canvas.quadraticCurveTo (50,50,20,20);
 temporary_canvas.stroke();}
 else if (event.type === "touchend"){
 inner_canvas.beginPath();
 inner_canvas.moveTo(e.clientX,e.clientY);
 inner_canvas.quadraticCurveTo (50,50,20,20);
 inner_canvas.stroke();}
}

function draw_bezier_curve(event) {
 if (event.type === "touchstart"){
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX,e.clientY);
 temporary_canvas.bezierCurveTo(10,10,30,20,30,30);
 temporary_canvas.stroke();}
 else if (event.type === "touchmove"){
temporary_canvas.clearRect(0,0,300,150);
temporary_canvas.beginPath();
temporary_canvas.moveTo(e.clientX, e.clientY);
temporary_canvas.bezierCurveTo(10, 10, 30, 20, 30, 30);
temporary_canvas.stroke();}
else if (event.type === "touchend"){
inner_canvas.beginPath();
inner_canvas.moveTo(e.clientX, e.clientY);
inner_canvas.bezierCurveTo(10, 10, 30, 20, 30, 30);
inner_canvas.stroke();}
}

function draw_curved_polygon(event) {
 if (event.type === "touchstart"){
  temporary_canvas.moveTo(e.clientX-25,e.clientY-25);
  temporary_canvas.arcTo(e.clientX+15,e.clientY,e.clientX+10,e.clientY+15,70);
  temporary_canvas.stroke();
 }
}

function draw_text (event) {
 let text = prompt("enter text");
 temporary_canvas.strokeText(text,e.clientX,e.clientY,);
};

function draw_pipe(event) {
 pipe_xradius1 *= scale_factor;
 pipe_yradius1 *= scale_factor;
 pipe_xradius2 *= scale_factor;
 pipe_yradius2 *= scale_factor;
 pipe_height *= scale_factor;
 if (event.type === "touchstart"){
   temporary_canvas.beginPath();
 temporary_canvas.ellipse(e.clientX, e.clientY - pipe_height / 2, pipe_xradius1 / 2, pipe_yradius1 / 2, 0, pipe_first_angle1 / 180 * PI, pipe_second_angle1 / 180 * PI);
 temporary_canvas.moveTo(e.clientX - pipe_xradius1 / 2, e.clientY - pipe_height / 2);
 temporary_canvas.lineTo(e.clientX - pipe_xradius2 / 2, e.clientY + pipe_height / 2);
 temporary_canvas.moveTo(e.clientX + pipe_xradius1 / 2, e.clientY - pipe_height / 2);
 temporary_canvas.lineTo(e.clientX + pipe_xradius2 / 2, e.clientY + pipe_height / 2);
 temporary_canvas.ellipse(e.clientX, e.clientY + pipe_height / 2, pipe_xradius2 / 2, pipe_yradius2 / 2, 0, pipe_first_angle2 / 180 * PI, pipe_second_angle2 / 180 * PI);
 if (fill_pipe_with_color) temporary_canvas.fill();
 temporary_canvas.stroke();
 }
  else if (event.type === "touchmove") {
  temporary_canvas.clearRect(0,0,300,150);
    temporary_canvas.beginPath();
 temporary_canvas.ellipse(e.clientX, e.clientY - pipe_height / 2, pipe_xradius1 / 2, pipe_yradius1 / 2, 0, pipe_first_angle1 / 180 * PI, pipe_second_angle1 / 180 * PI);
 temporary_canvas.moveTo(e.clientX - pipe_xradius1 / 2, e.clientY - pipe_height / 2);
 temporary_canvas.lineTo(e.clientX - pipe_xradius2 / 2, e.clientY + pipe_height / 2);
 temporary_canvas.moveTo(e.clientX + pipe_xradius1 / 2, e.clientY - pipe_height / 2);
 temporary_canvas.lineTo(e.clientX + pipe_xradius2 / 2, e.clientY + pipe_height / 2);
 temporary_canvas.ellipse(e.clientX, e.clientY + pipe_height / 2, pipe_xradius2 / 2, pipe_yradius2 / 2, 0, pipe_first_angle2 / 180 * PI, pipe_second_angle2 / 180 * PI);
 if (fill_pipe_with_color) temporary_canvas.fill();
 temporary_canvas.stroke();
 }
  if (event.type === "touchend") {
   temporary_canvas.clearRect(0,0,300,150);
  inner_canvas.beginPath();
inner_canvas.ellipse(e.clientX, e.clientY - pipe_height/2, pipe_xradius1 / 2, pipe_yradius1 / 2, 0, pipe_first_angle1 / 180 * PI, pipe_second_angle1 / 180 * PI);
inner_canvas.moveTo(e.clientX - pipe_xradius1 / 2, e.clientY - pipe_height / 2 );
inner_canvas.lineTo(e.clientX - pipe_xradius2 / 2, e.clientY + pipe_height / 2);
inner_canvas.moveTo(e.clientX + pipe_xradius1 / 2, e.clientY - pipe_height / 2);
inner_canvas.lineTo(e.clientX + pipe_xradius2 / 2, e.clientY + pipe_height / 2);
inner_canvas.ellipse(e.clientX, e.clientY + pipe_height / 2, pipe_xradius2 / 2, pipe_yradius2 / 2, 0, pipe_first_angle2 / 180 * PI, pipe_second_angle2 / 180 * PI);
if (fill_pipe_with_color) inner_canvas.fill();
inner_canvas.stroke();
 }
 pipe_xradius1 /= scale_factor;
 pipe_yradius1 /= scale_factor;
 pipe_xradius2 /= scale_factor;
 pipe_yradius2 /= scale_factor;
 pipe_height *= scale_factor;
}

function draw_diamond(event) {
 diamond_width *= scale_factor;
 diamond_height *= scale_factor;
 if (event.type === "touchstart") {
  temporary_canvas.beginPath();
  temporary_canvas.moveTo(e.clientX,e.clientY-diamond_height);
  temporary_canvas.lineTo(e.clientX+diamond_width/3,e.clientY);
  temporary_canvas.lineTo(e.clientX+diamond_width/6,e.clientY+diamond_height/3);
  temporary_canvas.lineTo(e.clientX-diamond_width/6,e.clientY+diamond_height/3);
  temporary_canvas.lineTo(e.clientX-diamond_width/3,e.clientY);
  temporary_canvas.closePath();
  if (fill_diamond_with_color)temporary_canvas.fill ();
  temporary_canvas.stroke();
 }
else if (event.type === "touchmove") {
 temporary_canvas.clearRect(0,0,300,150);
 temporary_canvas.beginPath();
 temporary_canvas.moveTo(e.clientX, e.clientY - diamond_height);
 temporary_canvas.lineTo(e.clientX + diamond_width/3, e.clientY);
 temporary_canvas.lineTo(e.clientX + diamond_width/6, e.clientY + diamond_height/3);
 temporary_canvas.lineTo(e.clientX - diamond_width/6, e.clientY + diamond_height/3);
 temporary_canvas.lineTo(e.clientX - diamond_width/3, e.clientY);
 temporary_canvas.closePath();
 if (fill_diamond_with_color)temporary_canvas.fill ();
 temporary_canvas.stroke();
}
if (event.type === "touchend") {
 inner_canvas.beginPath();
 inner_canvas.moveTo(e.clientX, e.clientY - diamond_height);
 inner_canvas.lineTo(e.clientX + diamond_width/3, e.clientY);
 inner_canvas.lineTo(e.clientX + diamond_width/6, e.clientY + diamond_height/3);
 inner_canvas.lineTo(e.clientX - diamond_width/6, e.clientY + diamond_height/3);
 inner_canvas.lineTo(e.clientX - diamond_width/3, e.clientY);
 inner_canvas.closePath();
 if (fill_diamond_with_color)inner_canvas.fill ();
 inner_canvas.stroke();
}
diamond_width /= scale_factor;
diamond_height /= scale_factor;
}