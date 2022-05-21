import Image from "next/image";
import { useContext } from "react";
import {Box ,Icon, Flex} from '@chakra-ui/react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev} = useContext(VisibilityContext)
    return(
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleLeft}
            onClick={() => scrollPrev()}
            fontSize="2xl"
            cursor="pointer"
            >
            
            </Icon>
        </Flex>
    )
}

const RightArrow = () => {
    const { isLastItemVisible, scrollNext} = useContext(VisibilityContext)
    return(
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon as={FaArrowAltCircleRight}
            onClick={() => scrollNext()}
            fontSize="2xl"
            cursor="pointer"
            >
            
            </Icon>
        </Flex>
    )
}
const ImageScrollbar = ({images}) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow : 'hidden'}}>
            {images.map((item) => {
                return (
                    <Box width="910px" itemId={item.id} overFlow="hidden" p="1" key={item.id}>
                        <Image 
                            placeholder="blur" 
                            blurDataURL={item.url} 
                            src={item.url} 
                            alt="property" 
                            width={1000} 
                            height={500}
                            sizes="(max-width:500px) 100px , (max-width:1024 px) 400px, 1000px"></Image>
                    </Box>
                )
            })}
        </ScrollMenu>
    )
}

export default ImageScrollbar