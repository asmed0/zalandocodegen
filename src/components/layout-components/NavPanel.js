import React, { Component } from 'react';
// eslint-disable-next-line
import { SettingOutlined } from '@ant-design/icons';
// eslint-disable-next-line
import { Drawer, Menu } from 'antd';
// eslint-disable-next-line
import ThemeConfigurator from './ThemeConfigurator';
import { connect } from "react-redux";

export class NavPanel extends Component {
	state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
	};
	
	render() {
		return (
      <>

      </>
    );
	}
}

const mapStateToProps = ({ theme }) => {
  const { locale } =  theme;
  return { locale }
};

export default connect(mapStateToProps)(NavPanel);