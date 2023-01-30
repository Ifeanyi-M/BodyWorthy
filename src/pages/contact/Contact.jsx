import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {AiTwotoneMail} from 'react-icons/ai'
import {SiMessenger} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'

import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Connect With Us" image={HeaderImage}>
      We are available to assist you Monday through Friday from 9am to 5pm EST. For inquiries, please contact us at the links below. Our customer service team will get back to you within 24 hours.
    </Header>

    <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:gothikstormborn@gmail.com" target="_blank" rel="noreferrer noopener"><AiTwotoneMail/></a>
            <a href="https://www.facebook.com/IfeanyichukwuNMojekwu" target="_blank" rel="noreferrer noopener"><SiMessenger/></a>
            <a href="https://wa.me/+2347051806545" target="_blank" rel="noreferrer noopener"><ImWhatsapp/></a>
          </div>
        </div>
    </section>


    </>
    
    
  )
}

export default Contact