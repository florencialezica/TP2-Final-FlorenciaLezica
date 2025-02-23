import Model from "../models/Model.js";


//consultas a apis y verificaiones se hacen aca
//if (!palabra) throw new Error("Tenes que ingresar una palabra");

class Service{
    model = new Model();

    metodo = async () =>{
        try {
            //usando el modelo hacer la logica
            return "hola"
        } catch (error) {
            throw error;
        }

    }





}

export default Service;