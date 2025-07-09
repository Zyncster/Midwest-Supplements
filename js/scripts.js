document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
      })
      .catch(error => console.error("Error loading navbar:", error));
  });

  document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
  })

  document.addEventListener("DOMContentLoaded", function () {
    const flyIns = document.querySelectorAll('.fly-in');
    flyIns.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('show');
      }, 100 + i *100);
    });
  });