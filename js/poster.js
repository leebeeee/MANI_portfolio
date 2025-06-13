// 모달 요소
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

// 모든 poster_img와 poster_hidden img에 클릭 이벤트 추가
document.querySelectorAll('.poster_img, .poster_hidden img').forEach(img => {
    img.addEventListener('click', function(e) {
        e.stopPropagation(); // 이미지 클릭 시 버블링 방지
        modal.style.display = 'flex';
        modalImg.src = this.src;
        modalImg.alt = this.alt;
    });
});

// 모달 아무 곳이나 클릭하면 닫힘
modal.addEventListener('click', function() {
    modal.style.display = 'none';
});
