// Import stylesheets
import "./style.css";
import { fabric } from "fabric";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1><canvas id="c"></canvas>`;

const width = 800;
const height = 600;

var canvas = new fabric.Canvas("c", {
  backgroundColor: "rgba(248,248,248)",
  width:width,
  height:height
});

var text = new fabric.Text("hello", {
  left: Math.random()*width,
  top: Math.random()*width,
});
canvas.add(text);


var text2 = new fabric.Text("hello2", {
  left: Math.random()*width,
  top: Math.random()*width,
});
canvas.add(text2);


var text3 = new fabric.Text("hello3", {
  left: Math.random()*width,
  top: Math.random()*width,
});
canvas.add(text3);