import React, {useEffect} from 'react'
import { useAuth } from "../utils/AuthContext"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const {user} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(user){
      navigate('/')
    }
  }, [])
  
  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form>
          <div className="field--wrapper">
            <label>Email:</label>
            <input 
              type="email"
              required
              name="email"
              placeholder="Enter your email..."
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage