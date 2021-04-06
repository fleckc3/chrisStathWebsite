<template>
    <div>
        <div id="bg-full" class="position-fixed"></div>
        <div class="container-fluid">
            <div class="row mt-5"></div>
            <div class="row social-mobile">
                <div class="container">
                    <div class="row mt-1">
                        <div class="col d-flex flex-wrap justify-content-center mt-5">
                            <a href="https://www.instagram.com/chrisstathmusic/">
                                <button class="btn btn-light mr-1"><i class="fab fa-2x fa-instagram pt-1">
                                    </i>
                                </button>
                            </a>

                            <a href="https://open.spotify.com/artist/6RZiysr25NvqsC76k0jcdn">
                                <button class="btn btn-light btn mr-1">
                                    <i class="fab fa-2x fa-spotify pt-1"></i>
                                </button>
                            </a>

                            <a href="https://music.apple.com/us/artist/chris-stath/1493357107?itsct=music_box&itscg=30200&ls=1&app=music">
                                <button class="btn btn-light mr-1">
                                    <i class="fab fa-2x fa-apple pl-1 pr-1 pt-1"></i>
                                </button>
                            </a>

                            <a href="https://www.youtube.com/channel/UCSphXoxsxYp4uK37rVDl6lA">
                                <button class="btn btn-light mr-1">
                                    <i class="fab fa-2x fa-youtube pt-1"></i>
                                </button>
                            </a>

                            <a href="https://soundcloud.com/chrisstathmusic">
                                <button class="btn btn-light mr-1">
                                    <i class="fab fa-2x fa-soundcloud pt-1"></i>
                                </button>
                            </a>

                            <a href="https://www.facebook.com/ChrisStathMusic">
                                <button class="btn btn-light mr-1">
                                    <i class="fab fa-2x fa-facebook pt-1"></i>
                                </button>
                            </a>
                        </div>

                    </div>
                    <div class="row mt-1">
                        <div class="col d-flex justify-content-center">
                            <button class="btn btn-primary btn-lg" v-on:click="showEpk">Press Kit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-lg-5">
                <div class="col-sm-4 hide mr-auto mt-3 mb-1">
                    <div class="card rounded border-light trans" >
                        <div class="card-header border-0 trans">
                            <div class="col-sm-12">
                                     <iframe
                                        src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
                                        width="250"
                                        height="56"
                                        frameborder="0"
                                        style="border:none; overflow:hidden;"
                                        allowtransparency="false"
                                    ></iframe>
                            </div>
                        </div>
                        <div class="rounded-bottom card-body">
                            <div class="col-sm-12">
                                <spotify-player></spotify-player>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="col-sm-6 mr-auto mb-1 spotify-mobile">
                    <div class="card rounded border-light trans mt-1" >
                        <div class="card-header border-0 trans">
                            <div class="col-sm-12">
                                     <iframe
                                        src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
                                        width="250"
                                        height="56"
                                        frameborder="0"
                                        style="border:none; overflow:hidden;"
                                        allowtransparency="false"
                                    ></iframe>
                            </div>
                        </div>
                        <div class="rounded-bottom card-body">
                            <div class="col-sm-12">
                                <spotify-player></spotify-player>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 my-auto hide">
                    <div class="container mt-lg-5">
                        <div class="row mt-lg-5">
                            <div class="col d-flex flex-wrap justify-content-center mt-lg-5">
                                <a href="https://www.instagram.com/chrisstathmusic/">
                                    <button class="btn btn-light mr-1 mt-1"><i class="fab fa-2x fa-instagram pt-1">
                                        </i>
                                    </button>
                                </a>

                                <a href="https://open.spotify.com/artist/6RZiysr25NvqsC76k0jcdn">
                                    <button class="btn btn-light btn mr-1 mt-1">
                                        <i class="fab fa-2x fa-spotify pt-1"></i>
                                    </button>
                                </a>

                                <a href="https://music.apple.com/us/artist/chris-stath/1493357107?itsct=music_box&itscg=30200&ls=1&app=music">
                                    <button class="btn btn-light mr-1 mt-1">
                                        <i class="fab fa-2x fa-apple pl-1 pr-1 pt-1"></i>
                                    </button>
                                </a>

                                <a href="https://www.youtube.com/channel/UCSphXoxsxYp4uK37rVDl6lA">
                                    <button class="btn btn-light mr-1 mt-1">
                                        <i class="fab fa-2x fa-youtube pt-1"></i>
                                    </button>
                                </a>

                                <a href="https://soundcloud.com/chrisstathmusic">
                                    <button class="btn btn-light mr-1 mt-1">
                                        <i class="fab fa-2x fa-soundcloud pt-1"></i>
                                    </button>
                                </a>

                                <a href="https://www.facebook.com/ChrisStathMusic">
                                    <button class="btn btn-light mr-1 mt-1">
                                        <i class="fab fa-2x fa-facebook pt-1"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col d-flex justify-content-center">
                                <button class="btn btn-outline-light btn-lg" v-on:click="showEpk">Press Kit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 hide mt-3 pl-0">
                    <div class="card rounded border-light trans">
                        <div class="card-header border-0 trans">
                            <div class="col-sm-12">
                                <img src="/img/wof_v1-01.svg" class="scaled" alt="World On Fire">
                            </div>
                        </div>
                        <div class="card-body rounded-bottom">
                            <div class="col-sm-12">
                                <iframe
                                    width="100%"
                                    height="250"
                                    src="https://www.youtube.com/embed/174rjcy0hEs"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 youtube-mobile mt-1 mb-2">
                    <div class="card rounded border-light trans">
                        <div class="card-header border-0 trans">
                            <div class="col-sm-12">
                                <img src="/img/wof_v1-01.svg" class="scaled" alt="World On Fire">
                            </div>
                        </div>
                        <div class="card-body rounded-bottom">
                            <div class="col-sm-12">
                                <iframe
                                    width="100%"
                                    height="250"
                                    src="https://www.youtube.com/embed/174rjcy0hEs"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
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
    #bg-full {
        width: 100%;
        height: 100vh;
        background-image: url(/img/landing_middle.png);
        background-position: center;
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
    .scaled {
        width: 100%;
        height: 62px;
    }

    @media only screen and (min-width: 769px) {
        .social-mobile {
            display: none;
        }
        .youtube-mobile {
            display: none;
        }
        .spotify-mobile {
            display: none;
        }
    }

    @media only screen and (max-width: 768px) {
        .hide {
            display: none;
        }

        .social-mobile, .spotify-mobile {
            display: block;
        }

        .youtube-mobile {
            display: block;
        }
    }






</style>
