import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }

  @Get()
  findAll(@Query() filter: JSON) {
    return this.profilesService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilesService.findOne({ _id: id });
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profilesService.updateOne({ _id: id }, updateProfileDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.profilesService.deleteOne({ _id: id });
  }
}
