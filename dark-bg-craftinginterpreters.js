// ==UserScript==
// @name         dark-bg-craftinginterpreters
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       skyn37
// @match        https://craftinginterpreters.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=craftinginterpreters.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const actions = ["#top", ".challenges", ".design-note", 'p', "a[id]"];
    while (actions.length > 0) {
        let element = actions.pop();
        let query = document.querySelectorAll(element);
        if (query) {
            for (let i = 0; i < query.length; i++) {
                switch (element) {
                    case 'p': {
                        console.log(query[i]);
                        query[i].style.color = "#ffff";
                        break
                    }
                    case "a[id]": {
                        console.log(query[i]);
                        query[i].style.color = "#ffff";
                        break
                    }
                    default:
                        query[i].style.backgroundColor = "#333333";
                }
            }
        }
    }

    let elements = document.querySelectorAll(".floating");
    let navi = elements[0];
    let btnDiv = document.createElement("div");
    let buttonLeft = document.createElement("button");
    buttonLeft.textContent = "<";
    let buttonRight = document.createElement("button");
    buttonRight.textContent = ">";
    btnDiv.appendChild(buttonLeft);
    btnDiv.appendChild(buttonRight);
    navi.appendChild(btnDiv);

    buttonRight.addEventListener('click', (e) => {
        let body = document.getElementById("top");
        if (!body.style.fontSize) {
            body.style.fontSize = "15px";
        }
        const parsedFonsize = body.style.fontSize.split('px');
        body.style.fontSize = (parseInt(parsedFonsize[0]) + 1) + 'px';
    });
    buttonLeft.addEventListener('click', (e) => {
        let body = document.getElementById("top");
        if (!body.style.fontSize) {
            body.style.fontSize = "15px";
        }
        const parsedFonsize = body.style.fontSize.split('px');
        body.style.fontSize = (parseInt(parsedFonsize[0]) - 1) + 'px';
    });

    let mono = document.createElement("button");
    mono.textContent = "font-mono";
    let SourceCodePro = document.createElement("button");
    SourceCodePro.textContent = "font-SourceCodePro";
    btnDiv.appendChild(mono);
    btnDiv.appendChild(SourceCodePro);

    mono.addEventListener('click', (e) => {
        let body = document.getElementById("top");
        body.style.fontFamily = 'monospace';
    });
    SourceCodePro.addEventListener('click', (e) => {
        let body = document.getElementById("top");
        body.style.fontFamily = 'Source Code Pro';
    });

})();
