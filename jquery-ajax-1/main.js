$.ajax({
  method: "GET",
  url:"https://jsonplaceholder.typicode.com/users",
})
  .done(function(msg){
    console.log(msg)
  })
