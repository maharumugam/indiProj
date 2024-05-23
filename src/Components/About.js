import React from 'react'
import image1 from '../Images/Friedrice.png'
import image2 from '../Images/briyani.png'
import image3 from '../Images/curd.png'
import image4 from '../Images/pav.png'
import image5 from '../Images/mush.png'
import image6 from '../Images/kich.png'
import image7 from '../Images/sambhar.png'
import image8 from '../Images/naan.png'
import image9 from '../Images/bone.png'
import image10 from '../Images/noodles.png'
import image11 from '../Images/cutlet.png'
import image12 from '../Images/steak.png'
export default function About() {
  return (
    <div className='about'>
      <h1 style={{ margin: 20 }}>
        <center>Pick a card</center>
      </h1>

      <div className='food'>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">

              <img src={image1} alt="Avatar" height={200} width={300} />
              <h1>Friedrice</h1>
            </div>
            <div class="flip-card-back">
              <p>Quantity:one cup (about 200 grams)</p>
              <p>Calories:250-300 kcal</p>
              <p>Protein:5-6 grams</p>
              <p>Carbohydrates:</p>
              <p>Fat:10-12 grams </p>
              <p>Fibre:1-2 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image2} alt="Avatar" height={200} width={300} />
            <h1>Briyani</h1>
            </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (200 grams)</p>
              <p>Calories:300-450 kcal</p>
              <p>Protein:15-20 grams</p>
              <p>Carbohydrates:40-50 grams</p>
              <p>Fat:10-15 grams </p>
              <p>Fibre: 2-4 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front"> 
            <img src={image3} alt="Avatar" height={200} width={300} />
            <h1>Curd rice</h1>
            </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (200 grams)</p>
              <p>Calories: 150-200 kcal</p>
              <p>Protein:5-6 grams</p>
              <p>Carbohydrates:25-30 grams</p>
              <p>Fat: 3-5 grams</p>
              <p>Fibre:1-2 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image4} alt="Avatar" height={200} width={300} />
            <h1>Pav Bhaji</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 plate (includes bhaji and 2 pavs)</p>
              <p>Calories:400-500 kcal</p>
              <p>Protein:10-12 grams</p>
              <p>Carbohydrates:60-70 grams</p>
              <p>Fat:15-20 grams </p>
              <p>Fibre: 5-7 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image5} alt="Avatar" height={200} width={300} />
            <h1>pulao</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (200 grams)</p>
              <p>Calories:200-250 kcal</p>
              <p>Protein:5-7 grams</p>
              <p>Carbohydrates:35-40 grams</p>
              <p>Fat: 5-7 grams</p>
              <p>Fibre: 2-4 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image6} alt="Avatar" height={200} width={300} />
            <h1>Kichadi</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (200 grams)</p>
              <p>Calories:200-250 kcal</p>
              <p>Protein: 6-8 grams</p>
              <p>Carbohydrates:35-40 grams</p>
              <p>Fat:3-5 grams </p>
              <p>Fibre: 4-6 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image7} alt="Avatar" height={200} width={300} />
            <h1>Sambhar</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (240 grams)</p>
              <p>Calories:150-200 kcal</p>
              <p>Protein: 7-9 grams</p>
              <p>Carbohydrates:20-25 grams</p>
              <p>Fat:3-5 grams </p>
              <p>Fibre: 4-6 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image8} alt="Avatar" height={200} width={300} />
            <h1>Naan</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 piece (90 grams)</p>
              <p>Calories:260-300 kcal</p>
              <p>Protein: 7-9 grams</p>
              <p>Carbohydrates:45-50 grams</p>
              <p>Fat:6-10 grams </p>
              <p>Fibre:2-3 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image9} alt="Avatar" height={200} width={300} />
            <h1>Bone Broth</h1>  </div>
            <div class="flip-card-back">
              <p>Quantity: 1 cup(240 ml)</p>
              <p>Calories:30-60 kcal </p>
              <p>Protein: 6-10 grams</p>
              <p>Carbohydrates:0-2 grams</p>
              <p>Fat:  0-3 grams</p>
              <p>Fibre:0</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image10} alt="Avatar" height={200} width={300} />
            <h1>Noodles</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (140 grams)</p>
              <p>Calories:190-220 kcal</p>
              <p>Protein: 6-8 grams</p>
              <p>Carbohydrates:38-45grams</p>
              <p>Fat:1-3 grams </p>
              <p>Fibre:2-3 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image11} alt="Avatar" height={200} width={300} />
            <h1>Cutlet</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (140 grams)</p>
              <p>Calories:190-220 kcal</p>
              <p>Protein: 6-8 grams</p>
              <p>Carbohydrates:38-45grams</p>
              <p>Fat:1-3 grams </p>
              <p>Fibre:2-3 grams</p>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img src={image12} alt="Avatar" height={200} width={300} />
            <h1>Steak</h1> </div>
            <div class="flip-card-back">
              <p>Quantity:1 cup (140 grams)</p>
              <p>Calories:190-220 kcal</p>
              <p>Protein: 6-8 grams</p>
              <p>Carbohydrates:38-45grams</p>
              <p>Fat:1-3 grams </p>
              <p>Fibre:2-3 grams</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
