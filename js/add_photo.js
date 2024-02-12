let img;
let box__ = document.querySelector(".box");
function create(img_url, block) {
  let my_img = document.createElement("img");
  my_img.classList.add("img");
  my_img.src = img_url;
  block.append(my_img);
}

function saveImage() {
  const imageInput = document.getElementById("imageInput");

  // Проверяем, выбран ли файл
  if (imageInput.files.length === 0) {
    alert("Выберите изображение");
    return;
  }else{
    alert("фото добавлено :)")
  }

  // Получаем файл из элемента input type="file"
  const imageFile = imageInput.files[0];

  // Создаем объект FileReader для чтения файла
  const reader = new FileReader();

  reader.onload = function (e) {
    const base64Image = e.target.result;
    img = base64Image;
    const downloadLink = document.createElement("a");
    downloadLink.href = base64Image;
    let userName = document.querySelector("#user_name")
    let obj = {
      img: img,
      users:userName.innerHTML
    };
    console.log(obj);
    
    axios.post(
      "https://img-create-ap-default-rtdb.firebaseio.com/arr.json",
      obj
    );
  };

  reader.readAsDataURL(imageFile);
}

