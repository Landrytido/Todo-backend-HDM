import { Injectable, Type } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import DeleteTask from './DeleteTask/DeleteTask';

type UseCases = GetAllTasksUseCase | SaveTaskUseCase | DeleteTask;

@Injectable()
export default class UseCaseFactory {
  constructor(private readonly container: ModuleRef) {}

  async create<T extends UseCases>(type: Type<T>): Promise<T> {
    return this.container.create(type);
  }
}