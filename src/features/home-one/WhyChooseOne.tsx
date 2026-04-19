"use client";

import CustomSelect from "@/components/elements/CustomSelect";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import TextAnimation from "@/components/elements/TextAnimation";
import Link from "next/link";
import { useState } from "react";

type PointItem = {
  id: number;
  icon: string;
  title: string;
  text: string;
};

type CheckItem = {
  id: number;
  text: string;
};

const pointsData: PointItem[] = [
  {
    id: 1,
    icon: "icon-professional-services",
    title: "24/7 Emergency Repairs",
    text: "Rapid response for all heating emergencies in Melbourne.",
  },
  {
    id: 2,
    icon: "icon-delivery-man1",
    title: "Expert Installation",
    text: "Professional installation for all types of heating systems.",
  },
];

const checkListData: CheckItem[] = [
  { id: 1, text: "Licensed & Certified Technicians" },
  { id: 2, text: "Prompt & Professional Service" },
  { id: 3, text: "Competitive Pricing & Transparent Quotes" },
  { id: 4, text: "Serving Melbourne & Clayton South" },
];

const WhyChooseOne: React.FC = () => {
  const [freight, setFreight] = useState<string>("Split System ");
  const [valueRange, setValueRange] = useState<number>(500);
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const min: number = 0;
  const max: number = 2000;
  const percentage: number = ((valueRange - min) / (max - min)) * 100;

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
      service: freight || "General Inquiry",
      message: "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormMessage(
          "Quote request sent successfully! We'll contact you soon.",
        );
        form.reset();
        setFreight("Split System ");
      } else {
        setFormMessage("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormMessage("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="why-choose-one" id="contact">
      <div className="container">
        <div className="row">
          {/* LEFT */}
          <div className="col-xl-6">
            <div className="why-choose-one__left">
              <div className="section-title text-left sec-title-animation animation-style1">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-1">
                    <i className="fas fa-cogs"></i>
                  </div>

                  <h6 className="section-title__tagline">Why Choose us</h6>

                  <span className="section-title__tagline-border"></span>
                  <div className="section-title__shape-2">
                    <i className="fas fa-cogs"></i>
                  </div>
                </div>

                <h3 className="section-title__title">
                  <TextAnimation animationStyle="style1">
                    Expert & Reliable
                    <span> Heating Solution!</span>
                  </TextAnimation>
                </h3>
              </div>

              <p className="why-choose-one__text">
                We pride ourselves on providing high-quality heating services
                across Melbourne. Whether its hydronic heating, gas ducted
                systems, or split systems, our team ensures your home stays warm
                and comfortable.
              </p>

              {/* POINTS */}
              <div className="why-choose-one__point-box">
                <ul className="why-choose-one__point">
                  {pointsData.map((item) => (
                    <li key={item.id}>
                      <div className="why-choose-one__point-icon">
                        <span className={item.icon}></span>
                      </div>
                      <div className="why-choose-one__point-content">
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CHECKLIST */}
              <div className="why-choose-one__point-two-box">
                <ul className="why-choose-one__point-two">
                  {checkListData.map((item) => (
                    <li key={item.id}>
                      <div className="icon">
                        <span className="fas fa-check"></span>
                      </div>
                      <div className="text">
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="why-choose-one__btn-box">
                <Link href="/contact" className="thm-btn">
                  Contact Us
                  <span>
                    <i className="icon-right-arrow"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-xl-6">
            <div className="why-choose-one__right">
              <FadeInAdvanced variant="fadeInRight" delay={0} duration={1500}>
                <div className="why-choose-one__form-box">
                  <div className="title-box">
                    <h2>Request a Quote</h2>
                  </div>

                  <form
                    className="contact-form-validated why-choose-one__form"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      {[
                        {
                          name: "name",
                          type: "text",
                          placeholder: "Name",
                          icon: "icon-user",
                        },
                        {
                          name: "email",
                          type: "email",
                          placeholder: "Email",
                          icon: "icon-email",
                        },
                        {
                          name: "phone",
                          type: "text",
                          placeholder: "Phone",
                          icon: "icon-phone-call",
                        },
                      ].map((field, index) => (
                        <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                          <div className="input-box">
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                            />
                            <div className="icon">
                              <span className={field.icon}></span>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* SELECTS */}
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="input-box">
                          <div className="select-box">
                            <CustomSelect
                              optionArray={[
                                {
                                  id: 1,
                                  value: "Split System",
                                  label: "Split System",
                                },
                                {
                                  id: 2,
                                  value: "Evaporative Cooling System",
                                  label: "Evaporative Cooling System",
                                },
                                {
                                  id: 3,
                                  value: "Ducted Refrigeration System",
                                  label: "Ducted Refrigeration System",
                                },
                                {
                                  id: 4,
                                  value: "Emergency Repair",
                                  label: "Emergency Repair",
                                },
                              ]}
                              value={freight}
                              onChange={(value) => setFreight(value)}
                            />
                          </div>
                        </div>
                      </div>

                      {/* SUBMIT */}
                      <div className="col-xl-12">
                        <div className="why-choose-one__form-btn">
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="thm-btn"
                            style={{
                              opacity: isLoading ? 0.6 : 1,
                              cursor: isLoading ? "not-allowed" : "pointer",
                            }}
                          >
                            {isLoading ? "Sending..." : "Contact Us"}
                            <span>
                              <i className="icon-right-arrow"></i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {formMessage && (
                      <div
                        style={{
                          marginTop: "15px",
                          padding: "12px 15px",
                          borderRadius: "6px",
                          textAlign: "center",
                          backgroundColor: formMessage.includes("successfully")
                            ? "#d4edda"
                            : "#f8d7da",
                          color: formMessage.includes("successfully")
                            ? "#155724"
                            : "#721c24",
                          fontSize: "14px",
                          lineHeight: "1.5",
                        }}
                      >
                        {formMessage}
                      </div>
                    )}
                  </form>
                </div>
              </FadeInAdvanced>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyChooseOne;
