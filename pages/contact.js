import { useForm } from "react-hook-form"
import styles from '../styles/Home.module.css';
import Links from "../components/Links";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    const response = fetch('/api/send-email', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const result = await response
    if (result.ok) {
      alert("Email sent successfully!");
    }
  }

  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.containerForForm}>
        <div className={styles.formContainer}>
          <div>
            <h1 className={styles.formText}>
              We want to hear from you!
            </h1>
            <p className={styles.hello}>If you are interested in supporting our efforts or have any questions please complete the form.</p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.styledForm}>
            <div className={styles.formGroup}>
              <input placeholder="Name" className={styles.formInput} {...register("name", { required: true })} />
              {errors.name && <p className={styles.errorMessage}>This field is required</p>}
            </div>
            <div className={styles.formGroup}>
              <input placeholder="Email" className={styles.formInput} {...register("email", { required: true })} />
              {errors.email && <p className={styles.errorMessage}>This field is required</p>}
            </div>
            <div className={styles.formGroup}>
              <input className={styles.formInput} placeholder="Phone Number" {...register("phoneNumber")} />
            </div>
            <div className={styles.formGroup}>
              <textarea className={styles.formTextArea} placeholder="Message"{...register("message")} />
            </div>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        </div>
      </div>
      <div className={styles.centerText}>
        Copyright © 2024
      </div>
    </div>
  )
}

export default Contact
