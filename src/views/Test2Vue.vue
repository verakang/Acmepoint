<script setup>

function f1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('f1 finished')
      resolve(30);
    }, 1000);
  });
}

function f2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('f2 finished')
      resolve(50);
    }, 2000);
  });
}
function f3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('f3 finished')
      resolve(20);
    }, 3000);
  });
}

async function runMain() {
  try {
    const results = await Promise.all([f1(), f2(), f3()])
    console.log(results)
    console.log('All async functions have completed successfully !')
  } catch(error) {
      console.error(error);
    };
    
}

</script>

<template>
  <h1 class="text-center my-8">Promise.all</h1>
  <div class="text-center">
    <v-btn @click="runMain" class="mx-2">run Main!</v-btn>
  </div>

</template>
