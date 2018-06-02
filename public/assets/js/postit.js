
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
<<<<<<< HEAD:public/assets/js/index.js
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
=======
        $.ajax("/api/whatever/" + id, {
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
>>>>>>> f973d9795cb4ed769f74b2dde9eeb60500ea18c9:public/assets/js/postit.js


$(".delete").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let id = $(this).data("id");
    $.ajax({
        method: "DELETE",
        url: "/api/whatever/" + id
    }).then(
        function () {
            // Reload the page to get the updated list
            location.reload();
    }).fail(function (error) {
        console.warn("error");
    });
    
});
