let title = document.querySelector("h1")
title.innerText = "Novo titulo com JS";

let links = document.querySelector("a")
links.innerText = "Link Proz Educação";

let lista_ul = document.querySelector("ul")
lista_ul.innerHTML = `
<ul>
    <li> Elemento 1 Js</li>
    <li> Elemento 2 Js</li>
    <li> Elemento 3 Js</li>
</ul>
`
let lista_ol = document.querySelector("ol")
lista_ol.innerHTML = `
<ol>
    <li> <a href="http://facebook.com">Facebook </a> </li>
    <li> <a href="https://www.youtube.com">Youtube </a> </li> 
    <li> <a href="https://www.instagram.com">Instagram </a> </li>
</ol>
`
