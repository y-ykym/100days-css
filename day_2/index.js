document.querySelectorAll('.menu-icon').forEach(function (menuIcon) {
  menuIcon.addEventListener('click', function () {
    this.classList.toggle('active');

    var divElements = this.querySelectorAll('div');
    divElements.forEach(function (divElement) {
      divElement.classList.remove('no-animation');
    });
  });
});
