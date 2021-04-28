import { useEffect } from "react"
import { useHistory } from "react-router"

const Step3 = () => {
  const history = useHistory()
  useEffect(() => {
    console.log('🧐 DEBUG: listening to history') // eslint-disable-line
    history.listen((location, action) => {
      console.log('🧐 DEBUG: history change') // eslint-disable-line
      console.log('🧐 DEBUG: action', action) // eslint-disable-line
      console.log('🧐 DEBUG: location', location) // eslint-disable-line
      if (location.pathname === '/steps/2') {
        history.replace('/')
      }
    })
  }, [history])
  return (
    <div>
      <h1>Purchase confirmed!</h1>
    </div>
  )
}

export default Step3