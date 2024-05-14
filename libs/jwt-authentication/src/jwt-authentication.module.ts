import { Module } from '@nestjs/common';
import { JwtAuthenticationService } from './jwt-authentication.service';

@Module({
  providers: [JwtAuthenticationService],
  exports: [JwtAuthenticationService],
})
export class JwtAuthenticationModule {}
