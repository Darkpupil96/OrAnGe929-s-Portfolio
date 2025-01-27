import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Styles from './style.module.css'; // 如果有样式文件

function Contact() {
    const form = useRef(); // 使用 useRef 创建表单引用
    const [buttonText, setButtonText] = useState('Send Email'); // 按钮文字的状态

    const sendEmail = (e) => {
        e.preventDefault(); // 阻止默认行为
        setButtonText('Sending...'); // 更新按钮状态

        const serviceID = 'service_atlpgr4'; // 替换为你的服务ID
        const templateID = 'template_43pxh1c'; // 替换为你的模板ID

        emailjs
            .sendForm(serviceID, templateID, form.current, 'rIbuCg6hSrFJFNxk8') // 替换为你的用户ID
            .then(() => {
                setButtonText('Send Email'); // 发送成功后恢复按钮文字
                alert('Sent!');
            })
            .catch((err) => {
                setButtonText('Send Email'); // 发送失败后恢复按钮文字
                alert(JSON.stringify(err)); // 显示错误信息
            });
    };

    return (
        <div className={Styles.Contact}>
           
            <form ref={form} onSubmit={sendEmail} className={Styles.Form}>
            <h2 className={Styles.ContactTitle}>Contact Me</h2>
                <div className={Styles.Field}>
                    <label htmlFor="from_name">Name:</label>
                    <input type="text" name="from_name" id="from_name" placeholder="Enter your name" required />
                </div>
                <div className={Styles.Field}>
                    <label htmlFor="Email">Email:</label>
                    <input type="email" name="Email" id="Email" placeholder="Enter your email" required />
                </div>
                <div className={Styles.Field}>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" placeholder="Write your message here..." rows="4" required></textarea>
                </div>
                <button type="submit" id="button" className={Styles.SubmitButton}>
                    {buttonText}
                </button>
            </form>
            <div className={Styles.ContactInfoSection}>
                <h2>Contact Information</h2>
                <br></br>
                <p><strong>Name:</strong> Mark Yang</p>
                <p><strong>Email:</strong> yzh1996au@gmail.com</p>
                <p><strong>Phone:</strong> +61 493 301 140</p>
                <p><strong>Location:</strong> Brisbane, Australia</p>
                <p style={{width:'20vw'}}>Feel free to Contact me by submitting the form and I will get back to you as soon as possible</p>
            </div>
        </div>
    );
}

export default Contact;

