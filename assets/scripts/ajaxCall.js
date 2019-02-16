//code here

$("button").click(function(){
    $.post("/api/viewtable",
    {
      "name": $("#tableName").val().trim(),
      "phone": $("phoneNumber").val().trim(), 
      "email": $("inputEmail1").val().trim(),
      "id": $("tableId").val().trim()
    },
    function(data, status){
      if (data == true) {
        alert("Your reservation has been confirmed!")
      } else alert("Our tables are booked for tonight, but you've been added to the waitlist")
    }
    );
  });