function sendRequest(method, url, handler) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) {
            return;
        }
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            // return xhr.responseText;
            handler(xhr.responseText);
        }
    }
}
// var result = sendRequest("GET", "hello.txt");
// console.log(result);

function inputResponse(response) {
    console.log(response);
}

function createArray(response) {
    console.log(response.split("\n"));
}

function findMaxChar(response) {
    var obj = {};
    var char;
    for (var i in response) {
        char = response[i];
        obj[char] = obj[char] + 1 || 1;
    }

    var max = 0,
        maxChar;
    for (el in obj) {
        if (obj[el] >= max) {
            max = obj[el];
            maxChar = el;
        }
    }
    console.log(maxChar);

}
sendRequest("GET", "hello.txt", inputResponse);
sendRequest("GET", "hello.txt", createArray);
sendRequest("GET", "hello.txt", findMaxChar);



// 453021752