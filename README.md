# nav-contents
티스토리 목차 네비게이션<br>

![nav](https://github.com/fpem3309/nav-contents/assets/75240619/7d32d9df-8a26-4d76-a42c-f4e62c5b06c5)

티스토리 포스팅에서 사용할 수 있는 목차 네비게이션입니다.<br><br><br>
![image](https://github.com/fpem3309/nav-contents/assets/75240619/4bf85e59-d615-44bd-96dd-270dabb2b953)
.entry-content 안에 목차가 생성되게 만들었는데 모든 스킨이 같은 이름으로 되어있나..?<br>
(디자인이 좀 구립니다ㅠ)

## 사용법
1. 저장소에서 anchor-nav.js와 anchor-nav.css를 다운로드 합니다.
2. 스킨 편집 -> html편집 -> 파일업로드에서 다운로드 받은 파일을 업로드 합니다<br>
![image](https://github.com/fpem3309/nav-contents/assets/75240619/7d8832c4-79e0-4b67-b6a5-081596ea5b8a)
3. HTML 상단에 css파일을 넣어줍니다.<br>
![image](https://github.com/fpem3309/nav-contents/assets/75240619/ab4c0b60-3feb-496e-89d1-368b2097f4d7)
4. HTML 하단에 js파일을 넣어줍니다.<br>
![image](https://github.com/fpem3309/nav-contents/assets/75240619/a0796c6b-682f-4313-b695-3e8df1ed485f)

## 설명
1. 기본모드에서 글 작성시 자동으로 생성되게 만들었습니다. (미리보기로 목차가 어떻게 생성되는지 볼 수 있습니다.)
2. ```
   const anchor_item = document.querySelectorAll('.entry-content h2"]');  // 최상위 항목 (19번 라인)
   if (nextElement.tagName.toLowerCase() === 'h3' && nextElement.textContent.replace(/\s+/g, '').length > 1) {  // 두번째 상위 항목 (47번 라인)
   ```
   제목1(h2)을 최상위, 제목2(h3)을 그 다음 상위로 되어있는데 바꾸면서 다른 태그들로 수정할 수 있습니다.
3. 현재 부제목까지만 자주 사용해서 부제목까지 상위 2개만 설정할 수 있습니다.
4. 설정한 최상위 제목이 블로그 글에 없으면 부제목이 있어도 목차가 노출되지 않습니다.(추후 수정) 부제목은 안 넣어도 제목이 있으면 목차가 노출됩니다.
