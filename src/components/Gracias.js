import React from 'react';

function Gracias( props) {
    console.log(props.ocOk)
 //   if (props.ocOk) {
        return (
        
            <div>
                
                GRACIAS POR SU COMPRA !!!
    
                SU ORDEN # {props.oc} HA SIDO PROCESADA
            </div>
        )

/*    } else {
        return (
            <div>
                    
                ERROR  AL PROCESAR SU ORDEN !!! 

                POR FAVOR INTENTE NUEVAMENTE
            </div>

        )
    }*/

}

export default Gracias;
