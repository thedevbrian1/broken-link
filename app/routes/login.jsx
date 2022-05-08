import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";

export async function action({ request }) {
    const formData = await request.formData();
    const phone = formData.get('number');

    // console.log(phone);
    const validatedPhone = phone.replace(/[^0-9]/g, "");
    const requestBody = { "phone": validatedPhone };
    console.log('Request body: ', requestBody);

    // Send the mobile number to the digipay API
    const res = await fetch('https://platform.digipay.ke/api/auth/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify(requestBody)
    });
    const authResponse = await res.json();
    console.log('Digipay id', authResponse);
    return redirect('.');
}

export default function Login() {
    return (
        <div className="grid place-items-center">
            <div className="w-full max-w-xs">
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post">
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" 
                            type="email" 
                            name="email"
                            placeholder="johndoe@gmail.com" 
                        />
                    </div> */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userNumber">
                            Phone number
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="userNumber" 
                            type="number" 
                            name="number"
                            // placeholder="johndoe@gmail.com" 
                        />
                    </div>
                    {/* <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            name="password"
                            placeholder="******************" 
                        />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div> */}
                    <div className="flex items-center justify-between w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>
                        {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a> */}
                    </div>
                </Form>
                {/* <p className="text-center text-gray-500 text-xs">
                    ©2020 Acme Corp. All rights reserved.
                </p> */}
            </div>
        </div>

    )
}