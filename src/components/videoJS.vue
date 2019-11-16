<template>

  <div class="videojs">

    <div class="video-inner-container">

      <video

        id="vid1"

        controls

        preload="auto"width="660"height="900"

        class="video-js vjs-fluid vjs-default-skin vjs-big-play-centered"

        data-setup='{}'

        >

          <source:src=src :type=type>

      </video>

    </div>

  </div>

</template>

<script>
  import 'video.js/dist/video-js.min.css';

  import 'video.js/dist/video.min.js';

  export default {

    name:'VideoJS',

    props: ['src', 'type']

}

</script>