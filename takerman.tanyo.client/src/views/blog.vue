<template>
    <div class="section-margin">
        <section class="blog-area section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main_title">
                            <p class="top_text">My blog <span></span></p>
                            <h2>
                                Latest Stories From <br>
                                My blog
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <router-link v-for="(blogItem, key) in blogItems" :key="key" :to="'/blog/' + blogItem.name" class="col-sm-3 col-md-3" style="color: black;">
                        <div style="cursor: pointer;" class="single-blog">
                            <div class="thumb">
                                <img class="img img-fluid img-responsive img-responsive" :src="blogItem.image" :alt="blogItem.name">
                            </div>
                            <div class="short_details">
                                <div class="meta-top d-flex">
                                    <span><i class="ti-calendar"></i> {{ moment(blogItem.created).format('DD MMM YYYY') }}</span>
                                </div>
                                <router-link :to="'/blog/' + blogItem.name">{{ blogItem.title }}</router-link>
                                <div class="text-wrap">
                                    <p>
                                        {{ blogItem.content }}
                                    </p>
                                </div>
                                <router-link :to="'/blog/' + blogItem.name" class="primary_btn2">Learn More</router-link>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="js">
import moment from "moment";

export default {
    data() {
        return {
            blogItems: [],
            moment: moment
        }
    },
    async mounted() {
        this.blogItems = await (await fetch('/Blog/GetBlogposts')).json();
    }
}
</script>

<style scoped></style>