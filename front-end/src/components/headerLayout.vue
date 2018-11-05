<template>
  <div class="banner">
      <div class="banner-content">
          <img src="../assets/img/rule-icon.png">
          <div>活动规则</div>
      </div>
      <div class="navigation">
       <router-link to="/" class="navigation-one">爱之星</router-link>
        <router-link to="" class="navigation-two">义之星</router-link>
        <router-link to="" class="navigation-two">融之星</router-link>
        <router-link to="" class="navigation-two">知之星</router-link>
        <router-link to="" class="navigation-two">行之星</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'headerLayout',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner {
  background: url(../assets/img/banner.png) no-repeat no-repeat;
  width: 750px;
  height: 598px;
  color: #C1CFFF;
  font-size: 24px;
}
.banner-content {
  display: flex;
  padding: 26px 32px 0 594px;
  width: 127px;
  justify-content: space-between;
}
.navigation {
  display: flex;
  margin-top:  440px;
  height: 100px;
  background: #3A5ED6; 
  align-items: center;
  /* justify-content: center; */
}
.navigation-one {
  background: url(../assets/img/tab-selected.png) no-repeat no-repeat;
  padding: 34px 0 34px 34px;
  color: #FFFFFF;
  text-decoration: none;
  width: 114px;
  text-align: left;

}
.navigation-two {
  padding: 34px 0 34px 34px;
  color: #FFFFFF;
  text-decoration: none;
  width: 114px;
  text-align: left;
  border-right: 2px solid #4c6ede;
}
</style>
