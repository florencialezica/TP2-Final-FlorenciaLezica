import Service from "../services/Service.js";

//estoy probando

class Controller{
     service = new Service();

     metodo = async (req, res) => {
        try {
          const data = await this.service.metodo();
          res.status(200).send({ success: true, message: data });
        } catch (error) {
          res.status(422).send({ success: false, message: error.message });
        }
      };






}

export default Controller;