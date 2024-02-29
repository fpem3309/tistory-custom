function appendItems(tag, turn, parent) {
  const items = [];
  while (tag) {
    if (tag.tagName.toLowerCase() === turn && tag.textContent.replace(/\s+/g, '').length > 1) {
      items.push(tag);
    } else if (tag.tagName === parent) {
      break;
    }
    tag = tag.nextElementSibling;
  }
  if (items.length > 0) {
    const anchor_child = document.createElement('ul'); // 목차 네비게이션 만들기
    anchor_child.setAttribute('class', `anchor_${turn}`); // 목차 네비게이션에 class 지정
    appendAnchor(anchor_child, items);
    anchor_nav.appendChild(anchor_child);
    return anchor_child;
  }
}

function appendAnchor(nav, items) {
  for (let i = 0; i < items.length; i++) {
    const id = items[i].textContent;
    items[i].setAttribute('id', `${id}`);
    items[i].setAttribute('class', 'anchors');  // 목차들 class값 설정

    const li = document.createElement("li");
    const a = document.createElement("a");
    const textNode = document.createTextNode(id);
    a.appendChild(textNode);
    a.setAttribute('href', `#${id}`);
    li.appendChild(a);
    nav.appendChild(li);
  }
}

const main = document.querySelector('.entry-content'); // 글 내용
const anchor_nav = document.createElement('ul'); // 목차 네비게이션 만들기
anchor_nav.setAttribute('class', 'anchor_nav');  // 목차 네비게이션에 class 지정

const toggle_btn = document.createElement('button'); // 목차 네비게이션 버튼
toggle_btn.setAttribute('class', 'anchor_toggle_btn');  // 목차 네비게이션에 토글 버튼

const first = '.entry-content blockquote[data-ke-style="style2"]';  // for
const second = 'h2';  // 두번째
const third = 'h3'; // 세번째
const fourth = '';  // 네번째
const fifth = ''; // 다섯번째

document.addEventListener("DOMContentLoaded", function () {

  const anchor_1 = document.querySelectorAll(first);  // 최상위 목차로 사용
  if (anchor_1.length > 0) {
    main.appendChild(anchor_nav);   // 목차 네비게이션 html에 띄우기
    main.appendChild(toggle_btn);  // 버튼 html에 띄우기
  }

  for (let i = 0; i < anchor_1.length; i++) {  // 목차 갯수만큼

    const id = anchor_1[i].textContent;
    anchor_1[i].setAttribute('id', `${id}`)  // 목차들 id값 설정
    anchor_1[i].setAttribute('class', 'anchors');  // 목차들 class값 설정

    const li = document.createElement("li");
    const a = document.createElement("a");
    const textNode = document.createTextNode(id);

    a.appendChild(textNode);  // 목차 네비게이션 a태그안에 이름 넣기
    a.setAttribute('href', `#${id}`); // 목차 네비게이션 a태그에 href 넣기
    li.appendChild(a);
    anchor_nav.appendChild(li); // 목차 네비게이션에 추가

    if (second != '') appendItems(anchor_1[i].nextElementSibling, second, anchor_1[i].tagName)
    // if (third != '') appendItems(anchor_2.nextElementSibling, third, anchor_2.tagName)
    // if (fourth != '') appendItems(anchor_1[i].nextElementSibling, fourth)
    // if (fifth != '') appendItems(anchor_1[i].nextElementSibling, fifth)

  }

  toggle_btn.addEventListener('click', function () {
    anchor_nav.classList.toggle('btn_hide');
  })

  window.addEventListener('hashchange', function () {
    let hash = decodeURIComponent(location.hash);
    document.querySelectorAll('.active_anchor').forEach(element => {
      element.classList.remove('active_anchor');
    });
    document.querySelector(`[href="${hash}"]`).parentElement.setAttribute('class', 'active_anchor');
  });


  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.anchors');
    const menuItems = document.querySelectorAll('.anchor_nav li');

    sections.forEach(function (section, index) {
      // 섹션의 위치
      const sectionTop = section.offsetTop - 100; // 상단 마진이 있을 경우 조정

      // 현재 스크롤 위치
      let scrollPosition = window.scrollY;

      // 현재 스크롤 위치가 섹션 위치 범위 내에 있는지 확인
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + section.offsetHeight) {
        // 해당 섹션에 해당하는 메뉴 아이템을 강조
        menuItems.forEach(function (item) {
          item.classList.remove('active_anchor');
        });
        // console.log(index, menuItems[index])
        menuItems[index].classList.add('active_anchor');
      }
    });
  });
});
