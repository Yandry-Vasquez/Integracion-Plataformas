import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DisenoMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { DisenoDTO } from './dto/diseno.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IDiseno } from 'src/common/interfaces/diseno.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('disenos')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/diseno')
export class DisenoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyDiseno = this.clientProxy.clientProxyDisenos();

  @Post()
  create(@Body() disenoDTO: DisenoDTO): Observable<IDiseno> {
    return this._clientProxyDiseno.send(DisenoMSG.CREATE, disenoDTO);
  }

  @Get()
  findAll(): Observable<IDiseno[]> {
    return this._clientProxyDiseno.send(DisenoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IDiseno> {
    return this._clientProxyDiseno.send(DisenoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() disenoDTO: DisenoDTO): Observable<IDiseno> {
    return this._clientProxyDiseno.send(DisenoMSG.UPDATE, { id, disenoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyDiseno.send(DisenoMSG.DELETE, id);
  }
}
