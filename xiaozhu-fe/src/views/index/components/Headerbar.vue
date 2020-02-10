<template>
  <div class="headerContainer">
    <div class="logo"></div>
    <span class="slogan"></span>
    <ul>
      <li>注册·</li>
      <li>登录·</li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">
            短租指南
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>房客指南</el-dropdown-item>
            <el-dropdown-item>房东指南</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">
            手机小猪
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <img src="http://www.xiaozhu.com/images/code_pic.png" alt />
            </el-dropdown-item>
            <el-dropdown-item>了解更多</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown>
          <span class="el-dropdown-link">
            去小程序领950元礼券
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <img class="qrcode" src="http://www.xiaozhu.com/images/code_pic.png" alt />
            </el-dropdown-item>
            <el-dropdown-item>微信扫码去领券</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li class="submit">免费发布房间</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.headerContainer {
  position: absolute;
  z-index: 10;
  height: 0.64rem;
  width: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  padding: 0.3rem 0 0 0;
  .logo,
  .slogan {
    background: url("../../../assets/img/icon_head.png");
  }
  .logo {
    width: 1.28rem;
    height: 0.6rem;
    margin-left: 0.4rem;
  }
  .slogan {
    /* display: block; */
    width: 1.29rem;
    height: 0.17rem;
    margin-left: 0.35rem;
    background-position: 0 -440px;
  }
  ul {
    flex: 1;
    margin-left: 4rem;
    li {
      font-size: 0.14rem;
      float: left;
      padding: 0 0.2rem;
      color: #fff;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    li:hover {
      color: #f16b80;
      cursor: pointer;
    }
    .submit{
        width:1.18rem;
        line-height: 0.44rem;
        background: #1aaa88;
        font-size: 0.18rem;
        margin-top:-0.15rem; 
        text-align: center;
    }
    .submit:hover{
        color: #fff;
    }
  }
  /* elementUI */
  
  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-dropdown-link:hover {
    color: #f16b80;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>