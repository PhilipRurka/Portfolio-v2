// Introducing q$.when()
// $q.when() will create a promise that will automaticaly resolve
$q.when()
.then(function () {
  ...
})
.then(function(data) { console.log(data); })
