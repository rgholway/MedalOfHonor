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
    console.log(result)
  }

  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.textContainer}>
        <h1>
          If you are interested in supporting our efforts or have any questions please complete the form below.
        </h1>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.styledForm}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Name</label>
              <input className={styles.formInput} {...register("name", { required: true })} />
              {errors.name && <p className={styles.errorMessage}>This field is required</p>}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Email</label>
              <input className={styles.formInput} {...register("email", { required: true })} />
              {errors.email && <p className={styles.errorMessage}>This field is required</p>}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Phone Number</label>
              <input className={styles.formInput} {...register("phoneNumber")} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea className={styles.formTextArea} {...register("message")} />
            </div>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
