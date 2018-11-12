<template>
    <ul class="list-group col-md-4">
        <VideoListItem 
        v-for="video in videos"
        :video="video" 
        :key="video.etag" 
        @videoSelect="onVideoSelect"
        >

        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';
export default {
    name: 'VideoList',
    props: {
        videos: Array
    },
    components: {
        VideoListItem
    },
    methods: {
        onVideoSelect: function (video) {
            this.$emit('videoSelect', video);
        }
    }
};
</script>

<style scoped>

</style>
