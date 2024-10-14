const triggerList = document.querySelectorAll(".checklist__trigger");

triggerList.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.target.closest(".checklist__item").classList.toggle("_active");
  });
});
