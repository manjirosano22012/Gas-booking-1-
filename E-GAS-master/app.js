$(document).ready(function () {
  // Function to validate the form on submission
  $("#bookingForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form inputs
    var customerName = $("#customerName").val();
    var customerAddress = $("#customerAddress").val();
    var contactNumber = $("#contactNumber").val();
    var gasType = $("#gasType").val();
    var quantity = $("#quantity").val();
    var deliveryDate = $("#deliveryDate").val();

    // Perform validation checks (you can add more specific checks as needed)
    if (customerName === "" || customerAddress === "" || contactNumber === "" || gasType === "" || quantity === "" || deliveryDate === "") {
      alert("Please fill in all fields.");
      return false; // Prevent form submission if fields are empty
    } else {
      // Store form data in sessionStorage
      var formData = {
        customerName: customerName,
        customerAddress: customerAddress,
        contactNumber: contactNumber,
        gasType: gasType,
        quantity: quantity,
        deliveryDate: deliveryDate
      };
      sessionStorage.setItem('formData', JSON.stringify(formData));

      // Redirect to receipt page
      window.location.href = 'rec.html';

      return true; // Allow form submission
    }
  });
});
