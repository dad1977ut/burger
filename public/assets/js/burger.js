$(".eat").on("click", function () {
  let id = $(this).data("id");
  console.log(id);
  let devoured = { devoured: 1 };
  fetch(`/api/burgers/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    // make sure to serialize the JSON body
    body: JSON.stringify(devoured),
  }).then((response) => {
    // Check that the response is all good
    // Reload the page so the user can see the new quote
    if (response.ok) {
      console.log(`burger was devoured`);
      location.reload("/");
    } else {
      alert("something went wrong!");
    }
  });
});
//add lisnter for the create form
//add fetch call to add burger
