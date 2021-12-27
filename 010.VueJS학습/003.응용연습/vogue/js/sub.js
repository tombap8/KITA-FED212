// 서브 페이지 데이타 셋업 JS - sub.js

// 1. Get방식 데이타 읽기 ///
let pm = location.href;

// 2. 파라미터 물음표(?)확인하기
if(pm.indexOf("?")===-1){ 
    // indexOf값이 -1이면 물음표없다!
    alert("메뉴를 클릭하여 접근해주세요~!");
    location.href = "index.html";
} /////////// if /////////////////

// 3. 물음표(?)와 이퀄(=)로 각각 자른후 뒤의 배열값 읽기
pm = pm.split("?")[1].split("=")[1];
console.log("파라미터:",pm);


////// 로딩구역 //////////////////////////////////
window.addEventListener('DOMContentLoaded', ()=>{

    console.log("서브로딩완료!");



}); ////////////// 로딩구역 //////////////////