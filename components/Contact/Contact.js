"use client";
import { useInView } from "react-intersection-observer";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// STYLES
import styles from "./Contact.module.scss";

// COMPONENTS
import Circles from "@/public/circles.svg";
import Loading from "../Loading/Loading";

export default function Contact() {
    // EFFECTS ON SCROLL
    const { ref: contactRef, inView: contactIsVisible } = useInView({
        triggerOnce: true,
    });

    const form = useRef();
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const messageInput = useRef(null);

    const [incomplete, setIncomplete] = useState(false);
    const [resultText, setResultText] = useState(undefined);
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const sendForm = async () => {
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setResultText(result.text);

                    if (result.text === "OK") {
                        setTimeout(() => {
                            setIsSent(true);
                            setIsSending(false);
                        }, 1500);
                    }
                    console.log("Result:", result.text);
                },
                (error) => {
                    setResultText(
                        "An error occurred while sending the email. Please try again."
                    );
                    console.log("Error:", error.text);
                }
            );
    };

    const sendEmail = async (e) => {
        if (
            nameInput.current.value === "" ||
            emailInput.current.value === "" ||
            messageInput.current.value === ""
        ) {
            e.preventDefault();
            setIncomplete(true);
            setResultText(
                "The form is incomplete. Please check and try again."
            );
        } else {
            e.preventDefault();
            setIsSending(true);
            await sendForm();
        }
    };

    return (
        <section ref={contactRef} id="contact" className={styles.contact}>
            <Circles
                className={`
                    ${styles.circles}  
                    ${contactIsVisible && styles.appear}
                    ${isSending && styles.loading}
                `}
            />
            {isSending && <Loading />}
            {isSent && (
                <div className={styles.success}>
                    <h2 className={styles.success_title}>Thank you!</h2>
                    <p className={styles.success_text}>
                        I will respond as soon as possible.
                    </p>
                </div>
            )}
            {!isSent && !isSending && (
                <>
                    <h2
                        className={`${styles.title}  
                        ${contactIsVisible && styles.appear}`}
                    >
                        <span>Let's get</span>
                        <span>in touch</span>
                    </h2>
                    <form
                        className={`${styles.form}  
                        ${contactIsVisible && styles.appear}`}
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <label className={styles.form_box}>
                            <span className={styles.label}>Name:</span>
                            <input
                                className={`${styles.input} 
                                ${incomplete && styles.incomplete}`}
                                type="text"
                                name="user_name"
                                placeholder="Incomplete"
                                ref={nameInput}
                            />
                        </label>
                        <label className={styles.form_box}>
                            <span className={styles.label}>Email:</span>
                            <input
                                className={`${styles.input} 
                                ${incomplete && styles.incomplete}`}
                                type="email"
                                name="user_email"
                                placeholder="Incomplete"
                                ref={emailInput}
                            />
                        </label>
                        <label className={styles.form_box}>
                            <span className={styles.label}>Message:</span>
                            <textarea
                                className={`${styles.textarea} 
                                ${incomplete && styles.incomplete}`}
                                name="message"
                                placeholder="Incomplete"
                                ref={messageInput}
                            />
                        </label>
                        <button
                            className={styles.button + " arrow_button"}
                            type="submit"
                        >
                            Send
                        </button>
                    </form>
                </>
            )}
            {!isSent && !isSending && resultText !== undefined && (
                <p className={styles.error_text}>{resultText}</p>
            )}
        </section>
    );
}
