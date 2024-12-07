import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import TaskController from './Controllers/TaskController';
import { PrismaService } from './PrismaService';
import TaskRepository from './Repositories/TaskRepository';
import UseCaseFactory from './UseCase/UseCaseFactory';
import GetAllTasksUseCase from './UseCase/GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './UseCase/SaveTask/SaveTaskUseCase';
import DeleteTask from './UseCase/DeleteTask/DeleteTask';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TaskController],
  providers: [
    PrismaService,
    TaskRepository,
    UseCaseFactory,
    GetAllTasksUseCase,
    SaveTaskUseCase,
    DeleteTask,
  ],
})
export class AppModule {}
