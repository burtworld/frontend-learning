<template>
  <div id="container">
    <van-row class="panel-title">加解秘源:</van-row>
    <van-row class="panel-content">
      <van-field v-model="source" rows="5" autosize type="textarea" placeholder="请输入加密或解秘源" />
    </van-row>
    <van-row class="panel-title">
      <van-radio-group v-model="isObj" direction="horizontal">
        <van-radio :name="false">不是对象</van-radio>
        <van-radio :name="true">是对象</van-radio>
      </van-radio-group>
    </van-row>
    <van-row class="panel-title">DES加解密设置</van-row>
    <van-row class="panel-content" gutter="20">
      <van-col span="12">
        <van-field v-model="desKey" center clearable label="DES KEY" placeholder="DES KEY" />
      </van-col>
      <van-col span="12">
        <van-field v-model="desIv" center clearable label="DES IV" placeholder="DES IV" />
      </van-col>
    </van-row>

    <van-row class="panel-title">结果:</van-row>
    <van-row class="panel-content">
      <van-field v-model="result" rows="5" autosize type="textarea" placeholder="请输入加密或解秘源" />
    </van-row>

    <van-row class="panel-title" gutter="20">
      <van-col span="12">
        <van-button type="primary" block @click="encrypt">加密</van-button>
      </van-col>
      <van-col span="12">
        <van-button type="primary" block @click="descrypt">解密</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
// @ is an alias to /src

import { Toast } from "vant";
import { encrypt, decrypt } from "@/utils/paCrypto";
const appCfg = {
  isDev: false,
};
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      appCfg: {
        isDev: false,
      },
      source: "",
      result: "",
      desKey: "",
      desIv: "",
      isObj: false,
      temp: {
        YDBG_IP: appCfg.isDev ? decrypt("b0fdcd044568c27431123f0502fb86ea") : decrypt("b0fdcd044568c27485cd18084f4a4787"),
        YDBG_PORT: "28080",
        YDBG_URL: "http://" + self.YDBG_IP + ":" + self.YDBG_PORT + "/m-sgitg",
        SERVICE_URL: appCfg.isDev
          ? decrypt("62fc59020ca464b6a9f8754dc886d203f507db0cac3498fcd4a9e5032d7647f9")
          : decrypt("62fc59020ca464b6abea03916c38a7997383a7afe959a2ecca75fe4b0672fade"),
        SERVICE_IP: appCfg.isDev ? decrypt("b0fdcd044568c2746d01027675360511") : decrypt("b0fdcd044568c2745a957c123ac13509"),
        SERVICE_PORT: "18010",
      },
    };
  },
  methods: {
    descrypt() {
      if (this.source.length == 0) {
        Toast.fail("请输入加解密源");
        return;
      }

      // this.result = this.isObj ? JSON.parse(decrypt(this.source)) : decrypt(this.source);
      this.result = decrypt(this.source);
    },
    encrypt() {
      if (this.source.length == 0) {
        Toast.fail("请输入加解密源");
        return;
      }
      // console.log(JSON.stringify(this.temp));
      this.result = encrypt(this.source);
      // this.result = encrypt(JSON.stringify(this.temp));
    },
  },
};
</script>
<style lang="less">
#container {
  margin: 15px;
}

.panel-title {
  margin-top: 20px;
}

.panel-content {
  padding: 10px 5px;
  border: 1px solid rgb(126, 124, 126);
}
</style>
