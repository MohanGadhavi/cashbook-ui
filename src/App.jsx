import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from './components/ui/button';
import {
  faArrowUpFromBracket,
  faBars,
  faBitcoinSign,
  faDollarSign,
  faEllipsis,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import DashboardCard from './components/DashboardCard';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="h-screen w-screen font-roboto bg-gray-800 text-white">
      <header className="h-14 px-4 text-2xl  py-2 flex justify-between items-center bg-gray-900 text-white ">
        <h1 className="">
          Cash
          <span className="ml-1.5 font-semibold">
            <FontAwesomeIcon
              icon={faBitcoinSign}
              className="rotate-12 text-green-400"
            />
            ook
          </span>
        </h1>
        <button type="button" className="px-2">
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </header>
      <main className="px-4 py-2">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
