import { Global, Module } from '@nestjs/common';
import { JwtAuthenticationService } from './jwt-authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigurableModuleClass } from './jwt-authentication.module-definition';

@Global()
@Module({
  imports: [JwtModule],
  providers: [JwtAuthenticationService],
  exports: [JwtAuthenticationService],
})
export class JwtAuthenticationModule extends ConfigurableModuleClass {}
