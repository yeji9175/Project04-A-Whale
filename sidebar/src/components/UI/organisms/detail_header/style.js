import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(() => ({
  title: {
    flex: 4,
    fontSize: '3rem',
    '&:hover': {
      cursor: 'default',
    },
  },
  description: {
    padding: '8px',
    fontSize: '1.2rem',
    '&:hover': {
      cursor: 'default',
    },
  },
  textField: {
    marginTop: '10px',
  },
  titleResize: {
    fontSize: '30px',
    color: '#555555',
  },
  descResize: {
    fontSize: '18px',
    color: '#555555',
  },
  achieveButton: {
    marginLeft: 10,
    fontSize: 16,
  },
}));

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  svg:hover {
    cursor: pointer;
  }
`;

export { useStyles, TitleWrapper };
