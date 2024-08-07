document.addEventListener('DOMContentLoaded', function () {
    const targetDiv2 = document.querySelector('#div2');
    const textDiv3 = document.querySelector('.text');

    let typingIntervalDiv2;
    let typingIntervalDiv3;

    const observerDiv2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const homeText = document.querySelector('.div2');
                homeText.innerText = ""; // 텍스트 초기화

                const content = "I'm\nSo\nHipHop\nThat\nI\nSubscribe\nChopJack";
                let count = 0;

                if (typingIntervalDiv2) {
                    clearInterval(typingIntervalDiv2);
                }

                function typing() {
                    if (count < content.length) {
                        homeText.innerText += content[count++];
                    } else {
                        clearInterval(typingIntervalDiv2);
                    }
                }

                typingIntervalDiv2 = setInterval(typing, 70);
            }
        });
    }, { threshold: 0.5 }); // 50% 이상 보일 때 이벤트 실행

    observerDiv2.observe(targetDiv2);

    const observerDiv3 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                textDiv3.innerText = ""; // 텍스트 초기화

                const contents = "2009년 태어난 찹작이는 태어나고 5살 무렵 한국은 작다는 이유로 미국으로 떠났다. 미국으로 떠난 후 뉴욕의 브루클린에서 힙합을 접한 뒤 이문화를 이끌고 나가겠다는 다짐으로 랩레슨을 하고 다녔다. 당시 나스와 제이지를 가르치고 다녔다. 랩의 갱스터 문화에도 관심을 가지던 찹작이는 크립스갱 소속으로 들어가 활약을 하기 시작했다. 그러다 스눕독이 그의 음악적인 재능을 알아보며 자신과 함께 해보지 않겠냐고 손을 내밀었지만 찹작이는 크립스갱의 파란색이 가오가 안산다는 이유로 스눕독의 소중부위 털을 뽑고 도망을 쳤다. 그리고 당시 테일러 스위프트 수상식 사건으로 민심이 나락이였던 카니예 웨스트를 제자로 삼아 자신의 음악적 비젓의 2퍼센트도 안되는 My Beautiful Dark Twisted Fantasy를 발매하는 것을 도와주기도 하였다.";
                let i = 0;

                if (typingIntervalDiv3) {
                    clearInterval(typingIntervalDiv3);
                }

                function typingContent() {
                    if (i < contents.length) {
                        let txt = contents.charAt(i);
                        textDiv3.innerHTML += txt;
                        i++;
                    } else {
                        clearInterval(typingIntervalDiv3);
                    }
                }

                typingIntervalDiv3 = setInterval(typingContent, 20);
            }
        });
    }, { threshold: 0.5 }); // 50% 이상 보일 때 이벤트 실행

    observerDiv3.observe(textDiv3);
});


let lastScrollTop = 0;
const banner = document.getElementById('banner');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        banner.classList.add('hidden');
    } else {
        // Scroll up
        banner.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
let isDiv1Visible = false;
let isDiv2Visible = false;

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isDiv1Visible = entry.isIntersecting;
        updateBannerTextColor();
    });
}, { threshold: 0 }); // div1의 일부분이라도 보일 때 이벤트 실행

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isDiv2Visible = entry.isIntersecting;
        updateBannerTextColor();
    });
}, { threshold: 0 }); // div2의 일부분이라도 보일 때 이벤트 실행

function updateBannerTextColor() {
    if (isDiv1Visible) {
        banner.classList.remove('light-text');
    } else if (isDiv2Visible) {
        banner.classList.add('light-text');
    } else {
        banner.classList.remove('light-text');
    }
}

observer1.observe(div1);
observer2.observe(div2);


document.getElementById('link-div3').addEventListener('click', function (e) {
    e.preventDefault();
    div3.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('link-div5').addEventListener('click', function (e) {
    e.preventDefault();
    div5.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('link-div1').addEventListener('click', function (e) {
    e.preventDefault();
    div1.scrollIntoView({ behavior: 'smooth' });
});
