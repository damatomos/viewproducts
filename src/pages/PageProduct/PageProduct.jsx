import React from "react";

import { useLocation } from 'react-router-dom';
import Head from "../../components/Head/Head";
import useFetch from "../../hooks/useFetch";

import './PageProduct.css';

function PageProduct() {

  const location = useLocation();
  const {request, data, load} = useFetch();

  React.useEffect(() => {
    console.log(location.pathname.split('/products/')[1]);
    const path = location.pathname.split('/products/')[1];
    request('https://ranekapi.origamid.dev/json/api/produto/' + path).then((json) => {
      console.log(json);
    });
  }, []);

  return (
    <section className="PageProduct">
      {
        data ?
        <>
          <Head title={data.nome} description={data.descricao}/>
          <div className="PageProductImages animLeft">
            {
              data && data.fotos && 
              data.fotos.map((foto) => {
                return <img key={foto.src} src={foto.src} alt={foto.titulo}/>
              })
            }
          </div>
          <div className="PageProductContent animLeft">
            {
              data && <>
                <h3>{data.nome}</h3>
                <span>R${' ' + data.preco}</span>
                <p>{data.descricao}</p>
              </>
            }
          </div>
        </> :
        <div className="loading"></div>
      }
    </section>
  );
}

export default PageProduct;