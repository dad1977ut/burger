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
$(".addBurgerBtn").on("click", function (event) {
  event.preventDefault();
  let burger = { burger_name: $("#addBurger").val(), devoured: false };
  console.log(burger);
  fetch("/api/burgers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(burger),
  }).then(() => {
    $("#addBurger").val("");
    console.log("created a burger");
    location.reload();
  });
});
//add lisnter for the create form
//add fetch call to add burger
