import { Module } from "@nestjs/common";
import { TagsController } from "./tags.contorller.js";
import { TagsService } from "./tags.service.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TagsEntity } from "./tags.entity.js";

@Module({
    imports: [TypeOrmModule.forFeature([TagsEntity])],
    controllers: [TagsController],
    providers: [TagsService]
})


export class TagsModule { } 