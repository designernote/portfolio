$().ready(function () {
  // alert("hi");
});

const ddd = (e) => {
  alert("sdfsdf");
};

ddd();

console.log("sdfsdfsdf");

document.addEventListener("DOMContentLoaded", () => {
  // 탭메뉴
  const items_header = document.querySelectorAll("header nav ul li");
  const container1 = document.querySelector(".container.no1");
  const container2 = document.querySelector(".container.no2");

  if (items_header) {
    console.log(items_header, "headers");
  }

  items_header.forEach((item, idx) => {
    console.log(idx, "dhkekekek");

    item.addEventListener("click", () => {
      items_header.forEach((e) => {
        if (idx === 0) {
          console.log("첫번째");
          container1.style.display = "block";
          container2.style.display = "none";
        } else {
          container1.style.display = "none";
          container2.style.display = "block";
        }
        e.classList.remove("active");
      });

      item.classList.add("active");
    });
  });

  // 아래 썸네일들
  const items = document.querySelectorAll(".area_1 > div");

  if (items) {
    console.log(items, "items");
  }

  items.forEach((item) => {
    console.log("saaaa");
    item.addEventListener("click", () => {
      console.log("sdfsdfsdf");

      items.forEach((e) => {
        e.classList.remove("active");
      });

      item.classList.add("active");
    });
  });
});
