var a = document.getElementsByClassName("noselect")
console.log(a[0].innerHTML)

var x = document.getElementsByName("txtcap")
x[0].value = a[0].innerHTML

var y = document.getElementsByName("MemberCode")
y[0].value = 'your_enrollment_here'

var z = document.getElementsByName("DATE1")
z[0].value = 'your_db_here'

var w = document.getElementsByName("Password")
w[0].value = 'your_password_here'
