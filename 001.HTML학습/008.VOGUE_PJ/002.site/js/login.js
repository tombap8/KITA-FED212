// 보그 PJ 로그인 JS - login.js

///// 로딩구역 /////////////
$(()=>{ // jQB ////////////////////////////////

    console.log("로그인 로딩완료!")

    // 대상1: 아이디입력요소
    let mid = $("#mid");
    // 대상2: 비번입력요소
    let mpw = $("#mpw");

    // 로그인 버튼 클릭시 ////////
    $("#sbtn").click(function(e){
        // 기본기능막기 - 서브밋기능막기!
        e.preventDefault();

        console.log("버튼클릭!");

        // 1. 아이디 / 비번 빈값여부 확인
        // val() 입력된 값 읽어오는 메서드
        if(mid.val() === "" || mpw.val() === ""){
            console.log("빈값이닷!");
        } /////////// if ///////////////////
        else{
            console.log("서버로 전송~!")
        } //////////// else //////////////

    }); /////////// click ///////////

}); ///////////////// jQB /////////////////////
///////////////////////////////////////////////