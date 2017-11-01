 import React from 'react';
 import ReactDOM from 'react-dom';
 


ReactDOM.render(
    <div> hello react </div>,
    document.getElementById('root')

);

const obc ={
a:1,

};

let nameObj = name('leo');

console.log({...nameObj});







// /*my code*/
 
function Drag(id){
        this.box = document.getElementById(id);
        this.disX = 0;
        this.disY = 0;
    }

    Drag.prototype.init = function(){
        var _this = this;
        this.box.addEventListener('mousedown',down);
        function down(ev){
            _this.down(ev);
        }
    }

    Drag.prototype.down = function(ev){
        var _this = this;
        this.disX = ev.clientX - this.box.offsetLeft;
        this.disY = ev.clientY - this.box.offsetTop;
        var move = function(ev){
            _this.move(ev);
        }
        var up = function(ev){
            _this.up(ev,move,up);
        }
        document.addEventListener('mousemove',move);
        document.addEventListener('mouseup',up);

        ev.preventDefault();
    }

    Drag.prototype.move = function(ev){
        this.box.style.left = ev.clientX - this.disX + 'px';
        this.box.style.top = ev.clientY - this.disY + 'px';
    }
    Drag.prototype.up = function(ev,move,up){
        document.removeEventListener('mousemove',move);
        document.removeEventListener('mouseup',up);
    }

    var d = new Drag('box');

    d.init();
