<template>
  <div class="forms">
    <div class="card p-3">
      <div class="form-group">
        <label for="title">Section Title</label>
        <input type="text" class="form-control" v-model="sectionTitle" />
      </div>

      <div class="icons pt-2">
        <i class="fa fa-plus" @click="showIcons = !showIcons"></i>
        <i class="fa fa-link" v-show="showIcons"></i>
        <i
          class="fa fa-align-left"
          v-show="showIcons"
          @click="addText = !addText"
        ></i>
        <i
          class="fa fa-image"
          v-show="showIcons"
          @click="addImage = !addImage"
        ></i>
        <i class="fa fa-youtube" v-show="showIcons"></i>
        <i
          class="fa fa-file"
          v-show="showIcons"
          @click="addFiles = !addFiles"
        ></i>
        <i class="fa fa-code" v-show="showIcons"></i>
      </div>

      <form class="mt-4" @change="fileUpload = !fileUpload" v-if="addFiles">
        <div class="addFiles text-center" >
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              class="custom-control-input"
              id="customRadio1"
              name="fileType"
            />
            <label class="custom-control-label" for="customRadio1"
              >From Url</label
            >
          </div>
          <div class="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              class="custom-control-input"
              id="customRadio2"
              name="fileType"
            />
            <label class="custom-control-label" for="customRadio2"
              >Upload File</label
            >
          </div>
        </div>

        <div class="fileUpload" v-if="fileUpload">
          <form>
            <div class="form-group">
              <label for="localURL">File URL</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="addCaption">Add caption</label>
              <input type="text" class="form-control" />
            </div>
          </form>
        </div>
      </form>

      <div class="addtext mt-4" v-if="addText">
        <input type="text" class="form-control" />
      </div>

      <div class="addImage mt-4" v-if="addImage">
        <input type="text" class="form-control" v-model="imgUrl" />
        <img :src="imgUrl" alt="image" />
      </div>

      <div class="text-right">
        <button class="addSection btn btn-primary mt-3">
          <router-link tag="a" to="/addModule">Add Module</router-link>
        </button>
      </div>
    </div>
    <div class="card-footer s">
      <div class="createClass">
        <i class="fa fa-chevron-left"></i>
        Create a Class
      </div>

      <div class="moduleClass">
        Add Module Content
        <i class="fa fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      showIcons: false,
      addFiles: false,
      addText: false,
      addImage: false,
      fileUpload: false,
      sectionTitle: "",
      imgUrl: "",
      section: []
    };
  },
  methods: {}
};
</script>

<style scoped>
.icons {
  display: flex;
}

.icons i {
  width: 30px;
  height: 30px;
  margin: 0 5px;
  padding: 20px;
  font-size: 22px;
  border-radius: 50%;
  border: 2px solid black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 400ms;
}

.icons i:hover {
  background: #000;
  color: #f1f1f1;
}

a {
  color: #f1f1f1 !important;
}

a:hover {
  text-decoration: none !important;
}

button {
  background: #08476b !important;
  border: none !important;
}

button:hover {
  background: #033552 !important;
}

.s {
  display: flex;
  justify-content: space-between;
}

.createClass,
.moduleClass {
  cursor: pointer;
}

.form-check {
  padding-left: 0px !important;
  margin-left: 5px !important;
}
</style>
