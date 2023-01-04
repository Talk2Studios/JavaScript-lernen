const currentYear = new Date().getFullYear()

function year() {
  currentYear
  //console.log(currentYear)
  return currentYear
}

window.onload = curdate

function curdate() {
  const footerinhalt = (`
    <div class="footer-l-div">
    <div class="social">
      <p>Social</p>
      <a href="https://github.com/Talk2Studios/" target="_blank"><img src="/assets/github.png" alt="github" /></a>
      <a href="https://www.youtube.com/channel/UCoif-_aktkxpc9-vPHEKAVw" target="_blank"><img src="/assets/youtube.png"
          alt="youtube" /></a>
    </div>
    <p class="lbundig">
      If you have any ideas or <br />suggestions on how we<br />
      can improve the website, <br />
      please contact us here. &darr;<br /><br /><a href="mailto:Talk2.studios@gmail.com"
        class="mail">Talk2.studios@gmail.com</a>
    </p>
  </div>
  <p class="rbundig"><img src="/assets/icon.png" alt="logo" class="headerlogo"><br>
    &copy; ` + year() + ` Talk2 Studios<br>Webdesign by Colin Heggli
  </p>
  `)

  document.getElementById("footerin").innerHTML = footerinhalt;
}


