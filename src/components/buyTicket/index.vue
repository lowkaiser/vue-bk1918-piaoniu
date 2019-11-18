<template>
  <div class="header-box">
    <div class="header">
      <v-touch tag="span"
      @tap="handleBack()"
      >返回</v-touch>
      <span>直接购票</span>
      <img src="https://static.piaoniu.com/m/static/img/hint.958a721.png" alt />
    </div>
    <div class="center_box">
      <div class="scene">
        <p>选择场次</p>
        <div class="scene-time" >
          <v-touch v-for="(item,index) in ticketTime" :key="index"
          :class="activeTime==index?'active':''"
          tag="p"
            @tap="handleGetTimeData(item.specification)"
          >{{item.specification}}</v-touch>
        </div>
      </div>
      <div class="schedule">
        <p>选择票档</p>
        <div class="schedule_price">
          <v-touch v-for="(item,index) in ticketList" :key="index"
          :class="activePrice==index?'active':''"
          tag="p"
          @tap="handleGetPriceData(item.originPrice,index)"
          >
            <span>{{item.specification}}</span>
          </v-touch>
        </div>
      </div>
    </div>
    <div class="footer_box">
      <div class="count">
        <p>数量</p>
        <div class="count_box">
          <div>
            <v-touch v-for="(item,index) in num " :key="index"
                tag="p"
                @tap="handleGetNum(item)"
                :class="activeNum==index?'active':''"
            >{{item}}</v-touch>
          </div>
        </div>
        <v-touch tag="p"
            :class="activeCon==1?'Continu':''"
            @tap="handleGetCon()"
        >连坐</v-touch>
      </div>
      <div class="price">
        <div class="sum">
          <p>合计:</p>
          <div class="price_sum">
            <p>¥{{countPrice.sPrice}}</p>
            <p>¥{{aPrice}}/张</p>
          </div>
        </div>
        <div>
          <img src="http://static.piaoniu.com/m/static/img/no-set.cac6248.png" alt />
          <p>降价提醒</p>
        </div>
        <div>
          <router-link to="/goodsOrder">
            结算
            <span>(1)</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {detailsData} from "@api/home";
import {mapGetters,mapState} from "vuex";
export default {
  name: "buyTicket",
  data(){
      return{
          ticketList:[],
          ticketTime:[],
          num:[1,2,3,4,5,6],
          activeTime:0,
          activePrice:0,
          activeNum:0,
          activeCon:0,
      }
  },
  computed:{
      ...mapGetters({
          countPrice:"ticket/countPrice"
      }),
        ...mapState({
      aPrice:state=>state.ticket.goodsPrice,
    }),
  },
  methods:{
      handleBack(){
          this.$router.back();
      },
      handleGetTimeData(time){
          console.log(time)
          this.$store.commit("ticket/handleMutationTime",time)
      },
      handleGetPriceData(price,index){
            this.activePrice= index;
            this.$store.commit("ticket/handleMutationPrice",price)
      },
      handleGetNum(index){
          this.activeNum=index-1;
            this.$store.commit("ticket/handleMutationNum",index)
      },
      handleGetCon(){
          if(this.activeNum>=1){
              this.activeCon=1;
          }else{
              this.activeCon=0;
          }
      }
  },
  async created (){
    let name=this.$route.params.path;
      let data =await  detailsData(name);
      this.ticketTime=data[0].events;
      this.ticketList=data[0].ticketCategories;
      this.$store.commit("ticket/handleMutationPrice",this.ticketList[0].originPrice)
      this.$store.commit("ticket/handleMutationTime",this.ticketTime[0].specification)
      console.log(this.ticketList)
      console.log(this.ticketTime)
  }
};
</script>
<style>
.header-box{
    height:100%;
    position:relative;
}
.header{
    position:relative;
    z-index:1;
    display: flex;
    padding:0.15rem;
    justify-content: space-between;
    height:0.44rem;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background-color:#fff;
}
.header img{
    height:0.2rem;
    width:0.2rem;
}

.center_box{
    position: absolute;
    left:0;right:0;top:0;
    bottom: 0;
    padding:0.44rem 0.15rem 0.77rem;
    overflow-y:auto;
}
.scene>p,.schedule>p{
    font-size: 0.15rem;
    font-weight: bold;
    text-align: left;
    padding-top: 0.14rem;
    padding-bottom: 10px;
}
.center_box .scene-time{
    display: flex; 
    justify-content: center; 
    text-align: center; 
    margin-bottom: 10px;
}
.scene-time p{
    font:0.14rem;
    padding:0.12rem 0.1rem;
    border: 1px solid #e6e6e6;
    border-radius: 0.03rem;
   
}
.scene-time p:nth-child(1){
    margin-right:0.1rem;
}
.schedule{
    -height:100%;
}
.schedule_price{
    display: flex;
    flex-wrap: wrap;

}
.schedule_price p{
    border-radius: 0.03rem;
    border: 1px solid #e6e6e6;
    padding: 10px 13px;
    margin-right: 0.07rem;
    margin-bottom: 0.05rem;
    min-width: 0.96rem;
    line-height: 0.18rem;
    text-align: center;
}
 
.footer_box{
    z-index:1;
    background-color:#fff;
}
.count{
    display: flex;
    padding:0 0.15rem;
   
    flex-wrap: nowrap;
    width:100%;
}

.count p{
    width:15%;
    text-align: center;
    line-height: 0.32rem;
    font-size: 0.12rem;

}
.count_box{
    width:70%;
    overflow-x: auto;
}
.count_box div{
    width: 3rem;
    display: flex;
    white-space: nowrap;
    overflow-x:auto;
}
.count_box div p{
    display: flex;
    font-size: 0.14rem;
    width: .4rem;
    height: 0.32rem;
    line-height: 0.32rem;
    border: 1px solid #d4d4d4;
    border-radius: 0.03rem;
   justify-content: center;
   margin-right:0.1rem
}

/* .count p{
    display: flex;
   flex-wrap: nowrap;
} */

.price{
    display: flex;
}
.price>div{
    width:33%;
    height:0.45rem;
    -border:1px solid #ccc;
}

.sum{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0 0.1rem
}
.sum>p{
    font-size: 0.13rem;
}
.sum div p:nth-child(1){
    font-size: 0.2rem;
    color:#ff2661;
}
.sum div p:nth-child(2){
    font-size: 0.12rem;
}
.price div:nth-child(2) img{
    width:0.22rem;
    height:0.22rem;
}
.price_sum p{
    font-size: 0.1rem;
}
.price div:nth-child(1){
    display: flex;
    justify-content:space-between ;
}
.price div:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.price div:nth-child(3){
    display: flex;
    align-items: center;
    justify-content: center;
    background:#ff2661;
}
.price div:nth-child(2) p{
    font-size: 0.1rem;
}
.footer_box{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
}
.scene-time .active{
    border: 1px solid #ff2661;
}
.schedule_price .active{
    border: 1px solid #ff2661;
}
.count_box .active{
    border: 1px solid #ff2661;
}
.count .Continu{
    border: 1px solid #ff2661;
}
</style>