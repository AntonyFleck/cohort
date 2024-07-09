// import './index.css'
import {Revenuecard} from "../components/RevenueCard"

function App() {
  return<>
  <div className="grid grid-cols-3">
    <Revenuecard title={"hello"} orderCount={90} amount={4000}></Revenuecard>
    </div>
  </>
}

export default App
