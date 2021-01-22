// for print css selector value
function selectorValue() {

    console.log(document.querySelector(".field-content>.lbl-licitacao:nth-of-type(1)>font").textContent);

}
// for print css selector
function printSelector(){
    console.log(".field-content>.lbl-licitacao:nth-of-type(1)>font");
}