import {Link} from 'react-router-dom'

const Step1 = () => {
  return (
    <div>
      <h1>Step 1</h1>
      <Link to="/steps/2">Next</Link>
    </div>
  )
}

export default Step1