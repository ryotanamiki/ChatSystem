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
    const buttons = [
        document.querySelectorAll('.button1'),
        document.querySelectorAll('#choiceA'),
        document.querySelectorAll('#choiceB'),
        document.querySelectorAll('.buttons'),
        document.querySelectorAll('.buttons2'),
        document.querySelectorAll('.buttons3'),
        document.querySelectorAll('.buttons4'),
        document.querySelectorAll('.buttons5'),
        document.querySelectorAll('.buttons6'),
        document.querySelectorAll('.buttons7'),
        document.querySelectorAll('.buttons8'),
        document.querySelectorAll('.buttons9'),
        document.querySelectorAll('.buttons10')
    ];
    const select = [
        document.querySelectorAll('#img05'),
        document.querySelectorAll('#img06'),
        document.querySelectorAll('#imgQ'),
        document.querySelectorAll('#img07'),
        document.querySelectorAll('#img08'),
        document.querySelectorAll('#imgQ2'),
        document.querySelectorAll('#img09'),
        document.querySelectorAll('#img10'),
        document.querySelectorAll('#imgN'),
        document.querySelectorAll('#img11'),
        document.querySelectorAll('#img12'),
        document.querySelectorAll('#imgN2'),
        document.querySelectorAll('#img13'),
        document.querySelectorAll('#img14'),
        document.querySelectorAll('#imgN3'),
        document.querySelectorAll('#img15'),
        document.querySelectorAll('#img16'),
        document.querySelectorAll('#imgN4'),
        document.querySelectorAll('#img17'),
        document.querySelectorAll('#img18'),
        document.querySelectorAll('#imgN5'),
        document.querySelectorAll('#img19'),
        document.querySelectorAll('#img20'),
        document.querySelectorAll('#imgN6'),
        document.querySelectorAll('#img21'),
        document.querySelectorAll('#img22'),
        document.querySelectorAll('#imgN7'),
        document.querySelectorAll('#img23'),
        document.querySelectorAll('#img24'),
        document.querySelectorAll('#imgN8'),
        document.querySelectorAll('.button-container2'),
        document.querySelectorAll('.selectedKen01'),
        document.querySelectorAll('.selectedKen02'),
        document.querySelectorAll('.selectedKen03'),
        document.querySelectorAll('.selectedKen04'),
        document.querySelectorAll('.selectedKen05'),
        document.querySelectorAll('.selectedKen06'),
        document.querySelectorAll('.selectedKen07'),
        document.querySelectorAll('.selectedKen08'),
        document.querySelectorAll('#t1'),
        document.querySelectorAll('#t2'),
        document.querySelectorAll('#t3'),
        document.querySelectorAll('#t4'),
        document.querySelectorAll('#t5'),
        document.querySelectorAll('#t6'),
        document.querySelectorAll('#t7'),
        document.querySelectorAll('#t8')
    ];

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
//共通
async function handleSelectClick(selectedText, messagesToDisplay, nextButtons, thirdButtons) {
    displayUserMessage(selectedText);
    hideButtons(nextButtons);

    const messagesArray = Array.isArray(messagesToDisplay) ? messagesToDisplay : [messagesToDisplay];

    await displayMessagesShow(messagesArray);
    showFlex(thirdButtons);
}
async function handleSelectClick2(selectedText, messagesToDisplay, nextButtons, thirdButtons) {
    displayUserMessage(selectedText);
    hideButtons(nextButtons);

    const messagesArray = Array.isArray(messagesToDisplay) ? messagesToDisplay : [messagesToDisplay];

    await displayMessagesShow(messagesArray);
    showGrid(thirdButtons);
}
async function handleSelectClick3(nextButtons, thirdButtons) {
    hideButtons(nextButtons);
    showGrid(thirdButtons);
}
async function handleSelectClick4(selectedText, nextButtons) {
    displayUserMessage(selectedText);
    hideButtons(nextButtons);
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
//順番に表示する関数
    async function displayMessagesShow(messages) {
    for (const messageDisplay of messages) {
        await displaySetMessage(messageDisplay.message, messageDisplay.useIcon);
    }
}
    //システムメッセージの配列
    const messagesDisplay = [
    [
        { message: '2つの方法で計算することができます。', useIcon: true },
        { message: 'どちらがご希望に近いですか？', useIcon: false }
    ],
    [
        { message: 'かしこまりました。', useIcon: true },
        { message: 'データを元に、あなたの相場をざっくり計算します。', useIcon: false },
        { message: '希望されるお風呂は、どのような形式ですか？', useIcon: true }
    ],
    [
        { message: 'かしこまりました', useIcon: true },
        { message: 'お風呂リフォームの相場は', useIcon: false }
    ],
    [
        { message: 'データを元に、あなたの相場をしっかり計算します。', useIcon: true },
        { message: '希望されるお風呂は、どのような形式ですか？', useIcon: false }
    ],
    [
        { message: '希望されるお風呂の大きさは、どのくらいですか？。', useIcon: true }
    ],
    [
        { message: '浴槽まわりの希望をお伺いします。', useIcon: true },
        { message: '湯煎に浸かる頻度が多い場合は、浴槽の形が重要です。', useIcon: true },
        { message: '浴槽の形にこだわりはありますか？', useIcon: false }
    ],
    [
        { message: 'お湯の冷めにくい、保温効果のある浴槽を希望されますか？', useIcon: true }
    ],
    [
        { message: 'リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？', useIcon: true }
    ],
    [
        { message: 'お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。', useIcon: true },
        { message: 'お風呂にオーディオの設置を希望されますか？', useIcon: false }
    ],
    [
        { message: 'ゆったりお風呂に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。', useIcon: true },
        { message: 'お風呂にテレビの設置を希望されますか？', useIcon: false }
    ],
    [
        { message: '設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽にかえることができます', useIcon: true },
        { message: '機能的な照明をご希望されますか？', useIcon: false }
    ],
    [
        { message: '湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。', useIcon: true },
        { message: '追い焚き機能をご希望されますか？', useIcon: false }
    ],
    [
        { message: 'リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？', useIcon: true }
    ],
    [
        { message: '物件の場所はどちらになりますか？', useIcon: true }
    ]
    ];
/*------------------初期メッセージ------------------------- */
    await displayMessagesShow(messagesDisplay[0]);
    await showButtons(buttons[0]);
/*------------------ボタンA--------------------------- */
async function buttonAClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[1], buttons[0], buttons[3]);
}
addClickHandle(buttons[1], buttonAClick);
/*------------------ボタンB--------------------------- */
async function buttonBClick(selectedText) {
    displayUserMessage(selectedText);

    hideButtons(buttons[0])

    await displayMessagesShow(messagesDisplay[2]);
    displayImages();
    await delay(5000)
    scrollToTop(500)
    await displayMessagesShow(messagesDisplay[3]);
    await showFlex(buttons[3]);
}
addClickHandle(buttons[2], buttonBClick);
/*------------------お風呂の形式-------------------------- */
async function selectAClick(selectedText) {
        handleSelectClick(selectedText, messagesDisplay[4], buttons[3], buttons[4]);
    }
addClickHandle(select[0], selectAClick); addClickHandle(select[1], selectAClick); addClickHandle(select[2], selectAClick);
/*------------------お風呂の大きさ------------------------- */
async function selectBClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[5], buttons[4], buttons[5]);
}
addClickHandle(select[3], selectBClick); addClickHandle(select[4], selectBClick); addClickHandle(select[5], selectBClick);
/*-------------------浴槽の形-------------------------- */
async function selectCClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[6], buttons[5], buttons[6]);
}
addClickHandle(select[6], selectCClick); addClickHandle(select[7], selectCClick); addClickHandle(select[8], selectCClick);
/*-------------------保温機能-------------------------- */
async function selectDClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[7], buttons[6], buttons[7]);
}
addClickHandle(select[9], selectDClick); addClickHandle(select[10], selectDClick); addClickHandle(select[11], selectDClick);
/*-------------------リラックス機能-------------------------- */
async function selectEClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[8], buttons[7], buttons[8]);
}
addClickHandle(select[12], selectEClick); addClickHandle(select[13], selectEClick); addClickHandle(select[14], selectEClick);
/*-------------------オーディオ-------------------------- */
async function selectFClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[9], buttons[8], buttons[9]);
}
addClickHandle(select[15], selectFClick); addClickHandle(select[16], selectFClick); addClickHandle(select[17], selectFClick);
/*-------------------テレビ-------------------------- */
async function selectGClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[10], buttons[9], buttons[10]);
}
addClickHandle(select[18], selectGClick); addClickHandle(select[19], selectGClick); addClickHandle(select[20], selectGClick);
/*-------------------照明-------------------------- */
async function selectHClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[11], buttons[10], buttons[11]);
}
addClickHandle(select[21], selectHClick); addClickHandle(select[22], selectHClick); addClickHandle(select[23], selectHClick);
/*-------------------追い焚き機能-------------------------- */
async function selectIClick(selectedText) {
    handleSelectClick(selectedText, messagesDisplay[12], buttons[11], buttons[12]);
}
addClickHandle(select[24], selectIClick); addClickHandle(select[25], selectIClick); addClickHandle(select[26], selectIClick);
/*-------------------インターフォン-------------------------- */
async function selectJClick(selectedText) {
    handleSelectClick2(selectedText, messagesDisplay[13], buttons[12], select[30]);
    scrollToTop(300)
}
addClickHandle(select[27], selectJClick); addClickHandle(select[28], selectJClick); addClickHandle(select[29], selectJClick);
/*-------------------北海道・東北-------------------------- */
async function selectKClick() {
    handleSelectClick3(select[30], select[31]);
}
async function selectAAClick(selectedText) {
    handleSelectClick4(selectedText, select[31]);
}
/*-------------------関東-------------------------- */
async function selectLClick() {
    handleSelectClick3(select[30],select[32]);
}
async function selectBBClick(selectedText) {
    handleSelectClick4(selectedText, select[32]);
}
/*-------------------北陸・甲信越-------------------------- */
async function selectMClick() {
    handleSelectClick3(select[30], select[33]);
}
async function selectCCClick(selectedText) {
    handleSelectClick4(selectedText, select[33]);
}
/*-------------------東海-------------------------- */
async function selectNClick() {
    handleSelectClick3(select[30], select[34]);
}
async function selectDDClick(selectedText) {
    handleSelectClick4(selectedText, select[34]);
}
/*-------------------関西-------------------------- */
async function selectOClick() {
    handleSelectClick3(select[30], select[35]);
}
async function selectEEClick(selectedText) {
    handleSelectClick4(selectedText, select[35]);
}
/*-------------------中国-------------------------- */
async function selectPClick() {
    handleSelectClick3(select[30], select[36]);
}
async function selectFFClick(selectedText) {
    handleSelectClick4(selectedText, select[36]);
}
/*-------------------四国-------------------------- */
async function selectQClick() {
    handleSelectClick3(select[30], select[37]);
}
async function selectGGClick(selectedText) {
    handleSelectClick4(selectedText, select[37]);
}
/*-------------------九州・沖縄-------------------------- */
async function selectRClick() {
    handleSelectClick3(select[30], select[38]);
}
async function selectHHClick(selectedText) {
    handleSelectClick4(selectedText, select[38]);
}
addClickHandle(select[39], selectKClick); addClickHandle(select[40], selectLClick); addClickHandle(select[41], selectMClick); addClickHandle(select[42], selectNClick); addClickHandle(select[43], selectOClick); addClickHandle(select[44], selectPClick); addClickHandle(select[45], selectQClick); addClickHandle(select[46], selectRClick);
addClickHandle(select[31], selectAAClick); addClickHandle(select[32], selectBBClick); addClickHandle(select[33], selectCCClick); addClickHandle(select[34], selectDDClick); addClickHandle(select[35], selectEEClick); addClickHandle(select[36], selectFFClick); addClickHandle(select[37], selectGGClick); addClickHandle(select[38], selectHHClick);
});