const btn = document.getElementById("shorten") ;
btn.addEventListener('click',short) ;

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

async function short(){
    let longURL = document.getElementById("longurl").value;
    if ( longURL.length == 0){
        alert("Field is empty !") ;
        return false ;
    }

    if ( validURL(longURL) == false ){
        alert("URL is invalid !") ;
        return false ;
    }
    let shortURL = document.getElementById("shorturl")
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`)
    const data = await result.json() ;
    
    shortURL.value = data.result.short_link2;
    
}