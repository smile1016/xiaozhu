<template>
  <div class="roomsShowContainer">
    <div class="index_t">
      <h1>别住酒店，住我家</h1>
      <span>海内存知己，天涯若比邻</span>
    </div>
    <div class="content_v">
        <ul class="rooms_show_ul">
          <li>
            <img src="" alt="">
            <div>
              <img src="" alt="">
              <span></span>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import {getRoomShowList} from '../../../../api/roomShow'
export default {
    data(){
        return {
            roomShowList:[]
        }
    },
    async created(){
        let rs = await getRoomShowList()
        
        this.roomShowList = rs.data;
        console.log(this.roomShowList)
    }
};
</script>
<style lang="scss" scoped>
.roomsShowContainer {
  .index_t {
      height: 1.7rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    h1 {
      font-size: 0.44rem;
      line-height: 0.44rem;
      color: #445566;
      margin-bottom: 0.15rem;
    }
    span{
        color: #959ea7;
        font-size: 0.18rem;
        display: block;
    }
  }
}
</style>