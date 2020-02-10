<template>
  <div class="carouselContainer">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.img" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { getImglist } from "../../../../api/carousel";

export default {
  data() {
    return {
      imgList: []
    };
  },
  async created() {
    let rs = await getImglist();
    this.imgList = rs.data;
  }
};
</script>
<style lang="scss" scoped>
  .carouselContainer{
    position: absolute;
    width: 100%;
    height: 6rem;
    .el-carousel--horizontal{
      height: 6rem;
      width: 100%;
      .el-carousel__container{
        height: 6rem;
        width: 100%;
        .el-carousel__item{
          height: 6rem;
          width: 100%;
        }
      }
    }
  }
</style>
