<template>
        <div class="bg-dark">
            <div id="bg-full"></div>
            <div class="d-flex justify-content-center bg-dark">
                <div class="row pt-3">
                    <div class="col">
                        <h6 class="mb-0">Music</h6>
                    </div>
                </div>
            </div>
            <hr class="mx-auto mt-0 bg-light" style="width: 50%;">
            <div class="row m-auto justify-content-between mb-4 bg-black">
                <div class="col-md-3">
                    <div class="card border-0" >
                        <div class="card-header bg-secondary">
                            <iframe
                                src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
                                width="250"
                                height="56"
                                scrolling="no"
                                frameborder="0"
                                style="border:none; overflow:hidden;"
                                allowtransparency="true"
                            ></iframe>
                        </div>
                        <div class="card-body bg-secondary">
                            <spotify-player></spotify-player>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0" >
                        <div class="card-header bg-secondary">
                            <iframe
                                src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
                                width="250"
                                height="56"
                                scrolling="no"
                                frameborder="0"
                                style="border:none; overflow:hidden;"
                                allowtransparency="true"
                            ></iframe>
                        </div>
                        <div class="card-body bg-secondary">
                            <spotify-player></spotify-player>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0" >
                        <div class="card-header bg-secondary">
                            <iframe
                                src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
                                width="250"
                                height="56"
                                scrolling="no"
                                frameborder="0"
                                style="border:none; overflow:hidden;"
                                allowtransparency="true"
                            ></iframe>
                        </div>
                        <div class="card-body bg-secondary">
                            <spotify-player></spotify-player>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-0" >
                        <div class="card-header bg-secondary">
                            <iframe
                                src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
                                width="250"
                                height="56"
                                scrolling="no"
                                frameborder="0"
                                style="border:none; overflow:hidden;"
                                allowtransparency="true"
                            ></iframe>
                        </div>
                        <div class="card-body bg-secondary">
                            <spotify-player></spotify-player>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import SpotifyPlayer from "./SpotifyPlayer";

    export default {
        components: {
            SpotifyPlayer
        },
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

    h6 {
        font-size: 4rem;
        color: white;
    }
</style>
