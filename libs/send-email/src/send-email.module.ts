import { Module } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { MailerModule } from '@nestjs-modules/mailer';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.NODE_MAILER_HOST,
        port: parseInt(process.env.NODE_MAILER_PORT),
        secure: false,
        auth: {
          user: process.env.NODE_MAILER_USER,
          pass: process.env.NODE_MAILER_PASS,
        },
        //   host: 'smtp.gmail.com',
        //   port: 587,
        //   secure: false,
        //   auth: {
        //     user: 'accofcod1102@gmail.com',
        //     pass: 'pyyb ydsj scub kadc',
        //   },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
  ],
  providers: [SendEmailService],
  exports: [SendEmailService],
})
export class SendEmailModule {}
