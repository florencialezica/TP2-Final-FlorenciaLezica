import Service from "../servicios/Service.js";



class Controller{
     service = new Service();

     createDonacion = async (req, res) => {
        try {
          const{donacion, donante} = req.params;
          const data = await this.service.createDonacionService(donacion,donante);
          res.status(200).send({ success: true, message: data });
        } catch (error) {
          res.status(422).send({ success: false, message: error.message });
        }
      };

      listarDonaciones = async (req,res) => {
        try{
          const {monto} = req.params;
          const data = await this.service.listarDonacionesService(monto);
          res.status(200).send({success:true , message:data});
        }catch(error){
          res.status(422).send({succes:false, message : error.message})
        }
      }






}

export default Controller;