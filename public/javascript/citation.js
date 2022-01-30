$(document).ready(function () {
    $("body").css("display", "none");
    $("body").fadeIn(500);
});

function goToDownloadInstructions() {
    setTimeout(() => window.location.replace("/download"), 1500)
}

function downloadForMacintosh() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            window.location.replace("/download?view=mac");
            resolve();
        }, 1500);
    })
}

function downloadForLinux() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            window.location.replace("/download?view=linux");
            resolve();
        }, 1500);
    })
}
