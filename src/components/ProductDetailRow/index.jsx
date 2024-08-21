import { Box } from '@mui/material';
import propTypes from 'prop-types';

function ProductDetailRow({ propertyName, propertyValue }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 1,
                alignItems: 'baseline',
                pt: '0.125rem',
                color: 'inherit',
            }}
        >
            <Box
                component="b"
                sx={{
                    fontWeight: '600',
                    color: 'inherit',
                    textAlign: 'left',
                    display: 'flex',
                    justifySelf: 'flex-start',
                }}
            >
                {propertyName}:
            </Box>
            <Box
                component="span"
                sx={{
                    fontSize: '0.95rem',
                    color: 'inherit',
                    textAlign: 'left',
                }}
            >
                {propertyValue}
            </Box>
        </Box>
    );
}
ProductDetailRow.propTypes = {
    propertyName: propTypes.string,
    propertyValue: propTypes.string,
};

export default ProductDetailRow;
