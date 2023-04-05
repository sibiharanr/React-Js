import { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passport, setPassport] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [destination, setDestination] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };



  const displayData = () => {
    return (
      <div>
        <h2>Submitted Form</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Passport: {passport}</p>
        <p>Travel Date: {travelDate}</p>
        <p>Return Date: {returnDate}</p>
        <p>Destination: {destination}</p>
        <p>Reason: {reason}</p>
      </div>
    );
  };

  const displayForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <br />
        <label>
          Passport:
          <input type="text" value={passport} onChange={(e) => setPassport(e.target.value)} required />
        </label>
        <br />
        <label>
          Travel Date:
          <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Return Date:
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Destination:
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </label>
        <br />
        <label>
          Reason for Travel:
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div>
      {submitted ? displayData() : displayForm()}
    </div>
  );
}

export default RegistrationForm;