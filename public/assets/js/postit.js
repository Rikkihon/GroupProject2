
 $(".sidebutton").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

    let inputName = $("#name").val().trim();
    let inputRequest = $("#request").val().trim();

        let newRequest = {
            user: inputName,
            post: inputRequest
        };
        console.log("newRequest ", newRequest);

        // Send the POST request.
        $.ajax("/api/request_needs", {
        type: "POST",
            data: newRequest
        }).then(
            function () {
            console.log("added new request");
            // Reload the page to get the updated list
            location.reload();
        }).fail(function (error) {
            console.warn("error");
        });
    });

$("#respond").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

    let inputName = $("#name").val().trim();
    let inputResponse = $("#response").val().trim();

    let newResponse = {
        user: inputName,
        post: inputResponse
    };
    console.log("newResponse ", newResponse);

        // Send the request.
        $.ajax("/api/requests/" + id, {
            let newResponse = {
                user: inputName,
                post: inputResponse,
                id: id
            };
            console.log("newResponse ", newResponse);
        type: "POST",
            data: newResponse
        }).then(
            function () {
                console.log("updated id ", newResponse);
                // Reload the page to get the updated list
                location.reload();
        }).fail(function (error) {
            console.warn("error");
        });
    });


$(".delete").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let id = $(this).data("id");
    $.ajax({
        method: "DELETE",
        url: "/api/delete_request/" + id
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
    }).fail(function (error) {
        console.warn("error");
    });
    
});
