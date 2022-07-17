import logo from './logo.svg';
import './App.css';
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import { Button } from 'react-bootstrap';

function App() {
  const items=[
    {name:'Doll',description:'This doll is so much beautiful,its good for baby',img:'https://c.tenor.com/UgzddlTwS9YAAAAM/dolls.gif',price:'$22',discount:'$2'},
    {name:'Dragon fruit',description:'Dragon fruit containe many type of vitamin',img:'https://64.media.tumblr.com/92e3a08a5faf240d4ea623db73a52be8/eb23669389238df7-19/s400x600/c428d102076c6520185b1bc25a91a2ec9b7359d6.gifv',price:'$14',discount:'$0.4'},
    {name:'Mobile',description:'Mobile is modt important thing in daily life',img:'https://i.pinimg.com/originals/e4/03/96/e40396fb57517819b8ec00c30ec0f181.gif',price:'$34',discount:'$5'},
    {name:'Glass',description:'Its a nice decoration glass',img:'https://i.gifer.com/ROSe.gif',price:'$10',discount:'$1'},
    {name:'Light',description:'Its a nice decoration light',img:'https://farm9.static.flickr.com/8094/8503592516_5a0bca1055.jpg',price:'$10',discount:'$2'},
    {name:'Waterlily',description:'waterlily is our national flower',img:'https://i.gifer.com/g0po.gif',price:'$3',discount:'$0'},
    {name:'Cat',description:'So much cute cat',img:'https://c.tenor.com/JSVposAw81oAAAAd/angry-cat.gif',price:'$25',discount:'$'},
    {name:'Fish',description:'Nice fish is colorful',img:'https://i.pinimg.com/originals/44/cd/5c/44cd5c933fd7f148bb534ab2510c1032.gif',price:'$19',discount:'$0'},
    {name:'Computer',description:'An important thing is daily life',img:'https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDY0NTMyOTQzNDgwNDU0/buying-your-first-desktop-computer.jpg',price:'$154',discount:'$7'},
    {name:'Mango',description:'So much delicious fruit',img:'https://www.bigbasket.com/media/uploads/p/l/40127994_6-fresho-kesar-mango.jpg',price:'$13',discount:'$1'},
    {name:'lobster',description:'Its my favourite one',img:'https://ichef.bbci.co.uk/news/976/cpsprodpb/57B0/production/_123484422_lobby.jpg',price:'$9',discount:'$0'},
    {name:'Bird',description:'Its my favourite one',img:'https://cdn.britannica.com/91/173391-131-E2106C95/macaw-Quantana-Roo-Mexico.jpg',price:'$78',discount:'$1'},
    {name:'Mobile',description:'Mobile is modt important thing in daily life',img:'https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-a53-5g-a536-sm-a536elbdins-thumb-531436088?$320_320_PNG$',price:'$34',discount:'$4'},
    {name:'Glass',description:'Its a nice decoration glass',img:'https://cdn.britannica.com/59/133459-050-46B84853/goblet-glass-enamel-Iran-Brooklyn-Museum-New.jpg',price:'$10',discount:'$1'},
    {name:'Light',description:'Its a nice decoration light',img:'https://pbs.twimg.com/media/EFpsLDAUUAEaSHA?format=jpg&name=large',price:'$10',discount:'$1'},
  ]

  

  return (
    
  <div className='full'>
    
     <div className='griding-two'>
      <h1>It's a live site of colourful image and animated gif</h1>
      {/* <button type="button" className="btn btn-warning">Card</button> */}
      <Button variant="warning">Booked</Button>
      
     </div>
     <div className='griding-one'>
      <div className="row row-cols-1 row-cols-lg-4 row-cols-8
      g-10 mx-auto">
      {
        items.map(item => <Card
        item = {item}
        ></Card>)
      }
      
     </div>
     </div>
     <div className="griding-last">
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet illo dolorum deserunt accusantium sunt magni earum vero, maxime ipsam explicabo eum ex mollitia veniam vitae libero obcaecati laborum possimus modi? Consequatur ipsa voluptatum placeat tempore? Quo repudiandae maxime recusandae at nam nostrum numquam reiciendis mollitia optio earum voluptas voluptates error veritatis labore inventore atque, adipisci ea quis debitis quaerat exercitationem rerum aliquid consequatur obcaecati? Nulla velit eius odit at sapiente quasi est nostrum ullam nihil cumque, vel aliquid illo nesciunt ipsum reiciendis facilis, quaerat corrupti nemo aperiam? Beatae quae quam itaque autem sed quo, omnis earum molestiae animi architecto aspernatur vitae accusantium nam voluptate. Nobis suscipit temporibus ut voluptate dignissimos placeat reprehenderit sit facilis. Accusantium, quidem. Iste, fugiat vel quidem expedita nobis, officiis accusantium autem magnam error, et architecto? Eum aliquam ipsa commodi consequatur provident rerum quod at autem quae eligendi omnis officia consectetur iure distinctio, nihil ratione esse accusamus maiores vitae aperiam! Debitis numquam quas, voluptatum voluptatem rem eum ducimus doloribus libero id provident quae quis iure ipsum ipsam minima officia repellendus asperiores non, accusantium placeat assumenda incidunt. Culpa quidem ad, ex velit debitis fugit ut illum, nihil odit inventore, est tempora sit cupiditate aliquam aspernatur. Ex enim quos, corrupti distinctio exercitationem odit suscipit eos voluptatem atque ducimus veniam quo ipsum hic nulla qui obcaecati reiciendis asperiores reprehenderit. Iusto non consequuntur reiciendis. Quo, expedita dolore! Ex impedit nisi mollitia dignissimos dolorum accusamus ut, amet assumenda beatae soluta consectetur. Totam tenetur quam voluptas optio neque repudiandae quos, enim vitae eligendi voluptatum! Ipsam tempore iure accusamus quidem hic esse rem sint ratione, at magni dolorem aut consectetur alias maiores delectus, minima quae velit distinctio, provident impedit eum! Officiis, provident molestiae! Nulla minima libero veniam at ab harum facilis, delectus adipisci, asperiores deleniti laborum enim, quas ullam quisquam ad illum voluptatum necessitatibus.</p>
     </div>
     
     </div>
  );
}

export default App;
