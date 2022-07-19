export const REGEX_VALIDATION = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;

export const PASSWORD_MIN = 5;

export const style = {
  display: 'block',
  margin: 'auto',
  padding: '20px 0',
  width: 0.9,
  maxWidth: '400px',
  minHeight: '500px',
  height: '70%',
  bgcolor: 'var(--black-secondary)',

  '@media (max-height: 800px)': {
    minHeight: 0.90,
  },

};
