<template>
  <div id="app">
    <app-nav></app-nav>
    <div class="container mt-5">
      <div class="jumbotron">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi
          eum, architecto eos veritatis excepturi pariatur sint officiis ullam
          iste perspiciatis id sed repudiandae quis iusto tenetur ratione. Iure,
          praesentium!
        </p>
        <br />
        <router-link to="/form" class="btn btn-success"
          >Create Class</router-link
        >
      </div>
      <div class="row">
        <app-card class="col-xs-12 col-lg-4"></app-card>
        <div class="col-xs-12 col-lg-8">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Card from "./components/Card";
// import Form from "./components/Form";

export default {
  name: "App",
  components: {
    "app-nav": Nav,
    "app-card": Card
    // "app-form": Form
  }
};
</script>

<style>
body {
  background: #f1f1f1;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

/* .fade-leave {
  
} */

.fade-leave-active {
  transition: opacity cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: 1;
}
</style>
