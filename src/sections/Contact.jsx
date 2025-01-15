import { useRef, useState } from "react"
import  emailjs  from "@emailjs/browser"
import toast from "react-hot-toast"



const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send('service_qu2gule', 'template_t5oivvl', {
                from_name: form.name,
                to_name: 'Peter',
                from_email: form.email,
                to_email: 'peterslap67@gmail.com',
                message: form.message
            }, 'JG5WM0dKQoPy02Emd');
            setLoading(false);
            toast.success("Your Message Has been sent successfully");
        setForm({
            name: '',
            email: '',
            message: ''
        })
        } catch (error) {
            setLoading(false);
            console.error(error);
            toast.error("Something went wrong");
        }
        setForm({})
    }
    
  return (
    <section className="c-space my-20" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            {/*<img src="/assets/terminal.png" alt="terminalbackground" className="absolute inset-0 min-h-screen" />*/}
            <div className="contact-container">
                <h3 className="head-text">Hit Me Up</h3>
                <p className="text-lg text-white-600 mt-3">
                    Wheather you are looking to advertise your services online or looking to build an entire eommerce site, I'm here to help
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="Your Name"
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="field-input"
                            placeholder="Your Email Address"
                        />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Your Message</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I'm Intrested in ... "
                        />
                    </label>
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
            </div>
        </div>      
    </section>
  )
}

export default Contact