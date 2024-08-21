import { Box } from '@mui/material';
import propTypes from 'prop-types';

const ListCard = ({ children, selected, clickHandler }) => {
    return (
        <Box
            sx={{
                backgroundColor: '#ff9800',
                padding: '14px',
                borderRadius: '10px',
                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.12)',
                transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, outline-offset 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: '#fb8c00',
                },
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '500',
                textAlign: 'center',
                cursor: 'pointer',
                opacity: selected ? 0.5 : 1,
                pointerEvents: selected ? 'none' : 'auto',
                userSelect: selected ? 'none' : 'auto',
                outline: selected ? '2px solid #ff9800' : 'none',
                outlineOffset: selected ? '2px' : '4px',
            }}
            mb={2}
            component={'div'}
            onClick={clickHandler}
        >
            {children}
        </Box>
    );
};

ListCard.propTypes = {
    children: propTypes.node,
    selected: propTypes.bool,
    clickHandler: propTypes.func,
};

export default ListCard;
