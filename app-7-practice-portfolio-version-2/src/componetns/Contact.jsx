import { CONTACT } from "../constants";
import { motion } from "framer-motion";
function Contact() {
  return (
    <>
      <div id="Contacts" className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="my-20 text-center text-4xl"
        >
          Get in Touch
        </motion.h1>
        <div className="text-center tracking-tighter text-sm">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </>
  );
}
export default Contact;
// address: "A/P Pandeshwar Tal-Purandar Dist-Pune Pin: 412303",
//   phoneNo: "+91 9359395693",
//   email: "ashwinithikole@gmail.com"
