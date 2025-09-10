import Api from '.';
import { endpoints } from './endpoints';

let baseApiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default class fetchApi extends Api {

    AddNewPuja(data) {
        let url = this.buildUrl(endpoints.Pujas.puja, "full")
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }

    GetAllPuja(data) {
        let url = this.buildUrl(endpoints.Pujas.puja, "full")
        return this.fetch(url, "GET", null, data).then(response => response)
    }
    
    GetPujaDetails(data) {
        let url = this.buildUrl(endpoints.Pujas.puja, "full")
        return this.fetch(url, "GET", JSON.stringify(data)).then(response => response)
    }

    UpdetePuja(data) {
        let url = this.buildUrl(endpoints.Pujas.puja, "full")
        if (data.slug) {
            return this.fetchParams(url, "PUT", null, `/${data.slug}`).then(response => response)
        }
    }

    DeletePuja(data) {
        let url = this.buildUrl(endpoints.Pujas.puja, "full")
        if (data.id) {
            return this.fetchParams(url, "DELETE", null, `/${data.id}`).then(response => response)
        }
    }

}