import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/user.entity/user.entity';

@Controller('/hello')
export class AppController {}
