import { defineStore } from "pinia";

export const useItemStore = defineStore('itemStore', {
    state: () => ({
        items: [
            {id: 1, name: 'button1', photo: 'button1.svg'},
            {id: 2, name: 'button2', photo: 'button2.svg'},
            {id: 3, name: 'button3', photo: 'button3.svg'},
            {id: 4, name: 'button4', photo: 'button4.svg'},
            {id: 5, name: 'button5', photo: 'button5.svg'},
            {id: 6, name: 'button6', photo: 'button6.svg'},
        ]
    })
})