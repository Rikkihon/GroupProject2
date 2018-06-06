
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

    let name = $("#name").val().trim();
    let comments = $("#response").val().trim();

    let newResponse = {
        user: name,
        post: comments
    };
    // console.log("newResponse ", newResponse);

    // Send the request.
    $.ajax({
        type: "POST",
        url: "api/requests",
        data: newResponse
    }).then(
        function (newPost) {
            console.log("updated id ", data, newResponse);
            // Reload the page to get the updated list
            location.reload();
        }).fail(function (error) {
            console.warn("error");
        });
});

$(".delete").on("click", function (event) {
    var id = $(this).data("id");
    console.log("the ID is", id);
    // Send the DELETE request.
    $.ajax(`/delete_request/${id}`, {
        type: "DELETE"
    }).then(
        function () {
            console.log("deleted post", id);
            // Reload the page to get the updated list
            
        }
    );
   
    location.reload();
});



// });
