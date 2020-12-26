<template>
  <layout id="index">
    <div class="bg">
      <img :src="require('../assets/images/bj.png')" alt="" />
    </div>
    <div class="title">
      <span class="big">Hello</span><span>,804人力资源欢迎您</span>
    </div>
    <div class="user-info">
      <div class="avatar">
        <img :src="UserInfo.userPhoto || require('../assets/images/avatar.png')" alt="" />
      </div>
      <div class="desp">
        <div class="username">{{ UserInfo.userName }}</div>
        <div class="dept">{{UserInfo.deptName }}</div>
      </div>
    </div>
    <div class="notice">
      <van-icon class="bell" color="#fabc3f" name="bell" />
      <span class="text">通知：{{ message }}</span>
    </div>
    <van-grid class="nav" :border="false" :column-num="3">
      <van-grid-item
        :icon="item.menuIco96"
        :text="item.menuName"
        v-for="(item, index) in menuArrInfo"
        :key="index"
        @click="linkto(item.menuUrl)"
      />
    </van-grid>
  </layout>
</template>

<script>
import Layout from "@/components/Layout";
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["UserInfo","message","menuArrInfo"]),
  },
  components: {
    Layout,
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getMenu();
      this.getNameAndDepartmentName();
      this.getNotice();
      console.log(window.location.href)
    },
    //获取某个⼈某个菜单下授权的功能清单
    getMenu() {
      var _this = this;
      var data = {
        params: {
          sid: _this.$route.query.sid,
          parentId: "obj_e12766628c164e9080d7b54b2a85ee27",
        },
      };
      this.$store.dispatch("getMenu", data);
    },
    //获取⼈员姓名和部⻔名称接⼝
    getNameAndDepartmentName() {
      var _this = this;
      var data = {
        params: {
          sid: _this.$route.query.sid,
        },
      };
      this.$store.dispatch("getNameAndDepartmentName", data);
    },
    //获取通知接⼝
    getNotice() {
      var _this = this;
      var data = {
        params: {
          sid: _this.$route.query.sid,
        },
      };
      this.$store.dispatch("getNotice", data);
    },
    linkto(path) {
      window.location.href = path;
    }
  },
};
</script>

<style scoped lang="less">
#index {
  .bg {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    img {
      width: 100%;
    }
  }
  .title {
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding-left: 15px;
    padding-top: 30px;
    .big {
      font-size: 26px;
    }
  }
  .user-info {
    margin-top: 15px;
    padding-left: 15px;
    display: flex;
    flex-direction: row;
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .desp {
      display: flex;
      flex-direction: column;
      color: #fff;
      margin-left: 12px;
      margin-top: 6px;
      .username {
        font-size: 20px;
        font-weight: bold;
      }
      .dept {
        font-size: 14px;
        padding-top: 8px;
      }
    }
  }
  .notice {
    padding-left: 15px;
    margin-top: 15px;
    color: #b3f6ff;
    font-size: 12px;
    .bell {
      font-size: 16px;
      transform: translateY(4px);
    }
    .text {
      padding-left: 6px;
    }
  }

  .nav {
    margin-top: 40px;
  }
}
</style>