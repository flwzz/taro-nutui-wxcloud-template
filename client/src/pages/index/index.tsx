import { Component, PropsWithChildren } from "react";
import { View  } from "@tarojs/components";
import "./index.less";

import Login from "../../components/login/index";
import { Button } from "@nutui/nutui-react-taro";
import IconFont from "../../components/iconfont";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
          <IconFont name="close4" color="#000" />
        <View>
          <Button type="primary">NutUI React Button</Button>
        </View>
        <Login />
      </View>
    );
  }
}
