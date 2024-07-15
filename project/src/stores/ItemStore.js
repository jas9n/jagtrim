import { defineStore } from "pinia";

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [
            {id: 1, name: 'button1', photo: '@/assets/images/collection/button1.svg'},
            {id: 2, name: 'button2', photo: '@/assets/images/collection/button2.svg'},
            {id: 3, name: 'button3', photo: '@/assets/images/collection/button3.svg'},
            {id: 4, name: 'button4', photo: '@/assets/images/collection/button4.svg'},
            {id: 5, name: 'button5', photo: '@/assets/images/collection/button5.svg'},
            {id: 6, name: 'button6', photo: '@/assets/images/collection/button6.svg'},
        ]
    })
})