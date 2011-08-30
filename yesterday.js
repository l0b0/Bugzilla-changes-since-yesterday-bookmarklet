(function yesterday() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    window.location.href = 'https://bugzilla.mozilla.org/buglist.cgi?chfieldfrom=' + date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
}());
