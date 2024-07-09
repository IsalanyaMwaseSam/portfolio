import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import whatsappIcon from '../assets/img/whatsappIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';
import phone from '../assets/img/phone.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/isalanya-sam-mwase-491623213/"><img src={navIcon1} alt="Icon" /></a>
              <a href="tel:+256705876748"><img src={phone} alt="Icon" /></a>
              <a href="https://api.whatsapp.com/send?phone=+256726422176"><img src={whatsappIcon} alt="" /></a>
              <a href="https://github.com/IsalanyaMwaseSam"><img src={githubIcon} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
