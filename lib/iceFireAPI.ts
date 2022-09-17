import {Axios, AxiosResponse} from "axios";

interface BookParams {
    name?: string,
    fromReleaseDate?: string,
    toReleaseDate?: string
}
export class IceFireAPI {
    readonly client: Axios;

    constructor(client: Axios) {
        this.client = client;
    }

    getBooks(params?: BookParams): Promise<AxiosResponse> {
        let queries = "";
        if (params != null) {
            Object.keys(params).forEach((param: string, i: number) => {
                const token: string = i > 0 ? '&' : '?';
                queries += token + param + "=" + params[param];
            })
        }
        return this.client.get("/books" + queries);
    }
}