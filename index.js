$(document).ready(function () {
  //Scrolling and emerging
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".hideme").each(function (i) {
      var bottom_of_object = $(this).offset().top + 300;
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1000);
        $(".scroll").removeClass("floating");
      }
    });
  });

  // Nav bar activation
  $(".top-nav-link").click(function () {
    $(".nav-active").removeClass("nav-active");
    $(this).addClass("nav-active");
  });
  // Hamburger menu toggle
  $(".hamburger").click(function () {
    let navLinks = $(".top-nav-links");
    // navLinks.slideToggle("slow");
    // navLinks.toggleClass("responsive slide-in");
    if (navLinks.attr("class").includes("slide-in")) {
      navLinks.toggleClass("slide-in");
      navLinks.toggleClass("slide-out");
    } else if (navLinks.attr("class").includes("slide-out")) {
      navLinks.toggleClass("slide-out");
      navLinks.toggleClass("slide-in");
    } else {
      navLinks.toggleClass("slide-in");
    }
    console.log(navLinks.attr("class"));
  });

  // Vanilla JS version nav bar
  // const navItem = document.querySelectorAll(".nav-link");
  // console.log(navItem);
  // navItem.forEach((i) =>
  //   i.addEventListener("click", (e) => {
  //     document.querySelector(".nav-active").classList.remove("nav-active");
  //     console.log(e);
  //     e.target.classList.add("nav-active");
  //   })
  // );

  // Horizontal slider
  const slider = document.querySelector(".more-projects");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
});
