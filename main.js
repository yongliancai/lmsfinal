// 引入 Firebase 库
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
// 登入函式
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(user) {
            // 登入成功，顯示學習頁面
            showPage("learning-page");
        })
        .catch(function(error) {
            // 登入失敗，顯示錯誤訊息
            document.getElementById("login-error").textContent = error.message;
        });
}

// 註冊函式
function register() {
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
            // 註冊成功，顯示學習頁面
            showPage("learning-page");
        })
        .catch(function(error) {
            // 註冊失敗，顯示錯誤訊息
            document.getElementById("register-error").textContent = error.message;
        });
}

// 顯示指定頁面
function showPage(pageId) {
    // 隱藏所有頁面
    var pages = document.getElementsByTagName("div");
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }
    
    // 顯示指定的頁面
    document.getElementById(pageId).style.display = "block";
}

// 顯示學習頁面
function showLesson() {
    // TODO: 實作顯示學習垃圾回收知識頁面的功能
}

function showScenarioDive() {
    // TODO: 實作顯示情境dive頁面的功能
}

function showScenarioGame() {
    // TODO: 實作顯示情境小遊戲dive頁面的功能
}

function showQuizGame() {
    // TODO: 實作顯示測驗小遊戲頁面的功能
}

// 監聽用戶登入狀態變化
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // 使用者已登入，顯示個人檔案頁面
        showPage("profile-page");
        document.getElementById("profile-email").textContent = user.email;
    } else {
        // 使用者未登入，顯示登入頁面
        showPage("login-page");
    }
});
