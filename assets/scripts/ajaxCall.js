


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

$(document).ready(function () {
     getCurrentTables();
})

let getCurrentTables = () => {
let url = "api/viewtable"
$.get(url, function (response) {                  
     if (response) {
         $.each(response, function(i,o){
              let tabRes = $("<div class='card m-4 p-4'></div>");
              let tabHead = $(`<div class='bg-white  card-header'>Table ${i+1}<div>`);
              let tabBody = $(`<div class='card-body'>
              <p><strong>Name:</strong> ${o.name}</p>
              <p><strong>Phone:</strong> ${o.phone}</p>
              <p><strong>Email:</strong> ${o.email}</p>
              <div>`);

              tabRes.append(tabHead);
              tabRes.append(tabBody);
              $("#curRes").append(tabRes);

         })
     } else {
          console.log("error");
     }
});
url = "api/viewwaitlist"
$.get(url, function (response) {                  
     if (response) {
         $.each(response, function(i,o){
              let tabRes = $("<div class='card m-4 p-4'></div>");
              let tabHead = $(`<div class='bg-white  card-header'>Queue Spot ${i+1}<div>`);
              let tabBody = $(`<div class='card-body'>
              <p><strong>Name:</strong> ${o.name}</p>
              <p><strong>Phone:</strong> ${o.phone}</p>
              <p><strong>Email:</strong> ${o.email}</p>
              <div>`);

              tabRes.append(tabHead);
              tabRes.append(tabBody);
              $("#waitList").append(tabRes);

         })
     } else {
          console.log("error");
     }
})


}

