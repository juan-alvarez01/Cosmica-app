import ContactForm from '../../contactForm/ContactForm'
import MainLayout from '../../layout/MainLayout'
import { ContactFormProvider } from '../../../context/ContactFormContext';
import "../../gameForm/GameForm.css"
export default function Contact() {

    return(
    <MainLayout>
         <ContactFormProvider>
            <ContactForm/>
         </ContactFormProvider>
    </MainLayout>
    )
};              