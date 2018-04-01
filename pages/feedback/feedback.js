// pages/feedback/feedback.js
Page({
  data: {
    showTopTips: false,

    radioItems: [
      { name: '偶尔', value: '0', checked:true},
      { name: '经常', value: '1'},
      { name: '每次', value: '2'}
    ],
    hospitals:[
      '南通第一人民医院',
      '中国科学技术大学附属第一医院',
      '苏州大学附属第一医院',
      '苏州科技城医院'
    ],
    hospitalIndex:0,
    submitResult:'',
    files:[],
    maxFileCnt:2,
  },
  radioChange: function(e){
    var radioItems = this.data.radioItems;
    var freq='';
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
      if(radioItems[i].checked){
        freq=radioItems[i].name;
      }
    }

    this.setData({
      radioItems: radioItems,
      bugFreq: freq
    });
  },
  submitFeedback:function(e){
    var data = e.detail.value;
    var result='';
    if(data.bugTitle == false){
      result += '请输入标题,';
    }
    if(data.bugSteps == false){
      result += '请输入执行步骤,';
    }
    if(data.bugExpectation == false){
      result += '请输入期望结果,';
    }
    if(data.bugResult == false){
      result += '请输入实际结果,';
    }

    if(result){
      this.setData({
        submitResult: result,
        showTopTips: true
      });
    } else {
      this.setData({
        showTopTips:false
      });
      wx.showToast({
        title: '提交成功',
        icon:'success',
        duration:3000
      });
    }

  },
  bindHospitalChange:function(e){
    this.setData({
      hospitalIndex: e.detail.value
    });
  },
  chooseImage: function (e) {
    var that = this;
    if(that.data.files.length > 1){
      wx.showModal({
        title: '提示',
        content: '单次最多能上传2张图片',
        showCancel:false
      });
      return;
    }
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  }
})