"use client";

import React, { useState } from "react";
import logo from "@/assets/images/resources/logo-2.png";
import useTransportContext from "../context/useTransportContext";
import Link from "next/link";
import Image from "next/image";

const SideBar: React.FC = () => {
  const { isSidebar, setIsSidebar } = useTransportContext();
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormMessage("Message sent successfully! We'll be in touch soon.");
        form.reset();
      } else {
        setFormMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSidebar = (): void => {
    setIsSidebar(false);
  };
  return (
    <div
      className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? "isActive" : ""}`}
    >
      <div className="xs-overlay xs-bg-black" onClick={handleSidebar}></div>
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading" onClick={handleSidebar}>
            <Link href="#" className="close-side-widget">
              X
            </Link>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} width={170} height={40} alt="Logo" />
                  </Link>
                </div>
                <div className="content-box">
                  <h4>About Us</h4>
                  <p>
                    Professional heating and air conditioning services in
                    Melbourne. Specializing in hydronic heating, gas ducted
                    heating, and split systems with 24/7 emergency support.
                  </p>
                </div>
                <div className="form-inner">
                  <h4>Get a free quote</h4>
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form-validated"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        style={{
                          width: "100%",
                          height: "50px",
                          border: "1px solid #dfe3e7",
                          paddingLeft: "15px",
                          borderRadius: "6px",
                          color: "#707885",
                          outline: "none",
                          fontSize: "14px",
                          fontFamily: "inherit",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        style={{
                          width: "100%",
                          height: "50px",
                          border: "1px solid #dfe3e7",
                          paddingLeft: "15px",
                          borderRadius: "6px",
                          color: "#707885",
                          outline: "none",
                          fontSize: "14px",
                          fontFamily: "inherit",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        style={{
                          width: "100%",
                          height: "50px",
                          border: "1px solid #dfe3e7",
                          paddingLeft: "15px",
                          borderRadius: "6px",
                          color: "#707885",
                          outline: "none",
                          fontSize: "14px",
                          fontFamily: "inherit",
                        }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <select
                        name="service"
                        style={{
                          width: "100%",
                          height: "50px",
                          border: "1px solid #dfe3e7",
                          paddingLeft: "15px",
                          borderRadius: "6px",
                          color: "#707885",
                          outline: "none",
                          fontSize: "14px",
                          fontFamily: "inherit",
                        }}
                        required
                      >
                        <option value="">Select Service Type</option>
                        <option value="hydronic">Hydronic Heating</option>
                        <option value="gas-ducted">Gas Ducted Heating</option>
                        <option value="split-system">Split Systems</option>
                        <option value="emergency">Emergency Services</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Message..."
                        style={{
                          width: "100%",
                          minHeight: "120px",
                          border: "1px solid #dfe3e7",
                          paddingLeft: "15px",
                          paddingTop: "15px",
                          borderRadius: "6px",
                          color: "#707885",
                          outline: "none",
                          fontSize: "14px",
                          fontFamily: "inherit",
                          resize: "vertical",
                        }}
                      ></textarea>
                    </div>
                    <div className="form-group message-btn">
                      <button
                        type="submit"
                        className="thm-btn form-inner__btn"
                        disabled={isLoading}
                      >
                        {isLoading ? "Sending..." : "Submit Now"}
                      </button>
                    </div>
                  </form>
                  {formMessage && (
                    <div
                      className="result"
                      style={{
                        marginTop: "10px",
                        padding: "10px",
                        borderRadius: "4px",
                        backgroundColor: formMessage.includes("success")
                          ? "#d4edda"
                          : "#f8d7da",
                        color: formMessage.includes("success")
                          ? "#155724"
                          : "#721c24",
                        fontSize: "14px",
                      }}
                    >
                      {formMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
