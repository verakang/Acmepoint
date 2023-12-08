<script setup>

function f1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('f1 finished');
    }, 1000);
  });
}

function f2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('f2 finished');
    }, 1000);
  });
}
function f3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('f3 finished');
    }, 1000);
  });
}

async function goStart() {
  const result1 = await f1()
  console.log(result1);
  const result2 = await f2()
  console.log(result2);
  const result3 = await f3()
  console.log(result3);
}

function runMain() {
  Promise.all([f1(), f2(), f3()])
    .then(results => {
      console.log(results)
      console.log('All async functions have completed successfully !')
    })
    .catch(error => {
      console.error(error);
    });
    
}

</script>

<template>
  <h1 class="text-center my-8">Promise.all</h1>
  <div class="text-center">
    <v-btn @click="goStart" class="mx-2">Go Start!</v-btn>
    <v-btn @click="runMain" class="mx-2">run Main!</v-btn>
  </div>
  
</template>
