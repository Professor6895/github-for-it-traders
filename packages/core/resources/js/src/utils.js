function getStorageItem(key) {
    return (
        window.sessionStorage.getItem(key) || window.localStorage.getItem(key)
    );
}

function convertObjectToFormData(object) {
    let form_data = new FormData();
    for (let item in object) {
        if (object[item]) {
            form_data.append(item, object[item]);
        }
    }
    return form_data;
}

function renderServerErrors(error_bag, error, scope = null) {
    error_bag.clear()
    let server_errors = error.response.data.errors;
    for (let error_key in server_errors) {
        error_bag.add({
            field: error_key,
            msg: server_errors[error_key][0],
            scope: scope
        });
    }
}

function getApplicationModules() {
    let modules = process.env.MIX_APPLICATION_MODULES.split(',')
    return modules
}


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export { getStorageItem, convertObjectToFormData, renderServerErrors, getApplicationModules, getCookie, setCookie };
