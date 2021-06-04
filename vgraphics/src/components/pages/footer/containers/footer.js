import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Shops</Footer.Link>
                    <Footer.Link href="#">Servises</Footer.Link>
                    {/* <Footer.Link href="#">Testimonials</Footer.Link> */}
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Digital</Footer.Link>
                    <Footer.Link href="#">V-Card</Footer.Link>
                    <Footer.Link href="#">Offset</Footer.Link>
                    <Footer.Link href="#">Proof</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Call</Footer.Link>
                    <Footer.Link href="#">Email</Footer.Link>
                    <Footer.Link href="#">Fax</Footer.Link>
                    <Footer.Link href="#">WhatsApp</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}