/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 200 });
sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });

// formulir mengirim ke email
$("#contact-form").on("submit", function (event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append("service_id", "service_v5ce6vl");
  formData.append("template_id", "template_ieb29bm");
  formData.append("user_id", "user_6yY2hi1cAmIO4Hj22Y99y");

  let name = $("#name");
  let email = $("#email");
  let subject = $("#subject");
  let message = $("#message");

  if (!name.val() || !email.val() || !subject.val() || !message.val()) {
    Swal.fire({
      icon: "warning",
      text: "Datanya kosong... isi lebih dulu gangs",
    });
  } else {
    $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: formData,
      contentType: false, // auto-detection
      processData: false, // no need to parse formData to string
    })
      .done(function () {
        Swal.fire({
          icon: "success",
          text: "Terimakasih, email anda berhasil dikirim ;)",
        });
      })
      .fail(function (error) {
        Swal.fire({
          icon: "error",
          text: "Maaf nih, emailnya gagal dikirim :(",
        });
      });
  }
  //reset form ketika success
  $("#contact-form").trigger("reset");
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year to the span with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;
