$(function () {
    $("form").on("submit", function (e) {
      e.preventDefault();
      var id = $("#search").val();
      $.getJSON("text.txt", id, function (data) {
        var x = data["passed"];
        if (x != null) {
          if (x === true) {
            Swal.fire({
              title:
                "Xin chúc mừng " +
                data["name"] + " - " + data['id'] +
                " đã xuất sắc vượt qua vòng CV!! Hãy cùng chờ đón lịch phỏng vấn nhé!",
              width: 800,
              customClass: "swal-height",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          } else {
              Swal.fire({
              title:
                "Rất tiếc " +
                data["name"] + " - " + data['id'] +
                " đã không thể vượt qua vòng CV.",
              width: 800,
              customClass: "swal-height",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        } else {
          alert("Không tìm thấy thông tin");
        }
      });
    });
  });