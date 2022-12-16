import React, { useRef, useEffect, useState } from 'react'
import Header from './Header';

function Login() {
    const userRef = useRef();

    const [user, setUser] = useState('');
    const [pasword, setPasword] = useState('');
    const [loginData, setloginData] = useState();
    const [sucess,setSucess]=useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    const submitButon = async (e) => {
        e.preventDefault();
        setPasword('');
        setUser('')
        console.log("hello", pasword, user)

        const compareData = (data, id) => {
            loginData?.map((data) => {
                if (user === data.username) {
                    console.log("compareData")
                    setSucess(true)
                }
            })
        }
        compareData();
        fetchData();
    }
    
    const fetchData = async () => {
       await fetch(`https://www.melivecode.com/api/users?search=${user}`)
            .then((res) => res.json())
            .then((data) => setloginData(data));
            console.log("fetch data", loginData)
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
        {sucess ? (
             <section>
                 <Header loginData={loginData}/> 
                <h1 className='text-center m-4 p-4'>You have Logged in!</h1>
             </section>
        ):(
            <section className="Section">
            <h1 className='display-4 text-center'><strong><em> Log In</em> </strong></h1>
            <div className="container">

                <form onSubmit={submitButon}>
                    <div className="mb-3">
                        <label htmlFor="Username" className="form-label">Username:</label>
                        <input className="form-control"
                            type="text"
                            id="username"
                            ref={userRef}
                            onChange={(ele) => setUser(ele.target.value)}
                            value={user}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password:</label>
                        <input className="form-control"
                            type="password"
                            id="password"
                            onChange={(ele) => setPasword(ele.target.value)}
                            value={pasword}
                            required
                            aria-describedby="passwordHelpBlock"
                        />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers.
                        </div>
                    </div>
                    <button className='btn btn-secondary'>Login</button>

                </form>
            </div>
        </section>
        )}

           
        </>
    )
}

export default Login

