//ロードアニメーション
async function animateDots(element, ms = 500) {
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dots-container');

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot', `dot-${i}`);
        dotsContainer.appendChild(dot);
    }

    element.appendChild(dotsContainer);

    await delay(ms);
}

//グラフイメージ
async function displayImages() {
    const chatContainer = document.querySelector('.chat-container');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper')

    for (let i = 1; i <= 4; i++) {
        const image = document.createElement('img');
        image.src = `images/img0${i}.png`;
        image.classList.add(`graphImg${i}`)
        image.style.display = 'none';
        imageContainer.appendChild(image);

        imageWrapper.appendChild(image)
    }
    imageContainer.appendChild(imageWrapper)
    imageContainer.appendChild(imageWrapper);
    chatContainer.appendChild(imageContainer);

    const images = imageContainer.querySelectorAll('img');
    let index = 0;
    const interval = setInterval(() => {
        images[index].style.display = 'block'
        index++;
        if (index >= images.length) {
            clearInterval(interval);
        }
    }, 1000);
}

//スクロールイベント
function scrollToTop(scrollToTop = 200) {
    window.scrollBy({ top: scrollToTop, behavior: 'smooth' });
}

//ディレイ
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function delayAll(ms = 1000) {
    await delay(ms);
}
//メイン
document.addEventListener('DOMContentLoaded', async function () {
    const buttonA = document.querySelectorAll('#choiceA');
    const buttonB = document.querySelectorAll('#choiceB');
    const buttons = document.querySelectorAll('.buttons');
    const buttons2 = document.querySelectorAll('.buttons2');
    const buttons3 = document.querySelectorAll('.buttons3');
    const buttons4 = document.querySelectorAll('.buttons4');
    const buttons5 = document.querySelectorAll('.buttons5');
    const buttons6 = document.querySelectorAll('.buttons6');
    const buttons7 = document.querySelectorAll('.buttons7');
    const buttons8 = document.querySelectorAll('.buttons8');
    const buttons9 = document.querySelectorAll('.buttons9');
    const buttons10 = document.querySelectorAll('.buttons10');
    const selectA = document.querySelectorAll('#img05');
    const selectB = document.querySelectorAll('#img06');
    const selectC = document.querySelectorAll('#imgQ');
    const selectD = document.querySelectorAll('#img07');
    const selectE = document.querySelectorAll('#img08');
    const selectF = document.querySelectorAll('#imgQ2');
    const selectG = document.querySelectorAll('#img09');
    const selectH = document.querySelectorAll('#img10');
    const selectI = document.querySelectorAll('#imgN');
    const selectJ = document.querySelectorAll('#img11');
    const selectK = document.querySelectorAll('#img12');
    const selectL = document.querySelectorAll('#imgN2');
    const selectM = document.querySelectorAll('#img13');
    const selectN = document.querySelectorAll('#img14');
    const selectO = document.querySelectorAll('#imgN3');
    const selectP = document.querySelectorAll('#img15');
    const selectQ = document.querySelectorAll('#img16');
    const selectR = document.querySelectorAll('#imgN4');
    const selectS = document.querySelectorAll('#img17');
    const selectT = document.querySelectorAll('#img18');
    const selectU = document.querySelectorAll('#imgN5');
    const selectV = document.querySelectorAll('#img19');
    const selectW = document.querySelectorAll('#img20');
    const selectX = document.querySelectorAll('#imgN6');
    const selectY = document.querySelectorAll('#img21');
    const selectZ = document.querySelectorAll('#img22');
    const selectAA = document.querySelectorAll('#imgN7');
    const selectBB = document.querySelectorAll('#img23');
    const selectCC = document.querySelectorAll('#img24');
    const selectDD = document.querySelectorAll('#imgN8');
    const selectT1 = document.querySelectorAll('#t1');
    const selectT2 = document.querySelectorAll('#t2');
    const selectT3 = document.querySelectorAll('#t3');
    const selectT4 = document.querySelectorAll('#t4');
    const selectT5 = document.querySelectorAll('#t5');
    const selectT6 = document.querySelectorAll('#t6');
    const selectT7 = document.querySelectorAll('#t7');
    const selectT8 = document.querySelectorAll('#t8');
    const buttonArea = document.querySelectorAll('.button-container2');
    const selectKen01 = document.querySelectorAll('.selectedKen01');
    const selectKen02 = document.querySelectorAll('.selectedKen02');
    const selectKen03 = document.querySelectorAll('.selectedKen03');
    const selectKen04 = document.querySelectorAll('.selectedKen04');
    const selectKen05 = document.querySelectorAll('.selectedKen05');
    const selectKen06 = document.querySelectorAll('.selectedKen06');
    const selectKen07 = document.querySelectorAll('.selectedKen07');
    const selectKen08 = document.querySelectorAll('.selectedKen08');

    // ボタンを非表示
    function hideButtons(buttons) {
        buttons.forEach(button => {
            button.style.display = 'none';
        });
    }
    // ボタンをブロック表示
    function showButtons(buttons) {
        buttons.forEach(button => {
            button.style.display = 'block';
    });
}
    //ボタンをフレックス表示
    function showFlex(buttons) {
        buttons.forEach(button => {
            button.style.display = 'flex';
            scrollToTop();
    });
}
    //ボタンをグリッド表示
    function showGrid(buttons) {
        buttons.forEach(button => {
            button.style.display = 'grid';
    });
}

    // ローディングメッセージを非表示
    function hideLoadingMessage() {
        const loadingMessages = document.querySelectorAll('.loading');
        const lastLoadingMessage = loadingMessages[loadingMessages.length - 1];
        if (lastLoadingMessage) {
            lastLoadingMessage.style.display = 'none';
        }
    }

    // システムメッセージを表示
    function displaySystemMessage(message) {
        const chatContainer = document.querySelector('.chat-container');
        const systemMessage = document.createElement('div');
        systemMessage.classList.add('message', 'system-message');
        systemMessage.innerHTML = `<div class='bubble user'>${message}</div>`;

        const icon = document.createElement('img');
        icon.src = '/images/icon.png';
        icon.classList.add('icon');

        systemMessage.appendChild(icon);
        chatContainer.appendChild(systemMessage);
    }
    //アイコン無しシステムメッセージ
    function systemIconMessage(message) {
        const chatContainer = document.querySelector('.chat-container');
        const systemMessage = document.createElement('div');
        systemMessage.classList.add('message', 'system-message', 'hide-icon');
        systemMessage.innerHTML = `<div class='bubble user'>${message}</div>`;

        chatContainer.appendChild(systemMessage);
    }

    // ユーザーメッセージを表示
    function displayUserMessage(message) {
        const chatContainer = document.querySelector('.chat-container');
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.innerHTML = `<div class='bubble'>${message}</div>`;
        chatContainer.appendChild(userMessage);
    }

// ディレイの非同期関数
async function delayAndHideLoadingMessage(delayTime = 1000) {
    await delay(delayTime);
    hideLoadingMessage();
}

//セットの関数
async function displaySetMessage(message, icon = true) {
    await delayAll(1000);
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('message', 'system-message', 'loading',  'hide-icon');
    loadingMessage.innerHTML = `<div class='load'></div>`;

    if (icon) {
        const icon = document.createElement('img');
        icon.src = '/images/icon.png';
        icon.classList.add('icons');
        loadingMessage.appendChild(icon);
    }

    const chatContainer = document.querySelector('.chat-container');
    chatContainer.appendChild(loadingMessage);

    await animateDots(loadingMessage.querySelector('.load'));
    await delayAndHideLoadingMessage(1000);
    if (message) {
        if (icon) {
            displaySystemMessage(message);
        } else {
            systemIconMessage(message);
        }
    }
}

//HTMLからdata-selected-textを持ってくる関数
    function getSelectedTextFromElement(element) {
    const buttonElement = element.closest('[data-selected-text]');
    return buttonElement ? buttonElement.getAttribute('data-selected-text') || '' : '';
}

//それぞれのクリックハンドラ
    function addClickHandle(elements, clickHandler) {
    elements.forEach(element => {
        element.addEventListener('click', event => {
            const selectedText = getSelectedTextFromElement(event.target);
            clickHandler(selectedText);
        });
    });
}
/*------------------初期メッセージ------------------------- */
    await displaySetMessage('2つの方法で計算することができます。');
    await displaySetMessage('どちらがご希望に近いですか？', false);

    await delay(1000);
    showButtons(buttonA);
    showButtons(buttonB);

/*------------------ボタンA--------------------------- */
async function buttonAClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttonA); hideButtons(buttonB);

    await displaySetMessage('かしこまりました');
    await displaySetMessage('データを元に、あなたの相場をざっくり計算します。', false);
    await displaySetMessage('希望されるお風呂は、どのような形式ですか？');
    await showFlex(buttons);
}
addClickHandle(buttonA, buttonAClick);
/*------------------ボタンB--------------------------- */
async function buttonBClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttonA); hideButtons(buttonB);

    await displaySetMessage('かしこまりました');
    await displaySetMessage('お風呂リフォームの相場は', false);
    displayImages();
    await delay(5000)
    scrollToTop(500)
    await displaySetMessage('データを元に、あなたの相場をざっくり計算します。');
    await displaySetMessage('希望されるお風呂は、どのような形式ですか？', false);
    await showFlex(buttons);
}
addClickHandle(buttonB, buttonBClick);
/*------------------お風呂の形式-------------------------- */
async function selectAClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons);

    await displaySetMessage('希望されるお風呂の大きさは、どのくらいですか？');
    await showFlex(buttons2);
}
addClickHandle(selectA, selectAClick); addClickHandle(selectB, selectAClick); addClickHandle(selectC, selectAClick);
/*------------------お風呂の大きさ------------------------- */
async function selectBClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons2);

    await displaySetMessage('浴槽まわりの希望をお伺いします。');
    await displaySetMessage('湯煎に浸かる頻度が多い場合は、浴槽の形が重要です。');
    await displaySetMessage('浴槽の形にこだわりはありますか？', false);
    showFlex(buttons3);
}
addClickHandle(selectD, selectBClick); addClickHandle(selectE, selectBClick); addClickHandle(selectF, selectBClick);
/*-------------------浴槽の形-------------------------- */
async function selectCClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons3);
    await displaySetMessage('お湯の冷めにくい、保温効果のある浴槽を希望されますか？');
    showFlex(buttons4);
}
addClickHandle(selectG, selectCClick); addClickHandle(selectH, selectCClick); addClickHandle(selectI, selectCClick);
/*-------------------保温機能-------------------------- */
async function selectDClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons4);
    await displaySetMessage('リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？');
    showFlex(buttons5);
}
addClickHandle(selectJ, selectDClick); addClickHandle(selectK, selectDClick); addClickHandle(selectL, selectDClick)
/*-------------------リラックス機能-------------------------- */
async function selectEClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons5);
    await displaySetMessage('お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。');
    await displaySetMessage('お風呂にオーディオの設置を希望されますか？', false);
    showFlex(buttons6);
}
addClickHandle(selectM, selectEClick); addClickHandle(selectN, selectEClick); addClickHandle(selectO, selectEClick);
/*-------------------オーディオ-------------------------- */
async function selectFClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons6);
    await displaySetMessage('ゆったりお風呂に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。');
    await displaySetMessage('お風呂にテレビの設置を希望されますか？', false);
    showFlex(buttons7);
}
addClickHandle(selectP, selectFClick); addClickHandle(selectQ, selectFClick); addClickHandle(selectR, selectFClick);
/*-------------------テレビ-------------------------- */
async function selectGClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons7);
    await displaySetMessage('設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽にかえることができます');
    await displaySetMessage('機能的な照明をご希望されますか？', false);
    showFlex(buttons8);
}
addClickHandle(selectS, selectGClick); addClickHandle(selectT, selectGClick); addClickHandle(selectU, selectGClick);
/*-------------------照明-------------------------- */
async function selectHClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons8);
    await displaySetMessage('湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。');
    await displaySetMessage('追い焚き機能をご希望されますか？', false);
    showFlex(buttons9);
}
addClickHandle(selectV, selectHClick); addClickHandle(selectW, selectHClick); addClickHandle(selectX, selectHClick);
/*-------------------追い焚き機能-------------------------- */
async function selectIClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons9);
    await displaySetMessage('リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？');
    showFlex(buttons10);
}
addClickHandle(selectY, selectIClick); addClickHandle(selectZ, selectIClick); addClickHandle(selectAA, selectIClick);
/*-------------------インターフォン-------------------------- */
async function selectJClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons10);
    await displaySetMessage('物件の場所はどちらになりますか？');
    showGrid(buttonArea);
    scrollToTop(300)
}
addClickHandle(selectBB, selectJClick); addClickHandle(selectCC, selectJClick); addClickHandle(selectDD, selectJClick);
/*-------------------北海道・東北-------------------------- */
async function selectKClick() {
    hideButtons(buttonArea);
    showGrid(selectKen01);
}
async function selectAAClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen01);
}
/*-------------------関東-------------------------- */
async function selectLClick() {
    hideButtons(buttonArea);
    showGrid(selectKen02);
}
async function selectBBClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen02);
}
/*-------------------北陸・甲信越-------------------------- */
async function selectMClick() {
    hideButtons(buttonArea);
    showGrid(selectKen03);
}
async function selectCCClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen03);
}
/*-------------------東海-------------------------- */
async function selectNClick() {
    hideButtons(buttonArea);
    showGrid(selectKen04);
}
async function selectDDClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen04);
}
/*-------------------関西-------------------------- */
async function selectOClick() {
    hideButtons(buttonArea);
    showGrid(selectKen05);
}
async function selectEEClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen05);
}
/*-------------------中国-------------------------- */
async function selectPClick() {
    hideButtons(buttonArea);
    showGrid(selectKen06);
}
async function selectFFClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen06);
}
/*-------------------四国-------------------------- */
async function selectQClick() {
    hideButtons(buttonArea);
    showGrid(selectKen07);
}
async function selectGGClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen07);
}
/*-------------------九州・沖縄-------------------------- */
async function selectRClick() {
    hideButtons(buttonArea);
    showGrid(selectKen08);
}
async function selectHHClick(selectedText) {
    displayUserMessage(selectedText);
    hideButtons(selectKen08);
}
addClickHandle(selectT1, selectKClick); addClickHandle(selectT2, selectLClick); addClickHandle(selectT3, selectMClick); addClickHandle(selectT4, selectNClick); addClickHandle(selectT5, selectOClick); addClickHandle(selectT6, selectPClick); addClickHandle(selectT7, selectQClick); addClickHandle(selectT8, selectRClick);
addClickHandle(selectKen01, selectAAClick); addClickHandle(selectKen02, selectBBClick); addClickHandle(selectKen03, selectCCClick); addClickHandle(selectKen04, selectDDClick); addClickHandle(selectKen05, selectEEClick); addClickHandle(selectKen06, selectFFClick); addClickHandle(selectKen07, selectGGClick); addClickHandle(selectKen08, selectHHClick);
});