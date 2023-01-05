import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import Clock from './components/ClassComponent';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([]);

  // console.log(showModal)

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false);
  }



  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const displayModal = () => {
    setShowModal(true);
  }

  const eventTitle = "Events in your Area"
  const eventSubtitle = "Events in Mario Kingdom"

  return (
    <div className="App">
      <Clock  />
      
      <Title title={eventTitle} subtitle={eventSubtitle} />

      {showEvents && (
          <div>
          <button onClick={() => {
            setShowEvents(false)
          }}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
        <button onClick={() => {
          setShowEvents(true)
        }}>show events</button>
      </div>
      )}

    
      {showEvents && <EventList handleEventClick={handleClick} events={events} />}
      {/* <Modal>
        <h2>10% Off Coupon Code</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {/* <button onClick={displayModal}>display modal</button> */}
      {/* {showModal && (<Modal handleClose={handleClose} isSalesModal={false}>
        <h2>10% Off Coupon Code</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal>)} */}
      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
        </Modal>}

        <div>
          <button onClick={() => setShowModal(true)}>Add New Event</button>
        </div>

    </div>
  );
}

export default App;
