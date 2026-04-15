"use client";
import React, { useState } from 'react';

const ChatPopup: React.FC = () => {
    const [openChat, setOpenChat] = useState<boolean>(false);

    const habdleToggle = (value: boolean): void => {
        setOpenChat(value)
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="chat-icon"><button type="button" className="chat-toggler" onClick={() => habdleToggle(true)}><i className="fa fa-comment"></i></button></div>

            <div id="chat-popup" className={`chat-popup ${openChat ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="close-chat" onClick={() => habdleToggle(false)}><i className="fa fa-times"></i></div>
                    <div className="chat-form">
                        <p>Please fill out the form below and we will get back to you as soon as possible.</p>
                        <form className="contact-form-validated" onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Your Name" required={true} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required={true} />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Text" required={true}></textarea>
                            </div>
                            <div className="form-group message-btn">
                                <button type="submit" className="thm-btn"> Submit Now
                                    <span><i className="icon-right-arrow"></i></span>
                                </button>
                            </div>
                            <div className="result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPopup;
