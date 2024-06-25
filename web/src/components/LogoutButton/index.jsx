import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button"

export const LogoutButton = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => {
            navigate("/")
        }}>Logout</Button>
    )
}
