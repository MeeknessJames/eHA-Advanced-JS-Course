import React, { useState } from 'react';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!age) {
      newErrors.age = "Age is required";
    } else if (parseInt(age) < 18) {
      newErrors.age = "You must be 18 or older";
    }
    if (!course) newErrors.course = "Please select a course";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);

      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
      setCourse('');
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      {isSubmitted && <p className="success">Registration successful!</p>}

      <div>
        <label>First Name:</label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>

      <div>
        <label>Last Name:</label>
        <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div>
        <label>Course:</label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select a course</option>
          <option value="React Basics">React Basics</option>
          <option value="Advanced JS">Advanced JS</option>
          <option value="Fullstack Development">Fullstack Development</option>
        </select>
        {errors.course && <p className="error">{errors.course}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
