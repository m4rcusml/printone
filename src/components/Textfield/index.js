import styles from './styles.module.css';

export function Textfield({ label, value, onChange, placeholder, icon }) {
    return (
        <div className={styles.container}>
            <label htmlFor={label} className={styles.label}>{label}</label>
            <input
              id={label}
              type='text'
              value={value}
              className={styles.field}
              onChange={onChange}
              placeholder={placeholder}
            />
        </div>
    )
}