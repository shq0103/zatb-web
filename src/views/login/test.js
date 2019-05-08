export const Test = {
  vars: {
    lowin: document.querySelector(".lowin"),
    lowin_brand: document.querySelector(".lowin-brand"),
    lowin_wrapper: document.querySelector(".lowin-wrapper"),
    lowin_login: document.querySelector(".lowin-login"),
    lowin_wrapper_height: 0,
    login_back_link: document.querySelector(".login-back-link"),
    forgot_link: document.querySelector(".forgot-link"),
    login_link: document.querySelector(".login-link"),
    login_btn: document.querySelector(".login-btn"),
    register_link: document.querySelector(".register-link"),
    password_group: document.querySelector(".password-group"),
    password_group_height: 0,
    lowin_register: document.querySelector(".lowin-register"),
    lowin_footer: document.querySelector(".lowin-footer"),
    box: document.getElementsByClassName("lowin-box"),
    option: {}
  },
  register(e) {
    Test.vars.lowin_login.className += " lowin-animated";
    setTimeout(() => {
      Test.vars.lowin_login.style.display = "none";
    }, 500);
    Test.vars.lowin_register.style.display = "block";
    Test.vars.lowin_register.className += " lowin-animated-flip";

    Test.setHeight(Test.vars.lowin_register.offsetHeight + Test.vars.lowin_footer.offsetHeight);

    e.preventDefault();
  },
  login(e) {
    Test.vars.lowin_register.classList.remove("lowin-animated-flip");
    Test.vars.lowin_register.className += " lowin-animated-flipback";
    Test.vars.lowin_login.style.display = "block";
    Test.vars.lowin_login.classList.remove("lowin-animated");
    Test.vars.lowin_login.className += " lowin-animatedback";
    setTimeout(() => {
      Test.vars.lowin_register.style.display = "none";
    }, 500);

    setTimeout(() => {
      Test.vars.lowin_register.classList.remove("lowin-animated-flipback");
      Test.vars.lowin_login.classList.remove("lowin-animatedback");
    }, 1000);

    Test.setHeight(Test.vars.lowin_login.offsetHeight + Test.vars.lowin_footer.offsetHeight);

    e.preventDefault();
  },
  forgot(e) {
    Test.vars.password_group.classList += " lowin-animated";
    Test.vars.login_back_link.style.display = "block";

    setTimeout(() => {
      Test.vars.login_back_link.style.opacity = 1;
      Test.vars.password_group.style.height = 0;
      Test.vars.password_group.style.margin = 0;
    }, 100);

    Test.vars.login_btn.innerText = "Forgot Password";

    Test.setHeight(Test.vars.lowin_wrapper_height - Test.vars.password_group_height);
    // Test.vars.lowin_login.querySelector("form").setAttribute("action", Test.vars.option.forgot_url);

    e.preventDefault();
  },
  loginback(e) {
    Test.vars.password_group.classList.remove("lowin-animated");
    Test.vars.password_group.classList += " lowin-animated-back";
    Test.vars.password_group.style.display = "block";

    setTimeout(() => {
      Test.vars.login_back_link.style.opacity = 0;
      Test.vars.password_group.style.height = Test.vars.password_group_height + "px";
      Test.vars.password_group.style.marginBottom = 30 + "px";
    }, 100);

    setTimeout(() => {
      Test.vars.login_back_link.style.display = "none";
      Test.vars.password_group.classList.remove("lowin-animated-back");
    }, 1000);

    Test.vars.login_btn.innerText = "Sign In";
    // Test.vars.lowin_login.querySelector("form").setAttribute("action", Test.vars.option.login_url);

    Test.setHeight(Test.vars.lowin_wrapper_height);

    e.preventDefault();
  },
  setHeight(height) {
    Test.vars.lowin_wrapper.style.minHeight = height + "px";
  },
  brand() {
    Test.vars.lowin_brand.classList += " lowin-animated";
    setTimeout(() => {
      Test.vars.lowin_brand.classList.remove("lowin-animated");
    }, 1000);
  },
  init(option) {
    Test.vars = {
      lowin: document.querySelector(".lowin"),
      lowin_brand: document.querySelector(".lowin-brand"),
      lowin_wrapper: document.querySelector(".lowin-wrapper"),
      lowin_login: document.querySelector(".lowin-login"),
      lowin_wrapper_height: 0,
      login_back_link: document.querySelector(".login-back-link"),
      forgot_link: document.querySelector(".forgot-link"),
      login_link: document.querySelector(".login-link"),
      login_btn: document.querySelector(".login-btn"),
      register_link: document.querySelector(".register-link"),
      password_group: document.querySelector(".password-group"),
      password_group_height: 0,
      lowin_register: document.querySelector(".lowin-register"),
      lowin_footer: document.querySelector(".lowin-footer"),
      box: document.getElementsByClassName("lowin-box"),
      option: {}
    };
    Test.setHeight(Test.vars.box[0].offsetHeight + Test.vars.lowin_footer.offsetHeight);

    Test.vars.password_group.style.height = Test.vars.password_group.offsetHeight + "px";
    Test.vars.password_group_height = Test.vars.password_group.offsetHeight;
    Test.vars.lowin_wrapper_height = Test.vars.lowin_wrapper.offsetHeight;

    Test.vars.option = option;
    // Test.vars.lowin_login.querySelector("form").setAttribute("action", option.login_url);

    var len = Test.vars.box.length - 1;

    for (var i = 0; i <= len; i++) {
      if (i !== 0) {
        Test.vars.box[i].className += " lowin-flip";
      }
    }

    Test.vars.forgot_link.addEventListener("click", e => {
      Test.forgot(e);
    });

    Test.vars.register_link.addEventListener("click", e => {
      Test.brand();
      Test.register(e);
    });

    Test.vars.login_link.addEventListener("click", e => {
      Test.brand();
      Test.login(e);
    });

    Test.vars.login_back_link.addEventListener("click", e => {
      Test.loginback(e);
    });
  }
};
