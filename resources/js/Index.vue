<template>
    <div>
        <nav class="navbar navbar-header fixed-top navbar-expand-md navbar-dark justify-content-center" style="background-color: #000000">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <div >
                        <Slide>
                            <a id="home" href="#">
                                <span>Home</span>
                            </a>
                            <a id="epk" v-on:click="showEpk" href="#">
                                <span>Electronic Press Kit</span>
                            </a>
                        </Slide>
                    </div>
                </li>
            </ul>
            <div class="navbar-brand mx-auto">
                <img class="" src="https://i2.wp.com/slingshotartists.com/wp-content/uploads/2020/05/cs_white_logo.png?w=390&ssl=1" alt="">
            </div>
        </nav>
        <div><router-view></router-view></div>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu';

export default {
    components: {
        Slide
    },
    methods: {
        showEpk() {
            var pdf = '../assets/Chris_Stath_EPK_2.pdf';
            window.open(pdf);
        }
    },
}
</script>

<style scoped>

</style>

