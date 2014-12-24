(function() {
  console.log('hello');

  (function($) {
    var $bizStartSection;

    $bizStartSection = $(".business-start-section");
    $(".js-toggle-hide").on("click", function(e) {
      var hideSection;

      e.preventDefault();
      hideSection = $(this).data("hide");
      if ($bizStartSection.hasClass("trigger-hide")) {
        $bizStartSection.removeClass("trigger-hide");
        $(this).text("I haven't started my business yet.");
      } else {
        $bizStartSection.addClass("trigger-hide");
        $(this).text("Nevermind, I did start my business");
      }
      return $("" + hideSection).slideToggle();
    });
    $("input[name='credit_card']").on("click", function() {
      if ($(this).val() === "true") {
        console.log('true');
        return $(this).parent().parent().addClass('show');
      } else {
        return $(this).parent().parent().removeClass('show');
      }
    });
    return $("#appliction").parsley();
  })(jQuery);

}).call(this);
