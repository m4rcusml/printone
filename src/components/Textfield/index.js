import styles from './styles.module.css';

export function Textfield({ label, value, onChange, placeholder, icon, type = 'text', ...rest }) {
    return (
        <div className={styles.container}>
            <label htmlFor={label} className={styles.label}>{label}</label>
            <input
              id={label}
              value={value}
              type={type}
              onChange={onChange}
              className={styles.field}
              placeholder={placeholder}
              {...rest}
            />
        </div>
    )
}