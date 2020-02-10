<template>
  <div class="indexContainer">
    <div class="headContainer">
      <Carousel></Carousel>
      <Headerbar></Headerbar>
      <Searchbar></Searchbar>
    </div>
    <div class="dowmload">
      <img src="../../assets/img/download.png" alt />
    </div>
    <RoomsShow></RoomsShow>
  </div>
</template>
<script>
import Carousel from "./components/Carousel";
import Headerbar from "./components/Headerbar";
import Searchbar from "./components/Searchbar";
import RoomsShow from './components/RoomsShow'
export default {
  components: {
    Carousel,
    Headerbar,
    Searchbar,
    RoomsShow
  },
  data() {
    return {};
  },
  async created() {}
};
</script>
<style lang="scss" scoped>
.indexContainer {
  width: 100%;
  height: 100%;
  position: relative;
  .headContainer {
    height: 5.8rem;
    width: 100%;
  }
  .dowmload {
    height: 1.2rem;
    width: 100%;
    text-align: center;
    background:#1aaa88;
  }
}
</style>