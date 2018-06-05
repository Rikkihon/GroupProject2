
 $(".sidebutton").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("sidebutton works");
    let inputName = $("#name").val().trim();
    let inputRequest = $("#request").val().trim();

        let newRequest = {
            user: inputName,
            post: inputRequest
        };
        console.log("newRequest ", newRequest);

        // Send the POST request.
        // $.ajax("/api/request_needs", {
        // type: "POST",
        //     data: newRequest
        // })
        // $.post("/api/request_needs", newRequest)
        // .then(
        //     function (response) {
        //     console.log("added new request ", response);
        //     // Reload the page to get the updated list
        //     location.reload();
        // }).fail(function (error) {
        //     console.warn("error");
        // });
        $.post("request_needs", newRequest, function (response) {
         console.log("response ", response);
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
        // $.ajax("/api/requests/" + id, 
        //     newResponse
        //     console.log("newResponse ", newResponse);
        // type: "POST",
        //     data: newResponse
        $.post("requests/" + id, newResponse )
        .then(
            function (response) {
                console.log("response ", response);
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
        url: "delete_request/" + id
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
    }).fail(function (error) {
        console.warn("error");
    });
    
});
