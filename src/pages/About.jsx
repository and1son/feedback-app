import Card from '../components/shared/Card'
function About() {
  return <Card>
    <div className='about'>
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for something</p>
        <p>Version: 6.6.3</p>
        <p>
            <a href='/'>Back to Home</a>
        </p>
    </div>
  </Card>;
}

export default About;
