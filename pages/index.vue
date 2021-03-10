<template>
  <div class="container">
    <div class="chats-layout">
      <messages />
    </div>
    <div class="input-layout">
      <chat-form />
    </div>
  </div>
</template>

<script>
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'
import { db } from '~/plugins/firebase'

export default {
  components: {
    Messages,
    ChatForm
  },
  mounted() {
    // db.collection('channels').doc('aqOEpyCadAordcIKXoCY').get()
    // .then((doc) => {
    //   console.log('doc.id: ', doc.id)
    //   console.log('doc.data(): ', doc.data())
    // })
    // db.collection('channels').get()
    // .then((querySnapshot) => {
    //   querySnapshot.forEach(function(doc) {
    //     console.log(doc.id, " =>" , doc.data())
    //   })
    // })
  }
}
</script>

<style scoped>
.container {
  height: 100%;
}

.chats-layout {
  overflow: scroll;
  height: 90%;
}
</style>
