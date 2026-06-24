document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('random-post-link');
    if (!link) return;
    link.addEventListener('click', function (e) {
        e.preventDefault();
        fetch('/archives/index.json')
            .then(function (r) { return r.json(); })
            .then(function (data) {
                var items = data.items;
                if (!items || !items.length) return;
                var item = items[Math.floor(Math.random() * items.length)];
                window.location.href = item.url;
            });
    });
});
