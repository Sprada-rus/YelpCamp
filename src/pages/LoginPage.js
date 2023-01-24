import HeaderInAndUp from "../components/HeaderInAndUp";
import UserForm from "../components/UserForm";

export default function LoginPage() {
    return <>
        <HeaderInAndUp />
        <div className="container">
            <h1>Start exploring camps from all around the world.</h1>
            <UserForm
                type="sign-in"
                onSubmit={f => f}
            />
        </div>
    </>
}