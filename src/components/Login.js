/*
 * @Author: aran.hu 
 * @Date: 2018-01-04 11:14:04 
 * @Last Modified by: aran.hu
 * @Last Modified time: 2018-01-06 15:11:28
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  Animated,
  Image,
  TouchableOpacity
} from 'react-native';
import { FaeComponent } from '@faegroup/common'
import dismissKeyboard from 'react-native-dismiss-keyboard'
const {
  color_red,
  weight_light,
  CountDown,
  color_blue,
  color_text_grey,
  color_divider,
  SubmitButton,
  W,
  H,
  ProgressView,
  Line,
  color_text_grey_7
} = FaeComponent

export default class Login extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      timerDisable: true, // 倒计时是否可用
      timerDisableNOPhoneNum: true, // 未输入手机号时倒计时按钮不可点击
      timerTime: 60,
      timerText: '获取',
      agree: true,
      btnDisable: true,
      isLoading: false, // 登录按钮是否可按
      phoneNum: '',
      vCode: '',
      alertModalVisible: false,
      showClearBtn: false,
      sendCount: 0,
      defaultPhoneText: '手机号',
      defaultVCodeText: '验证码',
      pan: new Animated.Value(0),
    };
    this.keyBoardHeight = 0
    this.marginBottom = 0 // 距离底边豪赌
    this.block = false
    this.isShowLogo = true
  }

  componentWillMount() {
    Keyboard.addListener('keyboardDidShow', (e) => {
      this.keyBoardHeight = H - e.endCoordinates.screenY
      // console.log('this.marginBottom', this.marginBottom);
      // console.log('this.keyBoardHeight', this.keyBoardHeight);
      let h = this.marginBottom > (this.keyBoardHeight + 50) ? 0 :
        this.marginBottom - (this.keyBoardHeight + 50)
      let d = 0
      if (h == 0) {
        d = h
      } else if (H < 600) {
        d = h + 50
      } else {
        d = h
      }
      // console.log('xxxx', h);
      // console.log('HH', H);
      // console.log('ddd', d);
      if (!this.block) {
        this.block = true
        if (H < 500) this.isShowLogo = false
        Animated.spring(this.state.pan, {
          toValue: d,
        }).start()
      }
    })

    Keyboard.addListener('keyboardDidHide', (e) => {
      this.block = false
      this.isShowLogo = true
      Animated.spring(this.state.pan, {
        toValue: 0,
      }).start()
    })
  }


  componentWillUnmount() {
    this.s && clearTimeout(this.s)
    this.timer && clearInterval(this.timer);
    this.rTimer && clearTimeout(this.rTimer)
  }

  doLogin = async () => {

  }

  getMessageCode = () => {
    if (!this._validatePhoneNum()) {
      return
    }
    const result = this.props.dispatch(getMessageCode(this.state.phoneNum))
    result.then((data) => {
      if (data == 'fail') {
        this.resetTimer();
        return
      }
      this.vCodeInput.focus()
      if (this.state.timerDisable) {
        //nothing
      } else {
        this.setState({ timerDisable: true, timerDisableNOPhoneNum: false, sendCount: this.state.sendCount + 1 });
        this._countdown();
      }
      setTimeout(() => {
        Toast.showShortCenter('验证码发送成功')
      }, 800)
    })
      .catch(e => {
        this.phoneNumInput.focus()
        console.log('getMessageCode fail', e);
      })
  }

  _countdown() {
    this.timer = setInterval(() => {
      let time = this.state.timerTime - 1;
      this.setState({ timerTime: time });
      if (this.state.timerTime == 0) {
        this.setState({ timerDisable: false, timerTime: 60, timerText: '重发' });
        clearInterval(this.timer);
      }
    }, 1000)
  }

  _validatePhoneNum() {
    if (!(/^1[0-9]{10}$/.test(this.state.phoneNum))) {
      Toast.showShortCenter('手机号码有误，请重填')
      this.phoneNumInput.focus()
      return false;
    }
    return true
  }

  resetTimer() {
    this.setState({
      timerTime: 60,
      timertext: this.state.sendCount == 0 ? '获取' : '重发',
      timerDisable: false,
      timerDisableNOPhoneNum: false
    }, () => {
      sendCount: 0
    })

    if (this.props.user.isLoggedIn) {
      this.setState({ text: '获取' })
    }
  }

  _onChangeText = (text) => {
    const { phoneNum, timerDisable } = this.state
    let _text = text.trim()
    if (_text == '')
      this.setState({ showClearBtn: false, phoneNum: '', timerDisable: true, timerDisableNOPhoneNum: true }, this.updateBtnState())
    else
      this.setState({ showClearBtn: true, phoneNum: _text, timerDisable: false, timerDisableNOPhoneNum: false }, this.updateBtnState())
  }

  _onClearBtn = () => {
    this.setState({
      showClearBtn: false,
      timerDisable: true,
      timerDisableNOPhoneNum: true,
      phoneNum: '',
      vCode: '',
      btnDisable: true,
      timerText: '获取'
    })
    this.phoneNumInput.focus()
  }

  updateBtnState = () => {
    this.s = setTimeout(() => {
      const { phoneNum, vCode, agree } = this.state
      if (phoneNum && vCode && agree) {
        this.setState({ btnDisable: false })
      } else {
        this.setState({ btnDisable: true })
      }
    }, 100)
  }

  _goToProtocol = () => {
    // const { dispatch, navigation } = this.props
    // const { navigate } = navigation
    // navigate('RegisterAgreement')
    // this.props.dispatch(navTo(PagesConfig.RegisterAgreement))
  }

  _doAgree = () => {
    const { agree } = this.state
    this.setState({agree: !agree}, this.updateBtnState())
  }
  _onSubmitEditingPhoneNum = () => {
    // this._getMessageCode()
  }

  _onSubmitEditingVCode = () => {
    // this._login()
  }

  onLayout = (e) => {
    this._view.measure((x, y, width, height, left, top) => {
      this.marginBottom = H - top
    })
  }

  render() {
    const {
      agree,
      timerDisable,
      showClearBtn,
      timerDisableNOPhoneNum,
      timerText,
      timerTime,
      phoneNum,
      vCode,
      btnDisable,
      isLoading,
      defaultPhoneText,
      defaultVCodeText,
		} = this.state
    let clearBtn = null;
    if (showClearBtn) {
      clearBtn =
        <TouchableOpacity
          onPress={this._onClearBtn}
          style={{marginLeft: -20, marginVertical: 10}}>
          <Image source={require('./img/qingkong.png')}/>
        </TouchableOpacity>
    }
    let img = agree ? require('./img/gouxuan.png') : require('./img/weigouxuan.png')
    let timerComponent;
    if (timerDisable) {
      if (!timerDisableNOPhoneNum) {
        timerComponent =
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.timerwrapper, {backgroundColor: color_divider}]}>
            <Text style={{fontSize: 12, color: 'white'}}>{ timerTime }</Text>
          </TouchableOpacity>
      } else {
        timerComponent =
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.timerwrapper, {backgroundColor: color_divider}]}>
            <View><Text style={{fontSize: 12, color: 'white'}}>{ timerText }</Text></View>
          </TouchableOpacity>
      }
    } else {
      timerComponent =
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.timerwrapper, {backgroundColor: color_blue}]}
          onPress={this._getMessageCode}>
          <Text style={{fontSize: 12, color: 'white'}}>{ timerText }</Text>
        </TouchableOpacity>
    }

    return (
      <SafeAreaView style={styles.container}>
        <Animated.ScrollView ref={(ref) => { this.scrollview = ref }}
          keyboardShouldPersistTaps={'always'}
          keyboardDismissMode={'on-drag'}
          style={{ flex: 1, marginTop: this.state.pan }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>

            {
              this.isShowLogo ?
                <Image source={require('./img/logo.jpg')} />
                :
                <View style={{ height: 50 }} />
            }
            <View style={{ flex: 1, marginHorizontal: 15, marginTop: 40 }} >
              <View style={{ flexDirection: 'row', borderBottomColor: '#E5E8E8', borderBottomWidth: 1, }}>
                <TextInput
                  ref={(ref) => { this.phoneNumInput = ref }}
                  underlineColorAndroid={'transparent'}
                  style={{ padding: 0, width: W - 30, height: 40, fontSize: 14, color: color_text_grey_7 }}
                  placeholder={defaultPhoneText}
                  placeholderTextColor={color_text_grey}
                  onChangeText={this._onChangeText}
                  value={phoneNum}
                  onSubmitEditing={this._onSubmitEditingPhoneNum}
                  keyboardType={'numeric'}
                  returnKeyType={'next'}
                />
                {clearBtn}
              </View>
              <View style={{ flexDirection: 'row', marginTop: 10, borderBottomColor: '#E5E8E8', borderBottomWidth: 1, }}>
                <TextInput
                  ref={(ref) => { this.vCodeInput = ref }}
                  underlineColorAndroid={'transparent'}
                  style={{ padding: 0, width: W - 30, height: 40, fontSize: 14, color: color_text_grey_7 }}
                  placeholder={defaultVCodeText}
                  placeholderTextColor={color_text_grey}
                  onChangeText={(text) => this.setState({ vCode: text.trim() }, this.updateBtnState())}
                  keyboardType={'numeric'}
                  value={vCode}
                  onSubmitEditing={this._onSubmitEditingVCode}
                />
                {timerComponent}
              </View>
              <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={this._doAgree} activeOpacity={1}>
                  <Image source={img} />
                </TouchableOpacity>
                <Text style={{ fontSize: 15, color: color_text_grey, marginLeft: 15 }}>同意</Text>
                <TouchableOpacity onPress={this._goToProtocol}>
                  <Text style={{ fontSize: 15, color: color_blue, fontWeight: 'bold' }}>{'《丝路金交注册协议》'}</Text>
                </TouchableOpacity>
              </View>
              <View onLayout={this.onLayout} style={{ marginTop: 20 }} ref={(e) => this._view = e} >
                <SubmitButton children={'确认登录'} isLoading={isLoading} isDisabled={btnDisable}
                  onPress={this._login} />
              </View>
            </View>
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
	timerwrapper: {
		width: 60,
		height: 25,
		borderRadius: 5,
		backgroundColor: '#e5e5e5',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: -60,
		marginVertical: 10
	}
});

// borderBottomWidth: StyleSheet.hairlineWidth


