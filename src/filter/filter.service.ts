import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.model';

@Injectable()
export class FilterService {
  /**
   *
   * @param users
   * @param name
   * @returns filtered users
   */
  filterUsers(users: User[], name: string): User[] {
    return users.filter((item: User) => item.name === name);
  }
}
