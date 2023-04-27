window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options);

   
    const paras = document.querySelectorAll('.to-observe');
    paras.forEach(p => observer.observe(p));

    const signUpBtns = document.querySelectorAll('.sign-up-btn');
    signUpBtns.forEach(btn=>btn.addEventListener('click',function(){
        console.log(this.parentElement.querySelector('.sign-up-input').value);
    }))
}

