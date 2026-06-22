export const useBurger = () => {
  const burgerBtn = document.querySelector("[data-burger = 'btn']");

  const overlay = document.querySelector("[data-burger = 'overlay']");
  const burgerMenu = document.querySelector("[data-burger = 'menu']");

  const closeBurgerMenu = () => {
    burgerMenu.classList.remove("header__right--visible");
    overlay.classList.remove("overlay--visible");
    burgerBtn.classList.remove("burger--active");
  };

  burgerBtn.addEventListener("click", () => {
    burgerMenu.classList.toggle("header__right--visible");
    overlay.classList.toggle("overlay--visible");
    burgerBtn.classList.toggle("burger--active");
  });

  overlay.addEventListener("click", closeBurgerMenu);
};
