const section = $("section");
$(window).on("scroll", function () {
  section.each((i, e) => {
    if (
      e.getBoundingClientRect().top <= window.innerHeight/2 &&
      e.getBoundingClientRect().bottom >= window.innerHeight/2
    ) {
      $(".navlink").removeClass("active");
      $(`.navlink[href=\'#${e.id}\']`).addClass("active");
    }
  });
});

const openSidebar = () => {
  $(".sidebar").toggleClass("sidebar-open");
};

$(".hamburger").on("click", openSidebar);
$(".navlink").on("click", openSidebar);
