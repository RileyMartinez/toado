import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';

@Controller('todolist')
export class TodolistController {
    constructor(private readonly todolistService: TodolistService) {}

    @Post()
    create(@Body() createTodolistDto: CreateTodolistDto) {
        return this.todolistService.create(createTodolistDto);
    }

    @Get()
    findAll() {
        return this.todolistService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.todolistService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateTodolistDto: UpdateTodolistDto,
    ) {
        return this.todolistService.update(id, updateTodolistDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.todolistService.remove(id);
    }
}
