<template>
  <header>
    <!-- logo -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
      <a class="navbar-brand" href="#">Navbar</a>

      <form class="form-inline ml-5 searchForm">
        <input
          class="form-control mr-sm-1 search"
          type="text"
          placeholder="Search Here"
          aria-label="Search"
        />
      </form>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Dashboard
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Courses</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Insights</a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="fa fa-bell"></i>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="profile nav-link">profile</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- searchbar -->
    <!-- menuitems(dashboard, courses) -->
    <!-- notifications -->
    <!-- profile -->
  </header>
</template>

<script>
export default {};
</script>

<style>
nav.navbar {
  padding: 15px;
  width: 100%;
  background: white !important;
}

header {
  background-color: white;
}

.search {
  width: 300px !important;
  background-color: #f1f1f1;
  border: none !important;
}

.edit {
  width: 150px;
}

.search:focus {
  outline: none;
  border: none !important;
}

li.nav-item {
  padding: 10px;
}

li.nav-item:nth-child(3) {
  border-right: 2px solid#f1f1f1;
}
</style>