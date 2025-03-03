import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController1, AppController2 } from './app.controller';
import { AppService1, AppService2 } from './app.service';
import { TestModule } from './test-module/test.module';

@Module({
  imports: [ScheduleModule.forRoot(), TestModule],
  controllers: [AppController1],
  providers: [AppService1],
})
export class AppModule1 {}

@Module({
  imports: [],
  controllers: [AppController2],
  providers: [AppService2],
})
export class AppModule2 {}
