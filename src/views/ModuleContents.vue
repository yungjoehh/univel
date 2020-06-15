<template>
  <div class="card p-4">
    <div class="moduleIntroduction">
      <h5 class="moduleIntro">Add Module Introduction</h5>

      <div class="icons pt-2">
        <i class="fa fa-plus" @click="showIcons = !showIcons"></i>
        <i class="fa fa-link" v-show="showIcons"></i>
        <i class="fa fa-align-left" v-show="showIcons" @click="addText"></i>
        <i class="fa fa-image" v-show="showIcons"></i>
        <i class="fa fa-youtube" v-show="showIcons"></i>
        <i class="fa fa-file" v-show="showIcons"></i>
        <i class="fa fa-code" v-show="showIcons"></i>
      </div>

      <div class="formSection"></div>
    </div>
    <div class="moduleIntroduction pt-4">
      <h5 class="moduleIntro">Add Concepts</h5>
      <div class="icons pt-2">
        <i class="fa fa-plus" @click="conceptsIcon = !conceptsIcon"></i>
        <i class="fa fa-link" v-show="conceptsIcon"></i>
        <i class="fa fa-align-left" v-show="conceptsIcon" @click="addText"></i>
        <i class="fa fa-image" v-show="conceptsIcon"></i>
        <i class="fa fa-youtube" v-show="conceptsIcon"></i>
        <i class="fa fa-file" v-show="conceptsIcon"></i>
        <i class="fa fa-code" v-show="conceptsIcon"></i>
      </div>
    </div>
    <div class="moduleIntroduction pt-4">
      <h5 class="moduleIntro">Add Practice</h5>
      <div class="icons pt-2">
        <i class="fa fa-plus" @click="practiceIcons = !practiceIcons"></i>
        <i class="fa fa-link" v-show="practiceIcons"></i>
        <i class="fa fa-align-left" v-show="practiceIcons" @click="addText"></i>
        <i class="fa fa-image" v-show="practiceIcons"></i>
        <i class="fa fa-youtube" v-show="practiceIcons"></i>
        <i class="fa fa-file" v-show="practiceIcons"></i>
        <i class="fa fa-code" v-show="practiceIcons"></i>
      </div>
    </div>
    <div class="moduleIntroduction pt-4">
      <h5 class="moduleIntro">Add Assignments</h5>
      <div class="icons pt-2">
        <i class="fa fa-plus" @click="assignmentsIcons = !assignmentsIcons"></i>
        <i class="fa fa-link" v-show="assignmentsIcons"></i>
        <i
          class="fa fa-align-left"
          v-show="assignmentsIcons"
          @click="addText"
        ></i>
        <i class="fa fa-image" v-show="assignmentsIcons"></i>
        <i class="fa fa-youtube" v-show="assignmentsIcons"></i>
        <i class="fa fa-file" v-show="assignmentsIcons"></i>
        <i class="fa fa-code" v-show="assignmentsIcons"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleContents",
  data: function() {
    return {
      showIcons: false,
      conceptsIcon: false,
      practiceIcons: false,
      assignmentsIcons: false
    };
  },
  methods: {
    addText() {
      const formSection = document.querySelector(".formSection");
      if ([...formSection.children].length >= 1) return;

      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.className = "form-control mt-3";

      formSection.appendChild(textInput);

    }
  }
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
</style>
