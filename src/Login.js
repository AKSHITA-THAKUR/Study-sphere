import React from 'react';
import { Button } from "@chakra-ui/button"
import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from "@chakra-ui/react"
import { useState } from 'react';
import './Login.css'


const Login = () => {

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();


  const handleClick = () => setShow(!show);

  const submitHandler = () => {
    setLoading(true);
    if(!email || !password) {
      toast({
        title: "Please Fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }

  return (
    <div className='Fullsc'>
    <VStack spacing={"5px"}  className="login-form" style={{ backgroundColor: "#cfe2f3", height:"350px", width:"300px", padding: "20px", borderRadius: "10px" }}>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input 
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input 
            type={show ? "text" : 'password'}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"} >
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button className='newb'
        colorScheme='blue'
        width="25%"
        style={{marginTop : 15}}
        onClick={submitHandler}
        >
          Login
        </Button>

        <Button className='newb'
          varient = "solid"
          colorScheme='red'
          width={"70%"}
          onClick={() => {
            setEmail("guest@example.com");
            setPassword("123456");
          }}
        >
          Get Guest User Credentials
        </Button>
    </VStack>
    </div>
  )
}

export default Login