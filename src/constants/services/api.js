import { DeviceEventEmitter } from "react-native";
import { base_path } from "./apiConst";

export default class Api {

    static getBaseURL() {
        return base_path;
    }

    static getTokin = async () => {
        // let user = await Api.getData("userToken");
        let user = null
        console.log("userToken userToken userToken userToken userToken ", user);

        if (user) {
            return 'Bearer ' + user;
        }
        else {
            return null
        }
    }
    static get(route) {
        return this.xhr(route, null, 'GET');
    }
    static put(route, params) {
        return this.xhr(route, params, 'PUT');
    }
    static post(route, params) {
        return this.xhr(route, params, 'POST');
    }
    static delete(route, params) {
        return this.xhr(route, params, 'DELETE');
    }

    static async xhr(route, params, verb) {
        DeviceEventEmitter.emit("loading", { loading: true })
        const url = Api.getBaseURL() + route;
        console.log('finalurl', url)
        let header = {
            'Accept': 'text/plain',
            'Content-Type': params ? params instanceof FormData ? 'multipart/form-data' : 'application/json' : 'application/json',
        };

        let token = await Api.getTokin()

        token && (header["Authorization"] = token)

        params = params ? params instanceof FormData ? params : JSON.stringify(params) : null;
        let options = Object.assign({ method: verb, headers: header, cache: 'no-cache', mode: 'cors', }, params ? { body: params } : null);

        console.log("api request >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", JSON.stringify(options));
        try {
            return await fetch(url, options)
                .then((response) => {
                    console.log("response response status status status status, ", url, "<=====>", response);
                    DeviceEventEmitter.emit("loading", { loading: false })
                    if (response.ok) {
                        return response.json()
                    } else {
                        return response.json()
                    }
                })
                .then((responseJson) => {
                    console.log("api response >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>, ", url, "<=====>", JSON.stringify(responseJson));
                    DeviceEventEmitter.emit("loading", { loading: false })
                    if (responseJson?.status) {
                        return responseJson
                    }
                    else {
                        console.log("else");
                        if (responseJson?.status == "unauthenticated") {
                            alert(responseJson.message);
                            return responseJson
                        }
                        else {
                            if (responseJson?.message !== "Data not found") {
                                throw responseJson?.message ? responseJson.message : "Something wrong please try again later";
                            }
                        }
                    }
                })
                .catch((error) => {
                    console.log(url + "<<<<<<<<<<<<<<<<<<<<" + error);
                    if (String(error).includes("Network request failed")) {
                        error = "Network request failed";
                    }
                    alert(String(error), 3, 5000)
                    DeviceEventEmitter.emit("loading", { loading: false })
                    return null;
                });

        } catch (error) {
            DeviceEventEmitter.emit("loading", { loading: false })
            alert("Please check your internet connection")
        }
    }
}

