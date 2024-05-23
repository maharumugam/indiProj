import React from 'react'
import image1 from '../Images/Colorful.png'
export default function Home() {
  return (
    <div>
      <div className='home-first'>
        <img src={image1} alt='img' />
      </div>
      <div className='home-content1'>
        <h1>A future where everyone has a healthy, sustainable diet.</h1>
        <p>We work to help change the food environment through strategic critique, product reformulation, training and advice, and helping corporate nutritionists to make the case for healthier, more sustainable products.<p />
          <p> In collaboration with others, we advocate to change the food environment especially in schools and care settings, promoting the importance of nutrition on school attendance and attainment, campaigning for the most vulnerable to have access to free school meals and holiday clubs, and to appropriate nutrition in care homes and in supported living environments.</p>
          We educate people directly through marketing and communications campaigns; we work with schools reaching parents, teachers and the wider school community via the Food - a fact of life programme and through our flagship Healthy Eating Week </p>
      </div>
      <div className='home-content2'>
        <h1>We support sector-wide campaigns in collaboration with others,where they are evidence-based.</h1>
        <p>The reputation of the British Nutrition Foundation is anchored in our scientific expertise and an ability to translate nutrition science for a wide range of audiences.</p>
        <p>We continue to advance the study of and research into nutrition for the public benefit, both in our work with schools and through thought-leading content pieces, rapid evidence reviews, the Nutrition Bulletin and our Awards Programme.</p>
        </div>
    </div>
  )
}




