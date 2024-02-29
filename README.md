# nav-contents
티스토리 목차 네비게이션<br>

![-Chrome2024-02-2910-42-41-ezgif com-video-to-gif-converter](https://github.com/fpem3309/nav-contents/assets/75240619/70395f44-254c-4a4d-808b-36891eec2eeb)

티스토리 포스팅에서 사용할 수 있는 목차 네비게이션입니다.<br><br><br>

![image](https://github.com/fpem3309/nav-contents/assets/75240619/4bf85e59-d615-44bd-96dd-270dabb2b953)
```
const main = document.querySelector('.entry-content'); // 글 내용
```
.entry-content 안에 목차가 생성되게 만들었습니다<br><br><br>


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
   const first = '.entry-content blockquote[data-ke-style="style2"]';  // 최상위
   const second = 'h2';  // 두번째
   const third = 'h3'; // 세번째
   const fourth = '';  // 네번째
   const fifth = ''; // 다섯번째
   ```
   제목1(h2)을 최상위, 제목2(h3)을 그 다음 상위...등등 다른 태그들로 설정할 수 있습니다.
   여기서는 style2 인용을 최상위 태그로 설정했습니다
   현재 두번째 상위까지만 오류없이 실행됩니다.
4. 설정한 최상위 제목이 없으면 하위 제목이 있어도 목차가 노출되지 않습니다.
