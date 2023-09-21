import '../styles/InputField.css';

const InputField = ({ city, change, submit, clearInput }) => (
  <form className='form' onSubmit={submit}>
    <input
      type='text'
      value={city}
      onChange={change}
      onClick={clearInput}
      placeholder='Search city here...'
      className='form__input'
    />
    <button className='form__button' type='submit'>
      Check Weather
    </button>
  </form>
);

export default InputField;
