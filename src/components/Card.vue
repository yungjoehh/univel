<template>
  <div>
    <div class="">
      <div class="card">
        <div class="card-top custom">
          <div class="overlay"></div>
          <img :src="require('../images/food3.jpg')" />
          <span class="product">Product-design</span>
          <h4>User interface Design For Mobile App</h4>
          <div class="buttons">
            <button class="btn btn-info edit">
              <i class="fa fa-pen"></i>
              Edit Class
            </button>
          </div>
        </div>
        <div class="card-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            nobis minimas.
          </p>

          <ul class="list-group">
            <li class="list-item items">
              Total modules
              <span class="number">10</span>
            </li>
            <li class="list-item items">
              Total sessons
              <span class="number">20</span>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <div class="img-container">
            <img :src="require('../images/food1.jpg')" />
          </div>
          <div class="infos">
            <small>created by</small>
            <h4>Oladele benson</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.custom {
  position: relative;
}

img {
  width: 100%;
}

.custom h4 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;

  padding: 20px;
}

.product {
  position: absolute;
  top: 0;
  left: 0;
  background: red;
  padding: 10px 20px;
  color: #fff;
}

.buttons {
  position: absolute;
  padding: 20px;
  left: 0;
  bottom: 0px;
  display: flex;
  /* flex-wrap: wrap; */
  width: 100%;
}

.buttons button {
  background: transparent;
  color: #fff;
  border: 3px solid #fff;
  margin: 0 10px;
  /* width: 0px; */
  padding: 5px 10px 5px 10px;
}

.img-container {
  width: 70px;
  height: 70px;
  margin-right: 20px;
  border-radius: 50%;
  /* border: 1px solid black; */
}

.card-footer {
  display: flex;
  /* justify-content: space-between; */
}

.img-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.items {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}

.items:nth-child(even) {
  border-top: 2px solid#eee;
}
</style>
