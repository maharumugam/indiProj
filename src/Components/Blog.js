import React from 'react'
import Card from 'react-bootstrap/Card';
import image4 from '../Images/protein.png'
import image5 from '../Images/fat.png'
import image6 from '../Images/vitamin.png'
import image7 from '../Images/hydra.png'
import image8 from '../Images/healthy.png'
import image9 from '../Images/fibre.png'
import image10 from '../Images/sugar.png'
import image11 from '../Images/starchy.png'
export default function Blog() {
  return (
    <div>
      <div className='fm'>
      <h1>Nutritional Information</h1>
      <h3>We believe that healthy, sustainable diets should be accessible to all.</h3>

      </div>     
      
      <div className='blog-card'>

        <div>
          <Card >
            <Card.Img variant="top" src={image4} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Protein</Card.Title>
              <Card.Text>
                Protein is a macronutrient that people need for energy as well as growth and maintenance of the body.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={image5} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Fat</Card.Title>
              <Card.Text>
                Fat is an important part of a healthy, balanced diet. We need fat to help us absorb certain vitamins.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={image6} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Vitamins </Card.Title>
              <Card.Text>
                Vitamins and minerals are essential nutrients which we must get from our diet.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card >
            <Card.Img variant="top" src={image7} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Hydration</Card.Title>
              <Card.Text>
                Our bodies need water for many functions including regulating temperature, physical activity.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card >
            <Card.Img variant="top" src={image8} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Nutrition </Card.Title>
              <Card.Text>
                We know that people need many different nutrients if they are to maintain health and reduce the risk of diet-related diseases.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card >
            <Card.Img variant="top" src={image9} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Fibre</Card.Title>
              <Card.Text>
                It is important to eat a variety of fibre-containing foods as it helps to keep our digestive system healthy.
              </Card.Text>
            </Card.Body>
          </Card>
        </div><div>
          <Card >
            <Card.Img variant="top" src={image10} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Sugar</Card.Title>
              <Card.Text>
                Sugar is a simple carbohydrate. Although we may think of ‘sugar’ as one thing, there are several types of sugars.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card >
            <Card.Img variant="top" src={image11} height={250} />
            <Card.Body>
              <Card.Title style={{ textAlign: 'center', fontSize: 40 }}>Starchy Foods</Card.Title>
              <Card.Text>
                Starchy foods are foods that are rich in starch, which is a type of carbohydrate. They are sometimes called ‘carbs’.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
