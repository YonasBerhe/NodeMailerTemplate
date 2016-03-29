function onSubmit() {
  document.getElementById("submitme").addEventListener("click", function(event) {
    event.preventDefault()
    var firstName = document.getElementById('myform').firstname.value;
    var lastName = document.getElementById('myform').lastname.value;

    function grabContent() {

      var content = {
        firstName,
        lastName
      }
      $.post('/data', {info: content}, function (data) {
          console.log("working");
      })
      console.log(content);
    }
    grabContent();
  });
}
onSubmit();
