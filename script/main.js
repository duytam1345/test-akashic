
class Player {

    moving = false;
    dirMove = "";

    moveSpeed = 5;

    frames = [1, 2];

    x = 0;
    y = 0;

    width = 16;
    height = 16;

    constructor(m, d) {
        this.moving = m;
        this.dirMove = d;
    }

    SetDirMove(b, s) {
        this.moving = b;
        this.dirMove = s;
    }

    onUpdate() {
        if (this.moving) {
            switch (this.dirMove) {
                case "Left":
                    this.x = this.x - 1 * this.moveSpeed;
                    break;
                case "Right":
                    this.x = this.x + 1 * this.moveSpeed;
                    break;
                case "Up":
                    this.y = this.y - 1 * this.moveSpeed;
                    break;
                case "Down":
                    this.y = this.y + 1 * this.moveSpeed;
                    break;
            }
        }
    }

    SetFrames(f) {
        switch (this.dirMove) {
            case "Left":
                if (this.moving) {
                    this.frames = [12, 13, 14];
                }
                else {
                    this.frames = [12, 12, 12];
                }
                break;
            case "Right":
                if (this.moving) {
                    this.frames = [24, 25, 26];
                }
                else {
                    this.frames = [24, 24, 24];
                }
                break;
            case "Up":
                if (this.moving) {
                    this.frames = [36, 37, 38];
                }
                else {
                    this.frames = [36, 36, 36];
                }
                break;
            case "Down":
                if (this.moving) {
                    this.frames = [0, 1, 2];
                }
                else {
                    this.frames = [0, 0, 0];
                }
                break;
        }
    }

    SetInputMove() {
        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyA":
                    this.SetDirMove(true, "Left");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyA":
                    this.SetDirMove(false, "Left");
                    break;
            }
        });

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyD":
                    this.SetDirMove(true, "Right");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyD":
                    this.SetDirMove(false, "Right");
                    break;
            }
        });

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyW":
                    this.SetDirMove(true, "Up");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyW":
                    this.SetDirMove(false, "Up");
                    break;
            }
        });

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyS":
                    this.SetDirMove(true, "Down");
                    break;
            }
        });

        window.addEventListener("keyup", (e) => {
            switch (e.code) {
                case "KeyS":
                    this.SetDirMove(false, "Down");
                    break;
            }
        });
    }
}

function main(param) {

    var scene = new g.Scene({
        game: g.game,
        assetIds: ["map", "mouse"],
    });
    var at = require("@akashic-extension/akashic-tile");
    var co = require("@akashic-extension/collision-js");
    var collision_js_1 = require("@akashic-extension/collision-js");

    var p = new Player(false, "Left");


    scene.onLoad.add(function () {

        aabbToAABBDemo(scene);

        var tile = new at.Tile({
            scene: scene,
            src: scene.asset.getImageById("map"),
            tileWidth: 32,
            tileHeight: 32,
            tileData: [
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            ],
            x: 0,
            y: 0,
            scaleX: 2,
            scaleY: 2,
        });
        scene.append(tile);

        // scene.onPointDownCapture.add(function (ev) {
        //     console.log(ev);
        // });

        var player = new g.FrameSprite({
            scene: scene,
            src: scene.asset.getImageById("mouse"),
            width: 64,
            height: 64,

            srcWidth: 48,
            srcHeight: 48,

            frames: [0, 1],

            loop: true,

            interval: 200,

            scaleX: 2,
            scaleY: 2,
        });
        scene.append(player);
        player.start();

        scene.append(player);

        // CreateRandomPhomai(scene);

        window.addEventListener("keydown", (e) => {
            switch (e.code) {
                case "KeyF":
                    // player.frames = [3];
                    console.log("F");
                    break;
            }
        });

        p.SetInputMove();

        scene.onUpdate.add(function () {
            p.onUpdate();

            player.x = p.x;
            player.y = p.y;

            p.SetFrames(player);
            player.frames = p.frames;

            player.modified();
        });
    });
    g.game.pushScene(scene);
}

function CreateRandomPhomai(scene) {
    var phomai1 = new g.FilledRect({
        scene: scene,
        width: 8,
        height: 8,
        x: 200,
        y: 200,
        cssColor: "green",
    });

    var phomai2 = new g.FilledRect({
        scene: scene,
        width: 8,
        height: 8,
        x: 300,
        y: 200,
        cssColor: "green",
    });

    var phomai3 = new g.FilledRect({
        scene: scene,
        width: 8,
        height: 8,
        x: 400,
        y: 200,
        cssColor: "green",
    });

    scene.append(phomai1);
    scene.append(phomai2);
    scene.append(phomai3);
}

function aabbToAABBDemo(scene) {
    
    

    // var root = new g.E({ scene: scene });
    // var halfExtend = { x: g.game.width / 8, y: g.game.height / 8 };
    // var position = new collision_js_1.Vec2(g.game.width / 2, g.game.height / 2);
    // var aabb1 = {
    //     min: position.clone().sub(halfExtend),
    //     max: position.clone().add(halfExtend)
    // };
    // var aabb2 = {
    //     min: { x: 0, y: 0 },
    //     max: { x: 128, y: 96 }
    // };
    // var aabbe1 = createAABBE(scene, aabb1, "green");
    // var aabbe2 = createAABBE(scene, aabb2, "blue", true);
    // aabbe2.onPointMove.add(function (ev) {
    //     collision_js_1.Vec2.add(aabb2.min, ev.prevDelta);
    //     collision_js_1.Vec2.add(aabb2.max, ev.prevDelta);
    //     collision_js_1.Vec2.add(aabbe2, ev.prevDelta);
    //     aabbe2.cssColor = co.aabbToAABB(aabb1, aabb2) ? "red" : "blue";
    //     aabbe2.modified();
    // });
    // root.append(aabbe1);
    // root.append(aabbe2);
    // return root;
}

module.exports = main;


  //tao tilemap --done
  //check va cham (collsion)
  //di chuyen va clear stage
  //