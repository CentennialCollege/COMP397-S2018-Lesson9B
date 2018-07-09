//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){
    // Game Variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let helloLabel:objects.Label;

    function Start():void {
        console.log(`%c Start Function`,"font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        // This is where all the magic happens
        Main();
    }

    function Update():void {
        //helloLabel.rotation += 5;

        stage.update();
    }

    function Main():void {
        console.log(`%c Main Function`,"font-style:italic; font-size:16px; color:blue;");

        // this is the Label
        helloLabel = new objects.Label("Hello, World!", "60px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
    }

    window.addEventListener("load", Start);

})();