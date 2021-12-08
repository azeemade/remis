import axios from 'axios'
const API_URL = 'http://demodev.remis.ng/';
import authHeader from './auth-header';

class DriverService {
    companyDetails(){
        var config = {
            method: 'get',
            url: API_URL + 'Company/Details',
            headers: authHeader()
        };
        return axios(config)
    }

    driversList(companyId){
        var config = {
            method: 'get',
            url: API_URL + `Drivers?count=false&id=${companyId}`,
            headers: authHeader()
        };
        return axios(config)
    }

    driverDetails(id){
        var config = {
            method: 'get',
            url: API_URL + `Driver/Details/${id}`,
            headers: authHeader()
        };
        return axios(config)
    }

    addDriver(driver, companyId){
        var config = {
            method: 'post',
            url: API_URL + `Driver/Add/${companyId}`,
            data: JSON.stringify(driver),
            headers: authHeader()
        };
        return axios(config)
    }

    updateDriver(driver, companyId, id){
        var config = {
            method: 'put',
            url: API_URL + `Driver/Edit/${companyId}/${id}`,
            data: JSON.stringify(driver),
            headers: authHeader()
        };
        return axios(config)
    }

    removeDriver(id, companyId){
        var config = {
            method: 'delete',
            url: API_URL + `Driver/Delete/${companyId}/${id}`,
            headers: authHeader()
        };
        return axios(config)
    }
}

export default new DriverService();