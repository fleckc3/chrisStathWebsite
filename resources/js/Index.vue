<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            
            <router-link class="navbar-brand" :to="{name: 'home'}">Home</router-link>
            <div class="align-content-center">
                <img src="https://i2.wp.com/slingshotartists.com/wp-content/uploads/2020/05/cs_white_logo.png?w=720&ssl=1" alt="">
            </div>
            <router-link class="btn btn-dark nav-buttton" :to="{name: 'second'}">Second</router-link>
            

        </nav>
      
        
        <div><router-view>
        
            </router-view></div>
        
    </div>
</template>

