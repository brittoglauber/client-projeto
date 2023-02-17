
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function FormCadastro() {

    const usernameRef = useRef<HTMLDivElement>(null)
    const errRef = useRef<HTMLDivElement>(null)

    
    const [username, setUsername] = useState("")
    const [validName, setValidName] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setpassword] = useState("");
    const [validpassword, setValidpassword] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    
    const [matchpassword, setMatchpassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    

    useEffect(() => {
        if(usernameRef.current != null){
            usernameRef.current.focus();
        }   
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [username, password, matchpassword])
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        
        try {
            const response = await axios.post('http://localhost:5000/registro',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ); 
            console.log(JSON.stringify(response?.data));   
            setSuccess(true);
            setUsername('');
            setpassword('');
            setMatchpassword('');
        } catch (err) {
            console.log(err)
        }
    }

    
    

    return (
        <div>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Cadastro
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Nome
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    id="usernamename"
                                    
                                    autoComplete="off"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUsernameFocus(true)}
                                    onBlur={() => setUsernameFocus(false)}
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                
                            </div>
                        </div>
                        
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Senha
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setpassword(e.target.value)}
                                    value={password}
                                    required
                                    aria-invalid={validpassword ? "false" : "true"}
                                    aria-describedby="passwordnote"
                                    onFocus={() => setpasswordFocus(true)}
                                    onBlur={() => setpasswordFocus(false)}
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                               
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirmar Senha
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    id="confirm_password"
                                    onChange={(e) => setMatchpassword(e.target.value)}
                                    value={matchpassword}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                               
                            </div>
                        </div>
                        
                        
                        <div className="flex items-center justify-end mt-4">
                            <Link to={"/entrar"}
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                
                            >
                                Já tem registro?
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}