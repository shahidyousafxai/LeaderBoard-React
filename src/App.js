import './styles.css'
import Student from './student'

export default function App() {
  return (
    <div className='App'>
      <Student name='Shahid' university='USTB' score={0} />
      <Student name='Atif' university='USTB' score={0} />
      <Student name='Shahrukh' university='USTB' score={0} />
      <Student name='Hapiz' university='USTB' score={0} />
      <Student name='Bacha' university='USTB' score={0} />
    </div>
  )
}
