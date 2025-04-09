import React, { useState } from 'react';
import './css/RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    company: '',
    mobile: '',
    email: '',
    website: '',
    privacyPolicy: false
  });

  const [validated, setValidated] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFocus = (field) => setFocused(field);
  const handleBlur = () => setFocused(null);

  const isFieldValid = (field) => {
    if (!validated) return true;

    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(formData.email);
    }

    if (field === 'website') {
      if (!formData.website) return true;
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;
      return urlRegex.test(formData.website);
    }

    return formData[field] !== '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setSubmitting(true);

    // Send form data to backend (MySQL)
    fetch('http://localhost:5000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Submission failed');
        return res.json();
      })
      .then(() => {
        setSubmitting(false);
        setSubmitted(true);

        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            jobTitle: '',
            company: '',
            mobile: '',
            email: '',
            website: '',
            privacyPolicy: false
          });
          setValidated(false);
          setSubmitted(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Submit error:', err);
        setSubmitting(false);
      });
  };

  if (submitted) {
    return (
      <div className="register-section d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="success-message text-center p-5 animate__animated animate__fadeIn">
                <div className="success-icon mb-4">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h2 className="mb-3">Registration Successful!</h2>
                <p className="lead">Thank you for registering, {formData.firstName}!</p>
                <p>We've sent a confirmation email to <strong>{formData.email}</strong>.</p>
                <p>We look forward to seeing you at the event!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white register-text">
            <h1 className="animate__animated animate__fadeInLeft">Register Now</h1>
            <h5 className="animate__animated animate__fadeInLeft animate__delay-1s">Join us for an unforgettable experience!</h5>

            <div className="registration-steps mt-5 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">Fill the form</div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">Receive confirmation</div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">Join the event</div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-box animate__animated animate__fadeInRight">
              <div className="form-progress-indicator mb-3">
                <div className="progress" style={{ height: "8px" }}>
                  <div 
                    className="progress-bar progress-bar-striped progress-bar-animated" 
                    role="progressbar" 
                    style={{ 
                      width: `${Object.values(formData).filter(Boolean).length / Object.keys(formData).length * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="text-end text-muted form-progress-text">
                  <small>
                    {Object.values(formData).filter(Boolean).length} of {Object.keys(formData).length} completed
                  </small>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className={validated ? 'was-validated' : ''}>
                {[
                  { id: 'firstName', label: 'First Name' },
                  { id: 'lastName', label: 'Last Name' },
                  { id: 'jobTitle', label: 'Job Title' },
                  { id: 'company', label: 'Company' },
                  { id: 'mobile', label: 'Mobile Number', type: 'tel' },
                  { id: 'email', label: 'Email Address', type: 'email' },
                  { id: 'website', label: 'Company Website URL', type: 'url' }
                ].map(({ id, label, type = 'text' }) => (
                  <div key={id} className={`mb-3 form-floating ${focused === id ? 'focused-input' : ''}`}>
                    <input
                      type={type}
                      className={`form-control ${validated && !isFieldValid(id) ? 'is-invalid' : ''}`}
                      id={id}
                      name={id}
                      placeholder={label}
                      value={formData[id]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(id)}
                      onBlur={handleBlur}
                      required
                    />
                    <label htmlFor={id}>{label}</label>
                    <div className="invalid-feedback">Please provide a valid {label.toLowerCase()}.</div>
                  </div>
                ))}

                <div className="mb-3 text-white checkbox-area">
                  <div className="form-check animate__animated animate__pulse animate__delay-3s">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="privacyCheck"
                      name="privacyPolicy"
                      checked={formData.privacyPolicy}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="privacyCheck">
                      By filling out the registration form to attend our event, you agree and consent to <a href="#" className="privacy-link">Cogent Solutions Privacy Policy</a>.
                    </label>
                    {validated && !formData.privacyPolicy && (
                      <div className="invalid-feedback d-block">
                        You must agree to the privacy policy.
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn register-button w-100 position-relative"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
