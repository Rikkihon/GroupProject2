
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
        $.ajax("/api/requests", {
        type: "POST",
            data: newRequest
        }).then(
            function () {
        console.log("added new request");
    // Reload the page to get the updated list
    location.reload();
            }
        );
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
    //     $.ajax("/api/request_needs/" + id, {
    //     type: "PUT",
    //         data: id
    //     }).then(
    //         function () {
    //     console.log("updated id ", id);
    // // Reload the page to get the updated list
    // location.reload();
    //         }
    //     );
    // });


$(".delete").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    
});
