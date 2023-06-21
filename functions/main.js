// Modal Function
const case_study = document.querySelector('.case-study');

document.addEventListener('click', e => {
	if (e.target.matches('.case-study-close')) {
		case_study.classList.add('none');
		case_study.classList.remove('stack');
	}

	if (e.target.matches('.case-study-button')) {
		case_study.classList.add('stack');
		case_study.classList.remove('none');
	}
});