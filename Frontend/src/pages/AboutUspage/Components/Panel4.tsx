import { Box, Flex, Heading, Image, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import Image1 from "../../../assets/aboutPanel4Image1.png";


const Panel4 = () =>{
    return(
        <Flex
            flexWrap="wrap"
            alignItems="center"
            m={{base:"20px 20px",md:"10px 250px"}}>
            <Image src={Image1} boxSize={{base: "250px",md:"400px"}} mb={{base:"0", lg:"40px"}}></Image>
            <Box display="flex"
                flexDir="column"
                gap={5}
                mt="20px"
                p={5}>
                <Heading 
                    color='#000000' 
                    size="md"
                    lineHeight="1.5">
                    Welcome to “BAHA-Tech” - Your Partner in <br/> Smart Security.
                </Heading>
                <Tabs position='relative' variant='unstyled'>
                    <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                    <TabPanels h={{base:"auto", xl:"190px"}}  w="400px">
                        <TabPanel>
                            <Text
                                fontSize="sm"
                                color="#0E0E0EAD"
                                lineHeight="2">
                                BAHA-Tech is a leading electronic security company specializing in<br/>the design, installation and maintenance of cutting-edge<br/> surveillance systems. Our commitment to the safety and<br/> protection of our customers is at the heart of everything we do.
                            </Text>
                        </TabPanel>
                        <TabPanel>
                            <Text
                                fontSize="sm"
                                color="#0E0E0EAD"
                                lineHeight="2">
                                Welcome to "BAHA-Tech" - Leading the Way in Advanced Security Solutions.<br/>
                                At BAHA-Tech, we continue to push the boundaries of electronic security.<br/>
                                Our expertise lies in designing, installing, and maintaining state-of-the-art<br/>
                                surveillance systems tailored to our clients' unique needs.<br/>
                                As technology advances, so does our commitment to providing<br/>
                                cutting-edge security solutions that keep you safe.
                            </Text>
                        </TabPanel>
                        <TabPanel>
                            <Text
                                fontSize="sm"
                                color="#0E0E0EAD"
                                lineHeight="2">
                                Welcome to "BAHA-Tech" - Innovating Security for a Safer Tomorrow.<br/>
                                BAHA-Tech has always been at the forefront of electronic security innovation.<br/>
                                Our team specializes in creating, installing, and supporting sophisticated<br/>
                                surveillance systems designed for maximum safety and reliability.<br/>
                                We embrace the latest technologies to ensure that our customers<br/>
                                are protected against evolving security threats.


                            </Text>
                        </TabPanel>
                        <TabPanel>
                            <Text
                                fontSize="sm"
                                color="#0E0E0EAD"
                                lineHeight="2">
                                Welcome to "BAHA-Tech" - Redefining Security with Smart Solutions.<br/>
                                BAHA-Tech is a trusted leader in electronic security, dedicated to offering<br/>
                                cutting-edge surveillance and protection systems.<br/>
                                Our focus is on integrating advanced technologies, such as AI-based analytics<br/>
                                and cloud-based monitoring, into our solutions.
                            </Text>
                        </TabPanel>
                    </TabPanels>
                    <TabList mt="10px">
                    <Tab bg="#FFFFFF"
                        _selected={{ color: 'white', bg: '#009688' }}>2001</Tab>
                    <Tab bg="#FFFFFF"
                        _selected={{ color: 'white', bg: '#009688' }}>2007</Tab>
                    <Tab bg="#FFFFFF"
                        _selected={{ color: 'white', bg: '#009688' }}>2010</Tab>
                    <Tab bg="#FFFFFF"
                        _selected={{ color: 'white', bg: '#009688' }}>2016</Tab>
                </TabList>
                </Tabs>
            </Box>
        </Flex>
    )
}
export default Panel4;