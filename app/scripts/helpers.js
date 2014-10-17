var checkInput = function(input, fieldName) {
   if (input === undefined || input === null || input.length === 0)
       return { fieldName: 'This field is required.' }
    return true;
}
/*
function filterRestangularResponse(response) {
    var result = [];
    for (var index=0; index<response.length; index++) {
        result[index] = response[index];
    }
    console.log(result);
    return result;
}*/

function handleError(error) {
    console.error('An error occured. Showing error modal');
    console.error(error);
    $('#myModalError').modal({
        show: true
    });
}

function emailToUsername(email) {
    var usernameEnd = email.indexOf('@');
    return (usernameEnd == -1) ? email : email.slice(0, usernameEnd);
};

function generateRandomString() {
    return Math.random().toString(32).substring(2);
}

function generateUsername(email) {
    var filteredEmail = emailToUsername(email);   
    return filteredEmail+generateRandomString();
}

function objectToCssRgba(object) {
    return 'rgba('+object.red+', '+object.green+', '+object.blue+', '+object.alpha+')';
}

function generateUrlWithParams(params) {
    var url = "";   
    for (var param in params) {
        if (params[param] === undefined)
            continue;
        
        if (url === "")
            url = "?";
        else 
            url += "&";
        
        url += param + "=" + params[param];
    }
    
    return url;
}

function isSet(input) {
    return input != undefined;
};

function isValidId(input) {
    if (input != null && !jQuery.isNumeric(input))
        return false;
    return true;
};