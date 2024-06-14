(function () {
  "use strict";

  var multi = "Puas";
  var option = "Ya";
  var agree = "Setuju";

  // Klik pada pilihan yang sesuai
  $(
    ".answerlist1:contains(" +
      multi +
      "), .answerlist1:contains(" +
      option +
      "), .answerlist1:contains(" +
      agree +
      ")"
  ).each(function () {
    $(this)
      .parent()
      .each(function () {
        $(this).find(".answerlist2").children().click();
      });
  });

  // Isi inputan dengan "-"
  $('input[type="text"], textarea').each(function () {
    if ($(this).val().trim() === "") {
      $(this).val("-");
    }
  });
})();
