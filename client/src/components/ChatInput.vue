<template>
    <div>
        <p>Hello!</p>
        <button @click="dbTest">Scrie in BD</button>
        <h2>Messages</h2>
        <ul>
            <li v-for="message in messages" :key="message.timestamp">
                {{ message.text }}
            </li>
        </ul>
    </div>
</template>

<script>
import db from "../../firebase-config/dbConfig.js";
import { onSnapshot, collection, addDoc } from 'firebase/firestore';

export default {
    name: "ChatInput",
    data() {
        return {
            messages: [],
        };
    },
    methods: {
        dbTest: async function() {
            console.log("Test");
            const docRef = await addDoc(collection(db, 'messages'), {
                text: "Ceva",
                timestamp: Date.now(),
            });
            console.log(docRef.id);
        }
    },
    mounted() {
        const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
        this.messages = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        });

        // Unsubscribe on component unmount
        // this.$on("hook:beforeDestroy", unsubscribe);
    }
};
</script>