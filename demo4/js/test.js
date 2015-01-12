//css伪类的修改
var addRule = (function(style){
    var sheet = document.head.appendChild(style).sheet;
    return function(selector, css){
        var propText = Object.keys(css).map(function(p){
            return p+":"+css[p]
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    }
})(document.createElement("style"));

addRule("p:before", {
    display: "block",
    width: "100px",
    height: "100px",
    background: "red",
    "border-radius": "50%",
    content: "''"
});