
import Navbar from './components/Navbar';
import Moviecard from './components/Moviecard';
const App = () => {
  return (
    <div>
     <Navbar/>
     <main className="p-3">
      <div className="row">
      <div className="col-4">
          <Moviecard title="Ghill - (2004)" image="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/medium/ghilli-et00000976-1713338431.jpg" desc="Velu, an aspiring Kabaddi player, is in Madurai to participate in one of the regional matches when he rescues Dhanalakshmi from Muthupandi, a powerful man keen on marrying the girl against her wishes."/>
          </div>
          <div className="col-4">
            <Moviecard title="Dheena - (2001)" image="https://assets-in.bmscdn.com/discovery-catalog/events/et00109724-jwyfrvyvua-landscape.jpg" desc="Dheena, a gangster's confidante, learns that his brother has fallen for the gangster's sister. However, her accidental death leads to a precarious situation after the gangster vows to kill her lover." />
          </div>
          <div className="col-4">
            <Moviecard title="Mankatha - (2011)" image="https://m.media-amazon.com/images/M/MV5BZjEwYjkxZGEtMjZlMy00MDZhLTk0MWYtNDY0NTZiNmZkM2Q4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" desc="Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot." />
          </div>
        
        </div>
      </main>

    </div>
  
  )
}
export default App;
