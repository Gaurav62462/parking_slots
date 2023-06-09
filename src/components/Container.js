import React, { useState } from 'react'
import { BottomBox, BoxWrapper, CenterBottomBox, CenterTopBox, EmptyBox, MainContainer, RightBox, SideBox, TopBox, data } from './commonFunction'
import { Box } from '@mui/material'

export default function Container() {
    const [dropList, setDropList] = useState(data)
    const [pickedElement, setPickedElement] = useState(null);

    const handleDrag = (position) => {
        if (pickedElement !== null) {
            const newArray = [...dropList];
            const pickedIndex = dropList.indexOf(pickedElement);

            const droppedElement = newArray[position];


            newArray[pickedIndex] = { ...droppedElement, key: pickedElement.key };
            newArray[position] = { ...pickedElement, key: droppedElement.key };

            setDropList(newArray);
            setPickedElement(null);
        }
    }

    return (
        <BoxWrapper>
            <MainContainer>
                <Box>
                    <EmptyBox borderLeft='4px solid #7a6d6d' borderTop='4px solid #7a6d6d' />
                    {
                        dropList.map((el, key) => {
                            return (
                                <>
                                    {
                                        el.key === 'left' &&
                                        <Box
                                            draggable
                                            onDragStart={() => setPickedElement(el)}
                                            onDragOver={(e) => e.preventDefault()}
                                            onDrop={() => handleDrag(key)}
                                            sx={{
                                                width: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderLeft: '4px solid #7a6d6d',
                                                pb: '4px',
                                                pt: '4px',
                                                borderTop: '1px solid #cdbfbf'
                                            }}>
                                            {/* {el.icon} */}
                                            {el.isOccupied ? el.icon : el.id}
                                        </Box>
                                    }
                                </>
                            )
                        })
                    }
                </Box>

                <Box>
                    <Box sx={{ display: 'flex', }}>
                        {
                            dropList.map((el, key) => {
                                return (
                                    <>
                                        {el.key === 'top' &&
                                            <TopBox
                                                draggable
                                                onDragStart={() => setPickedElement(el)}
                                                onDragOver={(e) => e.preventDefault()}
                                                onDrop={() => handleDrag(key)}
                                            >
                                                {/* {el.icon} */}
                                                {el.isOccupied ? el.icon : el.id}
                                            </TopBox>}
                                    </>
                                )
                            })
                        }
                        <EmptyBox
                            borderTop='4px solid #7a6d6d'
                            borderRight='4px solid #7a6d6d' />
                    </Box>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{
                                margin: 'auto',
                                justifyContent: 'center',
                                display: 'flex',
                            }}>
                                <Box sx={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    mt: '2rem'
                                }}>
                                    <Box sx={{ display: 'flex' }}>
                                        {
                                            dropList.map((el, key) => {
                                                return (
                                                    <>
                                                        {el.key === 'centerTop' &&
                                                            <CenterTopBox
                                                                draggable
                                                                onDragStart={() => setPickedElement(el)}
                                                                onDragOver={(e) => e.preventDefault()}
                                                                onDrop={() => handleDrag(key)}
                                                            >
                                                                {/* {el.icon} */}
                                                                {el.isOccupied ? el.icon : el.id}
                                                            </CenterTopBox>}
                                                    </>
                                                )
                                            })
                                        }
                                    </Box>
                                    <Box sx={{ display: 'flex', mr: '30px' }}>
                                        <Box sx={{
                                            display: 'flex',
                                            mr: '20px',
                                            alignItems: 'end',
                                            flexDirection: 'column',
                                            borderRight: '2px solid #7a6d6d',
                                        }}>
                                            <Box sx={{
                                                width: "40px",
                                                height: '20px',
                                                borderBottom: '2px solid #7a6d6d',
                                                borderLeft: '2px solid #7a6d6d',
                                            }} />
                                            <Box sx={{
                                                width: "20px",
                                                height: '38px',
                                                borderBottom: '2px solid #7a6d6d',
                                                borderLeft: '2px solid #7a6d6d',
                                            }} />

                                        </Box>
                                        <Box sx={{
                                            width: "40px",
                                            height: '60px',
                                            borderBottom: '2px solid #7a6d6d',
                                            borderLeft: '2px solid #7a6d6d',
                                            borderRight: '2px solid #7a6d6d',
                                        }} />
                                        <Box sx={{
                                            display: 'flex',
                                            ml: '20px',
                                            alignItems: 'start', flexDirection: 'column'
                                        }}>
                                            <Box sx={{ display: 'flex' }}>
                                                <Box>
                                                    <Box sx={{
                                                        width: "40px",
                                                        height: '30px',
                                                        borderBottom: '2px solid #7a6d6d',
                                                        borderLeft: '2px solid #7a6d6d',
                                                        borderRight: '2px solid #7a6d6d',
                                                    }} />
                                                    <Box sx={{
                                                        width: "20px",
                                                        height: '36px',
                                                        borderLeft: '2px solid #7a6d6d',
                                                        borderRight: '2px solid #7a6d6d',
                                                    }} />

                                                </Box>

                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-evenly'
                                                }}>
                                                    <Box
                                                        sx={{
                                                            width: "100px",
                                                            display: 'flex',
                                                            justifyContent: 'space-evenly'
                                                        }}
                                                    >
                                                        {
                                                            dropList.map((el, key) => {
                                                                return (
                                                                    <>
                                                                        {el.key === 'yellowTop' &&
                                                                            <Box
                                                                                draggable
                                                                                onDragStart={() => setPickedElement(el)}
                                                                                onDragOver={(e) => e.preventDefault()}
                                                                                onDrop={() => handleDrag(key)}
                                                                                sx={{
                                                                                    pt: '4px'
                                                                                }}>
                                                                                {/* {el.icon} */}
                                                                                {el.isOccupied ? el.icon : el.id}
                                                                            </Box>
                                                                        }
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            width: "100px",
                                                            display: 'flex',
                                                            borderTop: '1px solid #dddada',
                                                            justifyContent: 'space-between'
                                                        }}
                                                    >
                                                        {
                                                            dropList.map((el, key) => {
                                                                return (
                                                                    <>
                                                                        {el.key === 'yellowCenter' &&
                                                                            <Box
                                                                                draggable
                                                                                onDragStart={() => setPickedElement(el)}
                                                                                onDragOver={(e) => e.preventDefault()}
                                                                                onDrop={() => handleDrag(key)}
                                                                                sx={{
                                                                                    pt: '4px'
                                                                                }}>
                                                                                {/* {el.icon} */}
                                                                                {el.isOccupied ? el.icon : el.id}
                                                                            </Box>
                                                                        }
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </Box>
                                                    {/* <Box /> */}
                                                    <Box
                                                        sx={{
                                                            width: "100px",
                                                            display: 'flex',
                                                            borderTop: '1px solid #dddada',
                                                            justifyContent: 'space-between'
                                                        }}
                                                    >
                                                        {
                                                            dropList.map((el, key) => {
                                                                return (
                                                                    <>
                                                                        {el.key === 'yellowBottom' &&
                                                                            <Box
                                                                                draggable
                                                                                onDragStart={() => setPickedElement(el)}
                                                                                onDragOver={(e) => e.preventDefault()}
                                                                                onDrop={() => handleDrag(key)}
                                                                                sx={{
                                                                                    pt: '4px'
                                                                                }}>
                                                                                {/* {el.icon} */}
                                                                                {el.isOccupied ? el.icon : el.id}
                                                                            </Box>
                                                                        }
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex' }}>
                                                {
                                                    dropList.map((el, key) => {
                                                        return (
                                                            <>
                                                                {el.key === 'centerBottom' &&
                                                                    <CenterBottomBox
                                                                        draggable
                                                                        onDragStart={() => setPickedElement(el)}
                                                                        onDragOver={(e) => e.preventDefault()}
                                                                        onDrop={() => handleDrag(key)}
                                                                    >
                                                                        {/* {el.icon} */}
                                                                        {el.isOccupied ? el.icon : el.id}
                                                                    </CenterBottomBox>}
                                                            </>
                                                        )
                                                    })
                                                }
                                            </Box>
                                        </Box>
                                    </Box>
                                    <SideBox />
                                </Box>
                            </Box>
                            <Box>
                                {
                                    dropList.map((el, key) => {
                                        return (
                                            <>
                                                {el.key === 'right' &&
                                                    <RightBox
                                                        draggable
                                                        onDragStart={() => setPickedElement(el)}
                                                        onDragOver={(e) => e.preventDefault()}
                                                        onDrop={() => handleDrag(key)}
                                                    >
                                                        {/* {el.icon} */}
                                                        {el.isOccupied ? el.icon : el.id}
                                                    </RightBox>}
                                            </>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                {
                                    dropList.map((el, key) => {
                                        return (
                                            <>
                                                {el.key === 'bottom' &&
                                                    <BottomBox
                                                        draggable
                                                        onDragStart={() => setPickedElement(el)}
                                                        onDragOver={(e) => e.preventDefault()}
                                                        onDrop={() => handleDrag(key)}
                                                    >
                                                        {el.isOccupied ? el.icon : el.id}
                                                    </BottomBox>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </Box>
                            <EmptyBox borderRight='4px solid #7a6d6d' borderBottom='4px solid #7a6d6d' />
                        </Box>
                    </Box>
                </Box>
            </MainContainer>

        </BoxWrapper >
    )
}
