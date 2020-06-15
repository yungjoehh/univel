<template>
  <div class="forms">
    <div class="card p-3">
      <p v-if="isValid" class="alert alert-danger">
        Module title and introduction cannot be empty
      </p>

      <form @submit.prevent="addModules" @keydown.enter="addModules">
        <div class="form-group">
          <label for="section-title">Module one(title)</label>
          <input type="text" class="form-control" v-model="moduleTitle" />
        </div>

        <div class="form-group">
          <label for="section-introduction">Module introduction</label>
          <textarea class="form-control" v-model="introduction"></textarea>

          <div class="text-right">
            <button class="btn btn-primary mt-3" @click="addModules">
              Add Module
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer s">
      <div class="createClass" @click="back">
        <i class="fa fa-chevron-left"></i>
        Create a Class
      </div>

      <div class="moduleClass" @click="go">
        Add Module Content
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddModule",
  data: function() {
    return {
      moduleTitle: "",
      introduction: "",
      modules: [],
      isValid: false
    };
  },
  methods: {
    addModules() {
      if (this.moduleTitle == "" || this.introduction == "") {
        this.isValid = true;
      } else {
        this.isValid = false;
        this.modules.push({
          title: this.moduleTitle,
          introduction: this.introduction
        });
        console.log(this.modules);
      }
    },
    go() {
      this.$router.push('/moduleContents');
    },
    back() {
      this.$router.push('/form');
    }
  }
};
</script>

<style scoped>
.s {
  display: flex;
  justify-content: space-between;
}

textarea {
  height: 200px;
  resize: none;
}

.s {
  display: flex;
  justify-content: space-between;
}

.moduleClass,
.createClass {
  cursor: pointer;
}
</style>
