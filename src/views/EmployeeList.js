import Box from '@mui/material/Box';

export const EmployeeList = () => {
    return (
        <>
            <Box
                sx={{
                    width: 300,
                    height: 400,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            />
        </>
    )
}