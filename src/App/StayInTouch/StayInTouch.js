import React from 'react'

const StayInTouch = () => {
    return (
        <div className="contacts-container" id="contacts-a" name="contacts">
            <div className="container-title">GET IN TOUCH</div>
            <div className="container-dashes"></div>
            <div className="container-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet</div>
            <div className="contacts-items-container">
                <div className="contacts-contacts">
                    <div className="contacts-item">
                        <div className="contacts-item-icon c-i-i-1"></div>
                        <div className="contacts-item-description">
                            <div className="contacts-item-title">ADDRESS</div>
                            <div className="contacts-item-text">
                                <a href="https://goo.gl/maps/ppH3z9RMsJk3Tkc56">312, 7th Ave, New York
                                NY 101200,
                                <br></br>
                                United States of America</a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-item">
                        <div className="contacts-item-icon c-i-i-2"></div>
                        <div className="contacts-item-description">
                            <div className="contacts-item-title">HOTLINE</div>
                            <div className="contacts-item-text">
                                <a href="tel:+65 0052 300">+65 0052 300</a>, <a href="tel:+65 88251 210">+65 88251 210</a>, <a href="tel:+88 01723 511 340">+88 01723 511 340</a>     
                            </div>
                        </div>
                    </div>
                    <div className="contacts-item">
                        <div className="contacts-item-icon c-i-i-3"></div>
                        <div className="contacts-item-description">
                            <div className="contacts-item-title">E-MAIL</div>
                            <div className="contacts-item-text">
                                <a href="mailto:shapedtheme@gmail.com">shapedtheme@gmail.com</a>
                                <br></br>
                                <a href="mailto:khalilkode@gmail.com">khalilkode@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contacts-form">
                    <div className="form-contacts-input">
                        <input type="text" placeholder="YOUR NAME"></input>
                        <input type="text" placeholder="YOUR E-MAIL"></input>
                        <input type="text" placeholder="YOUR SUBJECT"></input>
                        <input type="text" placeholder="YOUR COMPANY NAME"></input>
                    </div>
                    <div className="form-message-input">
                        <textarea name="" id="" cols="30" rows="10" placeholder="WRITE YOUR MESSAGE"></textarea>
                    </div>
                    <div className="form-submit">
                        <button className="form-submit-btn">SEND MESSAGE</button>
                        <p className="form-submit-text"><span>*</span> We'll contact you as as possible. We don't reply on Monday.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StayInTouch;