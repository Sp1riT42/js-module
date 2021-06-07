function loadScript(url, callback = () => null) {
    let element
    if(typeof url !== 'string' ){
        if (Array.isArray(url)) {
            for(let i=0; i<url.length; i++) {
                element = document.createElement("script");
                element.type = "text/javascript";
                element.src = url[i];
                element.onload = callback;
                document.body.appendChild(element);
            }
        } else {
            window.onload = url
        }
    } else {
        element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        element.onload = callback;
        document.body.appendChild(element);
    }
}


loadScript('./src/b.js', () => {
})