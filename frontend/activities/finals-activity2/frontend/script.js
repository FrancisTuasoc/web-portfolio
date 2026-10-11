const load = document.getElementById("load-btn");
const change = document.getElementById("change-btn");
const mes = document.getElementById("message");
const loading = document.getElementById("loading");
const images = document.getElementById("images");
const assets = document.getElementById("assets");
const mode = document.getElementById("mode");
const body = document.getElementById("body");

   load.addEventListener("click", () => {
    mes.style.color = "purple";
    mes.innerHTML = "Loading Dashboard...";


    loading.innerHTML = "loading...";
    images.innerHTML = "loading images...";
    assets.innerHTML = "loading assets...";

    const loadingPromise = new Promise(function(resolve){
        setTimeout(function(){
            loading.innerHTML = "loaded!";
            resolve()
        },2000)
      })

    const imagesPromise = new Promise(function(resolve){
        setTimeout(function(){
            images.innerHTML = "image loaded!";
            resolve()
        },2000)
      })

    const assetsPromise = new Promise(function(resolve){
        setTimeout(function(){
            assets.innerHTML = "assets loaded!";
            resolve()
        },2000)
      })

      Promise.all([loadingPromise, imagesPromise, assetsPromise])

      .then(function(){
        mes.innerHTML = "Dashboard Ready!";
      })
   })

   change.addEventListener("click", () => {

        load.style.backgroundColor = "red";
        change.style.backgroundColor = "green";

    const loadingPromise = new Promise(function(resolve){
        setTimeout(function(){
            loading.style.backgroundColor = "beige";
            loading.innerHTML = "magbabago";
            resolve()
        },2000)
      })

    const imagesPromise = new Promise(function(resolve){
        setTimeout(function(){
            images.style.backgroundColor = "salmon";
            images.innerHTML = "ang";
            resolve()
        },3000)
      })

    const assetsPromise = new Promise(function(resolve){
        setTimeout(function(){
            assets.style.backgroundColor = "teal";
            assets.innerHTML = "content";
            resolve()
        },4000)
      })

      Promise.all([loadingPromise, imagesPromise, assetsPromise])

      .then(function(){
        mes.innerHTML = "------";
      })
   })

   mode.addEventListener("click", () => {
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            
        }
        
    })