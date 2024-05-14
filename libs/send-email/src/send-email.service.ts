import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class SendEmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendVerificationCode(email: string) {
    const code = await this.generateVerificationCode(10);
    await this.mailerService.sendMail({
      to: email,
      subject: 'Verification Code',
      text: `Your verification code is ${code}`,
    });
    return new HttpException('Successfully', HttpStatus.OK);
  }
  async generateVerificationCode(length: number): Promise<string> {
    const charset = '0123456789'; // You can expand this charset if you want to include more characters
    let code = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      code += charset[randomIndex];
    }
    return code;
  }
}
