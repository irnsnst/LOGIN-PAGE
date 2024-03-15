document.addEventListener("DOMContentLoaded", function () {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");
  const sign_up_form = document.querySelector(".sign-up-form");

  function addSignUpMode() {
    container.classList.add("sign-up-mode");
  }

  function removeSignUpMode() {
    container.classList.remove("sign-up-mode");
  }

  sign_up_btn.addEventListener("click", () => {
    addSignUpMode();
  });

  sign_in_btn.addEventListener("click", () => {
    removeSignUpMode();
  });

  sign_up_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.querySelector(".sign-up-form input[name='signup-username']").value;
    const email = document.querySelector(".sign-up-form input[name='signup-email']").value;
    const password = document.querySelector(".sign-up-form input[name='signup-password']").value;

    sessionStorage.setItem("signup-username", username);
    sessionStorage.setItem("signup-email", email);
    sessionStorage.setItem("signup-password", password);

    window.location.href = "registration.html";
  });
});
