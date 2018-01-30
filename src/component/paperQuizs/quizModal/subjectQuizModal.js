import React, {Component} from 'react';
import {Modal, Row, Col, Input} from 'antd';

const {TextArea} = Input;

class subjectQuizModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textArea: ''
        };

    }

    handleOk() {
        this.props.handleOk(this.state.quiz, this.props.index);
    }

    handleCancel() {
        this.props.handleCancel()
    }

    handleInput(e) {
        const {value} = e.target || '';
        this.setState({
            quiz: {
                title: value,
                stack: '主观题'
            }
        });
    }

    render() {
        const {visible} = this.props;

        return (
            <Modal
                title="新建主题"
                visible={visible}
                width="598px"
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}>
                <Row>
                    <Col span={2} offset={2}>描述</Col>
                    <Col span={18}>
                        <TextArea placeholder="描述" onChange={this.handleInput.bind(this)}/>
                    </Col>
                </Row>
            </Modal>
        )
    }
}

export default subjectQuizModal;
