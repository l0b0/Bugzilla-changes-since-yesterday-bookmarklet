# Bugzilla changes since yesterday bookmarklet

```javascript
javascript:(function () {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    let isoDate = date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    location.href = 'https://bugzilla.mozilla.org/buglist.cgi?chfieldfrom=' + isoDate;
})();
```

## Use

1. Create a new bookmark.
1. Paste the full code above (from `javascript:` through the final `;`) into the "Location" field.
1. Save the bookmark.

## License

[AGPLv3+](LICENSE)
