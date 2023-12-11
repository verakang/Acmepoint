<script setup>
import { ref } from 'vue'

let id = 0

const carList = ref([])

let data = JSON.parse(sessionStorage.getItem('data')) || [];
carList.value = data

const newList = ref('')

const isAllDone = ref(false)



function addClass(v){
  if( v == 0) {
    return 'input-normal'
  }else if( v == 1){
    return 'input-error'
  }else if( v >= 2){
    return 'input-success'
  }
}

function addList() {
  if(!newList.value.length) {
    return
  }
  if(newList.value.length < 2) {
    newList.value = ''
    return
  }
  if(newList.value.length >= 2){
    carList.value.push({ id: id++, buyItem: newList.value, done: false })
    sessionStorage.setItem('data', JSON.stringify(carList.value));
    newList.value = ''
  }
}

function setList() {
  sessionStorage.setItem('data', JSON.stringify(carList.value));
}

function toggleStatus() {
  isAllDone.value = !isAllDone.value
  if (isAllDone.value === true){
    carList.value.forEach( item => {
      item.done = true
      setList()
    })
  }else {
    carList.value.forEach( item => {
      item.done = false
      setList()
    })
  }
}

function checkList() {
  setList()
}

function removeAll() {
  carList.value = []
  sessionStorage.removeItem("data")
}

function removeList(item) {
  carList.value = carList.value.filter((list) => list !== item )
  setList()
}

</script>

<template>
  <h1 class="text-center my-8">購物車清單</h1>
  <v-card 
    max-width="500"
    class="py-8 px-5 mx-auto"
    >
    <div class="mb-5 d-flex flex-row justify-space-between">
      <input v-model.trim="newList" class="w-100 me-3 ps-2" :class="addClass(newList.length)" @keyup.enter="addList" placeholder="請輸入購物清單">
      <v-btn size="small" class="mt-2" @click="addList">新增</v-btn>
    </div>
    <div v-if="carList.length">
      <ul class="d-flex flex-row flex-row-reverse mb-6" style="list-style: none;">
        <li><v-btn size="small" class="ms-3 bg-red" @click="removeAll">全部刪除</v-btn></li>
        <li><v-btn size="small" class="bg-green" @click="toggleStatus">批次勾選</v-btn></li>
      </ul>
    <ul>
      <li v-for="item in carList" :key="item.id" class="d-flex flex-row justify-space-between my-2">
        <label :class="{ 'text-decoration-line-through': item.done }"><input type="checkbox" id="checkbox" class="me-2" v-model="item.done" @change="checkList">{{ item.buyItem }}<span class="ms-2 text-green-lighten-2 text-body-2">{{ item.done ? '已完成' : '未完成' }}</span></label>
        <v-btn size="small" class="ms-3 bg-red-lighten-4" @click="removeList(item)">刪除</v-btn>
      </li>
    </ul>
    </div>
    <div v-else>
      <p class="text-center mb-3">購物車清單為空</p>
    </div>
  </v-card>

</template>

<style scoped>
  .input-normal {
    outline-style: none;
    border: 2px solid #555;
    border-radius: 8px
  }
  .input-error {
    outline-style: none;
    border: 2px solid #d74444;
    border-radius: 8px
  }
  .input-success {
    outline-style: none;
    border: 2px solid rgb(89, 185, 223);
    border-radius: 8px
  }
</Style>
