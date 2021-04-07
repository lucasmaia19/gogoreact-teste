import Axios from 'axios';
import React from 'react';

import axios from 'axios';

import { useState, useEffect } from 'react';

import { injectIntl } from "react-intl";
import { Row } from "reactstrap";
import { Colxx } from '../../../components/common/CustomBootstrap';
import { ReactTableAdvancedCard, ReactTableWithPaginationCard, ReactTableWithScrollableCard } from '../../../containers/ui/ReactTableCards';
import IntlMessages from '../../../helpers/IntlMessages';

const ListarAtividade = (props) => {

    const [atividade, setAtividade] = useState([]);

    useEffect(()=> {
    
        axios.get('http://localhost:3000/atividade/').then(response => {
            // console.log(response.data, 'response')
            setAtividade(response.data)
        })
    }, [])

        return (

            <Row>
              <Colxx xxs="12">
                <h3 className="mb-4">
                  <IntlMessages id="form-components.listarAtividade" />
                </h3>
              </Colxx>
 
              <Colxx xxs="12">
                <ReactTableWithPaginationCard atividade={atividade} />
              </Colxx>
            </Row> 
     );

}
export default injectIntl(ListarAtividade);


    // async function loadAtividades(){
    //   await listRef.limit(5)
    //   .get()
    //   .then((snapshot) => {
    //     updateState(snapshot)
    //   })
    //   .catch((err)=>{
    //     console.log('Deu algum erro: ', err);
    //     setLoadingMore(false);
    //   })
  
    //   setLoading(false);
  
    // }

    // loadAtividades();

//     return () => {

//     }
//   }, []);

// export default function listarAtividade() {
//     return (

        
//            <Row>
//              <Colxx xxs="12">
//                <h3 className="mb-4">
//                  <IntlMessages id="form-components.listarAtividade" />
//                </h3>
//              </Colxx>

//              <Colxx xxs="12">
//                <ReactTableWithPaginationCard />
//              </Colxx>
//            </Row> 
//     );
// }