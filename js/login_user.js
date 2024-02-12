let register = document.querySelector("#register");
let entrance = document.querySelector("#entrance");
let modal_block1 = document.querySelector("#modal_block1");
let modal_block2 = document.querySelector("#modal_block2");
function oupen_user(btn, block1, block2) {
  btn.onclick = (event) => {
    event.preventDefault();
    block1.classList.add("modal_block_active");
    block2.classList.remove("modal_block_active");
  };
}

oupen_user(register, modal_block2, modal_block1);
oupen_user(entrance, modal_block1, modal_block2);

let create_email = document.querySelector("#create_email");
let create_userName = document.querySelector("#create_userName");
let create_password = document.querySelector("#create_password");

let user_name = document.querySelector("#user_name");
let password = document.querySelector("#password");

let btn_register = document.querySelector("#btn_register");
let btn_entrance = document.querySelector("#btn_entrance");

let d = false;

let modal_block = document.querySelector(".modal_block");

btn_register.onclick = (event) => {
  event.preventDefault();
  if (user_name.value != "" || password.value != "") {
    axios
      .get("https://img-create-ap-default-rtdb.firebaseio.com/users.json")
      .then((res) => {
        let users_arr = Object.values(res.data);
        for (let i of users_arr) {
          if (i.user_name == user_name.value && i.password == password.value) {
            modal_block.classList.add("modal_block_false");
            d = true;
          } else {
            if (d == false) {
              alert("данные были введены не правельные");
              d = true;
            }

            if (d == false) {
              alert("данные были введены не правельные");
              d = true;
              setTimeout(() => {
                d = false;
              }, 2000);
            }
          }
        }
      });
  } else {
    alert("Заполните все поля");
  }
};
btn_entrance.onclick = (event) => {
  if (
    create_email.value != "" ||
    create_userName.value != "" ||
    create_password.value != ""
  ) {
    let entrance_obj = {
      email: create_email.value,
      user_name: create_userName.value,
      password: create_password.value,
      id: Math.random,
      img: "",
    };
    event.preventDefault();
    axios.post(
      "https://img-create-ap-default-rtdb.firebaseio.com/users.json",
      entrance_obj
    );
    modal_block.classList.add("modal_block_false");
    create_email.value = "";
    create_userName.value = "";
    create_password.value = "";
  } else {
    alert("Заполните все поля");
  }
};
