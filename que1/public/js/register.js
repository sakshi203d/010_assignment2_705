$("#btnSubmit").click(function () {
    // Get the selected files
    var files = $("#image")[0].files;
    
    // Create a new FormData-like object manually
    var formData = new FormData();

    // Append each file to the formData object
    for (var i = 0; i < files.length; i++) {
      formData.append("image", files[i]);
    }

    // Add other form fields to formData manually
    formData.append("name", $("#name").val());
    formData.append("password", $("#password").val());
    formData.append("dob", $("#dob").val());
    formData.append("email", $("#email").val());
    formData.append("mobileNo", $("#mobileNo").val());

    // Send the files using AJAX
    $.ajax({
      url: "/register", // Replace with your server-side script URL
      type: "POST",
      data: formData,
      processData: false, // Prevent jQuery from processing the data
      contentType: false, // Prevent jQuery from setting the content type
      success: function (response) {
        // Handle the server's response here
        //  alert(response.errors[0].msg);
        if(response.errors)
        {
            var container = $('#errors');
            container.empty();
    
            $.each(response.errors,(index,error)=>{
                var div = $('<div>');
                div.html(error.msg);
                container.append(div);
            });
        }

        if(response == "success")
        {
            alert('Data inserted');
            window.location.href = '/';
        }
      },
      error: function (xhr, status, error) {
        // Handle errors here
        console.error(xhr.responseText);
      },
    });
  });
  