// 구르미 갤러리 JS - main.js

///////////////// 로딩구역 ///////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("로딩완료!");

    // 갤러리박스
    let gbx = document.querySelector(".gbx");

    // 광클금지변수
    let prot = 0; // 0-허용, 1-불허용

    /***************************************** 
        함수명: goSlide
        기능: 슬라이드 순번을 변경하여 이동함
    *****************************************/
    const goSlide = dir => { // dir - 방향(1-오른쪽,0-왼쪽)

        // 0. 광클금지 /////////////
        if(prot) return;
        //돌아가!(아래코드실행안함!)
        prot = 1;//잠금!
        setTimeout(() => {
            prot = 0;//해제!
        }, 400);//작동시간 0.4초후
        ///////////////////////////
        // 광클금지의 원리는 전역변수를 지정하고
        // 이값에 따라 return을 주고 바로 변경하여 잠그고
        // 일정시간뒤에 다시 처음 값으로 풀어준다!

        // return은 함수를 빠져나감!
        // 참고) break는 제어문을 빠져나감!

        // 1. 함수호출확인
        // console.log("바꿔라!",dir);

        // 2. 대상선정: .gbx -> gbx변수에 할당!

        // 대상 하위 img요소
        let gimg = gbx.querySelectorAll("img");

        // 3. 변경내용

        // 3-1. 오른쪽버튼일 경우 : 맨앞 이미지 맨뒤로!
        if(dir) gbx.appendChild(gimg[0]);
        // appendChild(처음요소) -> 처음요소 맨뒤로 이동

        // 3-2. 왼쪽버튼일 경우 : 맨뒤 이미지 맨앞으로!
        else gbx.insertBefore(gimg[gimg.length-1],gimg[0]);
        // insertBefore(끝요소,처음요소) 
        // -> 끝요소를 처음요소 앞으로 이동
        // gimg[개수-1] -> 끝요소번호


    }; //////////// goSlide 함수 //////////////
    ///////////////////////////////////////////

    //// 이동버튼 클릭설정하기 ///////////////
    // 대상: 버튼들 -> .abtn
    let abtn = document.querySelectorAll(".abtn");
    //  console.log("버튼개수:",abtn.length);

    // 오른쪽버튼 클릭시
    abtn[1].onclick = () => goSlide(1);

    // 왼쪽버튼 클릭시
    abtn[0].onclick = () => goSlide(0);

    


}); ///////////// 로딩구역 //////////////////////
/////////////////////////////////////////////////