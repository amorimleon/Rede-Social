function creatUserSuggestion() {
  for (let i = 0; i < suggestUsers.length; i++) {
    let userSuggestion = document.querySelector(".user_suggestion");
    let userSuggestionBoxContainer = document.querySelector(
      ".user__suggestion__box__container"
    );

    /* Criando tags*/
    let userSuggetionBox = document.createElement("div");
    let userPerfil = document.createElement("div");
    let imgPerfil = document.createElement("img");
    let userInformation = document.createElement("div");
    let userName = document.createElement("p");
    let userOccupation = document.createElement("p");
    let divButton = document.createElement("div");
    let buttonSeguir = document.createElement("button");

    /*Atribuindo classe*/

    userSuggetionBox.classList.add("user_suggestion__box");
    userPerfil.classList.add("user__perfil");
    imgPerfil.classList.add("img__perfil");
    userInformation.classList.add("user_information");
    userName.classList.add("user__name", "title2");
    userOccupation.classList.add("user__occupation", "text2");
    divButton.classList.add("button__seguir");
    buttonSeguir.classList.add("text2--bold");

    /*Atribuindo Valores */

    imgPerfil.src = suggestUsers[i].img;
    userName.innerText = suggestUsers[i].user;
    userOccupation.innerText = suggestUsers[i].stack;
    buttonSeguir.innerText = "Seguir";

    buttonSeguir.addEventListener("click", function () {
      if (buttonSeguir.innerText == "Seguir") {
        buttonSeguir.innerText = "Seguindo";
      } else {
        buttonSeguir.innerText = "Seguir";
      }
    });

    /* Atribuindo hierarquia*/

    divButton.appendChild(buttonSeguir);
    userInformation.append(userName, userOccupation);

    userPerfil.append(imgPerfil, userInformation);

    userSuggetionBox.append(userPerfil, divButton);

    userSuggestionBoxContainer.appendChild(userSuggetionBox);
  }
}
creatUserSuggestion();

function buttonLiked() {
  let liked = document.querySelectorAll(".liked");
  let likeNumber = document.querySelectorAll(".like__number");

  for (let i = 0; i < liked.length; i++) {
    let currentLike = liked[i];
    let currentLikeNumber = likeNumber[i];
    let numberInt = parseInt(currentLikeNumber.innerText);

    let currentNumber = numberInt;

    currentLike.addEventListener("click", function () {
      currentLike.classList.toggle("liked_red");
      currentLike.classList.toggle("liked_gray");

      if (currentLike.className == "liked liked_red") {
        currentNumber += 1;
      } else {
        currentNumber -= 1;
      }
      currentLikeNumber.innerHTML = currentNumber;
    });
  }
}

function createPost() {
  //Capturando os Inputs
  const postTitle = document.querySelector(".post__title");
  const postedDescription = document.querySelector(".post__description");

  const buttonPost = document.querySelector(".button__post");

  //Criando evento nos inputs
  buttonPost.addEventListener("click", function (e) {
    e.preventDefault();
    const valueTitle = postTitle.value;
    const valueDescription = postedDescription.value;

    posts.unshift({
      title: valueTitle,
      text: valueDescription,
      user: "Samuel Persuhn",
      img: "./src/assets/img/user2.svg",
      stack: "Front end Engineer",
      likes: 0,
      id: posts.length + 1,
    });
    console.log(posts);

    post();
    postedDescription.value = "";
    postTitle.value = "";
    buttonLiked();
  });
}

function post() {
  /* Chamando Elemento */
  const post = document.querySelector(".posts");
  post.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    /* Criando Elementos */
    const postedContainer = document.createElement("div");
    const userPerfil = document.createElement("div");
    const imgPerfil = document.createElement("img");
    const userInformation = document.createElement("div");
    const userName = document.createElement("p");
    const userOccupation = document.createElement("p");
    const postedTitle = document.createElement("div");
    const postedDescription = document.createElement("div");
    const postedButtons = document.createElement("div");
    const buttonPost = document.createElement("button");
    const liked = document.createElement("div");
    const likedNUmber = document.createElement("span");

    /* Atribuindo classList */
    postedContainer.classList.add("posted__container");
    userPerfil.classList.add("user__perfil");
    imgPerfil.classList.add("img__perfil");
    userInformation.classList.add("user_information");
    userName.classList.add("user__name", "title2");
    userOccupation.classList.add("user__occupation", "text2");
    postedTitle.classList.add("posted__title", "title1");
    postedDescription.classList.add("posted__description", "text1");
    postedButtons.classList.add("posted__buttons");
    buttonPost.classList.add("button__post", "button__post-open");
    liked.classList.add("liked", "liked_gray");
    likedNUmber.classList.add("like__number");

    /* Atribuindo Valores*/
    postedContainer.id = posts[i].id;
    imgPerfil.src = posts[i].img;
    userName.innerText = posts[i].user;
    userInformation.innerText = posts[i].stack;
    postedTitle.innerText = posts[i].title;
    postedDescription.innerText = posts[i].text;
    buttonPost.innerText = "Abrir Post";
    likedNUmber.innerText = posts[i].likes;

    /* Atribuindo hierarquia */

    liked.appendChild(likedNUmber);

    postedButtons.append(buttonPost, liked);
    userInformation.append(userName, userOccupation);
    userPerfil.append(imgPerfil, userInformation);

    postedContainer.append(
      userPerfil,
      postedTitle,
      postedDescription,
      postedButtons
    );

    post.appendChild(postedContainer);

    // função para abrir o MOdal
    openModal(buttonPost);
  }
}

function openModal(buttonPost) {
  let controller = document.querySelector(".controller");
  buttonPost.addEventListener("click", function (e) {
    controller.showModal();

    let id = e.target.parentElement.parentElement.id;

    postModal(id);
  });
}

//Criando o Modal
function postModal(id) {
  let container = document.querySelector(".container");
  container.innerHTML = "";
  //criando elemetos do post
  const postedContainer = document.createElement("div");
  const userPerfil = document.createElement("div");
  const imgPerfil = document.createElement("img");
  const userInformation = document.createElement("div");
  const userName = document.createElement("p");
  const userOccupation = document.createElement("p");
  const postedTitle = document.createElement("div");
  const postedDescription = document.createElement("div");
  const closeModalX = document.createElement("span");

  //Atribuindo Classes
  postedContainer.classList.add("posted__container", "posted__container-modal");
  userPerfil.classList.add("user__perfil");
  imgPerfil.classList.add("img__perfil");
  userInformation.classList.add("user_information");
  userName.classList.add("user__name", "title2");
  userOccupation.classList.add("user__occupation", "text2");
  postedTitle.classList.add("posted__title", "title1");
  postedDescription.classList.add(
    "posted__description",
    "text1",
    "posted__description-modal"
  );
  closeModalX.classList.add("close_modal");

  //Configurando Elementos

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == id) {
      imgPerfil.src = posts[i].img;
      userOccupation.innerText = posts[i].stack;
      userName.innerText = posts[i].user;
      postedTitle.innerText = posts[i].title;
      postedDescription.innerText = posts[i].text;
      closeModalX.innerText = "X";
    }
  }

  // atribuindo hieraquia
  userInformation.append(userName, userOccupation);
  userPerfil.append(imgPerfil, userInformation);

  postedContainer.append(userPerfil, postedTitle, postedDescription);

  container.append(postedContainer, closeModalX);

  // Função de fechar Modal
  closeModal(closeModalX);
}

function closeModal() {
  const controller = document.querySelector(".controller");
  const buttonClose = document.querySelector(".close_modal");

  buttonClose.addEventListener("click", function (e) {
    controller.close();
  });
}

post();
createPost();
buttonLiked();
