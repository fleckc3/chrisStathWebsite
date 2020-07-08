<template>
    
        <div id="bg-full"></div>
  
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style scoped>
    #bg-full {
       
        width: 100vw;
        height: 100vh;
        background-image: url(https://www.adorama.com/alc/wp-content/uploads/2017/08/shutterstock_415922566.jpg);
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: black;
        background-size: cover;
    }
</style>