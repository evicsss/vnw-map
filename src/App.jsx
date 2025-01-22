import Card from "./components/card/Card";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import "./App.scss";

export default function App(){
  const plantas = [
    {
      nome: 'Comigo-Ninguém-Pode',
      imagem: 'https://cdn.awsli.com.br/800x800/41/41127/produto/10879547/72e297307d.jpg',
      nomeCientifico: 'Dieffenbachia spp.',
      classe: 'Magnoliopsida',
      familia: 'Araceae',
      sobre: 'A Comigo-Ninguém-Pode, ou Dieffenbachia, é uma planta ornamental muito popular, devido à sua folhagem exuberante e fácil manutenção. No entanto, suas folhas contêm cristais de oxalato de cálcio, que são tóxicos e podem causar irritações graves nas mucosas, além de problemas gastrointestinais se ingeridos. Por isso, seu nome popular é uma advertência contra o consumo.',
      tipo: 'Ornamental e Tóxica'
    },
    {
      nome: 'Espada de São Jorge',
      imagem: 'https://boxloja-std-assets.nyc3.cdn.digitaloceanspaces.com/lojas/9s0e9/produtos/bb686fd8-f7d5-4c37-aa85-36049b4656d3.jpg',
      nomeCientifico: 'Sansevieria trifasciata',
      classe: 'Liliopsida',
      familia: 'Asparagaceae',
      sobre: 'A Espada de São Jorge é uma planta resistente, muito conhecida por suas folhas rígidas e em formato de espada. É uma planta ornamental popular em interiores, sendo considerada uma protetora contra energias negativas. Também é conhecida por sua capacidade de purificar o ar.',
      tipo: 'Ornamental e Protetora'
    },
    {
      nome: 'Arruda',
      imagem: 'https://cdn.leroymerlin.com.br/products/arruda_pote_11_89208224_f549_600x600.jpg',
      nomeCientifico: 'Ruta graveolens',
      classe: 'Magnoliopsida',
      familia: 'Rutaceae',
      sobre: 'A Arruda é uma planta aromática, tradicionalmente associada à proteção contra energias negativas. Na cultura popular, ela é muito usada em rituais de purificação e para afastar o mal.',
      tipo: 'Aromática e Protetora'
    },
    {
      nome: 'Bonsai de Ficus',
      imagem: 'https://www.mistralbonsai.com/wp-content/uploads/2018/02/134113.jpg',
      nomeCientifico: 'Ficus retusa',
      tipo: 'Planta Ornamental (Bonsai)',
      sobre: 'O Bonsai de Ficus é uma planta ornamental que simboliza paz e equilíbrio. Requer cuidados especiais com rega, poda e iluminação, sendo ideal para quem aprecia arte e paciência.',
    },
    {
      nome: 'Erva-de-Gato',
      imagem: 'https://www.utivet.com.br/media/upload/ckeditor/2023/08/15/sem-titulo-2.png',
      nomeCientifico: 'Nepeta cataria',
      classe: 'Magnoliopsida',
      familia: 'Lamiaceae',
      sobre: 'A Erva-de-Gato é uma planta conhecida por atrair gatos, devido ao composto nepetalactona encontrado em suas folhas. Ela também é usada para aliviar sintomas como dor de cabeça e estresse.',
      tipo: 'Aromática e Atrativa para Animais'
    },
    {
      nome: 'Manjericão',
      imagem: 'https://images.tcdn.com.br/img/img_prod/799330/manjericao_gemini_1805_1_20200920122250.jpg',
      nomeCientifico: 'Ocimum basilicum',
      classe: 'Lamiales',
      familia: 'Lamiaceae',
      sobre: 'O Manjericão é uma planta aromática muito utilizada na culinária, especialmente em pratos italianos, como o molho pesto. Também é conhecido por suas propriedades medicinais, como aliviar problemas digestivos.',
      tipo: 'Aromática e Medicinal'
    },
    {
      nome: 'Hortelã',
      imagem: 'https://cdn.leroymerlin.com.br/products/hortela_miuda_pt14_afonso_91993391_ea6f_600x600.jpg',
      nomeCientifico: 'Mentha spicata',
      classe: 'Lamiales',
      familia: 'Lamiaceae',
      sobre: 'A Hortelã é uma planta aromática que se destaca por seu frescor e aroma característico. É amplamente utilizada para fazer chá e para tratar problemas digestivos e náuseas.',
      tipo: 'Aromática e Medicinal'
    },
    {
      nome: 'Girassol',
      imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/76329612/mini-girassol-amarelo-veiling-holambra-vaso-15cm-1.jpg?v=638000546003130000',
      nomeCientifico: 'Helianthus annuus',
      classe: 'Asterales',
      familia: 'Asteraceae',
      sobre: 'O Girassol é uma planta ornamental conhecida por suas grandes flores amarelas que seguem o movimento do sol. Além de sua beleza, o girassol tem sementes nutritivas e é cultivado para produção de óleo.',
      tipo: 'Ornamental e Comestível'
    },
    {
      nome: 'Lótus',
      imagem: 'https://img.freepik.com/fotos-premium/lotus-rosa-e-fundo-branco-flor-nacional-da-ndia-e-simbolo-na-cultura-asiatica_908985-107026.jpg',
      nomeCientifico: 'Nelumbo nucifera',
      classe: 'Magnoliopsida',
      familia: 'Nelumbonaceae',
      sobre: 'O Lótus é uma planta aquática que simboliza pureza e renovação, especialmente em culturas asiáticas. Suas flores grandes e bonitas emergem da água e são comumente usadas em rituais religiosos.',
      tipo: 'Aquática e Ornamental'
    },
    {
      nome: 'Magnólia',
      imagem: 'https://img.elo7.com.br/product/zoom/2BB5CCF/galho-de-magnolia-flor-artificial-em-silicone-toque-real-plantas-e-flores-artificiais.jpg',
      nomeCientifico: 'Magnolia spp.',
      classe: 'Magnoliopsida',
      familia: 'Magnoliaceae',
      sobre: 'A Magnólia é uma árvore ornamental conhecida por suas grandes flores, que podem ser brancas, rosas ou roxas. Ela é símbolo de nobreza e dignidade, sendo apreciada por sua beleza.',
      tipo: 'Ornamental'
    },
    {
      nome: 'Araçá-Vermelho',
      imagem: 'https://fabricadearvores.com.br/loja/wp-content/uploads/2022/01/fabrica-de-arvores-araca-amarelo-m.jpg',
      nomeCientifico: 'Psidium cattleianum',
      classe: 'Magnoliopsida',
      familia: 'Myrtaceae',
      sobre: 'O Araçá-Vermelho é uma árvore frutífera nativa do Brasil, parente próximo da goiabeira. Seus frutos são pequenos, de cor vermelha intensa, com polpa doce e aromática. Além de serem consumidos in natura, são ideais para a produção de sucos, geleias e sobremesas. É uma planta resistente e atrativa para aves, sendo também usada em projetos de reflorestamento.',
      tipo: 'Frutífera e Nativa'
    },
    {
      nome: 'Jiboia',
      imagem: 'https://images.tcdn.com.br/img/img_prod/798302/planta_jiboia_epipremmum_pinnatum_629_1_4e25c9128899f41618ae4d56c9cb6e8f.jpg',
      nomeCientifico: 'Epipremnum aureum',
      classe: 'Magnoliopsida',
      familia: 'Araceae',
      sobre: 'A Jiboia é uma planta trepadeira, popular em jardins internos, conhecida pela sua capacidade de se adaptar a diferentes condições de iluminação. É uma planta resistente e fácil de cuidar.',
      tipo: 'Trepadeira e de Interior'
    },
    {
      nome: 'Pitangueira',
      imagem: 'https://fabricadearvores.com.br/loja/wp-content/uploads/2021/11/fabrica-de-arvores-pitanga-p-folha.jpg',
      nomeCientifico: 'Eugenia uniflora',
      classe: 'Magnoliopsida',
      familia: 'Myrtaceae',
      sobre: 'A Pitangueira é uma árvore de pequeno porte nativa do Brasil. Seus frutos vermelhos são saborosos e ricos em vitamina C.',
      tipo: 'Frutífera e Nativa',
    },
    {
      nome: 'Costela-de-Adão',
      imagem: 'https://cdn.awsli.com.br/800x800/163/163535/produto/81832665/costela-4o6yecz24s.jpg',
      classe: 'Magnoliopsida',
      familia: 'Araceae',
      sobre: 'A Costela-de-Adão é uma planta trepadeira tropical que é muito valorizada por suas folhas grandes e recortadas. É uma das mais populares plantas de interior, especialmente devido à sua aparência exótica.',
      tipo: 'Trepadeira e Ornamental'
    },
    {
      nome: 'Cacto Mandacaru',
      imagem: 'https://veiling.com.br/wp-content/uploads/2025/01/cactus-mandacaru-6786e8f91c03e.jpeg',
      nomeCientifico: 'Cereus jamacaru',
      tipo: 'Cactáceo',
      sobre: 'O Mandacaru é um cacto típico da caatinga brasileira, resistente a climas secos. Ele é símbolo de força e resiliência, além de produzir flores grandes e belas que desabrocham à noite.',
    },
    {
      nome: 'Jade',
      imagem: 'https://cdn.awsli.com.br/800x800/257/257075/produto/256579375/crassula-ovata-mill-druce-p0xhot6em4.jpg',
      nomeCientifico: 'Crassula ovata',
      classe: 'Magnoliopsida',
      familia: 'Crassulaceae',
      sobre: 'A planta Jade é uma suculenta popular por suas folhas carnudas e arredondadas. Ela é frequentemente cultivada em jardins internos e é vista como símbolo de boa sorte e prosperidade.',
      tipo: 'Suculenta'
    }
  ];   

  return (
    <div> 
      <Header />
    <div className="app">
      <section className="card-container">
        {plantas.map((planta, index) => (
          <Card key={index} {...planta} />
        ))}
      </section>
    </div>
    <Footer />
  </div>
  );
}