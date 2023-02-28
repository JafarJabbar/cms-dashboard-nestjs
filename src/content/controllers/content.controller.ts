import {Controller, Get} from '@nestjs/common';

@Controller('content/:type')
export class ContentController {
    @Get('list')
    list(){

    }

}
