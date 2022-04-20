import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { myAuth } from './interface/auth.interface';
import { contracts } from './interface/contracts.interface';

@Injectable()
export class ApinftService {
    private readonly DATA_URL = 'https://jsonplaceholder.typicode.com/users';
    private readonly luniverseAPI = 'https://api.luniverse.io';
    private readonly auths: myAuth[] = [];

    async create(auth: myAuth){
        const authToken = await axios.post(`${this.luniverseAPI}/svc/v2/auth-tokens`, auth)
            .then(response => {
                return response.data;
            })
            .catch(ex => {
                throw new Error(ex);
            });
        return authToken;
    }

    async contractFindAll(){
        const authToken = await axios.get(`${this.luniverseAPI}/svc/v2/contracts`)
            .then(response => {
                return response.data;
            })
            .catch(ex => {
                throw new Error(ex);
            });
        return authToken;
    }

    async contractFind(contracts: contracts){
        const authToken = await axios.get(`${this.luniverseAPI}/svc/v2/contracts${contracts}`)
            .then(response => {
                return response.data;
            })
            .catch(ex => {
                throw new Error(ex);
            });
        return authToken;
    }

    async findAll() {
        const webnaver = await axios.get(this.DATA_URL)
            .then(Response => {
                console.log(Response.data);
                return Response;
            });
        return this.auths;
    }
}
