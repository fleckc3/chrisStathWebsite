<template>
    <div>
        <div id="bg-full" class="position-fixed">
            <div class="container-fluid">
                <div class="row mt-5 pt-2"></div>
                <div class="row mt-5">
                    <div class="mx-auto">
                        <a href="https://www.instagram.com/chrisstathmusic/">
                            <button class="btn btn-outline-light mr-1"><i class="fab fa-2x fa-instagram pt-1">
                                </i>
                            </button>
                        </a>

                        <a href="https://open.spotify.com/artist/6RZiysr25NvqsC76k0jcdn">
                            <button class="btn btn-outline-light mr-1">
                                <i class="fab fa-2x fa-spotify pt-1"></i>
                            </button>
                        </a>

                        <a href="https://music.apple.com/us/artist/chris-stath/1493357107?itsct=music_box&itscg=30200&ls=1&app=music">
                            <button class="btn btn-outline-light mr-1">
                                <i class="fab fa-2x fa-apple pl-1 pr-1 pt-1"></i>
                            </button>
                        </a>

                        <a href="https://www.youtube.com/channel/UCSphXoxsxYp4uK37rVDl6lA">
                            <button class="btn btn-outline-light mr-1">
                                <i class="fab fa-2x fa-youtube pt-1"></i>
                            </button>
                        </a>

                        <a href="https://soundcloud.com/chrisstathmusic">
                            <button class="btn btn-outline-light mr-1">
                                <i class="fab fa-2x fa-soundcloud pt-1"></i>
                            </button>
                        </a>

                        <a href="https://www.facebook.com/ChrisStathMusic">
                            <button class="btn btn-outline-light mr-1">
                                <i class="fab fa-2x fa-facebook pt-1"></i>
                            </button>
                        </a>

                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mx-auto mt-3 mb-1">
                        <div class="card rounded border-light trans" >
                            <div class="card-header border-0 trans">
                                <iframe
                                    src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
                                    width="250"
                                    height="56"
                                    frameborder="0"
                                    style="border:none; overflow:hidden;"
                                    allowtransparency="false"
                                ></iframe>
                            </div>
                            <div class="rounded-bottom card-body">
                                <div class="col-12">
                                    <spotify-player></spotify-player>
                                </div>
                            </div>
                        </div>
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
        width: 100%;
        height: 100vh;
        background-image: url(/img/landing-01.png);
        background-position: center 66px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: black;
        background-size: cover;
    }

    h6 {
        font-size: 4rem;
        color: white;
    }

    div.trans {
        background: rgba(80, 77, 77, 0.4);
    }


</style>
