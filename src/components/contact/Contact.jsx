import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(formRef.current);
        try {
            const response = await fetch(formRef.current.action, {
                method: formRef.current.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                formRef.current.reset();
                alert("Mensaje enviado!");
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='container'>
            <h2 id="contact">
                Contact 
            </h2>
            <form ref={formRef} className='containerForm' action='https://formspree.io/f/meqyrzrv' method='post' onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                </div>
                <div>    
                    <input type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <label>E-mail</label>
                </div>
                <div>   
                    <input type="email" name="email" placeholder="your@email.com" />
                </div>
                <div>
                    <label>Message</label>
                </div>
                <div>   
                    <textarea name="message" placeholder="Message" />
                </div>
                <button className='btn btnSubmit' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
