import { createStitches } from '@stitches/react';
import { blueDark, redDark, indigoDark, orangeDark } from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';

const { css, createTheme, styled, keyframes, globalCss } = createStitches({
    theme: {
        colors:{
            ...blueDark,
            ...redDark,
            ...orangeDark,

            background: '$blue1',
            headerbg: '$blue3'
        },
        sizes:{
            size1: '14px',
            size2: '18px',
            size3: '24px',
            size4: '36px',
            size5: '48px'
        },
        space:{
            1:  '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px'
        }
        
    },
    utils:{
        px: (value: Stitches.PropertyValue<`padding`>) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: Stitches.PropertyValue<`padding`>) => ({
            paddingTop: value,
            paddingBottom: value
        })
    },
    
})

export { css, createTheme, styled, keyframes, globalCss}