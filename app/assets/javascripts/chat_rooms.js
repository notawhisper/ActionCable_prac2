function postChatMessage() {
    // 下3行以外の処理を行わせないためにある？
    event.preventDefault();
    var element = document.querySelector('input[type="text"]');
    App.chat_room.speak(element.value);
    element.value = '';
}
