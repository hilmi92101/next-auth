// main
import { redirect } from 'next/navigation';

// next-auth
import { getServerSession } from 'next-auth';

// components
import Form from './form';

export default async function LoginPage() {
    const session = await getServerSession();
    if (session) {
        redirect('/');
    }
    return <Form />;
}