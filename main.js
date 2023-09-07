//ロードアニメーション
async function animateDots(element) {
    const dots = element.textContent.split('');
    element.textContent = '';

    for (let i = 0; i < dots.length; i++) {
        const dot = document.createElement('span');
        dot.textContent = dots[i];
        dot.style.animation = `dotsAnimation 1s ${i * 0.6}s infinite`;
        element.appendChild(dot);

        if (i !== dots.length - 1) {
            const spacer = document.createTextNode(' ');
            element.appendChild(spacer);
        }
    }
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
//ディレイ
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function isDelay(ms) {
    await delay(ms);
}
//メイン
document.addEventListener('DOMContentLoaded', async function () {
    const buttonA = document.querySelectorAll('#choiceA');
    const buttonB = document.querySelectorAll('#choiceB');

    // ボタンを非表示
    function hideButtons(buttons) {
        buttons.forEach(button => {
            button.style.display = 'none';
        });
    }
    // ボタンを表示
    function showButtons(buttons) {
        buttons.forEach(button => {
            button.style.display = 'block';
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

    // ローディングメッセージを表示
    async function displayLoadingMessage(message) {
        const chatContainer = document.querySelector('.chat-container');
        const loadingMessage = document.createElement('div');
        loadingMessage.classList.add('message', 'system-message', 'loading');
        loadingMessage.innerHTML = `<div class='load'>${message}</div>`;

        const icon = document.createElement('img');
        icon.src = '/images/icon.png';
        icon.classList.add('icons');

        loadingMessage.appendChild(icon);

        chatContainer.appendChild(loadingMessage);
        await animateDots(loadingMessage.querySelector('.load'));
    }
    //アイコン無しローディングメッセージ
    async function loadingMessageIcon(message) {
        const chatContainer = document.querySelector('.chat-container');
        const loadingMessage = document.createElement('div');
        loadingMessage.classList.add('message', 'system-message', 'loading', 'hide-icon');
        loadingMessage.innerHTML = `<div class='load'>${message}</div>`;

        chatContainer.appendChild(loadingMessage);
        await animateDots(loadingMessage.querySelector('.load'));
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
    async function delayAndHideLoadingMessage(delayTime) {
        await delay(delayTime);
        hideLoadingMessage();
    }

    //セットの関数
    async function displaySetMessage(ms, message, delayTime, systemMessage,) {
        await isDelay(ms);
        displayLoadingMessage(message);
        await delayAndHideLoadingMessage(delayTime);
        if (systemMessage) {
            displaySystemMessage(systemMessage);
        }
    }
    //アイコン無しセットの関数
    async function displayNotIconSetMessage(ms, message, delayTime, systemMessage) {
        await isDelay(ms);
        loadingMessageIcon(message);
        await delayAndHideLoadingMessage(delayTime);
        if (systemMessage) {
            systemIconMessage(systemMessage);
        }
    }

    // 初期非表示のボタンを表示
    hideButtons(buttonA);
    hideButtons(buttonB);

    await displaySetMessage(1000, '・・・', 1000, '2つの方法で計算することができます。');
    await displayNotIconSetMessage(1000, '・・・', 1000, 'どちらがご希望に近いですか？');

    await delay(1000);
    showButtons(buttonA);
    showButtons(buttonB);

    // ボタンAがクリック
    buttonA.forEach(button => {
        button.addEventListener('click', async function () {
            displayUserMessage('ざっくり計算です');
            const btn = document.querySelector('.buttonContainer');
            btn.style.display = 'none';
            await displaySetMessage(1000, '・・・', 1000, 'かしこまりました。');
            await displayNotIconSetMessage(1000, '・・・', 1000, 'データを元に、あなたの相場をざっくり計算します。');
            await displaySetMessage(1000, '・・・', 1000, '希望されるお風呂は、どのような形式ですか？');
            displayButtons([
                { id: 'img05', image: 'images/img05.png', text: 'ユニットバス' },
                { id: 'img06', image: 'images/img06.png', text: 'タイル貼り' },
                { id: 'imgQ', image: 'images/imgQ.png', text: 'わからない' }
            ]);
        });
    });

    // ボタンBがクリック
    buttonB.forEach(button => {
        button.addEventListener('click', async function () {
            displayUserMessage('しっかり計算です')
            const btn = document.querySelector('.buttonContainer');
            btn.style.display = 'none';
            await displaySetMessage(1000, '・・・', 1000, 'かしこまりました。');
            await displayNotIconSetMessage(1000, '・・・', 1000, 'お風呂リフォームの相場は');
            displayImages();
            await displaySetMessage(6000, '・・・', 1000, 'あなたの費用を、データをもとにしっかり計算します。');
            await displayNotIconSetMessage(1000, '・・・', 1000, '希望されるお風呂は、どのような形式ですか？');
            displayButtons([
                { id: 'img05', image: 'images/img05.png', text: 'ユニットバス' },
                { id: 'img06', image: 'images/img06.png', text: 'タイル貼り' },
                { id: 'imgQ', image: 'images/imgQ.png', text: 'わからない' }
            ]);
        });
    });

    //ボタンの中身
    async function displayButtons(buttonData) {
        await delay(1500);
        const chatContainer = document.querySelector('.chat-container');
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('message', 'system-message', 'button-container');

        buttonData.forEach(data => {
            const button = document.createElement('div');
            button.classList.add('button2');
            button.id = data.id;

            const image = document.createElement('img');
            image.src = data.image;
            button.appendChild(image);

            const text = document.createElement('span');
            text.textContent = data.text;
            button.appendChild(text);

            buttonContainer.appendChild(button);
        });
        chatContainer.appendChild(buttonContainer);

        //ボタンクリックイベント
        buttonContainer.addEventListener('click', async function (event) {
            const targetBtn = event.target.closest('.button2');
            const btnId = targetBtn.id;

            const userChoiceMap = {
                'img05': 'ユニットバスです',
                'img06': 'タイル貼りです',
                'imgQ': 'わからないです',
                'img07': '2畳未満です',
                'img08': '2畳以上です',
                'imgQ2': 'わからないです',
                'img09': '広さ重視です',
                'img10': '節水重視です',
                'imgN': 'とくにないです',
                'img11': 'はい',
                'img12': '興味あり',
                'imgN2': 'いいえ',
                'img13': 'はい',
                'img14': '興味あり',
                'imgN3': 'いいえ',
                'img15': 'はい',
                'img16': '興味あり',
                'imgN4': 'いいえ',
                'img17': 'はい',
                'img18': '興味あり',
                'imgN5': 'いいえ',
                'img19': 'はい',
                'img20': '興味あり',
                'imgN6': 'いいえ',
                'img21': 'はい',
                'img22': '興味あり',
                'imgN7': 'いいえ',
                'img23': 'はい',
                'img24': '興味あり',
                'imgN8': 'いいえ',
            };
            const userChoice = userChoiceMap[btnId];
            displayUserMessage(userChoice);
            buttonContainer.style.display = 'none';

            if (btnId === 'img05' || btnId === 'img06' || btnId === 'imgQ') {
                await displaySetMessage(1000, '・・・', 1000, '希望されるお風呂の大きさは、どのくらいですか？');
                displayButtons([
                    { id: 'img07', image: 'images/img07.png', text: '2畳未満' },
                    { id: 'img08', image: 'images/img08.png', text: '2畳以上' },
                    { id: 'imgQ2', image: 'images/imgQ.png', text: 'わからない' }
                ]);
            } else if (btnId === 'img07' || btnId === 'img08' || btnId === 'imgQ2') {
                await displaySetMessage(1000, '・・・', 1000, '浴槽まわりの希望をお伺いします。');
                await displaySetMessage(1000, '・・・', 1000, '湯煎に浸かる頻度が多い場合は、浴槽の形が重要です。');
                await displayNotIconSetMessage(1000, '・・・', 1000, '浴槽の形にこだわりはありますか？');
                displayButtons([
                    { id: 'img09', image: '', text: '広さ重視' },
                    { id: 'img10', image: '', text: '節水重視' },
                    { id: 'imgN', image: '', text: 'とくになし' }
                ]);
            } else if (btnId === 'img09' || btnId === 'img10' || btnId === 'imgN') {
                await displaySetMessage(1000, '・・・', 1000, 'お湯の冷めにくい、保温効果のある浴槽を希望されますか？');
                displayButtons([
                    { id: 'img11', image: '', text: 'はい' },
                    { id: 'img12', image: '', text: '興味あり' },
                    { id: 'imgN2', image: '', text: 'いいえ' }
                ]);
            } else if (btnId === 'img11' || btnId === 'img12' || btnId === 'imgN2') {
                await displaySetMessage(1000, '・・・', 1000, 'リラックス・マッサージ効果のある、バブルバス・ジェットバスをご希望されますか？');
                displayButtons([
                    { id: 'img13', image: '', text: 'はい' },
                    { id: 'img14', image: '', text: '興味あり' },
                    { id: 'imgN3', image: '', text: 'いいえ' }
                ]);
            } else if (btnId === 'img13' || btnId === 'img14' || btnId === 'imgN3') {
                await displaySetMessage(1000, '・・・', 1000, 'お風呂に埋込み型のオーディオを設置すると、音の広がりがよく、また見た目もスッキリします。');
                await displayNotIconSetMessage(1000, '・・・', 1000, 'お風呂にオーディオの設置を希望されますか？');
                displayButtons([
                    { id: 'img15', image: '', text: 'はい' },
                    { id: 'img16', image: '', text: '興味あり' },
                    { id: 'imgN4', image: '', text: 'いいえ' }
                ]);
            } else if (btnId === 'img15' || btnId === 'img16' || btnId === 'imgN4') {
                await displaySetMessage(1000, '・・・', 1000, 'ゆったりお風呂に浸かりながら、最大24インチの大迫力の画面でテレビを楽しむこともできます。');
                await displayNotIconSetMessage(1000, '・・・', 1000, 'お風呂にテレビの設置を希望されますか？。');
                displayButtons([
                    { id: 'img17', image: '', text: 'はい' },
                    { id: 'img18', image: '', text: '興味あり' },
                    { id: 'imgN5', image: '', text: 'いいえ' }
                ]);
            } else if (btnId === 'img17' || btnId === 'img18' || btnId === 'imgN5') {
                await displaySetMessage(1000, '・・・', 1000, '設置する照明にこだわると、利用シーンに合わせて浴室の雰囲気を手軽にかえることができます');
                await displayNotIconSetMessage(1000, '・・・', 1000, '機能的な照明をご希望されますか？');
                displayButtons([
                    { id: 'img19', image: '', text: 'はい' },
                    { id: 'img20', image: '', text: '興味あり' },
                    { id: 'imgN6', image: '', text: 'いいえ' }
                ]);
            } else if (btnId === 'img19' || btnId === 'img20' || btnId === 'imgN6') {
                await displaySetMessage(1000, '・・・', 1000, '湯船に浸かる人が複数いたり、利用時間がバラバラな場合は、追い焚き機能が便利です。');
                await displayNotIconSetMessage(1000, '・・・', 1000, '追い焚き機能をご希望されますか？');
                displayButtons([
                    { id: 'img21', image: '', text: 'はい' },
                    { id: 'img22', image: '', text: '興味あり' },
                    { id: 'imgN7', image: '', text: 'いいえ' }
                ]);
            } else if (btnId === 'img21' || btnId === 'img22' || btnId === 'imgN7') {
                await displaySetMessage(1000, '・・・', 1000, 'リビングの家族を呼び出したり会話ができるインターフォンの設置を希望しますか？');
                displayButtons([
                    { id: 'img23', image: '', text: 'はい' },
                    { id: 'img24', image: '', text: '興味あり' },
                    { id: 'imgN8', image: '', text: 'いいえ' }
                ]);
            } else if (btnId === 'img23' || btnId === 'img24' || btnId === 'imgN8') {
                await displaySetMessage(1000, '・・・', 1000, '物件の場所はどちらになりますか？');
                displayButtons2([
                    { id: 't1', text: '北海道・東北' },
                    { id: 't2', text: '関東' },
                    { id: 't3', text: '北陸・甲信越' },
                    { id: 't4', text: '東海' },
                    { id: 't5', text: '関西' },
                    { id: 't6', text: '中国' },
                    { id: 't7', text: '四国' },
                    { id: 't8', text: '九州・沖縄' },
                ]);
            }
        });
    }

    //地方選択後の処理
    async function displayButtons2(buttonData2) {
        await delay(1000);

        const buttonTextMapping = {
            't1': [
                { id: 't9', text: '北海道' },
                { id: 't10', text: '青森県' },
                { id: 't11', text: '岩手県' },
                { id: 't12', text: '宮城県' },
                { id: 't13', text: '秋田県' },
                { id: 't14', text: '山形県' },
                { id: 't15', text: '福島県' }
            ],
            't2': [
                { id: 't16', text: '茨城県' },
                { id: 't17', text: '栃木県' },
                { id: 't18', text: '群馬県' },
                { id: 't19', text: '埼玉県' },
                { id: 't20', text: '千葉県' },
                { id: 't21', text: '東京都' },
                { id: 't22', text: '神奈川県' }
            ],
            't3': [
                { id: 't30', text: '富山県' },
                { id: 't31', text: '石川県' },
                { id: 't32', text: '福井県' },
                { id: 't33', text: '山梨県' },
                { id: 't34', text: '長野県' },
                { id: 't35', text: '新潟県' }
            ],
            't4': [
                { id: 't36', text: '静岡県' },
                { id: 't37', text: '愛知県' },
                { id: 't38', text: '三重県' },
                { id: 't39', text: '岐阜県' }
            ],
            't5': [
                { id: 't40', text: '大阪府' },
                { id: 't41', text: '京都府' },
                { id: 't42', text: '兵庫県' },
                { id: 't43', text: '奈良県' },
                { id: 't44', text: '滋賀県' },
                { id: 't45', text: '和歌山県' }
            ],
            't6': [
                { id: 't46', text: '鳥取県' },
                { id: 't47', text: '島根県' },
                { id: 't48', text: '岡山県' },
                { id: 't49', text: '広島県' },
                { id: 't50', text: '山口県' }
            ],
            't7': [
                { id: 't51', text: '香川県' },
                { id: 't52', text: '徳島県' },
                { id: 't53', text: '高知県' },
                { id: 't54', text: '愛媛県' }
            ],
            't8': [
                { id: 't55', text: '福岡県' },
                { id: 't56', text: '佐賀県' },
                { id: 't57', text: '大分県' },
                { id: 't58', text: '熊本県' },
                { id: 't59', text: '宮崎県' },
                { id: 't60', text: '鹿児島県' },
                { id: 't61', text: '沖縄県' }
            ],
        };

        const chatContainer = document.querySelector('.chat-container');
        const buttonContainer2 = document.createElement('div');
        buttonContainer2.classList.add('message', 'system-message', 'button-container2');

        buttonData2.forEach(data => {
            const button3 = document.createElement('div');
            button3.classList.add('button3');
            button3.id = data.id;

            const text = document.createElement('span');
            text.textContent = data.text;
            button3.appendChild(text);

            buttonContainer2.appendChild(button3);
        });

        chatContainer.appendChild(buttonContainer2);

        buttonContainer2.addEventListener('click', async function (event) {
            const targetBtn = event.target.closest('.button3');
            const btnId = targetBtn.id;

            if (btnId in buttonTextMapping) {
                displayButtons2(buttonTextMapping[btnId]);
            } else {
                const messageText = getDisplayText(btnId);
                displayUserMessage(messageText);
            }

            buttonContainer2.style.display = 'none';
        });
    }
    function getDisplayText(btnId) {
        const textMapping = {
            't9': '北海道です',
            't10': '青森県です',
            't11': '岩手県です',
            't12': '宮城県です',
            't13': '秋田県です',
            't14': '山形県です',
            't15': '福島県です',
            't16': '茨城県です',
            't17': '栃木県です',
            't18': '群馬県です',
            't19': '埼玉県です',
            't20': '千葉県です',
            't21': '東京都です',
            't22': '神奈川県です',
            't30': '富山県です',
            't31': '石川県です',
            't32': '福井県です',
            't33': '山梨県です',
            't34': '長野県です',
            't35': '新潟県です',
            't36': '静岡県です',
            't37': '愛知県です',
            't38': '三重県です',
            't39': '岐阜県です',
            't40': '大阪府です',
            't41': '京都府です',
            't42': '兵庫県です',
            't43': '奈良県です',
            't44': '滋賀県です',
            't45': '和歌山県です',
            't46': '鳥取県です',
            't47': '島根県です',
            't48': '岡山県です',
            't49': '広島県です',
            't50': '山口県です',
            't51': '香川県です',
            't52': '徳島県です',
            't53': '高知県です',
            't54': '愛媛県です',
            't55': '福岡県です',
            't56': '佐賀県です',
            't57': '大分県です',
            't58': '熊本県です',
            't59': '宮崎県です',
            't60': '鹿児島県です',
            't61': '沖縄県です'
        };

        return textMapping[btnId] || '';
    }
});
