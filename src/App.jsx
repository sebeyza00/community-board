import './App.css';
import RestaurantCard from './components/RestaurantCard';

const App = () => {

  return (
    <div className="App">
      <h1>Best Peruvian Food Restaurants in South Florida 🇵🇪</h1>
      <p>See lots of Peruvian restaurants in Miami and no idea where to start? </p>
      <p>My Peruvian friends and I compiled a list of our favorite Peruvian spots below.</p>
      <p>Check them out!</p>
      <table className="Gallery">
        <tbody>
          <tr>
            <td>
              <img src='src/images/cviche105.jpeg' className="restaurantImage" />
              <RestaurantCard restaurantName="CVICHE 105" rating="4/5" website="https://www.google.com/search?q=cviche+105&source=lmns&bih=940&biw=1458&hl=en&sa=X&ved=2ahUKEwjbvuP3l9aEAxXmkLAFHTtPA2MQ0pQJKAB6BAgBEAI&lqi=CgtjdmkgY2hlIDEwNSIDiAEBSMTSnNjlgICACFojEAAQARACGAAYARgCIgtjdmkgY2hlIDEwNSoICAIQABABEAKSARNwZXJ1dmlhbl9yZXN0YXVyYW50qgFEEAEqDyILY3ZpIGNoZSAxMDUoADIeEAEiGtdcDve_J7vqke7bjmR6ybfhpXTAM49PB3G5Mg8QAiILY3ZpIGNoZSAxMDXgAQA#rlimm=17524356283736683821" />
            </td>
            <td>
              <img src='src/images/embarcadero41.png' className="restaurantImage" />
              <RestaurantCard restaurantName="Embarcadero 41" rating="5/5" website="https://www.yelp.com/biz/embarcadero-41-pembroke-pines" />
            </td>
            <td>
              <img src='src/images/aromas-del-peru.jpg' className="restaurantImage" />
              <RestaurantCard restaurantName="Aromas del Peru" rating="4/5" website="https://www.yelp.com/biz/aromas-del-peru-west-miami-4" />
            </td>
            <td>
              <img src='src/images/Sabor-a-Peru.jpg' className="restaurantImage" />
              <RestaurantCard restaurantName="Sabor a Peru" rating="3/5" website="https://www.yelp.com/biz/sabor-a-per%C3%BA-miami-2" />
            </td>
          </tr>
          <tr>
            <td>
              <img src='src/images/pollos-y-jarras.jpg' className="restaurantImage" />
              <RestaurantCard restaurantName="Pollos Y Jarras" rating="5/5" website="https://www.yelp.com/biz/pollos-and-jarras-miami" />
            </td>
            <td>
              <img src='src/images/la-granja.jpeg' className="restaurantImage" />
              <RestaurantCard restaurantName="La Granja" rating="3/5" website="https://www.yelp.com/biz/la-granja-miami-4" />
            </td>
            <td>
              <img src='src/images/pisco-y-nazca-ceviche.jpg' className="restaurantImage" />
              <RestaurantCard restaurantName="Pizco y Nazca" rating="4/5" website="https://www.yelp.com/biz/pisco-y-nazca-washington-2" />
            </td>
            <td>
              <img src='src/images/pollo-inka.jpg' className="restaurantImage" />
              <RestaurantCard restaurantName="El Pollo Inka" rating="4/5" website="https://www.yelp.com/biz/el-pollo-inka-miami-3 " />
            </td>
          </tr>
          <tr>
            <td>
              <img src='src/images/el-gran-inka.jpg' className="restaurantImage" />
              <RestaurantCard restaurantName="El Gran Inka" rating="4/5" website="https://www.yelp.com/biz/el-gran-inka-miami-7" />
            </td>
            <td>
              <img src='src/images/manta-wynwood.jpg' className="restaurantImage" />
              <RestaurantCard restaurantName="Manta Wynwood" rating="5/5" website="https://www.yelp.com/biz/manta-wynwood-miami" />
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}
export default App