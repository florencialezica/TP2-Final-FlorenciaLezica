class Model{

    data = [
        { donacion : 2344, donante: "Juan" },
        { donacion: 222, donante: "Marta" },
      ];
    

    createDonacion = (donacion , donante) => {
        this.data.push({
            donacion,
            donante,
        });
        
        return "Se cargó la donación correctamente";
    }
    
    listarDonaciones = (monto) => {  

        return this.data.filter(donacion => donacion.donacion > monto && donacion.donante !== "anónimo")

    }

    }
    export default Model;

