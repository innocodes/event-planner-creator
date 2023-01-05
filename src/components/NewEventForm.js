import { useState, useRef } from 'react';
import './NewEventForm.css'

export default function NewEventForm({addEvent}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
    // const title = useRef();
    // const date = useRef();

  const [location, setLocation] = useState('ilesha');

  const handleChange = (e) => {
    setTitle(e.target.value);

  }

  const resetForm = () => {
    // title.current.value = ''
    // date.current.value = ''
    setTitle('');
    setDate('');
    setLocation('ilesha');
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, date);
    const event = {
      // title: title.current.value,
      // date: date.current.value,
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }

  console.log(event);


    addEvent(event)
    resetForm();
  }
 

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label>
        <span>Event Title: </span>
        <input 
          type="text" 
          // ref={title}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
    
        ṣ/>
      </label>
      <label>
        <span>Event Date: </span>
        <input 
          type="date" 
          // ref={date}
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event location</span>
        <select onChange={(e) => {setLocation(e.target.value)}}>
          <option value="ilesha">Ilesha</option>
          <option value="osogbo">Osogbo</option>
          <option value="lagos">Lagos</option>
        </select>

      </label>
      <button>Submit</button>
      
    </form>
  )
}