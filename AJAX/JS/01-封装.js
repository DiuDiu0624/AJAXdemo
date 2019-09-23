function AJAX(cho, url, fn, prams) {
    var xhr = new XMLHttpRequest;
    if (cho === 'get') {
        url = url +"?"+ prams;
        // console.log(url);
    }
    xhr.open(cho, url, true);
    xhr.onreadystatechange = fn;
    if (cho === 'get') {
        xhr.send(null);
    } else {
        xhr.send(prams);
    }
    return xhr;
}