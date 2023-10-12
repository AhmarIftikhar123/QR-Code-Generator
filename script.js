const qrtext = document.getElementById("qrtext");
const img_box = document.querySelector(".img_box");
const gen_btn = document.getElementById("gen_btn");
const img_location = document.querySelector(".img_box img");

function gen_qr_code() {
  if (qrtext.value.length > 0) {
    qr_code_link =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrtext.value;
    img_location.setAttribute("src", qr_code_link);
    img_box.classList.add("qrimg");
  } else {
    img_box.classList.remove("qrimg");

    qrtext.classList.add("error");

    setTimeout(() => {
      qrtext.classList.remove("error");
    }, 1500);
  }
}

gen_btn.addEventListener("click", gen_qr_code);

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    gen_qr_code();
  }
});
