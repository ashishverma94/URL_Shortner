const copyButton = document.getElementById("copy") ;
const newURL = document.getElementById("shorturl") ;
copyButton.onclick = ()=>{
    newURL.select() ;
    navigator.clipboard.writeText(newURL.value)
}