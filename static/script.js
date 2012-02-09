var socket = io.connect('http://192.168.1.141:8001');
socket.on('connect', function (data) {
  console.log(data);
  socket.emit('ping', { testing: 'pong' });
});

$(document).ready(function() {
$("#add-user").click(function() {
    console.log("Yep");
    var t_user = {
        "user_id": 0,
        "user_image": "",
        "user_name": "test user",
        "phone_number": "12412312312",
    };

    $("#user-template").tmpl(t_user).wrap("<li>").appendTo("#users");
});
});
