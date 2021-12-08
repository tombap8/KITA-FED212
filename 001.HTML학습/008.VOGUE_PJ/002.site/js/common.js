// 공통기능구현 JS - common.js

//////////// 로딩구역 /////////////////////////
window.addEventListener("DOMContentLoaded",
function(){

    console.log("로딩완료!");

    //////////////////////////////////////////
    // 1. 햄버거 버튼 클릭시 //////////////////
    //////////////////////////////////////////
    // 대상: .ham
    document.querySelector(".ham").onclick =
    function(){
        // 1. 함수호출확인!
        console.log("햄버거!");

        // 2. 변경대상: .mowrap (모바일메뉴 전체박스)
        var tg = document.querySelector(".mowrap");
        // 내부박스
        var mobx = document.querySelector("#mobx");

        // 3. 변경내용: 
        // (1) 대상의 높이값이 0이면 
        //      내부박스 높이값으로 변경!(트랜지션)
        // (2) 대상의 높이값이 0이 아니면 높이값 0

        // 구해와야할 것은 대상의 높이값!
        var tgh = tg.offsetHeight;
        console.log("대상높이:",tgh);

        // 기능구현: 높이값이 0이면
        if(tgh===0){
            // 구해와야할 것은 내부박스의 높이값!
            var inh = mobx.offsetHeight;
            // console.log("내부박스높이:",inh);
            tg.style.height = inh + "px";
            tg.style.transition = ".4s ease-out";
        }
        else{ // 높이값이 0이 아니면
            tg.style.height = "0";
        }

    }; ///////////// click /////////////////

    ////////////////////////////////////////
    // 2. 모바일 검색버튼 클릭시 /////////////
    ////////////////////////////////////////
    // 대상: .mag
    document.querySelector(".mag").onclick = 
    ()=>{
        // 1. 함수호출확인!
        console.log("검색버튼클릭!");

        

        // a요소는 기본이동 특성이 있어서
        // 이것을 무효화 해주는 코드가 return false임!
        return false;
        // return키워드는 맨끝에 할것! 주의!

    }; /////////// click ////////////////////
    /////////////////////////////////////////





}); ////////////// 로딩구역 //////////////////
//////////////////////////////////////////////