"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SearchTransportForm: React.FC = () => {

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.1,
                ease: "easeOut"
            }}
            viewport={{ amount: 0.05 }}
            className="tab" style={{ display: "block" }}>
            <div className="banner-two__tab-form-box">
                <form className="banner-two__tab-form mc-form" onSubmit={handleSubmit}>
                    <div className="banner-two__tab-form-input-box">
                        <input type="email" placeholder="Enter Transport Id" name="EMAIL" />
                        <button type="submit" className="banner-two__tab-form-btn"><span className="icon-search"></span></button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default SearchTransportForm;
