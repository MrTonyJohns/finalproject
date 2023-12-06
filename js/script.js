//Contact form
$(function () {
  $("#accordion").accordion();
});

(function () {
  $("html").addClass("js");

  var contactForm = {
    container: $("#contact"),
    config: {
      effect: "slideToggle",
      speed: 200,
    },

    init: function (config) {
      $.extend(this.config, config);

      $("#c-btn").on("click", this.show);
    },

    show: function () {
      var cf = contactForm,
        container = cf.container,
        config = cf.config;

      if (container.is(":hidden")) {
        cf.close.call(container);
        container[config.effect](config.speed);
      }
    },

    close: function () {
      var $this = $("#contact");

      if ($this.find("span.close").length) return;

      $("<span class=close>-</span>")
        .prependTo(this)
        .on("click", function () {
          $this[contactForm.config.effect](contactForm.config.speed);
        });
    },
  };

  contactForm.init({
    effect: "fadeToggle",
    speed: 200,
  });
})();

//Accordion
$("document").ready(function () {
  $("#accordion").mousedown(function () {
    $("h3").filter(".ui-accordion").css("background-color", "#f5f5dc");
  });
  $("#accordion").mouseup(function () {
    $("h3").filter(".ui-accordion").css("border", "2px solid #222222");
  });
});

//Resize
$(function () {
  $("#resize-animate").resizable({
    animate: true,
  });
});

//Select
$(function () {
  $("#select").selectable();
});

//Tabs
$(function () {
  $("#tabs").tabs();
});
