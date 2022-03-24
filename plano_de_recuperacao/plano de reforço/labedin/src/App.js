import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.postimg.cc/zv8N0P7K/Foto-De-Perfil-Sobre-Mim-Post-Do-Instagram.png" 
          nome="Adriano de Brito Santana" 
          descricao="Oi, eu sou Adriano.Sou aluno da Labenu. Estou em busca de uma nova profissão por esse motivo estou cursando web-fullstack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno
          icons="https://i.postimg.cc/XXMY3tZp/Foto-De-Perfil-Sobre-Mim-Post-Do-Instagram-2.png" 
          email="britobtx@gmail.com" 
           
        />
        <CardPequeno
          icons="https://i.postimg.cc/wM3YP203/Foto-De-Perfil-Sobre-Mim-Post-Do-Instagram-3.png" 
          endereco="Ercilio Lioncoln, 6 -Parque Jandaia,Carapicuíba -SP" 
           
        />
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          logo="https://i.postimg.cc/Yq9D7JpX/Foto-De-Perfil-Sobre-Mim-Post-Do-Instagram-1.png" 
          nome="Agente de Vendas" 
          descricao="Atualmente trabalho como agente de vendas de seguro em específico na oferta de seguro auto, vida e empresarial, realizando elaboração
          de propostas ,calculo de seguro atravéz de ferramentas multicálculo , suporte para clientes em caso de sinistro e solicitação de serviços do segurado " 
        />
        
        <CardGrande 
          logo="https://i.postimg.cc/8czXXYKr/1566ab-fe0d3e6715a44413a10fc4ed36a3f390-mv2.png" 
          nome="CK ESCOLA DE EDUCAÇÃO INFANTIL" 
          descricao="Trabalhei durante 3 anos como - Auxiliar Administrativo
          realizando as seguintes atividades: controle de pagamentos, atendimento ao cliente,
           contrato de clientes, organização de documentos, emissão de nota fiscal.
            Monitoramento de câmeras e manutenção de redes e impressoras.  
          ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
