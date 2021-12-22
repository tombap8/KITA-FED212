<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 | 보그 코리아 (Vogue Korea)</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/member.css">
    <link rel="stylesheet" href="css/media.css">
    <!-- 미디어쿼리를 본css하단에 link방식으로 넣어준다! -->
    
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/member.js"></script>
    <!-- member.js는 순서중요! 제이쿼리쓰니까! -->
</head>

<body>

    <!-- 1. 상단영역 -->
    <?php include "inc/top.inc" ?>
    <!-- 2. 메인영역 -->
    <div id="cont">
        <main class="cont ibx">
            <!-- 1. 서브페이지 탑영역 -->
            <header class="subtop">
                <!-- 서브타이틀 -->
                <h2 class="stit">Member</h2>
            </header>

            <!-- 2. 서브컨텐츠박스 -->
            <section class="scont">
                <div id="meminfo">
                    <form action="process.php" method="POST">
                        <ul>
                            <li>
                                <label for="mid">아이디</label>
                                <input type="text" id="mid" name="mid" maxlength="25"
                                    placeholder="영문자로 시작하는 6~20글자 영문자/숫자">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mpw">비밀번호</label>
                                <input type="password" id="mpw" name="mpw" maxlength="20"
                                    placeholder="특수문자,문자,숫자포함 형태의 5~15자리">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mpw2">비밀번호확인</label>
                                <input type="password" id="mpw2" name="mpw2" maxlength="20"
                                    placeholder="비밀번호 확인을 입력해 주세요">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mnm">이름</label>
                                <input type="text" id="mnm" name="mnm" maxlength="20" placeholder="이름을 입력해 주세요">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="gen1">성별</label>
                                남성
                                <input type="radio" name="gen" id="gen1">
                                여성
                                <input type="radio" name="gen" id="gen2" checked>
                                <!-- 라디오버튼은 name속성값을 같은
                                이름으로 하면 하나만 선택되는
                                 그룹핑이된다 
                                    checked속성은 미리선택되게 함
                                -->
                            </li>
                            <li>
                                <label for="email1">이메일</label>
                                <input type="text" id="email1" name="email1" placeholder="이메일앞주소">
                                @
                                <select name="seleml" id="seleml">
                                    <option value="init">선택해주세요</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="hanmail.net">hanmail.net</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="free">직접입력</option>
                                </select>
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="email2"></label>
                                <input type="text" id="email2" name="email2" placeholder="이메일뒷주소">
                            </li>
                            <li>
                                <!-- 서브밋버튼 -->
                                <input type="submit" value="가입하기" id="btnj">
                            </li>
                        </ul>
                    </form>
                </div>
            </section>
        </main>
    </div>
    <!-- 3. 하단영역 -->
    <?php include "inc/info.inc" ?>


</body>

</html>