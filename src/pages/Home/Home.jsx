import React from 'react';
import { Button } from '../../components/Button/Button';
import Head from '../../components/Head/Head';
import ItemBox from '../../components/ItemBox/ItemBox';
import Product from '../../components/Product/Product';
import useFetch from '../../hooks/useFetch';

import './Home.css';

function Home() {

  const {request, data, load} = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, []);

  return (
    <section className="Home">
      <Head title="" description="Home de Ranek" />
      {
        load ? <div className="loading"></div> :
        data && <ItemBox items={data} />
      }
    </section>
  );
}

export default Home;