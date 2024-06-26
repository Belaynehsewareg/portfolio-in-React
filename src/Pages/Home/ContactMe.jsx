export default function ContactMe(){
    return(
        <section className="contact--section" id="Contact">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <form  className="contact--form--container">
                <div className="container">
                    <div className="container--personal">
                        <label htmlFor="first-name">
                            <span className="text-md">First Name</span>
                            <input type="text" className="contact--input text-md" name="first-name" id="first-name" required/>
                        </label>
                        <label htmlFor="last-name">
                            <span className="text-md">Last Name</span>
                            <input type="text" className="contact--input text-md" name="last-name" id="last-name" required/>
                        </label>
                        <label htmlFor="email">
                            <span className="text-md">Email</span>
                            <input type="email" className="contact--input text-md" name="email" id="email" required/>
                        </label>
                        <label htmlFor="phone-number">
                            <span className="text-md">Phone Number</span>
                            <input type="tel" className="contact--input text-md" name="phone-number" id="phone-number" required/>
                        </label>
                    </div>
                    <label htmlFor="choode-topic" className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select id="choose-topic" className="contact--input text-md">
                            <option>Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>
                    <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message</span>
                        <textArea className="contact--input text-md" id="message" rows="8" placeholder="Type your message..." />
                    </label>
                    <label htmlFor="checkboc" className="checkbox--label">
                        <input type="checkbox" name="checkbox" id="checkbox" required />
                        <span className="text sm">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact--form--btn">Submit</button>
                    </div>
                </div>
            </form>
        </section>
    );
}