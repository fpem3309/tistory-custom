/*------------------------------
  File : codeblock-title.js
  Create date : 2024-08-04
  Version : 1.0.0
  ※ Post 내 codeblock의 파일명, 확장자명
------------------------------*/
document.querySelectorAll('pre').forEach(function(elem) {
  let fileName = elem.previousElementSibling;
  if (fileName) {
    fileName.classList.add("file_name");
    let ext = document.createElement("div");
    fileName.appendChild(ext);
    ext.classList.add("ext");
    ext.innerHTML = elem.classList[0].charAt(0).toUpperCase() + elem.classList[0].slice(1);
  }
});

