function getdata(method, url, parms) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if (method === "get" && parms !== undefined) {
            url = `${url}?${parms}`;
        }
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            }
        };
        if (method === 'get') {
            xhr.send(null);
        } else {
            xhr.send(parms);
        }
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log("错误信息为："+err);
    });
}