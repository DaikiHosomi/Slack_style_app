<template>
    
        <div class="input-container">
            <textarea v-on:click="login"></textarea>
        </div>
    
</template>
<script>
export default {
    methods: {
        login() {
            window.alert('ログインしろよ')
        }
    }
}
</script>

<style scoped>
.input-layout {
    height: 10%;
}

.input-container {
    padding: 10px;
    height: 100%;
}

textarea {
    width: 100%;
    height: 100%;
}
</style>