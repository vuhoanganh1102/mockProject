import { Module } from '@nestjs/common';
import { ExceptionFilterService } from './exception-filter.service';

@Module({
  providers: [ExceptionFilterService],
  exports: [ExceptionFilterService],
})
export class ExceptionFilterModule {}
