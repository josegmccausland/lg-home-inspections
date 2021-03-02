import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import contactpic from '../assets/contact.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm()

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    })
  }

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      }

      await emailjs.send(
        'service_y8aaqbn',
        'template_pb57gqm',
        templateParams,
        'user_mtBFec9gCzltt2eIOhJ7t'
      )

      reset()
      toastifySuccess()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div class='pricing-content'>
      <div class='page-title'>
        <div class='page-title-text'>
          <h1>Contact Us!</h1>
        </div>
      </div>
      <div className='ContactForm'>
        <div class='contact-img'>
          <img src={contactpic} alt='contact' />
        </div>
        <div className='container'>
          <div class='contact-info'>
            <div class='contact-info-row'>
              <FontAwesomeIcon icon={faPhone} />
              <a href='tel:813-500-2848'><h3>(813) 555-2222</h3></a>
            </div>
            <div class='contact-info-row'>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href='mailto:josegmccausland@gmail.com'><h3>email@domain.com</h3></a>
            </div>
          </div>
          <hr />
          <div className='contactForm'>
            <form id='contact-form' autocomplete='off' onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Row 1 of form */}
              <div className='formRow'>
                <div className='form-small-input'>
                  <input
                    type='text'
                    name='name'
                    autocomplete='off'
                    ref={register({
                      required: { value: true, message: 'Please enter your name' },
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })}
                    className='form-control formInput'
                    placeholder='Name'
                  />
                  {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                </div>
                <div className='form-small-input'>
                  <input
                    type='email'
                    name='email'
                    autocomplete='off'
                    ref={register({
                      required: true,
                      pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    })}
                    className='form-control formInput'
                    placeholder='Email address'
                  />
                  {errors.email && (
                    <span className='errorMessage'>Please enter a valid email address</span>
                  )}
                </div>
              </div>
              {/* Row 2 of form */}
              <div className='formRow'>
                <div className='form-small-input'>
                  <input
                    type='text'
                    name='subject'
                    ref={register({
                      required: { value: true, message: 'Please enter a subject' },
                      maxLength: {
                        value: 75,
                        message: 'Subject cannot exceed 75 characters'
                      }
                    })}
                    className='form-control formInput'
                    placeholder='Subject'
                  />
                  {errors.subject && (
                    <span className='errorMessage'>{errors.subject.message}</span>
                  )}
                </div>
              </div>
              {/* Row 3 of form */}
              <div className='formRow'>
                <div className='form-large-input'>
                  <textarea
                    rows={3}
                    name='message'
                    ref={register({
                      required: true
                    })}
                    className='form-control formInput'
                    placeholder='Message'
                  />
                  {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
              </div>
              <button className='submit-btn' type='submit'>
                Submit
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default ContactForm
