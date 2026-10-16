import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TagsModule } from './tags/tags.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config.js';


@Module({
  imports: [TypeOrmModule.forRoot(config), TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }