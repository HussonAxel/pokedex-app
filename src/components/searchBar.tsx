import { css } from '../../styled-system/css';


export function SearchBar({ title }: { title: string }) {
  return (
    <div className={css({
        bg: 'red',
        color: 'black',
        padding: '10px',
    })}>
        <h1>{title}</h1>
        <input type="text" className={css({
        color: 'black',
        padding: '0 10px',
    })}/>
        <button
        className={css({
        bg: 'blue',
        transition: 'all 0.3s ease',
        _hover: {
            bg: 'red',
        }
        })}>Search</button>
    </div>
  );
}