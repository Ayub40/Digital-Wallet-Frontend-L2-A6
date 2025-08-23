import { Link } from "react-router";

export default function Unauthorized() {
    return (
        <div>
            <h1> Muri Khaa, tui authorized na....</h1>
            <Link to="/" className="border p-0.5 m-0.5 rounded bg-orange-500 text-white">Home</Link>
        </div>
    );
}