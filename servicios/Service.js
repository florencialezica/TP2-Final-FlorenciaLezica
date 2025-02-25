import Model from "../modelos/Model.js";


class Service{
    model = new Model();

    createDonacionService = async (donacion , donante) =>{
        try {
            if(donacion <= 0) throw new Error("El monto de la donación no puede ser menor a 0");
            
            if(donante === null){
                donante = "anónimo"
            }
            const donacionCreada = await this.model.createDonacion(donacion,donante);
            return donacionCreada;
        } catch (error) {
            throw error;
        }

    }

    listarDonacionesService = async(monto) => {
        try{
            const donaciones = await this.model.listarDonaciones(monto);
            return donaciones;

        }catch(error){
            throw error;
        }
    }




}

export default Service;