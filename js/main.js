setTimeout(function start() {
  $(".bar").each(function (i) {
    var $bar = $(this);
    $(this).append('<span class="count"></span>');
    setTimeout(function () {
      $bar.css("width", $bar.attr("data-percent"));
    }, i * 100);
  });

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate({
        Counter: $(this).parent(".bar").attr("data-percent"),
      }, {
        duration: 2000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now) + "%");
        },
      });
  });
}, 500);

let i1 = document.querySelectorAll('.fas')

let label = document.querySelectorAll('label')
// label.forEach(j=>{
//   j.addEventListener('click',()=>{
//     console.log();
//        i1.classList.toggle('activebtn')
//   })
// })
i1.forEach(item=>{
  item.addEventListener('click',()=>{
    item.classList.toggle('activebtn')
  })
})






// triangle_btn.addEventListener('click', () => {
//   faq_down.classList.toggle('active')
//   btn.classList.toggle('activebtn')
//   btn.style.transition = 'all .4s linear'
//   console.log(faq_down);

// })