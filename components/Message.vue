<template>
    <div class="chat-container">
        <div class="thumbnail-container">
            <img src="https://pakutaso.cdn.rabify.me/shared/img/thumb/PAK86_kononihonwokae20140713.jpg.webp?d=350"
                alt="">
        </div>
        <div class="message-container">
            <div class="user-name">daiki0205</div>
            <div class="message">今日もいい天気ですね</div>
        </div>
    </div>
</template>
<style scoped>
.chat-container {
    display: flex;
    padding: 8px;
}

.thumbnail-container {
    margin-right: 16px;
}

.thumbnail-container img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 10px;
}

.user-name {
    font-weight: bold;
}
</style>