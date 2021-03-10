# YLBetter

![image](https://user-images.githubusercontent.com/32989588/110517511-a22aae80-8113-11eb-9069-fb83be5f1f1b.png)

- ***[Click Here For Install YLBetter.user.js](https://github.com/ylbetter/YLBetter/raw/main/ylbetter.user.js)***

```javascript
// ==UserScript==
// @name         YTLBetter Button
// @namespace    https://ylbetter.github.io
// @version      0.1
// @description  try to take over the world!
// @icon         https://avatars.githubusercontent.com/u/80352165?s=200&v=4
// @author       You
// @match        https://www.youtube.com/*
// @exclude      https://www.youtube.com/embed/*
// @exclude      https://www.youtube.com/live_chat?v=*
// @exclude      https://www.youtube.com/live_chat_replay?*
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
    var url = "https://ylbetter.github.io/watch" + window.location.search;
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
` );
```
