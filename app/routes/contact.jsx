import { redirect } from "@remix-run/node";
import badRequest from "~/utils/badRequest";
// import { commitSession, getSession } from "~/utils/session.server";
import { validateEmail, validateMessage, validateName } from "~/utils/validations";

export async function action({ request, context }) {
    // const session = await getSession(request.headers.get('Cookie'));

    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('/message');

    // if (
    //     typeof name !== "string" ||
    //     typeof email !== "string" ||
    //     typeof message !== "string"
    // ) {
    //     session.flash('formError', 'Form not submitted correctly');
    //     return redirect('/#contact', {
    //         headers: {
    //             "Set-Cookie": await commitSession(session)
    //         }
    //     });
    //     // return badRequest({ formError: 'Form not submitted correctly' });
    // }

    // const fields = { name, email, message };
    
    const nameValidationResult = validateName(name);
    const emailValidationResult = validateEmail(email);
    const messageValidationResult = validateMessage(message);

    if (nameValidationResult || emailValidationResult || messageValidationResult) {
        session.flash('nameError', nameValidationResult);
        session.flash('emailError', emailValidationResult);
        session.flash('messageError', messageValidationResult);
        session.flash('name', name);
        session.flash('email', email);
        session.flash('message', message);

        return redirect('/#contact', {
            headers: {
                'Set-Cookie': await commitSession(session)
            }
        });
    }
    
    // const fieldErrors = {
    //     name: validateName(name),
    //     email: validateEmail(email),
    //     message: validateMessage(message)
    // };

    // if (Object.values(fieldErrors).some(Boolean)) {
    //     return badRequest({ fieldErrors, fields });
    // }

    console.log('Formdata: ', formData);
    return redirect('/');
}

export async function loader() {
    return redirect('/');
}
// export default function Contact() {
//     return <h1 className="text-5xl font-bold">Contact</h1>
// }