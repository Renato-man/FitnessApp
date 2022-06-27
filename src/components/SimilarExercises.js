import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollbar'

import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExerciseData, equipmentExerciseData }) => {
    return (
        <Box
            sx={{
                mt: {
                    lg: '100px',
                    xs: '0'
                }
            }}
        >
            <Typography
                variant='h3'
                mb={5}
            >
                Exercises that target the same muscle group
            </Typography>
            <Stack
                direction='row'
                sx={{
                    p: '2',
                    position: 'relative'
                }}
            >
                {targetMuscleExerciseData.length ?
                    <HorizontalScrollBar data={targetMuscleExerciseData} />
                    : <Loader />
                }
            </Stack>
            <Typography
                variant='h3'
                mb={5}
            >
                Exercises that use the same equipment
            </Typography>
            <Stack
                direction='row'
                sx={{
                    p: '2',
                    position: 'relative'
                }}
            >
                {equipmentExerciseData.length ?
                    <HorizontalScrollBar data={equipmentExerciseData} />
                    : <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises