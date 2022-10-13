import nodemailer from "nodemailer";

class Mailer {
  constructor(private username: string, private password: string) {
    this.username = username;
    this.password = password;
  }
  private getTransporter() {
    return nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: this.username,
        pass: this.password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }
  private getMailerOptions(email: string, token: string) {
    return {
      from: this.username,
      to: email,
      subject: "Email verification",
      html: `verify your email: <a href="http://localhost:3001/api/v1/auth/verify-email?token=${token}&email=${email}">verify</a>`,
    };
  }
  async sendMail(email: string, token: string) {
    try {
      const transporter = this.getTransporter();
      await transporter.sendMail(this.getMailerOptions(email, token));
    } catch (error) {
      console.log(error);
    }
  }
}

export default Mailer;
