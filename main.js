window.onload = async function () {
    await initializeChat();
};
function createUserMessage(choice) {
    const userMessage = createMessage('user', choice === 'A' ? 'ざっくり計算です' : 'しっかり計算です');
    return userMessage;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function initializeChat() {
    const firstQuestion = document.getElementById("firstQuestion");
    const firstQuestion2 = document.getElementById("firstQuestion2");

    await showTemporaryMessage(firstQuestion, "・・・", 1000);
    firstQuestion.style.display = "block";
    await delay(1000);

    await showTemporaryMessage(firstQuestion2, "・・・", 1000);
    firstQuestion2.style.display = "block";

    await delay(1000);

    const box = document.getElementById("box");
    box.style.display = "block";
}

async function showTemporaryMessage(element, message, delayTime) {
    const chatContainer = document.querySelector('.chat');
    const temporaryMessage = createMessage('response', message);
    insertBeforeIfExists(temporaryMessage, element);

    await animateDots(temporaryMessage);
    await delay(delayTime);

    removeElementIfExists(temporaryMessage);
}

async function insertImage(element, imageUrl) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            element.appendChild(image);
            resolve();
        };
        image.onerror = () => {
            reject();
        };
        image.src = imageUrl;
    });
}
async function showResponse(choice) {
    const responseDiv = document.getElementById("response");
    const choiceAButton = document.getElementById("choiceA");
    const choiceBButton = document.getElementById("choiceB");
    const responseFinal = document.getElementById('final');
    const choiceBox = document.getElementById('box');

    hideElements(choiceAButton, choiceBButton, choiceBox);

    const userMessage = createUserMessage(choice);
    insertBeforeIfExists(userMessage, responseDiv);

    if (choice === 'A') {
        await delay(500);
        const iconDiv = createMessage('icon');
        insertBeforeIfExists(iconDiv, responseDiv);
        await delay(1000);

        const temporaryMessage = createMessage('response icon', '・・・');
        insertBeforeIfExists(temporaryMessage, responseDiv);
        await animateDots(temporaryMessage);
        await delay(1000);
        removeElementIfExists(temporaryMessage);

        const systemMessage = createMessage('response', 'かしこまりました');
        insertBeforeIfExists(systemMessage, responseDiv);
        await delay(1000);

        const temporaryMessage2 = createMessage('response', '・・・');
        insertBeforeIfExists(temporaryMessage2, responseDiv);
        await animateDots(temporaryMessage2);
        await delay(1000);
        removeElementIfExists(temporaryMessage2);

        responseDiv.innerHTML = "データをもとに、あなたの相場をざっくり計算します";
        responseDiv.style.display = 'block';
    } else if (choice === 'B') {
        await delay(500);
        const iconDiv = createMessage('icon');
        insertBeforeIfExists(iconDiv, responseDiv);
        await delay(1000);

        const temporaryMessage = createMessage('response icon', '・・・');
        insertBeforeIfExists(temporaryMessage, responseDiv);
        await animateDots(temporaryMessage);
        await delay(1000);
        removeElementIfExists(temporaryMessage);

        const systemMessage = createMessage('response', 'かしこまりました');
        insertBeforeIfExists(systemMessage, responseDiv);
        await delay(1000);

        const temporaryMessage2 = createMessage('response', '・・・');
        insertBeforeIfExists(temporaryMessage2, responseDiv);
        await animateDots(temporaryMessage2);
        await delay(1000);
        removeElementIfExists(temporaryMessage2);

        const systemMessage2 = createMessage('response', 'お風呂のリフォーム相場は');
        insertBeforeIfExists(systemMessage2, responseDiv);
        await delay(1500);

        //グラフイメージ
        for (let i = 1; i <= 4; i++) {
        const imageDiv = document.getElementById(`image${i}`);
        await insertImage(imageDiv, `images/img0${i}.png`);
        await delay(1000);
}
        const iconDiv2 = createMessage('icon');
        insertBeforeIfExists(iconDiv2, responseFinal);
        await delay(1000);//

        const temporaryMessage3 = createMessage('response', '・・・');
        insertBeforeIfExists(temporaryMessage3, responseFinal);
        await animateDots(temporaryMessage3);
        await delay(1000);
        removeElementIfExists(temporaryMessage3);

        responseFinal.innerHTML = "あなたの費用を、データをもとにしっかり計算します";
        responseFinal.style.display = 'block';
    }
}
function createMessage(className, content) {
    const message = document.createElement('div');
    message.className = `message ${className}`;
    if (content) {
        message.textContent = content;
    }
    return message;
}

function insertBeforeIfExists(newElement, referenceElement) {
    if (referenceElement.parentNode) {
        referenceElement.parentNode.insertBefore(newElement, referenceElement);
    }
}

function removeElementIfExists(element) {
    if (element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

function hideElements(...elements) {
    elements.forEach(element => {
        element.style.display = 'none';
    });
}

async function animateDots(element) {
    const dots = element.textContent.split("");
    element.textContent = "";//ロードアニメーション

    for (let i = 0; i < dots.length; i++) {
        const dot = document.createElement("span");
        dot.textContent = dots[i];
        dot.style.animation = `dotsAnimation 1s ${i * 0.6}s infinite`;
        element.appendChild(dot);

        if (i !== dots.length - 1) {
            const spacer = document.createTextNode(" ");
            element.appendChild(spacer);
        }
    }
}