import './App.css';
import RestaurantCard from './components/RestaurantCard';

const App = () => {

  return (
    <div className="App">
      <h1>Best Peruvian Food Restaurants in South Florida 🇵🇪</h1>
      <table className="Gallery">
        <tbody>
          <tr>
            <td>
              <img src='src/images/cviche105.jpeg' className="restaurantImage" />
              <RestaurantCard restaurantName="CVICHE 105" rating="4.8/5" website="https://www.google.com/search?q=cviche+105&source=lmns&bih=940&biw=1458&hl=en&sa=X&ved=2ahUKEwjbvuP3l9aEAxXmkLAFHTtPA2MQ0pQJKAB6BAgBEAI&lqi=CgtjdmkgY2hlIDEwNSIDiAEBSMTSnNjlgICACFojEAAQARACGAAYARgCIgtjdmkgY2hlIDEwNSoICAIQABABEAKSARNwZXJ1dmlhbl9yZXN0YXVyYW50qgFEEAEqDyILY3ZpIGNoZSAxMDUoADIeEAEiGtdcDve_J7vqke7bjmR6ybfhpXTAM49PB3G5Mg8QAiILY3ZpIGNoZSAxMDXgAQA#rlimm=17524356283736683821" />
            </td>
            <td>
              <img src='src/images/embarcadero41.png' className="restaurantImage" />
              <RestaurantCard restaurantName="Embarcadero 41" rating="4.7/5" website="https://www.yelp.com/biz/embarcadero-41-pembroke-pines" />
            </td>
            <td><RestaurantCard /></td>
            <td><RestaurantCard /></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}
export default App

