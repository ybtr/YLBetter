// ==UserScript==
// @name         YTLBetter Button
// @namespace    https://ylbetter.yttybe.cf
// @version      1.2
// @description  Try to take over the world!
// @icon         https://avatars.githubusercontent.com/u/80352165?s=200&v=4
// @author       browjob
// @match        https://www.youtube.com/*
// @exclude      https://www.youtube.com/embed/*
// @exclude      https://www.youtube.com/live_chat?v=*
// @exclude      https://www.youtube.com/live_chat_replay?*
// @exclude      https://www.youtube.com/live_chat?continuation=*
// @grant        GM_addStyle
// ==/UserScript==

//
var TextBtn = "Go to YLBetter";
//
var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="btn" type="button">' + TextBtn + '</button>';
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

document.getElementById ("btn").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    var url = "https://ylbetter.yttybe.cf/watch" + window.location.search;
    window.location.replace(url);
}
GM_addStyle ( `
#btn {
    position: fixed;
    z-index: 14880000;
    width: 100%;
    max-width: 150px;
    color: #bdbdbd;
    height: 50px;
    background: #0c0c0cba;
    cursor: pointer;
    top: 55px;
    border: 0;
    border-radius: 0 50px 50px 0px;
    opacity: 0;
    font-size: 15px;
    transition: 0.7s;
    outline: 0;
}
#btn:hover{
    opacity: 0.7;
    font-size: 16px;
}
`);
