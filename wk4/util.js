/**
版权所有：曾亮
说明：教学需要，随便写写，语法凌乱，勿要模仿！
地址：我家就是那个屯
tel: 11010101010101
*/
window.onload = function() {
  document.body.style.margin = "0";
  document.body.style.padding = "0";
}
if (window.parent === window) {

  document.addEventListener("DOMContentLoaded", function() {
    let content = document.body.innerHTML;
    content = content.replace(/\<script(.|\s)*\<\/script\>/g, "");
    content = content.replace(/\<\!\-\-.*\-\-\>/, "");
    const iframe = document.createElement("iframe");
    iframe.src = window.location.href;
    const st = iframe.style;
    st.width = "100%";
    st.height = window.innerHeight / 2 + "px";
    st.border = "none";
    document.body.innerHTML = "";

    const inputDiv = document.createElement("div");
    inputDiv.innerHTML = `
      <label> <input placeholder="输入选择器" /><button> GO</button></label>
    `;

    const htmlShow = document.createElement("textarea");
    htmlShow.value = content;
    htmlShow.style.width = "100%";
    htmlShow.style.height = st.height;
    htmlShow.style.position = "absolute";
    htmlShow.style.bottom = "0";
    htmlShow.style.left = "0";
    htmlShow.disabled = true;

    inputDiv.style.position = "absolute";
    inputDiv.style.top = "10px";
    inputDiv.style.right = "10px";
    inputDiv.style.padding = "10px";
    inputDiv.style.backgroundColor = "#eee";


    const inputSelector = inputDiv.querySelector("input");
    const inputSelectorButton = inputDiv.querySelector("button");
    inputSelectorButton.style.fontSize = "20pt";
    inputSelector.style.fontSize = "20pt";
    inputSelector.style.width = "380px";
    inputSelector.style.outline = "none";
    let styleDOM;
    function handle() {
        if(styleDOM) styleDOM.remove();
        let selectorText = inputSelector.value;
        const doc = iframe.contentWindow.document;
        const style = doc.createElement("style");

        style.innerText = `
          ${selectorText} {
            content:"${/:before$/.test(selectorText) ? "before" : "after"}";
            background-color:#eee;
          }
        `;
        styleDOM = style;
        doc.body.appendChild(style);

    }
    inputSelector.addEventListener("change", handle);
    inputSelectorButton.addEventListener("click", handle);

    document.body.appendChild(iframe);
    document.body.appendChild(inputDiv);
    document.body.appendChild(htmlShow);
  })

}
