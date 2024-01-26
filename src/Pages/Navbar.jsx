import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Home from './Home';
import About from './About';
import Login from './Login';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
// const items = [
//     {
//         label: Home,
//         key: "/home"
//     },
//     {
//         label: About,
//         key: "/About"
//     },
//     {
//         label: Login,
//         key: "/login"
//     }
// ]




const Navbar = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const locationRef = window.location.pathname;
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                {/* <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                /> */}
                <div>
                    <div style={{ color: "white", display: "flex", gap: "30px" }}>
                        <span style={{ cursor: "pointer" }}><Link to="/home"> Home </Link></span>
                        <span style={{ cursor: "pointer" }}> <Link to="/About">About </Link></span>
                        <span style={{ cursor: "pointer" }}><Link to="/login"> Login </Link></span>
                        <span style={{ cursor: "pointer" }}> <Link to="/Signup">SignUp </Link></span>
                        <span style={{ cursor: "pointer" }}><Link to="/logout"> LogOut </Link></span>
                    </div>
                </div>
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >

                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Search {locationRef.toUpperCase()}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default Navbar;