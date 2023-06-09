import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const RedBlueIcon = ({ bg }) => {
    return (
        <Box sx={{
            width: '15px',
            height: '15px',
            background: bg,
            borderRadius: '50%',
            cursor: "pointer"
        }}>
        </Box>
    )
}

export const FlexBox = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        </Box>
    )
}

export const EmptyBox = ({ borderLeft, borderTop, borderRight, borderBottom }) => {
    return (
        <Box sx={{
            height: '40px',
            width: '40px',
            border: '1px solid #bcb6b6',
            borderLeft: borderLeft,
            borderRight: borderRight,
            borderTop: borderTop,
            borderBottom: borderBottom
        }}>

        </Box>
    )
}
export const data = [
    { id: 1, icon: <RedBlueIcon bg='red' />, key: 'left', isOccupied: true },
    { id: 2, icon: <RedBlueIcon bg='blue' />, key: 'left', isOccupied: true },
    { id: 3, icon: <RedBlueIcon bg='green' />, key: 'left', isOccupied: true },
    { id: 4, icon: <RedBlueIcon bg='red' />, key: 'left', isOccupied: true },
    { id: 5, icon: <RedBlueIcon bg='red' />, key: 'left', isOccupied: true },

    { id: 6, icon: <RedBlueIcon bg='red' />, key: 'top', isOccupied: true },
    { id: 7, icon: <RedBlueIcon bg='blue' />, key: 'top', isOccupied: true },
    { id: 8, icon: <RedBlueIcon bg='green' />, key: 'top', isOccupied: false },
    { id: 9, icon: <RedBlueIcon bg='red' />, key: 'top', isOccupied: true },
    { id: 10, icon: <RedBlueIcon bg='red' />, key: 'top', isOccupied: true },
    { id: 11, icon: <RedBlueIcon bg='blue' />, key: 'top', isOccupied: true },
    { id: 12, icon: <RedBlueIcon bg='green' />, key: 'top', isOccupied: true },
    { id: 13, icon: <RedBlueIcon bg='red' />, key: 'top', isOccupied: false },
    { id: 14, icon: <RedBlueIcon bg='red' />, key: 'top', isOccupied: false },
    { id: 15, icon: <RedBlueIcon bg='green' />, key: 'top', isOccupied: false },
    { id: 16, icon: <RedBlueIcon bg='blue' />, key: 'top', isOccupied: true },
    { id: 17, icon: <RedBlueIcon bg='blue' />, key: 'top', isOccupied: true },
    { id: 18, icon: <RedBlueIcon bg='red' />, key: 'top', isOccupied: true },

    { id: 19, icon: <RedBlueIcon bg='green' />, key: 'right', isOccupied: true },
    { id: 20, icon: <RedBlueIcon bg='blue' />, key: 'right', isOccupied: true },
    { id: 21, icon: <RedBlueIcon bg='red' />, key: 'right', isOccupied: false },
    { id: 22, icon: <RedBlueIcon bg='green' />, key: 'right', isOccupied: true },
    { id: 23, icon: <RedBlueIcon bg='green' />, key: 'right', isOccupied: true },
    { id: 24, icon: <RedBlueIcon bg='red' />, key: 'right', isOccupied: true },
    { id: 25, icon: <RedBlueIcon bg='red' />, key: 'right', isOccupied: false },
    { id: 26, icon: <RedBlueIcon bg='red' />, key: 'right', isOccupied: true },

    { id: 27, icon: <RedBlueIcon bg='green' />, key: 'bottom', isOccupied: false },
    { id: 28, icon: <RedBlueIcon bg='red' />, key: 'bottom', isOccupied: false },
    { id: 29, icon: <RedBlueIcon bg='red' />, key: 'bottom', isOccupied: false },
    { id: 30, icon: <RedBlueIcon bg='green' />, key: 'bottom', isOccupied: false },
    { id: 31, icon: <RedBlueIcon bg='green' />, key: 'bottom', isOccupied: false },
    { id: 32, icon: <RedBlueIcon bg='red' />, key: 'bottom', isOccupied: false },
    { id: 33, icon: <RedBlueIcon bg='red' />, key: 'bottom', isOccupied: false },

    { id: 34, icon: <RedBlueIcon bg='red' />, key: 'centerTop', isOccupied: true },
    { id: 35, icon: <RedBlueIcon bg='blue' />, key: 'centerTop', isOccupied: true },
    { id: 36, icon: <RedBlueIcon bg='green' />, key: 'centerTop', isOccupied: true },
    { id: 37, icon: <RedBlueIcon bg='pink' />, key: 'centerTop', isOccupied: true },
    { id: 38, icon: <RedBlueIcon bg='red' />, key: 'centerTop', isOccupied: true },

    { id: 39, icon: <RedBlueIcon bg='red' />, key: 'centerBottom', isOccupied: true },
    { id: 40, icon: <RedBlueIcon bg='green' />, key: 'centerBottom', isOccupied: false },
    { id: 41, icon: <RedBlueIcon bg='blue' />, key: 'centerBottom', isOccupied: true },
    { id: 42, icon: <RedBlueIcon bg='pink' />, key: 'centerBottom', isOccupied: true },
    { id: 43, icon: <RedBlueIcon bg='red' />, key: 'centerBottom', isOccupied: false },

    { id: 45, icon: <RedBlueIcon bg='yellow' />, key: 'yellowTop', isOccupied: true },
    { id: 46, icon: <RedBlueIcon bg='green' />, key: 'yellowTop', isOccupied: true },

    { id: 47, icon: <RedBlueIcon bg='blue' />, key: 'yellowCenter', isOccupied: true },
    { id: 48, icon: <RedBlueIcon bg='pink' />, key: 'yellowCenter', isOccupied: true },
    { id: 49, icon: <RedBlueIcon bg='green' />, key: 'yellowCenter', isOccupied: false },

    { id: 50, icon: <RedBlueIcon bg='blue' />, key: 'yellowBottom', isOccupied: true },
    { id: 51, icon: <RedBlueIcon bg='yellow' />, key: 'yellowBottom', isOccupied: true },
    { id: 52, icon: <RedBlueIcon bg='green' />, key: 'yellowBottom', isOccupied: true },
]
export const MainContainer = styled(Box)({
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 'auto 0',
    // height: '100%'
})

export const BoxWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 'auto 0',
    // height: '100%'
    height: '100vh',
    flexDirection: 'column'
})

export const BottomBox = styled(Box)({
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '4px solid #7a6d6d',
    paddingBottom: '4px',
    paddingTop: '4px',
    height: '32px',
    borderLeft: '1px solid #cdbfbf'
})


export const RightBox = styled(Box)({
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '4px solid #7a6d6d',
    paddingBottom: '7px',
    paddingTop: '7px',
    borderTop: '1px solid #cdbfbf'
})

export const SideBox = styled(Box)({
    marginLeft: '2.6rem',
    width: "40px",
    height: '90px',
    borderRight: '2px solid #7a6d6d',
    borderTop: '2px solid #7a6d6d',
})

export const CenterTopBox = styled(Box)({
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '2px solid #7a6d6d',
    paddingBottom: '4px',
    paddingTop: '4px',
    borderTop: '1px solid #cdbfbf',
    borderRight: '1px solid #cdbfbf',
    borderLeft: '1px solid #cdbfbf'
})
export const TopBox = styled(Box)({
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '2px solid #cdbfbf',
    paddingBottom: '4px',
    paddingTop: '4px',
    borderTop: '4px solid #7a6d6d'
})

export const CenterBottomBox = styled(Box)({
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '2px solid #7a6d6d',
    pb: '4px',
    pt: '4px',
    borderRight: '1px solid #cdbfbf'
})