import About from "./contactComponents/About";
import Contacts from "./contactComponents/Contacts";

const ContactPage = () => {
  return (
    <div className="main pb-8">
      <Contacts />
      <About />
    </div>
  );
};

export default ContactPage;
