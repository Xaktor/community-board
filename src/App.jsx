import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div class="Header">
        <img src="https://images.squarespace-cdn.com/content/v1/5c5c53f3fb22a55760821802/1619031945296-PAT85SVENV4QI5HIHATR/Website+Icons-02.png"/>
      </div>
      <h1>High Schools in NYC</h1>
      <div class="container">
        <div class="card">
          <img src="https://live.staticflickr.com/1824/28058442767_26e01d8cd7_h.jpg"
          width="200"
          height="200"/>
          <p> The Bronx High School of Science</p>
          <a href="https://www.bxscience.edu">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://live.staticflickr.com/7801/33077843338_a6e39d2af4_h.jpg"
          width="200"
          height="200"/>
          <p> Townsend Harris High School</p>
          <a href="https://www.thhs.qc.edu">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://hsmse.org/wp-content/uploads/2021/04/Screen-Shot-2021-04-17-at-10.57.07-AM.jpg"
          width="200"
          height="200"/>
          <p> High School for Mathematics, Science and Engineering at City College</p>
          <a href="https://hsmse.org">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stuy_HS_sunny_jeh.JPG/1200px-Stuy_HS_sunny_jeh.JPG"
          width="200"
          height="200"/>
          <p> Stuyvesant High School</p>
          <a href="https://stuy.enschool.org">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Bard_High_School_Early_College.jpg"
          width="200"
          height="200"/>
          <p> Bard High School Early College Queens</p>
          <a href="https://bhsec.bard.edu/queens/">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://nypost.com/wp-content/uploads/sites/2/2020/10/201003-beacon-covid-diploma.jpg?quality=75&strip=all"
          width="200"
          height="200"/>
          <p> M479 Beacon High School</p>
          <a href="https://www.beaconschool.org">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://nypost.com/wp-content/uploads/sites/2/2022/05/220406-yang-nyp-features-laguardia-high-school-44.jpg?quality=75&strip=all&w=744"
          width="200"
          height="200"/>
          <p> LaGuardia High School</p>
          <a href="https://www.laguardiahs.org">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://navillusinc.com/wp-content/uploads/2017/08/Frank-Sinatra-High-School.jpg"
          width="200"
          height="200"/>
          <p> Frank Sinatra School Of The Arts High School</p>
          <a href="https://franksinatraschoolofthearts.org">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://untappedcities.com/wp-content/uploads/2014/08/Aviation-High-School-Queens-NYC-6.jpg"
          width="200"
          height="200"/>
          <p> Aviation High School</p>
          <a href="https://www.aviationhs.net">
          <button>School Website</button>
          </a>
        </div>
        <div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/August_Martin_HS.jpg"
          width="200"
          height="200"/>
          <p> August Martin High School</p>
          <a href="https://www.augustmartin.org">
          <button>School Website</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
