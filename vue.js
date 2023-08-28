window.onload = async function() {
    const firstQuestion = document.getElementById("firstQuestion");
    const firstQuestion2 = document.getElementById("firstQuestion2");

    // 一定時間後に「・・・」を表示してからメッセージを表示
    await showTemporaryMessage(firstQuestion, "・・・", 1000);
    firstQuestion.style.display = "block"; // メッセージを表示
    await new Promise(resolve => setTimeout(resolve, 1000)); 
    await showTemporaryMessage(firstQuestion2, "・・・", 1000);
    firstQuestion2.style.display = "block"; // メッセージを表示

    setTimeout(() => {
        const box = document.getElementById("box");
        box.style.display = "block";
    }, 1000);
};

async function showTemporaryMessage(element, message, delay) {
    const chatContainer = document.querySelector('.chat');
    const temporaryMessage = document.createElement('div');
    temporaryMessage.className = 'message response';
    temporaryMessage.textContent = message;
    chatContainer.insertBefore(temporaryMessage, element);

    await animateDots(temporaryMessage);
    await new Promise(resolve => setTimeout(resolve, delay)); // 指定の時間待機
    chatContainer.removeChild(temporaryMessage);
}


async function showResponse(choice) {
    const responseDiv = document.getElementById("response");
    const choiceAButton = document.getElementById("choiceA");
    const choiceBButton = document.getElementById("choiceB");
    const responseFinal = document.getElementById('final');
    const chatContainer = document.querySelector('.chat');
    const choiceBox = document.getElementById('box');

    choiceAButton.style.display = 'none';
    choiceBButton.style.display = 'none';
    choiceBox.style.display = 'none';

    /*ユーザーのメッセージをチャットに表示*/
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = (choice === 'A' ? 'ざっくり計算です' : 'しっかり計算です');
    chatContainer.insertBefore(userMessage, responseDiv, responseFinal);

    if (choice === 'A') {
        await new Promise(resolve => setTimeout(resolve, 500));
        const iconDiv = document.createElement('div');
        iconDiv.className = 'message icon';
        chatContainer.insertBefore(iconDiv, responseDiv);


        await new Promise(resolve => setTimeout(resolve, 1000));

        // const iconDiv = document.createElement('div');
        // iconDiv.className = 'icon';
        // responseDiv.appendChild(iconDiv);

        const temporaryMessage = document.createElement('div');
        temporaryMessage.className = 'message response icon';
        temporaryMessage.textContent = '・・・';
        chatContainer.insertBefore(temporaryMessage, responseDiv);

        await animateDots(temporaryMessage);

        await new Promise(resolve => setTimeout(resolve, 1000));
        chatContainer.removeChild(temporaryMessage);

        // await new Promise(resolve => setTimeout(resolve, 000));
        const systemMessage = document.createElement('div');
        systemMessage.className = 'message response';
        systemMessage.textContent = 'かしこまりました';
        chatContainer.insertBefore(systemMessage, responseDiv);

        await new Promise(resolve => setTimeout(resolve, 1000));
        const temporaryMessage2 = document.createElement('div');
        temporaryMessage2.className = 'message response';
        temporaryMessage2.textContent = '・・・';
        chatContainer.insertBefore(temporaryMessage2, responseDiv);

        await animateDots(temporaryMessage2);

       await new Promise(resolve => setTimeout(resolve, 1000));
        chatContainer.removeChild(temporaryMessage2);

        // await new Promise(resolve => setTimeout(resolve, 1000));
        responseDiv.innerHTML = "データをもとに、あなたの相場をざっくり計算します";
        responseDiv.style.display = 'block';
    } else if (choice === 'B') {
        await new Promise(resolve => setTimeout(resolve, 500));
        const iconDiv = document.createElement('div');
        iconDiv.className = 'message icon';
        chatContainer.insertBefore(iconDiv, responseDiv);

        await new Promise(resolve => setTimeout(resolve, 1000));
        const temporaryMessage = document.createElement('div');
        temporaryMessage.className = 'message response icon';
        temporaryMessage.textContent = '・・・';
        chatContainer.insertBefore(temporaryMessage, responseDiv);

        await animateDots(temporaryMessage);

       await new Promise(resolve => setTimeout(resolve, 1000));
        chatContainer.removeChild(temporaryMessage);

        // await new Promise(resolve => setTimeout(resolve, 1500));
        const systemMessage = document.createElement('div');
        systemMessage.className = 'message response';
        systemMessage.textContent = 'かしこまりました';
        chatContainer.insertBefore(systemMessage, responseDiv, responseFinal);

        await new Promise(resolve => setTimeout(resolve, 1000));
        const temporaryMessage2 = document.createElement('div');
        temporaryMessage2.className = 'message response';
        temporaryMessage2.textContent = '・・・';
        chatContainer.insertBefore(temporaryMessage2, responseDiv);

        await animateDots(temporaryMessage2);

       await new Promise(resolve => setTimeout(resolve, 1000));
        chatContainer.removeChild(temporaryMessage2);

        // await new Promise(resolve => setTimeout(resolve, 1000));
        const systemMessage2 = document.createElement('div');
        systemMessage2.className = 'message response';
        systemMessage2.textContent = '一戸建てお風呂のリフォーム相場は';
        chatContainer.insertBefore(systemMessage2, responseDiv, responseFinal);

        await new Promise(resolve => setTimeout(resolve, 1500));
        const imageDiv = document.getElementById("image");
        const image = document.createElement('img');
        image.src = 'images/img01.png';
        imageDiv.appendChild(image);

        await new Promise(resolve => setTimeout(resolve, 1000));
        const imageDiv2 = document.getElementById("image2");
        const image2 = document.createElement('img');
        image2.src = 'images/img02.png';
        imageDiv2.appendChild(image2);

        await new Promise(resolve => setTimeout(resolve, 500));
        const imageDiv3 = document.getElementById("image3");
        const image3 = document.createElement('img');
        image3.src = 'images/img03.png';
        imageDiv3.appendChild(image3);

        await new Promise(resolve => setTimeout(resolve, 1000));
        const imageDiv4 = document.getElementById("image4");
        const image4 = document.createElement('img');
        image4.src = 'images/img04.png';
        imageDiv4.appendChild(image4);

        await new Promise(resolve => setTimeout(resolve, 500));
        const iconDiv2 = document.createElement('div');
        iconDiv2.className = 'message icon';
        chatContainer.insertBefore(iconDiv2, responseFinal);

        await new Promise(resolve => setTimeout(resolve, 1000));
        const temporaryMessage3 = document.createElement('div');
        temporaryMessage3.className = 'message response';
        temporaryMessage3.textContent = '・・・';
        chatContainer.insertBefore(temporaryMessage3, responseFinal);

        await animateDots(temporaryMessage3);

       await new Promise(resolve => setTimeout(resolve, 1000));
        chatContainer.removeChild(temporaryMessage3);

        // await new Promise(resolve => setTimeout(resolve, 2000));
        responseFinal.innerHTML = "あなたの費用を、データをもとにしっかり計算します";
        responseFinal.style.display = 'block';
    }
}

async function animateDots(element) {
    const dots = element.textContent.split(""); // 点を一文字ずつに分割
    element.textContent = ""; // 要素の内容をクリア

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



