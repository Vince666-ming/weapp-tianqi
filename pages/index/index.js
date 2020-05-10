// components/nowWeather/nowWeather.js
Component({
  /**
   * 组件的属性列表
   */
  /**
   * 组件的初始数据
   */
  data: {
    // location: [],
    weather: []
  },

  /**
   * 组件的方法列表
   */
  created: function (options) {
    this.getapi();
    // this.weatherweekday();
  },
  methods: {
    getapi: function () {
      var _this = this;
      // 获取IP地址
      wx.request({
        url: 'https://pv.sohu.com/cityjson?ie=utf-8',
        success: function (e) {
          console.log(e.data);
          var aaa = e.data.split(' ');
          // console.log(aaa)
          var bbb=aaa[4]
          // console.log(bbb)
          var ccc = bbb.replace('"','')
          // console.log(ccc)
          var ddd = ccc.replace('"', '')
          // console.log(ddd)
          var eee = ddd.replace(',', '')
          // console.log(eee)
          _this.weathertoday(eee)
        },
        fail:function(){
          console.log("失败了");
        }
      })
    },
    // 天气api实况天气
    weathertoday: function (ip) {
      var _this = this;
      wx.request({
        url: 'https://www.tianqiapi.com/api/?version=v1&appid=77118166&appsecret=wQ7NdnTF',
        data: {
          'ip': ip
        },
        method: 'GET',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          _this.setData({
            weather: res.data
          });
          console.log(res.data)
        }
      });
    }
  }
})