var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];

const mapping = {
    'Jazzed/': ['plus', 'upahead_annual']
};

const match = Object.keys(mapping).find(e => ua.includes(e));

function setHeaderValue(headers, headerName, value) {
    var lowerCaseHeader = headerName.toLowerCase();
    if (lowerCaseHeader in headers) {
        headers[lowerCaseHeader] = value;
    } else {
        headers[headerName] = value;
    }
}

var modifiedHeaders = $request.headers;

if (match) {
    setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
}

$done({headers: modifiedHeaders});
