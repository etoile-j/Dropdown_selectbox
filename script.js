const mainSelect = document.querySelector(".mainSelect");
const languageList = document.querySelector(".languageList");
const arrow = document.querySelector(".mainSelect::after");

mainSelect.addEventListener('click', () => {
	// mainSelect.classList.toggle('click_mainSelect');
	languageList.classList.toggle('click_languageList');
});

mainSelect.addEventListener('mouseenter', () => {
	mainSelect.classList.add('click_mainSelect');
});
mainSelect.addEventListener('mouseleave', () => {
	mainSelect.classList.remove('click_mainSelect');
});

languageList.addEventListener('click', e => {
    if (e.target.tagName !== "BUTTON") {
        return;
    } else {
        mainSelect.textContent = e.target.textContent;
        languageList.classList.remove('click_languageList');
    }
});


// 클래스로 넣고 빼주는 방식을 사용할까 아님 직접적으로??
// 클래스일거같다..?