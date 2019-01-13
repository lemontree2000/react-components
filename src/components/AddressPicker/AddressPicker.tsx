import React from 'react';
import './style.css';
class AddressPicker extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div className="adress-picker-wrapper">
                <div className="address-picker-mask"></div>
                <div className="address-picker-container">
                    <header>
                        <span>请选择</span>
                        <i className="close">x</i>
                    </header>
                    <section className="result-steps">
                        <ul>
                            <li>
                                <span className="dot"></span>
                                <p className="content">安徽省</p>
                            </li>
                            <li>
                                <span className="dot"></span>
                                <p className="content">淮北市</p>
                            </li>
                            <li>
                                <span className="dot"></span>
                                <p className="content">烈山区</p>
                            </li>
                            <li>
                                <span className="dot"></span>
                                <p className="content">请选择街道</p>
                            </li>
                        </ul>
                    </section>
                    <section className="picker-list">
                        <div className="picker-tips">
                            请选择区/县
                        </div>
                        <ul>
                            <li className="picker-item">
                                <i>C</i>
                                <span>昌平区</span>
                            </li>
                            <li className="picker-item">
                                <i>C</i>
                                <span>昌平区</span>
                            </li>
                            <li className="picker-item">
                                <i>C</i>
                                <span>昌平区</span>
                            </li>
                            <li className="picker-item">
                                <i>C</i>
                                <span>昌平区</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default AddressPicker;