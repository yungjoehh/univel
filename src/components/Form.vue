<template>
  <div class="forms">
    <div class="card p-3">
      <form @submit.prevent="addClass">
        <div class="form-group">
          <label for="section-title">Section title</label>
          <input
            type="text"
            class="form-control sec-title"
            v-model="sectionTitle"
          />
        </div>

        <div class="form-group">
          <label for="section-introduction">Section introduction</label>

          <div class="links mt-3">
            <i class="fa fa-plus link" @click="showIcons = !showIcons"></i>
            <i class="fa fa-link link" v-show="showIcons"></i>
            <i
              class="fa fa-align-left second link"
              v-show="showIcons"
              @click="addText"
            ></i>
            <i class="fa fa-image link" v-show="showIcons"></i>
            <i class="fa fa-youtube link" v-show="showIcons"></i>
            <i class="fa fa-code link" v-show="showIcons"></i>
            <i class="fa fa-file link" v-show="showIcons"></i>
          </div>
          <div class="formSection form-group mt-4"></div>
          <div class="text-right">
            <button class="addSection btn btn-primary mt-3">
              <router-link tag="a" to="/addModule">Add Module</router-link>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer s">
      <div class="createClass">
        <i class="fa fa-chevron-left"></i>
        Create a Class
      </div>
      <div v-if="addModule" class="addModule">
        <a href="./addSection.html">Add Module</a>
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>

    <!-- <button @click="addModule = !addModule">Hide</button> -->
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      sectionTitle: "",
      addModule: false,
      showIcons: false
    };
  },
  methods: {
    addText: () => {
      const formSection = document.querySelector(".formSection");
      const input = document.createElement("input");
      input.type = "text";
      input.className = "form-control mt-4";

      formSection.appendChild(input);
      // console.log(formSection);
    }
  }
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

.links {
  display: flex;
  margin-top: 10px;
}
.link {
  /* background: #000; */
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  /* color: rgb(146, 140, 140); */
  margin-right: 5px;
  /* opacity: 0; */
  cursor: pointer;
  /* transition: all .8s; */
  transition: 0.1s;
}

.link:hover {
  background: #000;
  color: white;
}

.opaque {
  opacity: 1;
}

.link:first-child {
  opacity: 1;
}

/* .first {
  transition-delay: 0.5s;
}
.second {
  transition-delay: 0.6s;
}
.third {
  transition-delay: 0.7s;
}
.fourth {
  transition-delay: 0.8s;
}

.fifth {
  transition-delay: 0.9s;
}

.sixth {
  transition-delay: 1s;
} */

.createClass,
.addModule {
  cursor: pointer;
}
</style>
