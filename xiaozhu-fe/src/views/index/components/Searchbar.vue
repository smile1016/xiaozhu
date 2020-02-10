<template>
  <div class="searchbsarContainer">
    <div class="searchIndex">
      <div class="searchItem">
        <span class="iconfont">&#xe613;</span>城市或目的地
      </div>
      <div class="searchItem">
        <span class="iconfont">&#xe604;</span>入住离开日期
      </div>
      <div class="searchBtn">
        搜索小猪
        <span class="iconfont">&#xe600;</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: "iconfont";
  src: url("../../../assets/font/iconfont.eot");
  src: url("../../../assets/font/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("../../../assets/font/iconfont.woff2") format("woff2"),
    url("../../../assets/font/iconfont.woff") format("woff"),
    url("../../../assets/font/iconfont.ttf") format("truetype"),
    url("../../../assets/font/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.searchbsarContainer {
  width: 100%;
  height: 1.48rem;
  position: absolute;
  top: 4.52rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 取消双击选中文字 */
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  .searchIndex {
    font-size: 0.18rem;
    line-height: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .searchItem {
    width: 3.75rem;
    height: 0.6rem;
    background: #fff;
    margin-right: 0.05rem;
    cursor: text;
  }
  .searchBtn {
    width: 1.84rem;
    height: 0.6rem;
    background: #f16b80;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .searchBtn span {
    color: #fff;
  }
  span {
    display: inline-block;
    font-size: 0.18rem;
    margin: 0 0.08rem;
    color: #333;
  }
}
</style>