import '../styles/AboutPage.css';
import image from '../assets/images/team.jpg';

const AboutPage = () => (
  <div className='aboutPage'>
    <h3 className='aboutPage__headerText'>Meet Us!</h3>
    <section className='aboutPage__details'>
      <img src={image} alt='our-team' className='details__img' />
      <div className='details__text'>
        <p>
          A dedicated team of meteorologists, software engineers, and designers
          came together to create a weather web app. They faced challenges in
          sourcing real-time data and designing a user-friendly interface.
          Despite these hurdles, they produced an accurate and user-friendly app
          that quickly gained popularity. Users praised its simplicity and
          reliability, making it a valuable resource for planning and staying
          informed about weather conditions.
        </p>
        <hr className='details__line' />
        <p>
          The team's hard work and expertise turned a complex problem into a
          valuable solution for users worldwide - this app.
        </p>
      </div>
    </section>
  </div>
);

export default AboutPage;
