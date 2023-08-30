const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector(".middle-content");
const btnTop = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal_wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const logOut = document.querySelector('.log_out');

const sortArr = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                console.log(JSON);
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
};

sortArr([5, 2, 8, 1, 9, 3])



const goToLoginPage = () => {
    mainPage.style.display = "none";
    loginPage.style.display = "grid";


};

middleContent.addEventListener("click", e => {
    if (e.target.classList[1] === "main-btn") {
        goToLoginPage()
    }

});

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');


    if (inputUserInfo.value !== "" && inputPassword.value !== "") {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = "block"

    } else {
        goToLoginPage();
        loginModal.style.display = "block";


    }
});

// Login page

modalX.addEventListener('click', () => {
    loginModal.style.display = 'none'

})

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');
    if (loginUserInfo.value !== "" && loginPassword.value !== "") {
        loginPage.style.display = 'none'
        newsFeedPage.style.display = "block";
    } else {
        loginModal.style.display = "block";
    }
});

postBtn.addEventListener('click', () => {
    modal.style.display = 'block'
    modalWrapper.classList.add('modal-wrapper-display');
});

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x
};

postModalX.addEventListener("click", () => {
    modal.style.display = "none";
    modalWrapper.classList.remove("modal-wrapper-display");
    if (modalInput !== "") {
        modalInput.value = "";
        changeOpacity(0.5)
    }

});

modalInput.addEventListener('keypress', (e) => {
    if (e.target.value !== "") {
        changeOpacity(1)
    }

});
modalInput.addEventListener('blur', (e) => {
    if (e.target.value === "") {
        changeOpacity(0.5)
    }
})
/* Sidebar */
user.addEventListener("click", () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display')
});

xBtn.addEventListener("click", () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display')
});
/* dsark mode */
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightText = document.querySelectorAll('.light-text')


toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).map((darkElem) => darkElem.classList.toggle('dark-1'));
    Array.from(darkElements2).map((darkElem_2) => {
        darkElem_2.classList.toggle('dark-2');
    });
    Array.from(lightText).map((elem) => {
        elem.classList.toggle('light')
    });
});

logOut.addEventListener('click', () => {
    newsFeedPage.style.display = "none";
    mainPage.style.display = "grid";
    const follows = document.querySelector('.follow');
    follows.style.display = "none"
    const login_info = document.querySelector(".login-user-info");
    const pass_info = document.querySelector('.login-password');
    login_info.value = " ";
    pass_info.value = "";

})
