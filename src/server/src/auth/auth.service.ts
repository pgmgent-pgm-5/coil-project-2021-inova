import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    const match = await bcrypt.compare(pass, user.password);
    if (user && match) {
      const { password, ...result } = user;
      return result;
    }
    throw new HttpException('Wrong Email or Password', HttpStatus.FORBIDDEN);
  }
  async login(user: any) {
    const payload = { email: user.email, sub: user.id };

    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }
}
