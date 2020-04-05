// Import stylesheets
import "./style.css";
import { fabric } from "fabric";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1><canvas id="c"></canvas>`;

var canvas = new fabric.Canvas("c", {
  backgroundColor: "rgba(248,248,248)",
  width:800,
  height:600
});

var text = new fabric.Text("hello");
canvas.add(text);


var text2 = new fabric.Text("hello2");
canvas.add(text2);


var text3 = new fabric.Text("hello3");
canvas.add(text3);