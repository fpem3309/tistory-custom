/*------------------------------
  File : home.title.js
  Create date : 2024-08-04
  Version : 1.0.0
  ※ Home 화면
------------------------------*/
new TypeIt("#laptop_title", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("ㄸ뚜닥", { delay: 300 })
    .move(-2)
    .delete(1)
    .type("노트북")
    .move(null, { to: "END" })
    .type("뚜닥")
    .move(-4)
    .type(" ")
    .pause(300)
    .move(null, { to: "END" })
    .go();