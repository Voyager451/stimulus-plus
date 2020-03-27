import React from 'react';
import {
    Button, ButtonGroup, Card, CardBody, CardHeader, CardText, Col, CustomInput, Input,
    Label, ListGroup, ListGroupItem, Row
} from 'reactstrap';

const Footer = (props) => {


    return (
        <Card className={"footer-card"}>
            <CardBody>
                <span className="intro-subtitle">
                    Made with <span title={"Make America Think Harder"}>MATH</span> & 💕️ by YangGang
                </span>
                <span className="footer-divider" />
                Not affiliated with any organization
                <span className="footer-divider" />
                    <b><a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeiYOxe2tr-QuISfHPuJ_H7sJq05YMJ1VNcpgMUEn3pFqn8pg/viewform"
                        target="_blank">
                        Send Feedback
                    </a></b>
                <span className="footer-divider" />
                Email: <a href="mailto:stimulus.999@gmail.com" target="_blank">stimulus.999@gmail.com</a>
            </CardBody>
        </Card>
    );
}

export default Footer;