import { useState } from "react";
import axios from "../api/axios";

const FormEntrar = () => {

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("");



    const handleSubmit = async (e: any) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:5000/login',
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));


        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Entrar
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
                                    id="username"
                                    autoComplete="off"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
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
                                    id="email"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4">

                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Logar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormEntrar