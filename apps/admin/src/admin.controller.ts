import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Public } from '@app/core/decorators/public.decorator';
import { SendEmailService } from '@app/send-email';

class TestMailDto {
  email: string;
}
@Controller()
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly sendEmailSerice: SendEmailService,
  ) {}

  @Get()
  getHello(): string {
    return this.adminService.getHello();
  }

  @Public()
  @Post('/sendmail')
  sendMail(@Body() testMailDto: TestMailDto) {
    return this.sendEmailSerice.sendVerificationCode(testMailDto.email);
  }
}
