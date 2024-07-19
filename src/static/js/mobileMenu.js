const mobileMenu = (() => {
  const mobileMenuElement = document.getElementById("mobile-menu");

  return {
    toggle() {
      if (mobileMenuElement.classList.contains("_expanded")) mobileMenuElement.classList.remove("_expanded");
      else mobileMenuElement.classList.add("_expanded");
    },
  }
})();
