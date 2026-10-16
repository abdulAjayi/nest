import { Controller, Get } from "@nestjs/common";
import { TagsService } from "./tags.service.js";

@Controller("tags")
export class TagsController {
    constructor(
        private readonly tagsService: TagsService
    ) { }
    @Get()
    async getData(): Promise<any> {
        const tags = (await this.tagsService.getData()).map((tag) => {
            return tag.name
        })
        return { tags }
    }
}