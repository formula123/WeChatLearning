// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions:[
      {
        questionType:1,
        question:"以下开关从左至右分别是",
        answer:[
          "设备急停，电源开关，启动开关",
          "电源开关，启动开关，设备急停",
          "启动开关，电源开关，设备急停"
        ],
        chooseAnswer:-1,
        correctAnswer:0
      },{
        questionType:1,
        question:"开机的正确流程是",
        answer:[
          "顺时针旋转电源开关->按下启动开关->双击SecondaryCache程序->输入工号和密码->点击登录",
          "逆时针旋转电源开关->按下启动开关->双击SecondaryCache程序->输入工号和密码->点击登录",
          "按下启动开关->逆时针旋转电源开关->双击SecondaryCache程序->输入工号和密码->点击登录",
          "按下启动开关->逆时针旋转电源开关->单击SecondaryCache程序->输入工号和密码->点击登录"
        ],
        chooseAnswer: -1,
        correctAnswer:1
      },{
        questionType:1,
        question:"关机的正确流程是",
        answer:[
          "直接逆时针旋转电源开关",
          "按下启动开关->逆时针选择电源开关",
          "退出程序->按下启动开关->逆时针选择电源开关"
        ],
        chooseAnswer: -1,
        correctAnswer:2
      },{
        questionType:1,
        question:"入库的正确流程是",
        answer:[
          "扫描药品条码->扫描箱子条码->输入数量->确认",
          "扫描箱子条码->扫描药品条码->输入数量->确认"
        ],
        chooseAnswer: -1,
        correctAnswer:0
      },{
        questionType:1,
        question:"机器支持什么方式入库？",
        answer:[
          "药品条码入库",
          "拼音码入库",
          "药品条码入库，拼音码入库"
        ],
        chooseAnswer: -1,
        correctAnswer:2
      },{
        questionType:1,
        question:"以下哪个选项是正确的入库位置？",
        answer:[
          "提升机左侧",
          "提升机",
          "提升机右侧"
        ],
        chooseAnswer: -1,
        correctAnswer:2
      }, {
        questionType:2,
        question:"入库时一个箱子能否放多个药品？",
        answer:[
          "能",
          "不能"
        ],
        chooseAnswer: -1,
        correctAnswer:1
      },{
        questionType:2,
        question:"入库时一个箱子能否放多个批号药品？",
        answer:[
          "能",
          "不能"
        ],
        chooseAnswer: -1,
        correctAnswer:1
      },{
        questionType:2,
        question:"入库时药品可以超过箱子高度吗？",
        answer:[
          "可以，无所谓的",
          "不可以，每个储位空间已经很紧凑，不能超出"
        ],
        chooseAnswer: -1,
        correctAnswer:1
      },{
        questionType:2,
        question:"两个库的扫描枪能混用吗？",
        answer:[
          "能，两个无所谓",
          "不能，A库扫描枪只能用在A库，B库扫描枪只能在B库使用"
        ],
        chooseAnswer: -1,
        correctAnswer:1
      },{
        questionType:1,
        question:"支持出库的方式有",
        answer:[
          "手动出库",
          "批量出库",
          "A和B均支持"
        ],
        chooseAnswer: -1,
        correctAnswer:2
      },{
        questionType:1,
        question:"按订单出库的流程是什么？",
        answer:[
          "点击出库->选择订单->点击确认出库->核对取走数量->点击确认信息",
          "点击出库->选择订单->点击确认出库->拿药走人",
          "点击查询->选择订单->点击确认出库->核对取走数量->点击确认信息"
        ],
        chooseAnswer: -1,
        correctAnswer:0
      }
    ],
    showCorrect:false,
  },
  radioChange:function(e){
    console.log(e.detail.value);
    var items = String(e.detail.value).split(':');
    this.data.questions[items[0]].chooseAnswer=items[1];

  },
  submitCheck:function(e) {
    var finish=true;
    var questions = this.data.questions;
    for(var i = 0; i < questions.length;i++)
    {
      if(questions[i].chooseAnswer === -1){
        wx.showModal({
          title: '提示',
          content: '第'+(i+1)+'未作答',
          showCancel:false
        })
        finish=false;
        break;
      }
    }
    if(finish){
      var wrongQ = new Array();

      for(var i = 0; i < questions.length;i++)
      {
        if(questions[i].chooseAnswer != questions[i].correctAnswer){
          wrongQ.push(i+1);
        }
      }
      if(wrongQ.length > 0){
        wx.showModal({
          title: '作答结果',
          content:'第'+ wrongQ.join(',')+'回答错误',
          showCancel:false
        })
        this.setData({showCorrect:true});
      } else{
        wx.showModal({
          title: '作答结果',
          content: '恭喜你通过考试',
          showCancel:false,
        })
        this.setData({ showCorrect: false });
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})