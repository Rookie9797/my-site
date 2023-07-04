import Mock from "mockjs";
import img from "@/assets/avatar.webp";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    // avatar: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    avatar: img,
    siteTitle: "我的个人空间",
    github: "https://github.com/Rookie9797/my-site",
    qq: "1902144933",
    qqQrCode: "",
    weixin: "Alienes_",
    weixinQrCode: "",
    mail: "1902144933@qq.com",
    icp: "备案号留空",
    githubName: "Rookie9797",
    favicon: img,
  },
});
