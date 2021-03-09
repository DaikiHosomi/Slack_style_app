<template>
    <div class="chat-container">
        <div class="thumbnail-container">
            <img v-bind:src="message.user.thumbnail" />
        </div>
        <div class="message-container">
            <div class="user-name">{{ displayName }}</div>
            <div class="message">{{ message.text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: {
                text: '今日もいい天気ですね',
                user: {
                    thumbnail: 'https://pakutaso.cdn.rabify.me/shared/img/thumb/PAK86_kononihonwokae20140713.jpg.webp?d=350',
                    name: 'note'
                }
            } 
        }
    },
    computed: {
        displayName() {
            return "@" + this.message.user.name
        }
    }
}
</script>
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