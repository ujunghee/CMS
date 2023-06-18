// 프로모션이라는 엘리먼트를 찾아서 promotionEl에 값을 할당
const promotionEl = document.querySelector('.toggle-list');
let isHidePromtion = false;
promotionEl.addEventListener('click', function () {
  isHidePromtion = !isHidePromtion
  if (isHidePromtion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});




// 여기서부터 추가해주시면 됩니다!

// 셀렉트 박스
const label = document.querySelectorAll('.label');
label.forEach(function(lb){
  // 라벨에 클릭 
    lb.addEventListener('click', e => {
        let optionList = lb.nextElementSibling;
        let optionItems = optionList.querySelectorAll('.optionItem');
        clickLabel(lb, optionItems);
    })
});
// 액티브 클래스 추가, 클릭 반복
const clickLabel = (lb, optionItems) => {
    if(lb.parentNode.classList.contains('active')) {
        lb.parentNode.classList.remove('active');
        optionItems.forEach((opt) => {
            opt.removeEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    } else {
        lb.parentNode.classList.add('active');
        optionItems.forEach((opt) => {
            opt.addEventListener('click', () => {
                handleSelect(lb, opt)
            })
        })
    }
}
const handleSelect = (label, item) => {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
}

