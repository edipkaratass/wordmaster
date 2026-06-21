let words = JSON.parse(localStorage.getItem("words") || "[]");
let current = null;

function save() {
localStorage.setItem("words", JSON.stringify(words));
render();
}

function addWord() {
let en = document.getElementById("en").value;
let tr = document.getElementById("tr").value;
if(!en || !tr) return;

words.push({en, tr});
save();

document.getElementById("en").value="";
document.getElementById("tr").value="";
}

function render() {
let list = document.getElementById("list");
list.innerHTML = "";

words.forEach((w)=>{
list.innerHTML += `<div class='card'>${w.en} = ${w.tr}</div>`;
});
}

function startTest() {
if(words.length===0) return alert("Kelime yok");

current = words[Math.floor(Math.random()*words.length)];
document.getElementById("question").innerText = "Çevir: " + current.en;
document.getElementById("result").innerText = "";
}

function check() {
let ans = document.getElementById("answer").value.toLowerCase();

if(ans === current.tr.toLowerCase()){
document.getElementById("result").innerText = "✅ Doğru";
} else {
document.getElementById("result").innerText = "❌ Yanlış: " + current.tr;
}

document.getElementById("answer").value = "";
}

render();
