import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Diseno } from '../diseno/entities/diseno.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DisenoService } from 'src/diseno/diseno.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       diseno: Diseno
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Diseno)
     private readonly disenoRepository: Repository<Diseno>,
     private readonly disenoService: DisenoService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.disenoService.prueba());
        const diseno =await  this.disenoRepository.findOneBy({ descripcion: name });
        if (!diseno) throw new Error('Estudiante no encontrado');
        if (!diseno.serie) throw new Error('A');

        
        this.connectedClients[client.id]= {socket:client, diseno: diseno};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getDisenoDescripcion(id:string){
        return this.connectedClients[id].diseno.descripcion;
    }
}
