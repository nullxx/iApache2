$(".page").click(e => {
    e.preventDefault();
    const followingURL = e.currentTarget.getAttribute("href");
    $.ajax({
        url: followingURL, success: (result) => {
            $(document.documentElement).fadeOut(500, function () {
                document.open("text/html", "replace");
                document.write(result);
                document.close();
            });
        }
    });
})