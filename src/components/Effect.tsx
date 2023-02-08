import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Text, Select, Heading ,Image, Container} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import temp from '../assets/temp.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'
const cities: string[] = ["Riyadh", "Cairo", "London", "Tokyo", "Toronto"]

function Effect() {
    const [city, setCity] = useState<any>("Riyadh")
    const [data, setData] = useState<any>([])
    const [icon, setIcon] = useState<any>("")
        useEffect(()=>{
        let api = `https://api.weatherapi.com/v1/current.json?key=da66ad527bb34b4a8d2195252230702&q=${city}&aqi=no`
        axios.get(api)
        .then(res => {
            console.log(res.data);
            console.log(res.data.current);
            setIcon(res.data.current.condition.icon);
            setData(res.data.current);



            
            
        })
    }, [city])
    
    
        

  return (
    <Container p={10} textAlign={'center'}>

        <Box display="flex" justifyContent="center" alignItems={'center'}>
        {<Heading fontSize='5xl'>{city} </Heading> }
        {<Image src={icon}></Image>}
        </Box>
            <Select onChange={e => {setCity(e.target.value)}} placeholder='Select A City'
             my={10} width={"100%"}>
            {cities.map((e:any,i)=> (
                <option value={e} key={i}>{e}</option>

            ))}
            </Select>

            <Box display="flex" alignItems="center" flexDirection={"column"}>
                <Box  display="flex"  alignItems={'center'}>
                    <Image w={10} src={temp}></Image>
                    {<Text ml={2}>Temp: {data.temp_c}C </Text>} 
                </Box>
                <Box  display="flex"  alignItems={'center'}>
                <Image w={10} src={wind}></Image>
                {<Text ml={2}>humidity: {data.humidity} </Text>}

                </Box>
                <Box  display="flex"  alignItems={'center'}>
                <Image w={10} src={humidity}></Image>

                {<Text ml={2}>Wind Speed: {data.wind_kph}km/h </Text>} 

                </Box>
            </Box>
    </Container>
  )
}

export default Effect