<template>
  <layout id="index">
      <div class="bg">
          <img :src="require('../assets/images/bj.png')" alt="">
      </div>
    <div class="title">
      <span class="big">Hello</span><span>,804人力资源欢迎您</span>
    </div>
    <div class="user-info">
      <div class="avatar">
        <img :src="userInfo.avatar" alt="" />
      </div>
      <div class="desp">
        <div class="username">{{ userInfo.username }}</div>
        <div class="dept">{{ userInfo.dept }}</div>
      </div>
    </div>
    <div class="notice">
      <van-icon class="bell" color="#fabc3f" name="bell" />
      <span class="text">通知：{{ notice }}</span>
    </div>
    <van-grid class="nav" :border="false" :column-num="3">
      <van-grid-item
        :icon="item.icon"
        :text="item.name"
        :badge="item.badge != 0 ? item.badge : ''"
        v-for="(item, index) in nav"
        :key="index"
      />
    </van-grid>
  </layout>
</template>

<script>
import Layout from "@/components/Layout";
export default {
  name: "App",
  data() {
    return {
      userInfo: {
        username: "王亮亮",
        dept: "人力资源部",
        avatar: require("../assets/images/avatar.png"),
      },
      notice: "我们正在构建人力资源模块，敬请期待～",
      nav: [
        {
          name: "人员管理",
          icon: require("../assets/images/rygl.png"),
          badge: 0,
        },
        {
          name: "统计分析",
          icon: require("../assets/images/tjfx.png"),
          badge: 0,
        },
        {
          name: "脱密管理",
          icon: require("../assets/images/tmgl.png"),
          badge: 0,
        },
      ],
    };
  },
  components: {
    Layout,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getUserInfo()
    },
    getUserInfo() {
      var _this = this
      var data = {
        sid: _this.$route.query.sid,
        parentId: 'obj_a0bcc6062c324dc797312aa6426b4142',
        com: "",
      }
      console.log(data);
      this.$store.dispatch('getUserInfo',data)
    }
  }
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