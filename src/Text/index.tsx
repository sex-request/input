import styled from '@emotion/styled';

const Text = styled.input({
  flex: 1,
  width: '100%',
  height: '2rem',
  padding: '0.5rem 1rem',
  backgroundColor: 'pink',
  border: 'none',
  borderRadius: '0.5rem',
  transition: '0.4s',

  '&:disabled': {
    color: 'rgb(175, 175, 175)',
    backgroundColor: 'rgb(175, 175, 175)',
  },
});
Text.defaultProps = {
  type: 'text',
};

export default Text;
