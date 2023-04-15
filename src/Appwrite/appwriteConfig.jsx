import { Client,Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('64391e3b3f9e11ec0cbd');


    export const account = new Account (client);


    //databases 
    export const database = new Databases(client, "643a50009057605e211e");

