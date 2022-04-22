import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { myAuth, tokenKey } from './interface/auth.interface';

@Injectable()
export class ApinftService {
    private readonly luniverseAPI = 'https://api.luniverse.io';
    public readonly tokenkey: tokenKey[] = [];

    async create(auth: myAuth){
        const authResult = await axios.post(`${this.luniverseAPI}/svc/v2/auth-tokens`, auth)
            .then(response => {
                return response.data;
            })
            .catch(ex => {
                throw new Error(ex);
            });
        this.tokenkey.pop();
        this.tokenkey.push(authResult.data.authToken.token);
        return authResult.data.authToken.token;
    }

    findAll(): tokenKey[] {
        return this.tokenkey;
    }

    async contractFindAll(){
        const authToken = await axios.get(`${this.luniverseAPI}/svc/v2/nft/contracts`,{headers: {'Authorization': `Bearer ${this.tokenkey[0]}`}})
            .then(response => {
                return response.data;
            })
            .catch(ex => {
                throw new Error(ex);
            });
        //console.log(authToken.data.contracts.items[0]);
        return authToken;
    }

    async contractFindOne(id: string){
        const contract = await axios.get(`${this.luniverseAPI}/svc/v2/nft/contracts/${id}`,{headers: {'Authorization': `Bearer ${this.tokenkey[0]}`}})
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(ex => {
                throw new Error(ex);
            });
        return contract;
    }

}
