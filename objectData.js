// for print css selector value
function selectorValue() {

    console.log(document.querySelector(".field-content>p:nth-of-type(1) >font >font").textContent);

}
// for print css selector
function printSelector(){
    console.log(".field-content>p:nth-of-type(1) >font >font");
}