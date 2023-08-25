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
        await new Promise(resolve => setTimeout(resolve, 1500));
        const systemMessage = document.createElement('div');
        systemMessage.className = 'message response';
        systemMessage.textContent = 'かしこまりました';
        chatContainer.insertBefore(systemMessage, responseDiv);

        await new Promise(resolve => setTimeout(resolve, 1000));
        responseDiv.innerHTML = "データをもとに、あなたの相場をざっくり計算します";
        responseDiv.style.display = 'block';
    } else if (choice === 'B') {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const systemMessage = document.createElement('div');
        systemMessage.className = 'message response';
        systemMessage.textContent = 'かしこまりました';
        chatContainer.insertBefore(systemMessage, responseDiv, responseFinal);

        await new Promise(resolve => setTimeout(resolve, 1000));
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

        await new Promise(resolve => setTimeout(resolve, 2000));
        responseFinal.innerHTML = "あなたの費用を、データをもとにしっかり計算します";
        responseFinal.style.display = 'block';
    }
}
