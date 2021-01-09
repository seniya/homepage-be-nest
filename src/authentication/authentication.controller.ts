import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import RegisterDto from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt.auth.guard';
import { LocalAuthGuard } from './guards/local.auth.guard';
import RequestWithUserIf from './interface/requestWithUser.interface';
import { ResponseJson } from '../utils/responseJson';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('sign-up')
  async register(@Body() registrationData: RegisterDto) {
    try {
      const item = await this.authenticationService.register(registrationData);
      return new ResponseJson().success(item);
    } catch (error) {
      return new ResponseJson().error(error.status, error.message);
    }
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async logIn(@Req() request: RequestWithUserIf) {
    try {
      const { user } = request;
      const token = await this.authenticationService.getToken(user.id);
      return new ResponseJson().success({ token });
    } catch (error) {
      return new ResponseJson().error(error.status, error.message);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('sign-out')
  @HttpCode(200)
  async logOut() {
    return 'sign-out';
  }
}
