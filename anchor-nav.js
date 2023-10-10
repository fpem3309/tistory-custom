function appendAnchor(nav, nextElements) {
  for (let i = 0; i < nextElements.length; i++) {
    const id = nextElements[i].textContent;
    nextElements[i].setAttribute('id', `${id}`);

    const li = document.createElement("li");
    const a = document.createElement("a");
    const textNode = document.createTextNode(id);
    a.appendChild(textNode);
    a.setAttribute('href', `#${id}`);
    li.appendChild(a);
    nav.appendChild(li);
  }
}

document.addEventListener("DOMContentLoaded", function () {

  const entry_content = document.querySelector('.entry-content'); // 글 내용
  const anchor_item = document.querySelectorAll('.entry-content h2');  // 목차로 사용

  const anchor_nav = document.createElement('ul'); // 목차 네비게이션 만들기
  anchor_nav.setAttribute('class', 'anchor_nav');  // 목차 네비게이션에 class 지정
  
  const toggle_btn = document.createElement('button'); // 목차 네비게이션 버튼
  toggle_btn.setAttribute('class', 'anchor_toggle_btn');  // 목차 네비게이션에 토글 버튼
  toggle_btn.innerText = '👀 👉';
  
  if(anchor_item.length > 0){
    entry_content.appendChild(anchor_nav);   // 목차 네비게이션 html에 띄우기
    entry_content.appendChild(toggle_btn);  // 버튼 html에 띄우기
  }
  
  for (let i = 0; i < anchor_item.length; i++) {  // 목차 갯수만큼

    const id = anchor_item[i].textContent;
    anchor_item[i].setAttribute('id', `${id}`)  // 목차들 id값 설정

    const li = document.createElement("li");
    const a = document.createElement("a");
    const textNode = document.createTextNode(id);

    a.appendChild(textNode);  // 목차 네비게이션 a태그안에 이름 넣기
    a.setAttribute('href', `#${id}`); // 목차 네비게이션 a태그에 href 넣기
    li.appendChild(a);
    anchor_nav.appendChild(li); // 목차 네비게이션에 추가

    const nextElements = [];
    let nextElement = anchor_item[i].nextElementSibling;
    while (nextElement) {
      if (nextElement.tagName.toLowerCase() === 'h3' && nextElement.textContent.replace(/\s+/g, '').length > 1) {
        nextElements.push(nextElement);
      } else if (nextElement.tagName.toLowerCase() === 'blockquote') {
        break;
      }
      nextElement = nextElement.nextElementSibling;
    }
    if (nextElements.length > 0) {
      const title_one_nav = document.createElement('ul'); // 목차 네비게이션 만들기
      title_one_nav.setAttribute('class', 'title_one_nav'); // 목차 네비게이션에 class 지정
      appendAnchor(title_one_nav, nextElements);
      anchor_nav.appendChild(title_one_nav);
    }
  }

  toggle_btn.addEventListener('click', function () {
    const nav_width = anchor_nav.offsetWidth;
    console.log(nav_width)
    if (!anchor_nav.style.right || anchor_nav.style.right === '0px') {
      anchor_nav.style.right = `-${nav_width+50}px`;
      toggle_btn.style.transform = 'rotateY(-180deg)';
    } else {
      anchor_nav.style.right = '0px';
      toggle_btn.style.transform = 'rotateY(0deg)';
    }
  });
  
  window.addEventListener('hashchange', function () {
    let hash = decodeURIComponent(location.hash);
    document.querySelectorAll('.active_anchor').forEach(element => {
      element.classList.remove('active_anchor');
    });
    document.querySelector(`[href="${hash}"]`).parentElement.setAttribute('class', 'active_anchor');
  });
});
