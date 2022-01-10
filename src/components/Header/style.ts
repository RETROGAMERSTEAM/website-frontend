import { styled, css } from '../../global/stitches.config';

const StyledHeader = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'$blue3',
    position: 'fixed',
    top: 0,
    width: '100%',
    px: '$4',
    py: '$2',
    height: '60px'
})

const Title = styled('h1', {
    fontSize: 'var(--sizes-size2)',
    lineHeight: '1em'
})

const Ul = styled('ul',{
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$3'
})

const Li = styled('li', {
    display: 'flex',
    justifyContent: 'center',
    alingnItems: 'center',
    '& a':{
        display: 'flex',
        justifyContent: 'center',
        alingnItems: 'center',
        color: '$red11',
        padding: '$2',
        background: '$blue5',
        height: 'auto',
        width: '100%',
        borderRadius: '50%',
        border: '2px solid $blue3'
    }
    
})

const Border = styled('div', {
    background: 'linear-gradient(60deg, purple, red, orange, yellow)',
    borderRadius: '50%',
    padding: '2px'
})

export { StyledHeader, Ul, Li, Border, Title}