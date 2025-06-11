$(document).ready(function () {
  $("#bt").on("click", function () {
    $("#name").text("Bbyeee");
  });

  $("p").css({
    "color":"blue",
    "background-color":"#eeeded",
    "border":"1px solid black"
  })

  $(".box").css({
    "background-color":"#eeeded",
    "margin":"5px 5px 5px 5px",
    "padding":"10px"
  })

  $(".btn").on("click",function(){
    alert("here is the alret");
  })

  $(".hover").on("mouseenter",function()
     {
       $(".hover").text("entered");
     })
  $(".hover").on("mouseout",function()
     {
       $(".hover").text("Mouse Out of the div");
     })

  $(".vanish").on("click",function()
    {
      $("img").fadeOut(4000,function()
       {
         
       })        
      $(".vanish").addClass("bringBack");
      $(".vanish").removeClass("vanish");
      $(".bringBack").text("Bring back");
      
    })

  $(".bringBack").on("click", function(){
    $("img").fadeIn(4000,function()
       {
        
       }) 
  })

  let v = 1;
  $(".item").css({
                  "background-color":"#eeeded",
                  "margin":"5px 5px 5px 5px",
                  "padding":"10px"
                })
  $(".mclick").on("click",function()
    {
      if(v===1){
      $(".item").hide();
      $(".mclick").text("Click to view");
        v=0;
      }
      else{
         $(".item").show();
        $(".mclick").text("Hide ");
        v=1;
      }
    }).css({
    "background-color":"green",
    "color":"white",
    "padding":"10px",
    "font-weight":"200",
    "border-radius":"20px",
    "margin":"auto",
    "margin-bottom":"20px",
    "text-wrap":"wrap",
    "width":"40%",
    "align-items":"center"
    })


  $(".change").css({
    "background-color":"green",
      "color":"white",
      "padding":"10px",
      "font-weight":"200",
      "border-radius":"20px",
      "margin":"auto",
      "margin-bottom":"20px",
      "text-wrap":"wrap",
      "width":"40%",
      "align-items":"center"
  }).on("click",function()
        {
          $(".change").parent().css({
            "background-color":"#eeeded",
              "margin":"5px 5px 5px 5px",
              "padding":"10px"
          })


          $(".child:first-of-type").next().css({
            "font-size":"20px",
            "font-weight":"200",
            "text-decoration":"bold"
          }).text("Has been selected")
        })

       let paraVisible = 1;
       $("#hide").on("click",function()
         {
           if(paraVisible===1)
           {$(".hide").hide();
           paraVisible = 0;
           $("#hide").text("Show the Para");
           }
           else
           {
             $(".hide").show();
              paraVisible = 1;
              $("#hide").text("Hide the text");
           }
           
         })


  $(".submit").on("click",()=>{
    let name = $("#namei").val()
    let email = $("#mail").val().trim();
    let password = $("#password").val().trim();

     if (name === "") {
       alert("Name is required");
      
     }

    
     let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
     if (email === "") {
       alert("Email is required");
       
     } else if (!emailPattern.test(email)) {
       alert("Invalid email format");
      
     }

     
     if (password.length < 6) {
       alert("Password must be at least 6 characters");
      
     }

    console.log(name);
    console.log(email);
    console.log(password)
  })

  
});


